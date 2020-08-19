const tasks = [
  {
    id: 0,
    name: 'Call agent and ask about new jobs/projects',
    category: 0,
  },
  {
    id: 1,
    name: 'Sort tax documents for 2019',
    category: 1,
  },
  {
    id: 2,
    name: 'Find video about correct flossing',
    category: 1,
  },
];

const projects = [
  {
    id: 0,
    name: 'Find new job/project',
    nextTask: 0,
  },
  {
    id: 1,
    name: 'Tax declaration 2019',
    nextTask: 1,
  },
  {
    id: 2,
    name: 'Dental health',
    nextTask: 2,
  },
];

const categories = [
  {
    id: 0,
    name: 'Communicate',
  },
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'Town',
  },
];

export { tasks, projects, categories };
