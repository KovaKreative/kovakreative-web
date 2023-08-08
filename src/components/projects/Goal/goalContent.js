import TechStack from "../TechStack";
import Image from "../Image";

import goalManager from '../../../assets/goal/goalManager.png';
import buddyView from '../../../assets/goal/buddyView.png';
import figma from '../../../assets/goal/figmaWireframe.png';
import landing from '../../../assets/goal/landingPage.png';

export const techStack = ['React', 'Redux', 'Redux Toolkit', 'Axios', 'Sass', 'Node', 'Express', 'Socket.io', 'JSON Web Token', 'Prisma', 'PostreSQL'];

export const projectContent = (
  <div className='goal-content'>
    <h3 className="section-title">Overview</h3>
    <div className='bordered'>

      <p>{`GOAL is an acronym that stands for Growth Organization Achievement Life. This project consists of two main features: the goal manager and the accountability buddy system.`}</p>
      <Image url={goalManager} alt='Goal Manager' caption='Goal Manager' />
      <p>{`The goal manager allows the user to establish a long-term goal and then create a list of milestones required to achieve that goal. Each milestone can then contain its own set of milestones, breaking down every big, overwhelming task into smaller, more manageable ones. Every task or milestone that’s marked as complete contributes to the overall progress of the long-term goal, so with every small accomplishment, the user can see their progress bar grow, which, hopefully, encourages them to keep going.`}</p>
      <Image url={buddyView} alt='Buddy View' caption='Finding an Accountability Buddy' />
      <p>{`The accountability buddy system allows a user to find another user with similar goals, (or search for a specific user name) and connect with them in order to encourage each other and keep each other accountable for working toward their goals via live chat. The user can see their buddy’s long-term goals and how far along they are in achieving those goals.

  This web app was developed by myself, Angela Tabafunda, and Xize (Aster) Wu as our final project at Lighthouse Labs. We chose to divide the work based on features. The two main features that I tackled were the live chat and the goal manager.

  The live chat involved learning and implementing WebSockets functionality on the front end and on the back end, and then integrating our Prisma database queries and Redux states.

  The goal manager entailed developing a system of forms and elements on the front end, which would make GET and POST requests to the back end, where applicable entries would be pulled from or added to our database using Prisma. Because our goal management system required a deeply nested structure of objects, I developed a custom Linked List class in JavaScript and used it for the goal manager data on the front end.

  In addition, I took the initiative to handle the general cleanup and refactoring within every module and component and ended up doing extensive debugging on the entire project, whenever certain edge cases crept up near the end of our deadline.`}</p>
    </div>
    <h3 className="section-title">Tech Stack</h3>
    <div className="bordered">
      <TechStack techStack={techStack} />
      <p>
        {`We chose React for the front end because its versatile structure and responsive functionality was best suited for our dashboard-like app which required real time updates and dynamically managing smaller components. For the backend, we used Express.js, which served primarily as an API to fetch and manage our extensive database elements. For the database itself, we used PosgreSQL with Prisma as our ORM. We chose Prisma as a means to keep our database querying organized and secure.

  Our app utilized several different panels, each of which was used to display a variety of information dynamically. Having to juggle multiple states and data, we decided to use React-Redux and the Redux Toolkit to manage all of the information. This allowed us to handle our states independent of our components and to leverage them in multiple components.`}
      </p>
    </div>
    <h4 className='centered'><a href='https://github.com/KovaKreative/GOAL'>GitHub Repo</a></h4>
    <div className='centered'>
      <h3>Video Walkthrough</h3>
      <iframe className='video' src="https://www.youtube.com/embed/Je-H89G8CmQ?origin=http://kovakreative.com" title="GOAL Video Walkthrough" allow="clipboard-write; encrypted-media; picture-in-picture" allowFullScreen={true}></iframe>
    </div>,
    <h3 className="section-title">GOAL's Goal</h3>
    <div className="bordered">

      <p>
        {`The app was built to help people set and manage their goals and to motivate them to follow through on those goals. The concept came about during our brainstorming session. When my teammate brought up the idea of mind maps and to-do lists, I suggested combining these features to create something that would help people plan and achieve their goals.

For the past decade, I have spent my life constantly learning and working on personal projects. Through that journey, I have struggled with my share of burnout, lack of motivation, and constant distractions.I had to find ways to plan things out better and to push myself to stay on track through sheer discipline. I could think of many times when a tool like this would’ve been very helpful to me. I’ve also observed this in today’s society: Setting personal goals is more prominent than ever – to get healthy, to save money, to finish something. I wanted to build something that would help.`}</p>
    </div>
    <h3 className="section-title">Design & Planning</h3>
    <div className="bordered">
      <p>{`During our brainstorming sessions, the initial designs for the goal manager were more along the lines of an actual mind map, where you have a central node and other nodes would stem from it in all directions. We considered using an HTML5 Canvas to render it, but once we started considering our deadline and the amount of new tools we had to learn for this project, it was decided that implementing an HTML5 Canvas with a built-in form that makes requests to the server was out of scope, given all the other features we had to implement. Instead, we decided on a more organized card-based layout where the primary node in focus would serve as a container for all of its children nodes. Aside from that, most of our initial designs remained unchanged. We laid out rough wireframes on Figma and stuck to the three panel format.`}</p>
      <Image url={figma} alt='Figma Wireframe' caption='Wireframes for the Right Side Panel' />
      <p>{`In terms of design, we wanted something more visually engaging than a simple, monochrome, minimalist scheme that’s common in today’s websites, but to keep it subtle enough to be tasteful and professional. What we ended up with was a predominantly cool blue motif to evoke a calm and focused mind set, with yellow highlights to bring out a warm spark of energy and optimism.`}
      </p>
      <Image url={landing} alt='Landing Page' caption='Landing Page With Colour Scheme' />
    </div>

    <h3 className="section-title">Spotlight</h3>
    <div className="bordered">
      <p>{`The goal manager is the most extensive and complex feature of the app. It has one particular feature which we had second thoughts about implementing due to its complexity and our impending deadline.

  When you create a number of milestones within a single node and you think that some of them fall into a particular sub-category, you can move them inside other nodes, effectively reparenting them within the relationship tree.

  Reassigning children to different nodes within the Linked List, keeping it stable, not mutating the React state, and handling the database change on the backend, all at the same time, put my organization and coding skills to the test, and I’m very proud of how well it ended up working in the end.`}
      </p>
    </div>
    <h3 className="section-title">Challenges</h3>
    <div className="bordered">
      <p>{`We were met with many challenges in this project, but one of the biggest was working with Prisma. Although a very useful tool for simpler queries, it was an entirely new tool for us, and there was a steep learning curve for getting used to its more complicated functions. Prisma uses TypeScript, and was generally very strict about data types and what could and couldn’t be done with our tables.
  One particular query that gave us trouble involved cross referencing multiple users’ interests and matching users with similar ones. This involved joining a users table to the list of their interests, to the corresponding interests in other users, to the list of users that matched the user ID.
  Upon further research, we discovered that there were some limitations to the layer of query complexity you could make using Prisma, since it’s a relatively new tool and new features were still being added to it. With the help of a mentor, we were able to figure out the raw SQL query required and ended up using Prisma’s queryRaw method.

  Another challenge we faced was managing the live update features using WebSockets. We had to send live messages, show the buddy’s online status, and handle incoming buddy requests and notifications in real time. Managing that data on the backend and then passing it back and forth between two specific users added a layer of complexity, which we were able to handle thanks to communicating, staying organized, and helping each other out as a team.`}
      </p>
    </div>
    <h3 className="section-title">The Learning Journey</h3>
    <div className="bordered">
      <p>{`This project was a tremendous learning experience for me and my teammates. It utilized a lot of tools and languages unfamiliar to us, including Redux, Prisma, TypeScript, JSON Web Tokens, and Socket.io. It was also the first React project that I had built from scratch and to piece it together from nothing, and to implement all of the tools and libraries that were used was incredibly helpful in solidifying my understanding of React and its many features and intricacies.

  Out of all the new tools we used, Prisma ended up being the biggest double-edged sword. The Prisma Studio provided an excellent interface for viewing and easily editing the database when we needed to test certain features, and the re-seeding and migration process was very fast and efficient. However, making the actual queries, once they got more complex, was a painstaking trial and error process, and Prisma was eager to crash the server when the slightest aspect of the query wasn’t working. Ultimately, I’m not sure if it saved us time over making our own SQL queries, but the positive aspects of it were very welcome.  I have no regrets about suggesting that we use it and would consider using it again in future projects.`}
      </p>
    </div>
  </div>
);