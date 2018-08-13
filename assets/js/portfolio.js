$(document).ready(function() {
  //Global variable to hold prpject info:

  var projects = [
    {
      title: "Divas Game",
      description:
        "A hang-man style game written in JavaScript in which users guess the names of female music sensations.",
      highlights:
        "Written completely in JavaScript, the game includes a message board and YouTube video rewards.",
      deployed: "https://pckearney25.github.io/Divas-Game/",
      repo: "https://github.com/pckearney25/Divas-Game",
      imgSrc: "./assets/images/diva.jpg"
    },
    {
      title: "Triva Game",
      description:
        "Users must answer questions on the topic of 'World Cities' in this bar-style trivia game.",
      highlights:
        "JavaScript and the use of JS-timers to present the questions in a slide-show fashion.",
      deployed: "https://pckearney25.github.io/TriviaGame/",
      repo: " https://github.com/pckearney25/TriviaGame.",
      imgSrc: "./assets/images/Kyoto.jpg"
    },
    {
      title: "Handling Burgers and ORMs",
      description:
        "A full-stack app using a MySQL database that allows users to track food they would like to eat and have eaten.",
      highlights:
        "Use of Node, MySQL, Express, Express-Handlebars, and a custom-coded ORM.",
      deployed: "https://fast-hollows-97257.herokuapp.com/",
      repo: "https://github.com/pckearney25/Burger",
      imgSrc: "./assets/images/burger.jpeg"
    },
    {
      title: "Helping Hands (Team Project 2.)",
      description:
        "A full-stack app to connect local volunteers and organizations. Coded with Crystal Hughes and Steven Bender.",
      highlights: "Use of Node, MySQL, Sequelize, and Express",
      deployed: "https://fast-hollows-97257.herokuapp.com/",
      repo: "Hell No! This needs to be rewritten next week.",
      imgSrc: "./assets/images/volunteers.jpg"
    },
    {
      title: "Video Jukebox (Team Project 1.)",
      description:
        "Team project with Kiley Adams. Enter lyrics, seearch videos, create a video playlist.",
      highlights:
        "MusixMatch and YouTube APIs, Firebase database, Dynamic element rendering via JQuery.",
      deployed: "http://project-1-jukebox.herokuapp.com/",
      repo: "https://github.com/pckearney25/Project-1-Video-JukeBox",
      imgSrc: "./assets/images/jukebox.jpg"
    },
    {
      title: "NYT Scrubber MERN Full-Stack App",
      description: "Project Using React, Express, Node, and MongoDB ",
      highlights:
        "Deployment to Heroku, splicing of saved articles from search results.",
      deployed: "https://pck-ntyscrubber-mern-app.herokuapp.com/",
      repo: "https://github.com/pckearney25/NYT_MERN_App",
      imgSrc: "./assets/images/nytimes.jpg"
    },
    {
      title: "Esquire Scraper",
      description:
        "A full-stack app for reviewing and commenting on scraped data from Esquire.",
      highlights:
        "Incorporation of a Mongodb Database, Express-Handlebars for page rendering, and the Cheerio package for website scraping.",
      deployed: "https://pck-mongo-esquire-scrapper.herokuapp.com/",
      repo: "https://github.com/pckearney25/Esquire-Mongo-Scraper",
      imgSrc: "./assets/images/mensfashion.jpg"
    },
    {
      title: 'React and ES6: A "Welcome to West World!"-themed click-game.',
      description: "A game app constructed using the React JavaScript library.",
      highlights: "My first program written with React.",
      deployed: " https://pckearney25.github.io/Welcome-to-West-World/",
      repo: "https://github.com/pckearney25/Welcome-to-West-World",
      imgSrc: "./assets/images/desert.jpg"
    },
    {
      title: "Bee-Z Street.",
      description:
        "A full-stack MERN app to help everyday people create native plant gardens.",
      highlights:
        "React, React-Materialize, Mongo Databases, Passport Authentication.",
      deployed: "https://bee-z-street.herokuapp.com/",
      repo: "https://github.com/pckearney25/Bee-Z_Street",
      imgSrc: "./assets/images/home-bee4.jpg"
    }
  ];

  projects.forEach(drawProject);

  function drawProject(project) {
    var projContainer = $(".projects-container");

    var projectRow = $("<div>").addClass(
      "row justify-content-center project-row"
    );

    var imgDiv = $("<div>").addClass(
      "col-xs-6 col-sm-3 justify-content-center project-image-div"
    );

    var projectImg = $("<img>")
      .addClass("img-fluid")
      .attr("src", project.imgSrc)
      .attr("alt", "Proj Image");

    imgDiv.append(projectImg);

    var projInfoDiv = $("<div>").addClass(
      "col-xs-6 col-sm-7 project-content-div"
    );

    var titleDiv = $("<div>").html("<b>Title: </b>" + project.title);
    var descriptionDiv = $("<div>").html(
      "<b>Description: </b>" + project.description
    );
    var highlightDiv = $("<div>").html(
      "<b>Highlights: </b>" + project.highlights
    );

    var deployDiv = $("<div>").html("<b>Deployed: </b>");
    var deployLink = $("<a>")
      .addClass("portfolio-link")
      .attr("href", project.deployed)
      .text(project.deployed);
    deployDiv.append(deployLink);

    var repoDiv = $("<div>").html("<b>Code Repo: </b>");
    var repoLink = $("<a>")
      .addClass("portfolio-link")
      .attr("href", project.repo)
      .text(project.repo);
    repoDiv.append(repoLink);

    projInfoDiv.append(
      titleDiv,
      descriptionDiv,
      highlightDiv,
      deployDiv,
      repoDiv
    );

    projectRow.append(imgDiv, projInfoDiv);
    projContainer.prepend(projectRow);
  }

  window.onscroll = function() {
    stickyHeader();
  };

  // Get the header
  var header = document.getElementById("page-header");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyHeader() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var headerHeight = $("#page-header").height() + 30;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - headerHeight
        },
        800
      );
    }
  });

  drawProjects();
});
