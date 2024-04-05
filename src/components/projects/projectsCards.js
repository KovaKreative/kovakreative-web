import goalScreenshot from '../../assets/goalPreview.png';
import letrLadrImage from '../../assets/letr/game.png';
import geekTriviaScreenshot from '../../assets/geektrivia/question.png';

const projects = [];

projects.push(
  {
    title: 'Letr Ladr',
    description: 'A Web-based word game with a similar structure to Wordle, where the user has to complete a series of five words by changing only one letter in each sequential word.',
    screenshot: letrLadrImage,
    url: '/letrladr'
  },
  {
    title: 'Geek Trivia Quiz',
    description: 'An online trivia quiz app focused on the knowledge of pop-culture media. Currently in development, the MVP allows you to choose from several topics and take a multiple choice quiz.',
    screenshot: geekTriviaScreenshot,
    url: '/geektrivia'
  },
  {
    title: 'GOAL',
    description: 'A productivity and organization app that allows a user to establish long-term goals and break them down into digestible milestones, as well as letting the user get in touch with an accountability buddy and stay in touch via chat.',
    screenshot: goalScreenshot,
    url: '/goal'
  },
);


export default projects;