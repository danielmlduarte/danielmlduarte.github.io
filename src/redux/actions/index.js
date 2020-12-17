export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const LIST_PROJECTS = 'LIST_PROJECTS';

export const requestProjects = () => ({
  type: REQUEST_PROJECTS,
});

export const failedRequest = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export const listProjects = (list) => ({
  type: LIST_PROJECTS,
  list,
});
