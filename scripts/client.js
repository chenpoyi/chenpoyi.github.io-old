const projects = [
  {
    name: "Tweeter",
    description:
      "Tweeter is a simple, single-page Twitter clone. This was built during my time at Lighthouse Labs to improve my responsive web design, HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.",
    url: "http://github.com/chenpoyi/tweeter",
    image:
      "https://raw.githubusercontent.com/chenpoyi/tweeter/master/doc/desktop-view.png",
  },
  {
    name: "TinyApp",
    description:
      "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    url: "https://github.com/chenpoyi/tinyapp",
    image:
      "https://github.com/chenpoyi/tinyapp/blob/master/docs/urls_index.png?raw=true",
  },
  {
    name: "WikiMaps",
    description:
      "WikiMaps is a a midterm project built at Lighthouse Labs in collaboration with Ian Cameron and Will Zak. WikiMap is a single page application where users with accounts can create, edit, and delete maps with no, one, or multiple points that include titles, descriptions, and photos. The application is used to highlight knowledge of: - NodeJS - Express with RESTful routes - Bulma CSS framework - jQuery - SASS CSS preprocessor - PostgreSQL and pg for DBMC - git for version control - Responsive Design",
    url: "https://github.com/willzak/Midterm-WikiMap",
    image:
      "https://camo.githubusercontent.com/ca26d2751b2c9c7db8369eec24cbfae40d3cbff95fc8a651265b74230f09ceed/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f306d4463335a69644a553070466976756f7a2f67697068792e676966",
  },
  {
    name: "Scheduler",
    description:
      "This project is an single-page application that allows users to add, edit and cancel interviews given the time slots and available interviewers. This modern client application is created using the React view library. It communicates with an API server to retrieve and store data. The testing of this project involve unit, integration and end-to-end testing. The purpose of this project was to learn to build and test a React application and is not intended for commercial use.",
    url: "https://github.com/chenpoyi/scheduler",
    image:
      "https://github.com/chenpoyi/scheduler/blob/master/docs/application.png?raw=true",
  },
  {
    name: "HeroQuest Companion App",
    description:
      "An online companion app for the classic board game HeroQuest built as the Final Project at Lighthouse Labs in collaboration with Scott Morton! Allows for character tracking and a space for playing the board game online. Have you ever lost your Hero Quest character sheets? Do you want to play HeroQuest online with your friends? Jump in and join the fun but beware of the monsters lurking in the dungons!!!!",
    url: "https://github.com/chenpoyi/final-heroquest",
    image:
      "https://github.com/chenpoyi/final-heroquest/blob/master/documents/New_Character.gif?raw=true",
  },
];

const skills = [
  { name: "Node.js", level: 5 },
  { name: "Node.js", level: 4 },
  { name: "Node.js", level: 3 },
  { name: "Node.js", level: 2 },
];
$(document).ready(function () {
  renderSkills(skills);
  renderProjects(projects);
});

const renderSkills = function (skills) {
  $("#skills-container").empty();

  for (let skill of skills) {
    console.log("HELLO");
    const $skill = createSkillElement(skill);
    console.log($skill);
    $("#skills-container").prepend($skill); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
};

const createSkillElement = function (skill) {
  const name = skill.name;
  const level = skill.level;
  let stars = ``;
  for (let i = 0; i < level; i++) {
    stars += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="hsla(349, 75%, 33%, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`;
  }
  for (let i = 0; i < 5 - level; i++) {
    stars += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="hsla(349, 75%, 33%, 1)" class="bi bi-star" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>`;
  }
  const template = `
        <li class ='skill'>
        <span>${name}</span>
        <span class='star-list'>${stars}</span>
        </li>
  `;

  return template;
};

const renderProjects = function (projects) {
  $("#projects-container").empty();

  for (let project of projects) {
    console.log("HELLO");
    const $project = createProjectElement(project);
    console.log($project);
    $("#projects-container").prepend($project); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
};

const createProjectElement = function (projectObj) {
  const name = projectObj.name;
  const description = projectObj.description;
  const image = projectObj.image;
  const url = projectObj.url;
  const template = `
        <div class="card project-card" style="width: 18rem">
          <img src="${image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              ${description}
            </p>
            <a href= "${url}" class="btn btn-primary" target="_blank">See Repo</a>
          </div>
        </div>
  `;

  return template;
};
