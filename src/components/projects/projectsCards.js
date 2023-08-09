import goalScreenshot from '../../assets/goalPreview.png';
import openbookScreenshot from '../../assets/openbook/openBookOverview.png';

const projects = [];

projects.push(
  {
    title: 'GOAL',
    description: 'A productivity and organization app that allows a user to establish long-term goals and break them down into digestible milestones, as well as letting the user get in touch with an accountability buddy and stay in touch via chat.',
    screenshot: goalScreenshot,
    url: '/goal'
  },
  {
    title: 'Open Book',
    description: 'A web application that allows a registered user to create original stories, as well as to read and contribute to other users\' stories.',
    screenshot: openbookScreenshot,
    url: '/openbook'
  }
);


export default projects;