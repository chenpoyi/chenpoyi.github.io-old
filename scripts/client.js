const projects = [
  { name: "Tweeter", description: "This is a Twitter clone." },
  { name: "Tweeter", description: "This is a Twitter clone." },
  { name: "Tweeter", description: "This is a Twitter clone." },
  { name: "Tweeter", description: "This is a Twitter clone." },
  { name: "Tweeter", description: "This is a Twitter clone." }
];

$(document).ready(function () {
  //Toggle new tweet button
  $("button").click(function (event) {
    $(".projects-container").slideDown();
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".projects-container").offset().top,
      },
      750
    );
  });

  $(".projects-container").hide();

  renderProjects(projects);
});

const renderProjects = function (projects) {
  $(".projects-container").empty();

  for (let project of projects) {
    console.log("HELLO")
    const $project = createProjectElement(project);
    console.log($project)
    $(".projects-container").prepend($project); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
};

const createProjectElement = function (projectObj) {
  const name = projectObj.name;
  const description = projectObj.description;
  const image = projectObj.image;
  const template = `
        <div class="card project-card" style="width: 18rem">
          <img src="${image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              ${description}
            </p>
            <a href="#" class="btn btn-primary">See Repo</a>
          </div>
        </div>
  `;

  return template;

};
