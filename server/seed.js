const mongoose = require('mongoose');
const Roadmap = require('./models/Roadmap');
const Topic = require('./models/Topic');
const Resource = require('./models/Resource');

require('dotenv').config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/devpaths';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

const seedDatabase = async () => {
  try {
    await Roadmap.deleteMany({});
    await Topic.deleteMany({});
    await Resource.deleteMany({});

    const frontendRoadmap = new Roadmap({
      title: 'Frontend Developer',
      description: 'Learn to build modern web interfaces.',
    });
    await frontendRoadmap.save();

    const backendRoadmap = new Roadmap({
      title: 'Backend Developer',
      description: 'Master server-side logic and databases.',
    });
    await backendRoadmap.save();

    const devopsRoadmap = new Roadmap({
      title: 'DevOps Engineer',
      description: 'Automate and streamline development operations.',
    });
    await devopsRoadmap.save();

    const htmlTopic = new Topic({
      title: 'HTML Basics',
      description: 'Fundamental concepts of HTML.',
    });
    await htmlTopic.save();

    const cssTopic = new Topic({
      title: 'CSS Styling',
      description: 'Styling web pages with CSS.',
    });
    await cssTopic.save();

    const jsTopic = new Topic({
      title: 'JavaScript Fundamentals',
      description: 'Core JavaScript concepts.',
    });
    await jsTopic.save();

    const nodeTopic = new Topic({
      title: 'Node.js and Express',
      description: 'Building APIs with Node.js and Express.',
    });
    await nodeTopic.save();

    const dockerTopic = new Topic({
      title: 'Docker Fundamentals',
      description: 'Containerization with Docker.',
    });
    await dockerTopic.save();

    const kubernetesTopic = new Topic({
      title: 'Kubernetes Orchestration',
      description: 'Orchestrating containers with Kubernetes.',
    });
    await kubernetesTopic.save();

    const htmlResource1 = new Resource({
      title: 'MDN HTML Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      type: 'Documentation',
      platform: 'MDN Web Docs',
      difficulty: 'Beginner',
    });
    await htmlResource1.save();

    const htmlResource2 = new Resource({
      title: 'HTML Crash Course',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      type: 'Video',
      platform: 'YouTube',
      difficulty: 'Beginner',
    });
    await htmlResource2.save();

    const cssResource1 = new Resource({
      title: 'CSS-Tricks',
      url: 'https://css-tricks.com/',
      type: 'Blog',
      platform: 'CSS-Tricks',
      difficulty: 'Intermediate',
    });
    await cssResource1.save();

    const cssResource2 = new Resource({
      title: 'Flexbox Froggy',
      url: 'https://flexboxfroggy.com/',
      type: 'Game',
      platform: 'Flexbox Froggy',
      difficulty: 'Beginner',
    });
    await cssResource2.save();

    const jsResource1 = new Resource({
      title: 'JavaScript.info',
      url: 'https://javascript.info/',
      type: 'Documentation',
      platform: 'JavaScript.info',
      difficulty: 'Intermediate',
    });
    await jsResource1.save();

    const jsResource2 = new Resource({
      title: 'Eloquent JavaScript',
      url: 'https://eloquentjavascript.net/',
      type: 'Book',
      platform: 'Eloquent JavaScript',
      difficulty: 'Advanced',
    });
    await jsResource2.save();

    const nodeResource1 = new Resource({
      title: 'Node.js Official Docs',
      url: 'https://nodejs.org/en/docs/',
      type: 'Documentation',
      platform: 'Node.js',
      difficulty: 'Intermediate',
    });
    await nodeResource1.save();

    const nodeResource2 = new Resource({
      title: 'Express.js Guide',
      url: 'https://expressjs.com/en/guide/routing.html',
      type: 'Documentation',
      platform: 'Express.js',
      difficulty: 'Intermediate',
    });
    await nodeResource2.save();

    const dockerResource1 = new Resource({
      title: 'Docker Get Started',
      url: 'https://docs.docker.com/get-started/',
      type: 'Documentation',
      platform: 'Docker Docs',
      difficulty: 'Beginner',
    });
    await dockerResource1.save();

    const dockerResource2 = new Resource({
      title: 'Docker Crash Course',
      url: 'https://www.youtube.com/watch?v=fqMOX6mOGg8',
      type: 'Video',
      platform: 'YouTube',
      difficulty: 'Beginner',
    });
    await dockerResource2.save();

    const kubernetesResource1 = new Resource({
      title: 'Kubernetes Basics',
      url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
      type: 'Documentation',
      platform: 'Kubernetes Docs',
      difficulty: 'Intermediate',
    });
    await kubernetesResource1.save();

    const kubernetesResource2 = new Resource({
      title: 'Kubernetes in Action',
      url: 'https://www.manning.com/books/kubernetes-in-action',
      type: 'Book',
      platform: 'Manning Publications',
      difficulty: 'Advanced',
    });
    await kubernetesResource2.save();

    htmlTopic.resources.push(htmlResource1, htmlResource2);
    await htmlTopic.save();
    cssTopic.resources.push(cssResource1, cssResource2);
    await cssTopic.save();
    jsTopic.resources.push(jsResource1, jsResource2);
    await jsTopic.save();
    nodeTopic.resources.push(nodeResource1, nodeResource2);
    await nodeTopic.save();
    dockerTopic.resources.push(dockerResource1, dockerResource2);
    await dockerTopic.save();
    kubernetesTopic.resources.push(kubernetesResource1, kubernetesResource2);
    await kubernetesTopic.save();

    frontendRoadmap.topics.push(htmlTopic, cssTopic, jsTopic);
    await frontendRoadmap.save();
    backendRoadmap.topics.push(nodeTopic);
    await backendRoadmap.save();
    devopsRoadmap.topics.push(dockerTopic, kubernetesTopic);
    await devopsRoadmap.save();

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

module.exports = { seedDatabase };