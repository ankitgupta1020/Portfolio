const projects = [
  {
    id: 1,
    title: "PG Life",
    live: "https://pglife-gurgaon.netlify.app",
    github: "https://github.com/ankitgupta1020/PGLife",
    img: "assets/projects/pg-life.jpg",
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quia ea libero accusantium molestias voluptatum assumenda exercitationem.",
  },
  {
    id: 2,
    title: "Do you know me",
    live: "https://replit.com/@AnkitGupta55/End-game#index.js?embed=1&output=1",
    github: "https://github.com/ankitgupta1020/Quize-ankit.git",
    img: "assets/projects/do-you-know-me.jpg",
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quia ea libero accusantium molestias voluptatum assumenda exercitationem.",
  },
  {
    id: 3,
    title: "Banana Speak",
    live: "https://ankit1020bananaspeak.netlify.app",
    github: "https://github.com/ankitgupta1020/Banana-speak.git",
    img: "assets/projects/banana-speak.jpg",
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quia ea libero accusantium molestias voluptatum assumenda exercitationem.",
  },
  {
    id: 4,
    title: "Palindrome Birthday",
    live: "https://palindrome-buday.netlify.app",
    github:
      "https://github.com/ankitgupta1020/Is-your-birthday-a-palindrome-.git",
    img: "assets/projects/palindrome-birthday.jpg",
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quia ea libero accusantium molestias voluptatum assumenda exercitationem.",
  },
  {
    id: 5,
    title: "Is your birthday lucky?",
    live: "https://is-it-your-lucky-birthday.netlify.app",
    github: "https://github.com/ankitgupta1020/Is-your-birthday-lucky.git",
    img: "assets/projects/birthday-lucky.jpg",
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate quia ea libero accusantium molestias voluptatum assumenda exercitationem.",
  },
];

const parentElement = document.querySelector(".carousel");

projects.forEach((project) => {
  const { title, live, github, img, techs, description } = project;

  // Create slide container
  const slideContainer = document.createElement("div");
  slideContainer.classList.add(
    "slide",
    "grid",
    "grid-template-columns-2",
    "gap-3"
  );

  // Create project image link
  const imageLink = document.createElement("a");
  imageLink.classList.add("project-img");
  imageLink.href = live;
  imageLink.target = "_blank";
  imageLink.rel = "noopener noreferrer";

  // Create project image
  const image = document.createElement("img");
  image.src = img;
  image.alt = `${title} Image`;

  // Append image to image link
  imageLink.appendChild(image);

  // Create project description container
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");

  // Create project title
  const projectTitle = document.createElement("h4");
  projectTitle.textContent = title;

  // Create project description text
  const projectText = document.createElement("p");
  projectText.classList.add("section-text");
  projectText.textContent = description;

  // Create technology list
  const techList = document.createElement("ul");
  techList.classList.add("tech-use");

  // Create technology list items
  techs.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.textContent = tech;
    techList.appendChild(techItem);
  });

  // Create project links container
  const projectLinks = document.createElement("div");
  projectLinks.classList.add(
    "project-links",
    "flex",
    "align-items-center",
    "gap-2"
  );

  // Create source code link
  const sourceCodeLink = document.createElement("a");
  sourceCodeLink.classList.add("project-link");
  sourceCodeLink.title = "Source Code";
  sourceCodeLink.href = github;
  sourceCodeLink.target = "_blank";
  sourceCodeLink.rel = "noopener noreferrer";

  // Create source code icon
  const sourceCodeIcon = document.createElement("i");
  sourceCodeIcon.classList.add("fa-brands", "fa-github", "fa-lg");

  // Append source code icon to source code link
  sourceCodeLink.appendChild(sourceCodeIcon);

  // Create live demo link
  const liveDemoLink = document.createElement("a");
  liveDemoLink.classList.add("project-link");
  liveDemoLink.title = "Live Demo";
  liveDemoLink.href = live;
  liveDemoLink.target = "_blank";
  liveDemoLink.rel = "noopener noreferrer";

  // Create live demo icon
  const liveDemoIcon = document.createElement("i");
  liveDemoIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");

  // Append live demo icon to live demo link
  liveDemoLink.appendChild(liveDemoIcon);

  // Append all elements to project links container
  projectLinks.appendChild(sourceCodeLink);
  projectLinks.appendChild(liveDemoLink);

  // Append all elements to project description container
  projectDescription.appendChild(projectTitle);
  projectDescription.appendChild(projectText);
  projectDescription.appendChild(techList);
  projectDescription.appendChild(projectLinks);

  // Append image link and project description container to slide container
  slideContainer.appendChild(imageLink);
  slideContainer.appendChild(projectDescription);

  // Append slide container to desired parent element
  parentElement.appendChild(slideContainer);
});
