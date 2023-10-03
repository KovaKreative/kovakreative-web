import goalScreenshot from '../../assets/goalPreview.png';
import geekTriviaScreenshot from '../../assets/openbook/openBookOverview.png';
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
    title: 'Geek Trivia Quiz',
    description: 'An online trivia quiz app focused on the knowledge of pop-culture media. Currently in development, the MVP allows you to choose from several topics and take a multiple choice quiz.',
    screenshot: geekTriviaScreenshot,
    url: '/geektrivia'
  },
  {
    title: 'Open Book',
    description: 'A web application that allows a registered user to create original stories, as well as to read and contribute to other users\' stories.',
    screenshot: openbookScreenshot,
    url: '/openbook'
  }
);


export default projects;