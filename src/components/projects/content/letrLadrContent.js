import game from '../../../assets/letr/game.png';
import results from '../../../assets/letr/result.png';
import figma from '../../../assets/letr/wireframe.png';
import admin from '../../../assets/letr/admin.png';

export const techStack = ['Next JS', 'React Redux', 'Tailwind CSS', 'SQLite', 'OpenAI API'];

export const content = [
  {
    title: "Overview",
    content: [
      {
        type: "link",
        url: "https://github.com/new-idea-machine/Word-Game-App",
        text: "GitHub Repo"
      },
      {
        type: "paragraph",
        text: "Letr Ladr (pronounced 'letter ladder') is a word game inspired by Wordle. The user has to guess a series of words where each subsequent word is only one letter off from the previous."
      },
      {
        type: "image",
        url: game,
        caption: "Basic game view"
      },
      {
        type: "paragraph",
        text: "A user types in the word they think is correct, one by one, and if they manage to get the entire sequence of words correctly, they win the game. The user is timed and has a finite number of false attempts they can make. They also have additional hints they can reveal. Based on these features, the user's result is ranked on a 3-star basis."
      },
      {
        type: "image",
        url: results,
        caption: "An example of winning scenario"
      },
      {
        type: "paragraph",
        text: "Letr Ladr was started as part of the New Idea Machine (NIM) initiative, which brings developers together to build software for the purpose of providing practical development and teamwork experience."
      },
      {
        type: "link",
        url: "https://newideamachine.com/",
        text: "New Idea Machine"
      },
      {
        type: "paragraph",
        text: "This project was started by a team of 6 developers and a Product Manager, who was responsible for coming up with the concept for the app and worked with the team to develop the ideas further."
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
        text: `For this project, the team was eager to use Next JS, as a framework which has been growing in popularity. A few of the members were already dabbling in it, and those who weren't wanted to, so this provided the perfect learning opportunity. Alongside Next JS, we decided that using Tailwind CSS for styling was ideal. The two go hand in hand, and much like Next JS itself, Tailwind has been becoming more popular.
        
Once we started to build out the project, our game comprised several components, in various amount of layers, all relying on keeping track of a number of states. It was deemed that we needed a global state management solution to consolidate the 7+ states we had, some of which required to be drilled 3 layers deep into child components. For this, we used React Redux, which is an effective way to handle state management, and only required a handful of extra steps to implement with Next JS.

One of the first ideas that came along with the concept for this game is that the content, the puzzles and their hints, would be generated dynamically by AI, in order to provide an efficient and ongoing stream of new puzzles from day to day. Like with Wordle, the idea was to have a single puzzle per day, dynamically generated by AI. We decided to experiment with OpenAI API for this task, which came with its share of challenges (more on this below).`
      },
    ]
  },
  {
    title: "Why Letr Ladr?",
    content: [
      {
        type: "paragraph",
        text: `The process of starting a project at NIM began with a pitch meeting from participating developers that had ideas for a new app or piece of software. A lot of great ideas were pitched and then summarized in a word document, along with a few that came from outside that meeting.
        
The idea for the 'Word Game App' as it was then known came from a person who had come from outside the tech industry specifically, but had years of experience as a project and product manager. I was very much enticed by the idea of working with a seasoned professional whom I could learn from. I expressed interest in working on this app, as did 5 others who cited similar reasons to mine, in wanting to learn from this individual.

The idea for the app itself also appealed to my inner game developer, and sounded like a fun project to which I could contribute my game design and development skills. As the team was assembled, our NIM liaison expressed that the team was lacking a Project Manager and a UX/UI Designer. I rose to the occasion and volunteered to fill both of these roles within the team.`
      }
    ]
  },
  {
    title: "Design & Planning",
    content: [
      {
        type: "paragraph",
        text: `After the original meeting with our product manager, the design phase was fairly quick. It was to be a very simple app, one that resembled Wordle in its overall layout and presentation. I quickly put together an idea for the overall visual style, but we had decided that we didn't want to reinvent the wheel with its layout and to keep the interface familiar and intuitive, and similar to Wordle, as per our Product Manager's wishes.`
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
        text: `The initial prototype came together very quickly and we were able to create an appealing proof of concept that worked with some placeholder data. The game design and development aspect of it was pretty simple, and at the beginning, it was difficult to provide sufficient amount of work for every member. As Team Manager, I had to assess the project overall and come up with things that needed to be done or polished for other team members to work on. I took on the task of troubleshooting, debugging, and refactoring. Once everything was organized and stable, we knew that the hardest part would be to integrate our front end with an AI based content generation.

No one on the team had prior experience with AI within a development capacity, so two of the members, myself included, started by doing some research and experimentation. It very quickly became apparent to me that simply expecting the AI to generate our puzzles would not work. Several issues would consistently arise:`
      },
      {
        type: "olist",
        list: [
          "Repeated prompts would often cause the model to provide the same sequence of words in the response. If we wanted the model to give us a brand new puzzle every single day, it would require for the model to know which words or sequences of words we already have, to avoid giving us repeat examples.",
          "The response the model generated often did not follow the required parameters. Each word in our sequence needed to be different from the last by only one letter. Often the model would give me words that were different by two or sometimes three letters.",
          "The puzzle the model would generate contained repeated words. We required 5 different words in a given puzzle. Often the model would return a puzzle that resembeld something like this: 'Apple, Apple, Ample, Ample, Ample'."
        ]
      },
      {
        type: "paragraph",
        text: `I tried making the prompt longer and more specific. I tried making the prompt concise and simple. I tried reiterating the rules. I tried variations in my wording. Still, the issues above persisted. Ultimately, we concluded that using GPT 3.5 for generating our puzzles was not a viable solution.

Instead of having the AI build our puzzles for us, we decided to implement an algorithm that would take an existing vocabulary and develop our puzzles for us. We gathered a list of over 2000 5-letter words and generated an algorithm that would randomly pick one of the words, and then attempt to find 4 more words in a sequence that followed our requirements. We quickly noticed that the algorithm seemed to favour sequences of words where only the first letter changed (e.g. sails, fails, mails, bails), which did not make for engaging puzzles. So we further tweaked the algorithm to prioritize words where letters letter 2 through 5 was different, and only allow for the first letter difference if there was no other alternative within our vocabulary. The algorithm was first implemented by another member, as a brute forced nested for loop. I then refactored it to use recursion and to make it more efficient and scalable.  

Not wanting to abandon the use of AI all together, we decided to use it to generate a list of hints for each word instead. During our development, we played around with the idea of using synonyms as hints, or using long, crossword-like clues, and ultimately decided that our hints needed to be words or short phrases that were more like obscure hints than actual definitions or synonyms. The AI was much better at generating these, and proved far more promising in that regard. However, there was another factor to consider: appropriateness.

We noticed that in some cases, the hints the AI would produce were not entirely appropriate for what we were going for. Often they would consist of violent or sexual phrases, not overtly explicit, but not something one would want a 9-year-old child to read. We hadn't solidified our target audience at that point, but the issue of our demographic was always more about the difficulty of the game. The overall consensus was that the actual content needed to be appropriate for all ages no matter what.

Ultimately, we concluded that using the AI to automate our app was not viable. Some level of human moderation would be required and AI would need to be used as a tool to assist in the process. Our final implementation is outlined below.

On a personal level, stepping into the role of Project Manager was another challenge I faced. I had no education or experience in being a team lead, and for most of the past 6 years, I have been a solo developer. What's more, this was not a paid project, and none of the team members had contractual obligations to keep working on this project. This made it particularly difficult to keep everyone accountable and to uphold standards when it came to project organization. I had to learn on the fly how to lead a team without being controlling or too demanding, and there were times when I felt like some of the members weren't communicating enough. However, ultimately, everyone on the team was there because they wanted to be, and everyone was eager to learn and improve, and that passion made for a very pleasant working atmosphere and experience.`
      },
    ]
  },
  {
    title: "Spotlight",
    content: [
      {
        type: "paragraph",
        text: `We had our vocabulary. We had our algorithm. We had our AI implementation. Now, we needed an efficient way to build out our puzzles. I decided to build a utility that would allow our team members to quickly and efficiently generate and store new puzzles. I decided to build this utility as an admin portal, which can only be accessed by an authorized user.
        
The puzzle generator works as follows:`
      },
      {
        type: "olist",
        list: [
          "At the click of a button, it uses the algorithm above to generate a puzzle of 5 random words from our vocabulary, where each subsequent word is 1 letter different from the previous, as required.",
          "Once all the words are established, it creates a prompt for the AI to generate 5 possible hints for every word. In a normal game, the user would get 2 hints at the most, but I wanted to generate 5 to give us more options. We made sure that this data was generated in JSON format.",
          "The generator would then display the words along with their hints for review. If some of the hints are deemed inappropriate, mention the word in them, or are otherwise not ideal, they can be removed or edited. As long as each word has at least 2 viable hints, it's good to go.",
          "I also wanted to make sure that we weren't getting repeat puzzles, or ones that had too many words in common. For this, the new puzzle would be compared to every existing puzzle in our database, and any repeat words would be flagged for comparison. We hadn't yet agreed on what the limit would be for puzzles having in common words, or their sequence, so whether or not the puzzles are too similar would be up to the admin's discretion.",
          "If there are issues with a given puzzle, it can be regenerated. Otherwise, the adming can save it to our database. In this way, a designated person can quickly and efficiently generate a new puzzle, or many new puzzles, in minutes."
        ]
      },
      {
        type: "image",
        url: admin,
        caption: "A newly generated puzzle"
      },
    ]
  },
  {
    title: "The Learning Journey",
    content: [
      {
        type: "paragraph",
        text: `This project was a tremendous learning opportunity for me. From a development stantpoint, this project provided a solid foundation for my knowledge and experience with Next JS, and Tailwind CSS. It was also my first foray into working with OpenAI API, and through it, I managed to get a much better idea of the various strengths and weaknesses of using AI in one's app.
        
However, I would say that the biggest learning opportunity this project provided for me was developing my leadership and organization skills as Project Manager. I had to step up and be proactive in leading this team through the beginning stages of building up this app, and did my best to guide everyone to stay consistent and organized with their code and to uphold high standards when it came to efficiency, scalability, and code reusability. In a subsequent project, I was voted in to be the team lead due to my proactive attitude and organization skills, and I have no doubt in my mind that it was thanks to my experience managing the Letr Ladr project.`
      },
    ]
  },
];