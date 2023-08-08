import TechStack from "../TechStack";
import Image from "../Image";

import overview from '../../../assets/openbook/openBookOverview.png';
import newStory from '../../../assets/openbook/newStory.png';
import original from '../../../assets/openbook/openBookOriginal.png';
import figma from '../../../assets/openbook/figma.png';
import erd from '../../../assets/openbook/ERD.png';

export const techStack = ['EJS', 'jQuery', 'AJAX', 'Sass', 'Node', 'Express', 'Cookie Session', 'PostreSQL'];
export const techStack2 = ['Vue', 'Vue Router', 'Vuex', 'Axios', 'Bulma', 'Sass', 'Node', 'Express', 'Cookie Session', 'PostreSQL'];

export const content = (
  <div className='project-content'>
    <h3 className="section-title">Overview</h3>
    <div className='bordered'>

      <p>{`OpenBook is a creative writing app which allows users to create prose, poetry, or any other form of written art. What makes it unique is that it also allows users to contribute to each other’s written work, continuing or following up a written story.`}</p>
      <Image url={overview} alt='App Overview' caption='Browse Stories Page' />
      <p>{`A user starts a story by writing the first chapter or section, and choosing the appropriate category, genre, and rating. Once they’re happy with their draft and choose to publish it,, other users will be able to add their own contributions. The original author can then choose the contribution they like best, and other users can then continue adding to the main story by following up that contribution. The author’s choice can be based on personal preference, or if they choose, they can base it on the biggest number of upvotes for any given contribution. The author can keep the story going indefinitely, or mark it as completed, which prevents further contributions from being added.`}</p>
      <Image url={newStory} alt='Buddy View' caption='Creating a New Story' />
      <p>{`The app included basic fundamental features such as a user registration and login system, browsing other user’s stories, reading each individual story, and adding, editing, and deleting your own.`}</p>

      <h4 className='centered'><a href='https://github.com/KovaKreative/GOAL'>GitHub Repo</a></h4>
    </div>
    <h3 className="section-title">Phase 1</h3>
    <div className="bordered">
      <p>{`This web app was originally designed and developed by myself and Stanley Wong as our midterm project at Lighthouse Labs. We divided the work based on the BREAD concepts, where my primary tasks revolved around the “EAD” aspect of the app–the features that allowed the user to add, edit, and delete stories and contributions. This included the entire vertical slice of our tech stack, including the backend server, router, database queries, and the rendering and request functions on the front end.`}</p>
      <h3>Tech Stack</h3>
      <TechStack techStack={techStack} />
      <p>
        {`Most of our original Tech Stack was a part of the requirements as dictated by the midterm project. The parameters required us to build a RESTful app with EJS for backend rendering.`}
      </p>
    </div>
    <h3 className="section-title">Phase 2</h3>
    <div className="bordered">
      <p>{`After graduating from the bootcamp, I took an online course to learn VueJS, which was not a part of my curriculum. I wanted to build a project that would help me get comfortable with the Vue framework. Instead of starting a new project from scratch, I decided to convert the front end of OpenBook to Vue. EJS is a great templating language, but in my portfolio, I want to showcase my knowledge and experience with more robust front end frameworks.`}</p>
      <h3>Tech Stack</h3>
      <TechStack techStack={techStack2} />
    </div>
    <h3 className="section-title">The Migration</h3>
    <div className="bordered">
      <p>
        {`My process for the conversion of OpenBook to Vue started out with building the front end piece by piece, starting with the registration and login page. Instead of replicating the original style in SCSS, I also wanted to redesign the entire interface and learn a new CSS framework at the same time. I implemented Bulma for this task, which allowed me to quickly style my webpage, make it responsive, and focus on implementing the functionality. Once the front end was complete, I implemented Axios for sending request data to the backend server.

  This approach fundamentally changed the structure of my app. Instead of rendering it on the backend, I converted the backend server to strictly serve as an API. This required some minor, but important modifications to my router, to send the response as JSON data, instead of rendering or redirecting the webpage.
  I repeated this process with every part of the web app until it was fully functioning once again in its new format.
`}</p>
    </div>
    <h3 className="section-title">Writing Together</h3>
    <div className="bordered">
      <p>
        {`The app was built to cultivate creativity for writers. I consider myself to be a very creative (kreative?) person. I love the idea of people collaborating on writing stories together. It is often said that limitations encourage creativity, and to have to follow someone else’s writing, continuing what they’ve started is a unique kind of limitation in itself.
        Doing some research before we commenced the development process, we discovered a handful of web apps which offer a similar service. Unfortunately, a lot of them seemed largely inactive, which is unfortunate, but it would be nice to revive this tyle of a creative outlet. It would be worth considering adding some gamification elements in the future to make it more fun for the user.`}</p>
    </div>
    <h3 className="section-title">Design & Planning</h3>
    <div className="bordered">
      <p>{`During our initial brainstorming sessions, Stanley Wong and I had divided our duties. We collaborated on the basic brainstorming, but the majority of the planning was mutually exclusive. While Stanley had undertaken designing the visual layout of our app in Figma, I took on the responsibility of designing the ERD for our database. I used diagrams.net to establish all of our tables and their relationships, which made it simple and efficient for us to create our SQL schema. Along the way, there was some iterating done, such as adding supplementary bridge tables and adding or removing certain fields.`}</p>
      <Image url={figma} alt='Figma Wireframe' caption='Wireframes for the various site views' />
      <hr />
      <Image url={erd} alt='Figma Wireframe' caption='ERD for the Database' />
      <p>{`Once I decided to rebuild my front end in Vue, I overhauled the visual layout of the app and its components, keeping certain elements similar, but having an overall simplified layout for our story browser, and implementing pagination for reading the story chapters, rather than having an indeterminately large block of text stretching out the overall page.`}
      </p>
    </div>
    <h3 className="section-title">Challenges</h3>
    <div className="bordered">
      <p>{`As with any project, one of the biggest challenges was the deadline. We had one week to see the project through to completion and had to be efficient with our time and to keep our app slim, with only a couple of small wishlist features that weren’t absolutely essential.
  Another challenge this project posed was database management. Previous to it, I had worked with SQL queries a number of times, but they usually only pertained to unrelated, individual tables, and making those queries was relatively simple. In OpenBook, we have eight total tables, all interrelated in one way or another. Not only that, since we are dealing with users and performing various post queries, we needed to ensure that the users had permissions to perform the actions they did, or deny them if they didn’t. Certain edge cases resulted in our server crashing or the data not being retrieved when we needed it. We had to account for those cases within our promises on the back end. Lastly, all of this could result in some potentially messy code, so I had to make sure to keep things as efficient and DRY as possible.
`}
      </p>
    </div>
    <h3 className="section-title">The Learning Journey</h3>
    <div className="bordered">
      <p>{`The initial project was a huge learning opportunity as part of my bootcamp curriculum. This was the first full stack web app I had ever built, and one that was feature rich at that. Not only that, but working with a partner on a project of this scale and dividing responsibilities was a new experience for me, and taught me a lot about finding the balance between teamwork and individual work in a given project. We primarily worked individually on our respective features, but for certain tasks, we would engage in pair programming, in particular when trying to figure out our database queries, or when debugging errors. Having two pairs of eyes on the code and a collaborative back and forth allowed us to solve the vast majority of our problems without the need for outside help.
  Upon undertaking phase 2 of the project: converting it to Vue, I was presented with two very valuable learning opportunities:`}</p>
      <ul>
      <li className="bullet">Learning the Vue framework and its intricacies, as was my main objective.</li>
      <li className="bullet">Learning the process of migrating a web app to a brand new framework.</li>
      </ul>
      <p>{`While I was able to learn Vue and got fairly comfortable with it, I think the conversion itself presented a far more valuable education for me. These days, a lot of companies are migrating their tech stack from older, deprecated frameworks to new, contemporary ones, and should I ever have to undertake such a task, I feel like this project has provided me with valuable preparation.
`}
      </p>
    </div>
  </div>
);