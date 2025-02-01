const contents = [
  {
    name: "INTERNET TECHNOLOGIES LAB",
    url: "/courses/internetlab",
    topics: [
      {
        name: "Resume with HTML tags",
        url: "/courses/internetlab/resume"
      },
      {
        name: "College Website",
        url: "/courses/internetlab/college"
      },
      {
        name: "Home Town Page",
        url: "/courses/internetlab/town"
      },
      {
        name: "JavaScript Date",
        url: "/courses/internetlab/javascript"
      },
      {
        name: "Calculator",
        url: "/courses/internetlab/calculator"
      },
      {
        name: "XML file for students",
        url: "/courses/internetlab/xml"
      },
      {
        name: "DTD",
        url: "/courses/internetlab/dtd"
      },
      {
        name: "Node.js Date",
        url: "/courses/internetlab/nodejs"
      },
      {
        name: "Login Authentication",
        url: "/courses/internetlab/authentication"
      },
      {
        name: "Practice",
        url: "/courses/internetlab/practice"
      }
    ]
  }
];
const contentNav = {
  "/courses/internetlab": {
    "name": "INTERNET TECHNOLOGIES LAB",
    "url": "/courses/internetlab",
    "previous": "/courses/internetlab",
    "next": "/courses/internetlab/resume"
  },
  "/courses/internetlab/resume": {
    "name": "Resume with HTML tags",
    "url": "/courses/internetlab/resume",
    "previous": "/courses/internetlab",
    "next": "/courses/internetlab/college"
  },
  "/courses/internetlab/college": {
    "name": "College Website",
    "url": "/courses/internetlab/college",
    "previous": "/courses/internetlab/resume",
    "next": "/courses/internetlab/town"
  },
  "/courses/internetlab/town": {
    "name": "Home Town Page",
    "url": "/courses/internetlab/town",
    "previous": "/courses/internetlab/college",
    "next": "/courses/internetlab/javascript"
  },
  "/courses/internetlab/javascript": {
    "name": "JavaScript Date",
    "url": "/courses/internetlab/javascript",
    "previous": "/courses/internetlab/town",
    "next": "/courses/internetlab/calculator"
  },
  "/courses/internetlab/calculator": {
    "name": "Calculator",
    "url": "/courses/internetlab/calculator",
    "previous": "/courses/internetlab/javascript",
    "next": "/courses/internetlab/xml"
  },
  "/courses/internetlab/xml": {
    "name": "XML file for students",
    "url": "/courses/internetlab/xml",
    "previous": "/courses/internetlab/calculator",
    "next": "/courses/internetlab/dtd"
  },
  "/courses/internetlab/dtd": {
    "name": "DTD",
    "url": "/courses/internetlab/dtd",
    "previous": "/courses/internetlab/xml",
    "next": "/courses/internetlab/nodejs"
  },
  "/courses/internetlab/nodejs": {
    "name": "Node.js Date",
    "url": "/courses/internetlab/nodejs",
    "previous": "/courses/internetlab/dtd",
    "next": "/courses/internetlab/authentication"
  },
  "/courses/internetlab/authentication": {
    "name": "Login Authentication",
    "url": "/courses/internetlab/authentication",
    "previous": "/courses/internetlab/nodejs",
    "next": "/courses/internetlab/authentication"
  },
  "/courses/internetlab/practice": {
    "name": "Practice",
    "url": "/courses/internetlab/practice",
    "previous": "/courses/internetlab/authentication",
    "next": "/courses/internetlab/practice"
  }
};
export {
  contents as a,
  contentNav as c
};
