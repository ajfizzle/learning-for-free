const resources = [
  {
    topic: "HTML",
    category: "Web front end",
    url: "https://html.com",
    desc: "Step-by-step beginner guide to writing web pages with HTML.",
  },
  {
    topic: "CSS",
    category: "Web front end",
    url: "https://web.dev/learn/css",
    desc: "Google's free CSS course, from the box model to grid and flexbox.",
  },
  {
    topic: "JavaScript",
    category: "Web front end",
    url: "https://javascript.info",
    desc: "The Modern JavaScript Tutorial: in-depth lessons from basics to advanced.",
  },
  {
    topic: "React",
    category: "Web front end",
    url: "https://react.dev/learn",
    desc: "Official React tutorial: components, props, state and hooks.",
  },
  {
    topic: "Vue",
    category: "Web front end",
    url: "https://vuejs.org/tutorial/",
    desc: "Official interactive Vue tutorial you can work through in the browser.",
  },
  {
    topic: "Angular",
    category: "Web front end",
    url: "https://angular.dev/tutorials",
    desc: "Official Angular tutorials, including hands-on guided projects.",
  },
  {
    topic: "Next.js",
    category: "Web front end",
    url: "https://nextjs.org/learn",
    desc: "Vercel's free course that builds a full Next.js app chapter by chapter.",
  },
  {
    topic: "TypeScript",
    category: "Web front end",
    url: "https://www.typescriptlang.org/docs",
    desc: "Official TypeScript docs and handbook for learning the language.",
  },
  {
    topic: "Git",
    category: "Tools",
    url: "https://git-scm.com/book/en/v2",
    desc: "Pro Git, the complete free book on using Git and version control.",
  },
  {
    topic: "Web3",
    category: "Web3 & blockchain",
    url: "https://learnweb3.io",
    desc: "Free learning tracks for building decentralized apps and smart contracts.",
  },
  {
    topic: "Blockchain",
    category: "Web3 & blockchain",
    url: "https://cryptozombies.io",
    desc: "Learn Solidity by building a zombie game, one lesson at a time.",
  },
  {
    topic: "Python",
    category: "Languages",
    url: "https://www.learnpython.org",
    desc: "Free interactive Python tutorial with exercises that run in the browser.",
  },
  {
    topic: "SQL",
    category: "Data",
    url: "https://www.w3schools.com/sql",
    desc: "Beginner SQL lessons with a try-it-yourself editor and exercises.",
  },
  {
    topic: "AI (Basics)",
    category: "AI",
    url: "https://www.elementsofai.com",
    desc: "Free intro to AI for non-experts, from the University of Helsinki.",
  },
  {
    topic: "PHP",
    category: "Languages",
    url: "https://phptherightway.com",
    desc: "Community guide to modern PHP best practices.",
  },
  {
    topic: "API",
    category: "Back end",
    url: "https://rapidapi.com/learn",
    desc: "RapidAPI's hub with guides on finding and using APIs.",
  },
  {
    topic: "Go",
    category: "Languages",
    url: "https://www.learn-golang.org",
    desc: "Free interactive Go tutorial with code you can run on the page.",
  },
  {
    topic: "Rust",
    category: "Languages",
    url: "https://www.rust-lang.org/learn",
    desc: "Official starting point for Rust, including The Rust Book.",
  },
  {
    topic: "Design Patterns",
    category: "Concepts",
    url: "https://refactoring.guru",
    desc: "Clear, illustrated explanations of design patterns and refactoring.",
  },
  {
    topic: "C++",
    category: "Languages",
    url: "https://cplusplus.com/doc/tutorial",
    desc: "Classic C++ language tutorial, from basics to classes and exceptions.",
  },
  {
    topic: "Java",
    category: "Languages",
    url: "https://dev.java/learn/",
    desc: "Oracle's current Java learning site with up-to-date tutorials.",
  },
  {
    topic: "C#",
    category: "Languages",
    url: "https://dotnet.microsoft.com/learn/csharp",
    desc: "Microsoft's free C# courses, tutorials and videos.",
  },
  {
    topic: "Swift",
    category: "Languages",
    url: "https://www.swift.org/getting-started/",
    desc: "Official guide to installing Swift and writing your first programs.",
  },
  {
    topic: "Django",
    category: "Back end",
    url: "https://www.djangoproject.com/start",
    desc: "Official Django starting point: install, tutorial and docs.",
  },
  {
    topic: "Flask",
    category: "Back end",
    url: "https://flask.palletsprojects.com/tutorial",
    desc: "Official Flask tutorial that walks you through building a blog app.",
  },
  {
    topic: "Docker",
    category: "DevOps & cloud",
    url: "https://www.docker.com/get-started",
    desc: "Docker's guides for learning containers from scratch.",
  },
  {
    topic: "Kubernetes",
    category: "DevOps & cloud",
    url: "https://kubernetes.io/docs/tutorials",
    desc: "Official Kubernetes tutorials, from basics to stateful apps.",
  },
  {
    topic: "Linux",
    category: "DevOps & cloud",
    url: "https://labex.io/linuxjourney",
    desc: "Linux Journey: short, friendly lessons on the command line and system basics.",
  },
  {
    topic: "Cybersecurity",
    category: "Security",
    url: "https://tryhackme.com",
    desc: "Hands-on cybersecurity labs and learning paths in your browser.",
  },
  {
    topic: "DevOps",
    category: "DevOps & cloud",
    url: "https://roadmap.sh/devops",
    desc: "Step-by-step roadmap of what to learn to become a DevOps engineer.",
  },
  {
    topic: "Cloud (AWS)",
    category: "DevOps & cloud",
    url: "https://aws.amazon.com/training",
    desc: "AWS's free digital training and certification prep.",
  },
  {
    topic: "Cloud (GCP)",
    category: "DevOps & cloud",
    url: "https://www.skills.google/",
    desc: "Google Skills: free Google Cloud courses, labs and badges.",
  },
  {
    topic: "Cloud (Azure)",
    category: "DevOps & cloud",
    url: "https://learn.microsoft.com/en-us/training/azure/",
    desc: "Microsoft Learn's free Azure learning paths and modules.",
  },
];

const grid = document.getElementById("grid");
const chipsEl = document.getElementById("chips");
const search = document.getElementById("search");
const countEl = document.getElementById("count");
const emptyEl = document.getElementById("empty");

const categories = ["All", ...new Set(resources.map((r) => r.category))];
let activeCategory = "All";

const shortUrl = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

categories.forEach((cat) => {
  const btn = document.createElement("button");
  btn.className = "chip";
  btn.type = "button";
  btn.textContent = cat;
  btn.setAttribute("aria-pressed", cat === activeCategory);
  btn.addEventListener("click", () => {
    activeCategory = cat;
    chipsEl
      .querySelectorAll(".chip")
      .forEach((c) => c.setAttribute("aria-pressed", c.textContent === cat));
    render();
  });
  chipsEl.appendChild(btn);
});

function render() {
  const q = search.value.trim().toLowerCase();
  const list = resources.filter(
    (r) =>
      (activeCategory === "All" || r.category === activeCategory) &&
      (!q ||
        r.topic.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.url.toLowerCase().includes(q)),
  );

  grid.innerHTML = "";
  list.forEach((r) => {
    const li = document.createElement("li");
    li.className = "card";
    const a = document.createElement("a");
    a.href = r.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<span class="cat"></span><span class="topic"></span><span class="desc"></span><span class="url"></span>`;
    a.querySelector(".cat").textContent = r.category;
    a.querySelector(".topic").textContent = r.topic;
    a.querySelector(".desc").textContent = r.desc;
    a.querySelector(".url").textContent = shortUrl(r.url) + " →";
    li.appendChild(a);
    grid.appendChild(li);
  });

  countEl.textContent = `${list.length} of ${resources.length} resources`;
  emptyEl.style.display = list.length ? "none" : "block";
}

search.addEventListener("input", render);
render();
