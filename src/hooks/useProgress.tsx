import { useEffect, useState } from 'react';
import { api } from '../api';

export default function useProgress({ userId = 'guest' } = {}) {
  const [progress, setProgress] = useState({ total: 0, completed: 0, percent: 0, raw: {} });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.getProgress(userId);
        const doc = Array.isArray(res) ? res[0] : res;
        if (doc) {
          const completions = doc.completions || {};
          const completed = Object.values(completions).filter(Boolean).length;
          const total = Object.keys(completions).length || 0;
          const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
          setProgress({ total, completed, percent, raw: completions });
          return;
        }
      } catch (e) {
        // ignore and fallback to localStorage below
      }
      // fallback
      const raw = localStorage.getItem('devpaths_progress');
      const parsed = raw ? JSON.parse(raw) : { completions: {}, totalItems: 0 };
      const allIds = Object.keys(parsed.completions || {});
      const completed = allIds.filter(id => parsed.completions[id]).length;
      const total = parsed.totalItems || allIds.length || 0;
      const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
      setProgress({ total, completed, percent, raw: parsed.completions || {} });
    };
    load();
  }, [userId]);

  const markCompleted = async (resourceId: string) => {
    try {
      await api.postProgress({ userId, completions: { [resourceId]: true } });
      // reload progress
      const res = await api.getProgress(userId);
      const doc = Array.isArray(res) ? res[0] : res;
      if (doc) {
        const completions = doc.completions || {};
        const completed = Object.values(completions).filter(Boolean).length;
        const total = Object.keys(completions).length || 0;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        setProgress({ total, completed, percent, raw: completions });
        return;
      }
    } catch (e) {
      // fallback to localStorage update
      const raw = localStorage.getItem('devpaths_progress');
      const parsed = raw ? JSON.parse(raw) : { completions: {}, totalItems: 0 };
      parsed.completions = parsed.completions || {};
      parsed.completions[resourceId] = true;
      localStorage.setItem('devpaths_progress', JSON.stringify(parsed));
      const allIds = Object.keys(parsed.completions || {});
      const completed = allIds.filter(id => parsed.completions[id]).length;
      const total = parsed.totalItems || allIds.length || 0;
      const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
      setProgress({ total, completed, percent, raw: parsed.completions || {} });
    }
  };

  return { progress, markCompleted };
}
