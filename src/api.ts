// Extend ImportMeta to include 'env' for Vite
interface ImportMetaEnv {
  readonly VITE_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';

async function request(path: string, opts: RequestInit = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export const api = {
  listRoadmaps: () => request('/roadmaps'),
  createRoadmap: (data: any) => request('/roadmaps', { method: 'POST', body: JSON.stringify(data) }),
  listResources: () => request('/resources'),
  createResource: (data: any) => request('/resources', { method: 'POST', body: JSON.stringify(data) }),
  getProgress: (userId: string) => request(`/progress?userId=${userId}`),
  postProgress: (data: any) => request('/progress', { method: 'POST', body: JSON.stringify(data) }),
};
