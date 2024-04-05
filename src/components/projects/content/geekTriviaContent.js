import settings from '../../../assets/geektrivia/settings.png';
import quizQuestion from '../../../assets/geektrivia/question.png';
import figma from '../../../assets/geektrivia/figma.png';

export const techStack = ['React', 'React Redux', 'Axios', 'Tailwind', 'Node', 'Express', 'PHP', 'PostreSQL', 'MySQL'];

export const content = [
  {
    title: "Overview",
    content: [
      {
        type: "link",
        url: "https://trivia.kovakreative.com/",
        text: "Live Page"
      },
      {
        type: "link",
        url: "https://github.com/KovaKreative/geek-trivia",
        text: "GitHub Repo"
      },
      {
        type: "paragraph",
        text: "KovaKreative Geek Trivia Quiz is an app that allows a user to partake in a quiz of 10 multiple choice questions, testing their knowledge of various geeky trivia facts. The user can choose which geeky categories they’re quizzed on as long as the total number of possible questions adds up to 10 or more. At the end of the quiz, the user gets a fraction and percentage score."
      },
      {
        type: "image",
        url: settings,
        caption: "Choice of Categories"
      },
      {
        type: "paragraph",
        text: "A user chooses their categories and the number of questions for the quiz. The number of questions has to be equal to or less than the total number of questions from all the categories. Certain questions can belong to more than one category, so the total number of questions in the end might end up being less than the sum of each individual category."
      },
      {
        type: "image",
        url: quizQuestion,
        caption: "An example of a quiz question"
      },
    ]
  },
  {
    title: "Tech Stack",
    content: [
      {
        type: "list",
        list: techStack
      },
      {
        type: "paragraph",
        text: `For this project, I chose a healthy mix of technologies that I was already familiar with, such as Express and React and ones that were relatively new to me, such as Tailwind.

The goal of this project was to become more proficient in Tailwind while continuing to solidify my knowledge of React and Express. In this case, the Express backend is being used exclusively as an API.

In deployment, my backend API was replaced with direct access to my database as provided by my hosting service.`
      },
    ]
  },
  {
    title: "How much do you know?",
    content: [
      {
        type: "paragraph",
        text: `When I was considering which new project to undertake, I wanted something relatively simple that I could finish by myself within a reasonable amount of time, while still posing a challenge to me. In addition, while I wasn’t looking to reinvent the wheel, I wanted to create something that I would personally find fun and useful.

I chose to develop a versatile Geek Trivia Quiz app to allow users to add their own questions and categories, while still having a ready made repository that they could connect to and play right away.

I enjoy having friends over and hosting house parties. I’m also a big pop culture geek, and pride myself on my knowledge of film, video games, music, and other media and genres. In the past, I have livened things up by hosting trivia contests and even awarded prizes at my social gatherings.

I would read off questions and have my guests fill out hard copy answer sheets. I wanted to bring this concept into a digital, well designed, engaging, user-friendly format, where the question pool could get bigger as time went on, with a variety of topics.

Although there are a number of quiz platforms out there, such as Kahoot, I wanted an app with a large repository of questions, where the ones that the user gets quizzed on would be pulled at random. I wanted to allow the user to dynamically choose their categories so that any given quiz could involve questions about any combinations of subjects such as movies, video games, music, comics, etc., depending on their tastes.`
      }
    ]
  },
  {
    title: "Design & Planning",
    content: [
      {
        type: "paragraph",
        text: `As I started to think about the scope of the project, I came up with a lot of possible features that could be implemented. I went into the project with the mindset of building a small MVP with enough foresight to allow for iterative expansion of features without the need to overhaul everything. As such, I kept the initial features simple while keeping things like my database queries and front-end states robust.
I had the general aesthetics in my head from the beginning, and wanted to keep it simple, but colourful. I created the general design on Figma, but ended up altering certain aspects of my design during the development process, such as using checkboxes instead of buttons to combine categories.`
      },
      {
        type: "image",
        url: figma,
        caption: "Initial design and colour scheme"
      },
    ]
  },
  {
    title: "Challenges",
    content: [
      {
        type: "paragraph",
        text: `In order to put all the wrong answers in a single column when querying my questions, I decided to aggregate them into a string with a unique separator that I could use to then split that single string into multiple array items on the front end. I used the “STRING_AGG” function for the PostgreSQL query and the “GROUP_CONCAT” function for the MySQL query.

At first, that seemed to work, but then I encountered another major issue. When the user selects more than one category, any questions that had shared categories ended up being queried twice, because of the joining of the categories table. This also meant that the wrong answers were being queried twice too, and when the multiple instances of the same question were eventually grouped into one, the aggregate of the wrong answers ended up combining as well, leaving my question with redundant copies of the exact same wrong answers that would then end up rendered as extra buttons on the quiz. Worse yet, because this redundancy only applied to the wrong answers, it plainly gave away what the right answer was.

The easiest way for me to fix this error would have been to filter out the wrong answers on the front end, and only keep one set of unique choices. What I did not like about this solution is that it only takes care of the problem at the very last step of the whole process. I wanted to nip it in the bud, so to speak, so I began to seek out how to solve this issue at the very root of the problem–the SQL query itself.

After doing some research, the best and most elegant solution I came up with was to make use of a CTE (Common Table Expression), which I was unfamiliar with until now. This allowed me to first query the questions I needed from each category, combining all the duplicate questions using the “GROUP BY” function, and then joining that virtual table with the string aggregate of my wrong answers, all in a single query. This yielded the precise result I wanted.`
      }
    ]
  },
  {
    title: "Going Forward",
    content: [
      {
        type: "paragraph",
        text: `My original plan for this project was to develop a web version and a mobile version separately, using React Native for the latter. Now that I have completed the MVP for the web version, I realize that it might be tricky to allow a mobile version access to my MySQL database, due to CORS restrictions. Since my web version runs on the same domain as my PHP API, that's not an issue at the moment. I will have to consider my options, but as it is, the web version is fully responsive and will look and function just as well on a mobile device via browser.`
      },
      {
        type: "paragraph",
        text: `In terms of features, I want to implement a user system, to allow users to add their own questions that they could then quiz people on. I would also like to implement a quiz host feature, similar to Kahoot, where one user hosts a single quiz and multiple other users submit their answers, with a ranked list of winners in the end.`
      },
    ]
  },
];