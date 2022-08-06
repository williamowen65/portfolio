/* eslint-disable no-multi-str */
import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import { SET_REVIEW_MODAL, PUSH_REVIEW } from "../types";
import projectReducer from "./projectReducer";

// import $ from "jquery";

const ProjectsState = (props) => {
  const initialState = {
    clientProjects: [
      {
        id: 0,
        title: "Watercolor Collection",
        body: `${((() => <p>dsfsdf</p>)())}`,
        // Note: all imgs should be png, loaded with site, so site can be used with poor internet access
        img: "./assets/imgs/blue-crab.png",
        link: "https://moms-art-gallery.web.app/",
        styles: {
          transform: "translate(10px,-20px)",
          width: "200%",
        },
        details:
          "<h4>My First Project</h4> \
            <p>Although there's room for improvement, I am happy with how this worked out and what I learned.</p> \
            <p>An admin account allows for crud operations, tweaking the layout and content.</p>\
            <p>What I would add to improve this project is a custom loading screen and the ability for Stripe payments</p> \
              <ul> \
              <li class='title'>Technology Stack</li>\
              <li>HTML</li>\
              <li>CSS</li>\
              <li>JavaScript</li>\
              <li>Vue</li>\
              <li>Firebase</li>\
              </ul> \
          ",
      },
      {
        id: 1,
        title: "Work Wanted",
        body: "Currently Available <br> for Web Dev Jobs",
        img: "./assets/imgs/pigbank.jpg",
        styles: {
          // transform: "translateY(-40px)",
        },
        link: null,
        details:
          "\
        <h4>Any takers?</h4>\
        <p>View the other pages on my portfolio to learn about my web development background.</p>\
        <p>I possess the ability to work on site or remotely.</p>\
        <p>We can design around your vision and you can view live updates as it is created.</p>\
        <p>I'll help you get a domain name and provide updates as needed.</p>\
        <p>One of my goals for client sites is for them to be self-manageable, so you won't need to come back to me often.</p>\
        ",
      },
    ],
    tutorialProjects: [
      {
        id: 7,
        title: "Themed Calculator",
        body: "My solution uses OOP, Lodash, exact-math, & prefers-color-scheme",
        img: "./assets/imgs/calc.png",
        link: "https://williamowen65.github.io/calculator-app-main/dist",
        details:
          "  \
            <h4>Themed Calculator</h4>  \
            <p class='author'>Challenge from <a href='https://www.frontendmentor.io/' target='_blank'>Frontend Mentor</a>.</p>  \
            <p>My first of these challenges.</p> \
            <p>This project has a Calculator class and Theme class to handle logic.</p>\
            <p>The math magic comes from exactMath.formula().</p>\
            <ul> \
            <li class='title'>Technology Stack</li>\
            <li>HTML</li>\
            <li>SASS</li>\
            <li>JS - OOP</li>\
            <li>Lodash</li>\
            <li>exact-math</li>\
            </ul>\
            ",
        styles: {
          transform: 'translateY(-25px)'
        },
      },
      {
        id: 0,
        title: "Github Finder",
        body: "Scrapping data from  the Github API to construct an app around",
        img: "./assets/imgs/github-finder.png",
        link: "https://githubfinder84093849324.netlify.app/",
        details:
          "  \
            <h4>Intro to React</h4>  \
            <p class='author'>Tutorial led by <a href='https://www.udemy.com/course/modern-react-front-to-back/' target='_blank'>Brad Traversy</a>.</p>  \
            <p>This was a part of a series of projects that I've used to become familiar with React.</p> \
            <p>The main takeaway from this tutorial was how to implement \"context\" so that you can minimize the need for passing props between components.</p>\
            <p>I now can reasonable compare two frameworks candidates, Vue.js & React. </p>\
            <p>I am building my portfolio with React, if that means anything to you.</p>\
            <p>PS. Search for me on the app!</p>\
            <ul> \
            <li class='title'>Technology Stack</li>\
            <li>React</li>\
            </ul>\
            ",
      },
      {
        id: 1,
        title: "Contact Keeper",
        body: "Create an account. <br> Add contacts.",
        img: "./assets/imgs/contact-keeper.png",
        link: "https://owen-contact-keeper.herokuapp.com/",
        details:
          "\
            <h4>First Full-Stack <br>MERN App</h4>\
            <p class='author'>Tutorial led by <a href='https://www.udemy.com/course/modern-react-front-to-back/' target='_blank'>Brad Traversy</a>.</p>  \
            <p>You can add contacts then filter, edit, and delete them. </p> \
            <p>As with most tutorials, I can find things to improve and I get to experiment on my own. </p> \
            <p>In this one, I've fine-tuned the filter/edit buttons to have better expected user experiences.</p> \
            <p>Also like most tuts, they introduce various tools to explore later. <i>React Motion</i> is now on my to-learn list.</p>\
            <p>FYI, this app keeps you logged in if you close the window and come back.</p>\
            <ul> \
            <li class='title'>Technology Stack</li>\
            <li>React</li> \
            <li>Express / Mongoose</li> \
            <li>Postman</li> \
            </ul> \
          ",
      },
      {
        id: 2,
        title: "Machine Learning <br> with JavaScript",
        body: "This tutorial is on my to-do list",
        img: "./assets/imgs/machine-learning.jpg",
        link: null,
        details:
          "\
        <h4>Machine Learning <br> with JavaScript</h4>\
        <p class='author'>Tutorial led by <a href='https://www.udemy.com/course/machine-learning-with-javascript' target='_blank'>Stephan Grider</a>.</p>  \
        <p>I have not done this course yet, but plan to in the near future.</p> \
        <ul> \
        <li class='title'>Technology Stack</li>\
        <li>JavaScript</li> \
        </ul> \
      ",
        styles: {
          filter: "grayscale(60%)",
        },
      },
      {
        id: 3,
        title: "Understanding <br>TypeScript",
        body: "A cutting edge tool for the development experience",
        img: "./assets/imgs/typescript.png",
        link: "https://cocky-montalcini-fd9fbe.netlify.app/",
        details:
          "\
        <h4>Understanding <br> TypeScript</h4>\
        <p class='author'>Tutorial led by <a href='https://www.udemy.com/course/understanding-typescript/' target='_blank'>Maximilian Schwarzmuller</a>.</p>  \
        <p>This course teaches one of the cutting edge tools used out there.</p> \
        <p>Check out my simple drag and drop project.</p>\
        <p>I've finished this course and the first project I have that uses it is my blog project.</p>\
        <p> Coming soon.</p>\
        <ul> \
        <li class='title'>Technology Stack</li>\
        <li>TypeScript</li> \
        <li>JavaScript</li> \
        <li>React</li> \
        <li>Webpack</li> \
        <li>Node/Express</li> \
        </ul> \
      ",
        styles: {
          transform: "scale(0.8)",
          // background: "blue",
        },
      },
      {
        id: 4,
        title: "React Native",
        body: "A simple way to write android and ios apps with React ",
        img: "./assets/imgs/react-native.png",
        link: null,
        details:
          "\
        <h4>React Native</h4>\
        <p class='author'>Tutorial led by <a href='https://www.udemy.com/course/react-native-the-practical-guide/' target='_blank'>Maximilian Schwarzmuller</a>.</p>  \
        <p>A method of creating android and ios apps using react and javascript.</p> \
        <p>I already know what I want to build with this. A kayaking app called PNW Marine Trails.</p>\
        <p>You can imagine what it entails, but for me it is combining my passions.</p>\
        <ul> \
        <li class='title'>Technology Stack</li>\
        <li>JavaScript</li> \
        <li>React Native</li> \
        </ul> \
      ",
        styles: {
          transform: "translateY(50px)",
        },
      },
      {
        id: 5,
        title: "Git & Github Bootcamp",
        body: "This course taught version control and collaboration",
        img: "./assets/imgs/git.png",
        link: null,
        details:
          "\
        <h4>Git & Github <br> bootcamp</h4>\
        <p class='author'>Tutorial led by <a href='https://www.udemy.com/course/git-and-github-bootcamp' target='_blank'>Colt Steele</a>.</p>  \
        <p>A skill best learned yesterday. I took this course between kayak trips this summer.</p> \
        <p>It's proven itself to be the most powerful tool to use while learning to code</p>\
        <p>This has helped me keep track of my projects and retrieve what I thought was lost work. And it allows you to be creative without worrying about making mistakes.</p>\
        <p></p>\
        <ul> \
        <li class='title'>Technology Stack</li>\
        <li>JavaScript</li> \
        <li>React Native</li> \
        </ul> \
      ",
        styles: {
          transform: "translateY(70px) scale(0.8)",
        },
      },
      {
        id: 6,
        title: "NetNinja Projects",
        link: null,
        body: "This is a collection of projects that became an intro resource to web development.",
        img: "./assets/imgs/misc.png",
        styles: {
          transform: "scale(1.2)",
        },
        details:
          "\
          <p class='pre'>A collection of. . .</p> \
          <h4 class='sub'>Net Ninja Projects</h4>\
          <p class='author'>Check out <a href='https://www.youtube.com/c/TheNetNinja' target='_blank'> NetNinja's YouTube</a></p>\
                <p>These projects were the first. He has courses all the way from beginner to advanced. Releases new content about various tools often.  This instructor has made learning a lot easier</p>\
                <ul> \
                <li class='title'>Other Projects</li>\
                <li><a target='_blank' href='https://muso-ninjas-5e63f.web.app/login' class='disinherit'>Musio Ninjas</a></li> \
                <li><a target='_blank' href='https://d3-netninja-9b1a1.web.app/' class='disinherit'>Ninja Wonga</a></li> \
                <li><a target='_blank' href='https://udemy-vue-firebase-tut.web.app/' class='disinherit'>Live Chat 1</a></li> \
                <li><a target='_blank' href='https://owen-chat-app.herokuapp.com/' class='disinherit'>Live Chat 2</a></li> \
                </ul> \
                <ul> \
                <li class='title'>Technology Stack</li>\
                <li><a class='disinherit' href='https://socket.io/' target='_blank'>Socket.io</a></li> \
                <li class='breif'> - This tool is perfect for live chat rooms</li>\
                <li><a class='disinherit' href='https://greensock.com/' target='_blank'>GSAP</a></li> \
                <li class='breif'> - I was very impressed working with GSAP (Green Sock Animation Platform). I recall it being very simple to implement with tons of control. Since discovering GSAP I have found other animation frameworks to explore that also show promise. </li>\
                </ul> \
              ",
      },
    ],
    experimentalProjects: [
      {
        id: 0,
        title: "Atlas <br> The Public Think-Tank",
        body: "A new type of social media",
        img: "./assets/imgs/atlas-img.png",
        link: 'https://www.thepublicthinktank.com/',
        styles: {
          transform: "scale(4) translate(-80px, 17px)",
        },
        details:
          "\
            <p class='pre'>- A passion project -</p> \
            <h4 class='sub'>A Humanitarian <br> approach <br> to Social-Media</h4>\
            <p> A social media platform designed to facilitate a conversation towards improving the quality of life around us.</p>\
            <p>This lofty goal is nothing I can complete on my own, but it's in the works.</p> \
            <fieldset> \
            <legend class='title'>Reasons I feel a duty to create this: </legend>\
            <li>I think of my nephews and the world I want them to grow up in. </li> \
            </fieldset> \
            <fieldset> \
            <legend class='title'>Reasons why I think this will work:</legend>\
            <li>Social media is addicting, so why not channel that energy into something positive and nobel.</li> \
            <li>I believe Atlas will fill a void that has been desperately holding us back.</li> \
            </fieldset> \
            <p>Consider helping support my efforts with a donation, also look for our fundraiser where you can learn more about this project. Funds raised will go towards hiring a team and furthering this project into the 21st century.</p> \
            <ul> \
            <li class='title'>Technology Stack</li>\
            <li>Next.js</li> \
            </ul> \
            ",
      },
      {
        id: 1,
        title: "Kayak Training",
        body: "A resource for gaining kayak skills",
        img: "./assets/imgs/kayak-website.png",
        // link: "https://kayak-guide-training.web.app/",
        link: null,
        styles: {
          transform: "scale(2) translateY(100px)",
        },
        details:
          "\
            <p class='pre'>An experiment in . . .</p> \
            <h4 class='sub'>Creating a Resource</h4>\
            <p>Kayaking is a great hobby that lots of people like to jump in to.</p>\
            <p>This is a resource was a win-win, being a valuable project to me and a useful way to disperse information for co-workers</p>\
            <p>Even with my limited skill set, I was already trying to find problems to solve. This was one of my first projects with a framework.</p>\
            <ul> \
            <li class='title'>Technology Stack</li>\
            <li>Vue</li> \
            </ul> \
            ",
      },
      {
        id: 2,
        title: "Men and Woman in the Workplace",
        body: "My first D3.js project, hosted on the Observable Notebook.",
        link: "https://observablehq.com/@williamowen65/men-and-woman-in-the-workplace",
        img: "./assets/imgs/men-woman.png",
        styles: {
          transform: "translateY(-200px)",
        },
        details:
          " \
            <p class='pre'>An experiment in . . .</p> \
            <h4 class='sub'>Working with Data</h4>\
            <p>Working with data is both easy and difficult, at least for now.</p>\
            <p>I haven't worked with data since this and miss it. </p>\
            <p>There's tons of possibility with D3.js and I plan to exploit it's capibilities in future projects</p>\
            <p>For those of you who don't know what Observable is yet, it's a social media platform which allows you to use JavaScript, HTML, CSS, SVGs, etc in your post. And different posts can \"communicate\" with each other.</p>\
            <ul> \
            <li class='title'>Technology Stack</li>\
            <li>JavaScript</li> \
            <li><a href='https://d3js.org/' target='_blank' class='disinherit'>D3.js<a/></li> \
            </ul> \
            ",
      },
      {
        id: 3,
        title: "Personal Blog",
        link: null,
        body: "Because, Why Not",
        img: "./assets/imgs/blog.jpg",
        styles: {
          transform: "translate(0px, 29px) scale(2.5)",
        },
        details:
          "\
        <p class='pre'>An experiment in . . .</p> \
        <h4 class='sub'>Connecting <br>through writing</h4>\
        <p>This app has not yet been started.</p>\
        <ul> \
            <li class='title'>Technology Stack</li>\
            <li>React</li> \
            </ul> \
            ",
      },
      {
        id: 4,
        title: "Lucky <br> A Card Game App",
        link: null,
        body: "3D, two player, PWA",
        img: "./assets/imgs/cards.jpg",
        details:
          "\
          <p class='pre'>An experiment in . . .</p> \
          <h4 class='sub'>Creating a <br> progressive <br> web app</h4>\
          <p>This app has not been started yet.</p>\
            <ul> \
            <li class='title'>Technology Stack</li>\
            <li>React</li> \
            </ul> \
            ",
      },
    ],
    reviews: {
      h: "Client Reviews",
      reviews: [
        {
          stars: 4.2,
          title: "WaterColor Website",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis ex enim laboriosam, maxime reprehenderit accusantium cum, eligendi nemo laborum omnis aspernatur ea ipsa dolorum odit! Mollitia ullam illum voluptatum alias asperiores beatae iusto natus veniam quaerat dolore deserunt, consequuntur sequi similique rem optio. Nemo, numquam facilis officiis accusamus dolore quia sit in eius, id, harum at unde earum veritatis vero pariatur? Nam omnis corporis eaque earum a fugit nisi voluptas id accusamus cumque non debitis dolorem numquam, reprehenderit aliquam quidem at totam fugiat. Numquam suscipit perspiciatis modi beatae ipsam laboriosam fuga voluptatum impedit unde quibusdam eveniet, amet itaque hic nemo ipsum nam dolor rerum deleniti dolores quaerat ab. Quasi qui labore culpa dignissimos perspiciatis ab odit! Esse molestias magni veritatis quos perspiciatis iure laborum sint praesentium at sapiente ullam voluptatem ipsam, obcaecati fuga deleniti, cumque placeat consequatur suscipit voluptas doloremque. Ex a ea ut sequi adipisci eos, dolores pariatur nesciunt aut quae laudantium dolor illum quas nemo quo esse porro quibusdam non maiores? Suscipit dolorum voluptatibus commodi, nostrum nisi id fugit placeat vero eaque veniam vel earum ipsam consequuntur aliquid officia debitis praesentium recusandae! Dolores eveniet placeat excepturi ex? Quia quis nostrum ullam natus cum obcaecati quisquam placeat maxime. Esse amet tenetur neque ullam quod distinctio doloribus expedita totam porro, hic veritatis a alias reprehenderit blanditiis laborum reiciendis cupiditate ipsam nemo cum? Dolore accusamus, aliquam ad nulla cumque eaque! Facilis quas corrupti omnis. Velit, voluptas quos delectus placeat aliquam magni sed recusandae vitae fuga illum dignissimos odit laboriosam quisquam, ullam debitis quaerat consequuntur atque pariatur, fugiat deserunt necessitatibus nisi voluptatum repellendus qui? Itaque fugiat ea tempore ratione eius, vero atque iste dolores. Autem aspernatur cumque debitis quos ex aliquam ullam quaerat, porro corporis numquam. Unde, beatae voluptates velit incidunt odit cum nemo sed sint voluptate, sapiente neque voluptatum nam?!",
          name: "beth owen",
          link: "www.bethowenwatercolors.com",
        },
        {
          stars: 3,
          title: "Other Website",
          body: "Best Son Ever! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis ex enim laboriosam, maxime reprehenderit accusantium cum, eligendi nemo laborum omnis aspernatur ea ipsa dolorum odit! Mollitia ullam illum voluptatum alias asperiores beatae iusto natus veniam quaerat dolore deserunt, consequuntur sequi similique rem optio. Nemo, numquam facilis officiis accusamus dolore quia sit in eius, id, harum at unde earum veritatis vero pariatur? Nam omnis corporis eaque earum a fugit nisi voluptas id accusamus cumque non debitis dolorem numquam, reprehenderit aliquam quidem at totam fugiat. Numquam suscipit perspiciatis modi beatae ipsam laboriosam fuga voluptatum impedit unde quibusdam eveniet, amet itaque hic nemo ipsum nam dolor rerum deleniti dolores quaerat ab. Quasi qui labore culpa dignissimos perspiciatis ab odit! Esse molestias magni veritatis quos perspiciatis iure laborum sint praesentium at sapiente ullam voluptatem ipsam, obcaecati fuga deleniti, cumque placeat consequatur suscipit voluptas doloremque. Ex a ea ut sequi adipisci eos, dolores pariatur nesciunt aut quae laudantium dolor illum quas nemo quo esse porro quibusdam non maiores? Suscipit dolorum voluptatibus commodi, nostrum nisi id fugit placeat vero eaque veniam vel earum ipsam consequuntur aliquid officia debitis praesentium recusandae! Dolores eveniet placeat excepturi ex? Quia quis nostrum ullam natus cum obcaecati quisquam placeat maxime. Esse amet tenetur neque ullam quod distinctio doloribus expedita totam porro, hic veritatis a alias reprehenderit blanditiis laborum reiciendis cupiditate ipsam nemo cum? Dolore accusamus, aliquam ad nulla cumque eaque! Facilis quas corrupti omnis. Velit, voluptas quos delectus placeat aliquam magni sed recusandae vitae fuga illum dignissimos odit laboriosam quisquam, ullam debitis quaerat consequuntur atque pariatur, fugiat deserunt necessitatibus nisi voluptatum repellendus qui? Itaque fugiat ea tempore ratione eius, vero atque iste dolores. Autem aspernatur cumque debitis quos ex aliquam ullam quaerat, porro corporis numquam. Unde, beatae voluptates velit incidunt odit cum nemo sed sint voluptate, sapiente neque voluptatum nam?!",
          name: "beth owen",
          link: "www.bethowenwatercolors.com",
        },
        {
          stars: 4.5,
          title: "Another Website",
          body: "Best Son Ever! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reiciendis ex enim laboriosam, maxime reprehenderit accusantium cum, eligendi nemo laborum omnis aspernatur ea ipsa dolorum odit! Mollitia ullam illum voluptatum alias asperiores beatae iusto natus veniam quaerat dolore deserunt, consequuntur sequi similique rem optio. Nemo, numquam facilis officiis accusamus dolore quia sit in eius, id, harum at unde earum veritatis vero pariatur? Nam omnis corporis eaque earum a fugit nisi voluptas id accusamus cumque non debitis dolorem numquam, reprehenderit aliquam quidem at totam fugiat. Numquam suscipit perspiciatis modi beatae ipsam laboriosam fuga voluptatum impedit unde quibusdam eveniet, amet itaque hic nemo ipsum nam dolor rerum deleniti dolores quaerat ab. Quasi qui labore culpa dignissimos perspiciatis ab odit! Esse molestias magni veritatis quos perspiciatis iure laborum sint praesentium at sapiente ullam voluptatem ipsam, obcaecati fuga deleniti, cumque placeat consequatur suscipit voluptas doloremque. Ex a ea ut sequi adipisci eos, dolores pariatur nesciunt aut quae laudantium dolor illum quas nemo quo esse porro quibusdam non maiores? Suscipit dolorum voluptatibus commodi, nostrum nisi id fugit placeat vero eaque veniam vel earum ipsam consequuntur aliquid officia debitis praesentium recusandae! Dolores eveniet placeat excepturi ex? Quia quis nostrum ullam natus cum obcaecati quisquam placeat maxime. Esse amet tenetur neque ullam quod distinctio doloribus expedita totam porro, hic veritatis a alias reprehenderit blanditiis laborum reiciendis cupiditate ipsam nemo cum? Dolore accusamus, aliquam ad nulla cumque eaque! Facilis quas corrupti omnis. Velit, voluptas quos delectus placeat aliquam magni sed recusandae vitae fuga illum dignissimos odit laboriosam quisquam, ullam debitis quaerat consequuntur atque pariatur, fugiat deserunt necessitatibus nisi voluptatum repellendus qui? Itaque fugiat ea tempore ratione eius, vero atque iste dolores. Autem aspernatur cumque debitis quos ex aliquam ullam quaerat, porro corporis numquam. Unde, beatae voluptates velit incidunt odit cum nemo sed sint voluptate, sapiente neque voluptatum nam?!",
          name: "Howard owen",
          link: "www.bethowenwatercolors.com",
        },
        {
          stars: 5,
          title: "WaterColor Website",
          body: "Best Son Ever!",
          name: "beth owen",
          link: "www.bethowenwatercolors.com",
        },
      ],
      id: "reviews",
    },
    modalReview: {},
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const setReviewModal = (review) => {
    dispatch({
      type: SET_REVIEW_MODAL,
      payload: review,
    });
  };

  const pushReview = (dir) => {
    // console.log(dir, state.modalReview.id, state.reviews.reviews);
    let reviews = state.reviews.reviews;
    let currIndex = reviews.indexOf(state.modalReview);
    let nextReview;

    if (currIndex === reviews.length - 1 && dir == 1) {
      // console.log("forward");
      nextReview = reviews[0];
    } else if (currIndex === 0 && dir == -1) {
      // console.log("back");
      nextReview = reviews[reviews.length - 1];
    } else {
      // console.log("just");
      nextReview = reviews[currIndex + dir];
    }

    dispatch({
      type: PUSH_REVIEW,
      payload: nextReview,
    });

    // console.log($(".modal").scrollTop(0));
  };

  return (
    <ProjectContext.Provider
      value={{
        state,
        setReviewModal,
        pushReview,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectsState;
