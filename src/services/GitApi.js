import { listProjects, requestProjects, failedRequest } from '../redux/actions';

const handleProjectsList = (object) => {
  const projectList = object.filter((project) => project.type === 'dir')
    .map((project) => ({
      name: project.name,
      files: project.url,
      url: project.html_url,
      git: project.git_url,
    }));
  return projectList;
};

export const fetchGitHubProjectsList = (ownerInfos) => {
  const { owner, repoName } = ownerInfos;
  const endpoint = `https://api.github.com/repos/${owner}/${repoName}/contents/`;
  return async (dispatch) => {
    dispatch(requestProjects());
    try {
      const response = await fetch(endpoint);
      const object = await response.json();
      const projects = handleProjectsList(object);
      dispatch(listProjects(projects));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
};

const getProjectGitHubPage = (object, projectName) => {
  const haveHTML = (object.tree.some((file) => file.path === 'index.html'));
  let gitHubProjectPageUrl = '';
  if (haveHTML) {
    gitHubProjectPageUrl = `https://danielmlduarte.github.io/trybe-projects/${projectName}`;
  }
  return gitHubProjectPageUrl;
};

export const fetchGitHubProjectInfos = async (project) => {
  const { name, git } = project;
  const endpoint = git;
  try {
    const response = await fetch(endpoint);
    const object = await response.json();
    const gitPageUrl = getProjectGitHubPage(object, name);
    return gitPageUrl;
  } catch (error) {
    alert(error);
  }
};

const fetchGitHubProjectDescription = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    return error;
  }
};

const getProjectGitHubImage = (object) => {
  console.log(object);
  const ImagemObject = (object.find((file) => file.name === 'description.txt'));
  let gitHubProjectImage = '';
  if (ImagemObject) {
    gitHubProjectImage = fetchGitHubProjectDescription(ImagemObject.download_url);
  }
  return gitHubProjectImage;
};

export const fetchGitHubProjectImage = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const object = await response.json();
    const gitImageProject = getProjectGitHubImage(object);
    console.log(gitImageProject);
    return gitImageProject;
  } catch (error) {
    return error;
  }
};
