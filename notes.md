This is an outline for a workshop I'm planning to teach my friend's younger brother (Ethan) who is interested in learning web development. The goal is to give him a high-level overview of the web development process and introduce him to some of the tools and technologies used in modern web development.

He is a recent highschool grad and has no prior experience with programming. He is interested in AI and music, so we're going to build an simple AI DJ app that can take an idea, story, vibe, or mood and automatically play a song that matches it. We will use vanilla HTML, CSS, and JavaScript to build the app and the Spotify SDK to access the Spotify API.

The workshop will be broken up into three parts:

# Part 1: Intro to HTML, CSS, and JavaScript

1. **HTML:** `Skeleton`
    - Explain the purpose of HTML and how it is used to structure web pages.
    - Describe the role of HTML tags and how they are used to display content on a web page.
    - Demonstrate how to use HTML tags to create a basic web page.

2. **CSS:** `Skin`
    - Explain the purpose of CSS and how it is used to style web pages.
    - Describe the role of CSS selectors and how they are used to style HTML elements.
    - Demonstrate how to use CSS selectors to style a basic web page.

3. **JavaScript:** `Muscle`
    - Explain the purpose of JavaScript and how it is used to add interactivity to web pages.
    - Describe the role of JavaScript functions and how they are used to add functionality to web pages.
    - Demonstrate how to use JavaScript functions to add interactivity to a basic web page.

4. **AI Language Model:** `Brain`
    - Explain the purpose of language models and how they are used to understand human language.
    - Describe the role of language models and how they are used to add intelligence to web pages.
    - Demonstrate how to use language models to add intelligence to a basic web page.

5. **APIs:** `Nervous System`
    - Explain the purpose of APIs and how they are used to access data from external sources.
    - Describe the role of APIs and how they are used to add functionality to web pages.
    - Demonstrate how to use APIs to add functionality to a basic web page.

6. **NPM:** `Grocery Store`
    - Explain the purpose of NPM and how it is used to manage dependencies in a project.
    - Describe the role of NPM and how it is used to add functionality to web pages.
    - Demonstrate how to use NPM to add functionality to a basic web page.

7. **Node Package:** `Food`
    - Explain the purpose of Node packages and how they are used to add functionality to web pages.
    - Describe the role of Node packages and how they are used to add functionality to web pages.
    - Demonstrate how to use Node packages to add functionality to a basic web page.

# Part 2: Setting up Node.js and NPM

1. **Explain the Concept of Package Managers:**
   - Describe what a package manager is and the role it plays in modern web development.
   - Explain how npm can simplify the process of installing, updating, and managing libraries and dependencies in a project.

2. **Initial Setup:**
   - Guide your friend through the installation of Node.js and npm (npm is included with Node.js).
   - Show how to check if npm is installed by running `npm -v` in the terminal.

3. **Creating a Project:**
   - Teach how to initialize a new project with `npm init` and explain the significance of the `package.json` file.
   - Discuss versioning and the importance of specifying version numbers for dependencies.

4. **Installing Packages:**
   - Demonstrate how to install a package using npm, like the Spotify SDK, with `npm install <package-name>`.
   - Explain the difference between local and global installation and the purpose of the `node_modules` folder.
   - Briefly discuss the `package-lock.json` file and its role in ensuring consistent installs.

5. **Using Packages in the Project:**
   - Show how to import and use the installed packages in the project code.
   - Discuss the process of requiring modules in Node.js.

6. **Npm Scripts and Other Features:**
   - Introduce the concept of npm scripts in `package.json` for automating tasks like starting the server or running tests.
   - If relevant, discuss other npm features like updating packages or finding and fixing vulnerabilities.

# Part 3: Building the App

1. **Setting up the Project:**
   - Create a new project directory and initialize it with `npm init`.
   - Install the Spotify SDK with `npm install spotify-web-api-js`.
   - Create an `index.html` file and add a basic HTML structure.
   - Create a `style.css` file and add some basic styles.
   - Create a `script.js` file and add a basic JavaScript structure.

2. **Creating a Spotify App:**
    - Create a new Spotify app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
    - Add `http://localhost:5500` as a redirect URI in the app settings.
    - Copy the Client ID and Client Secret and save them in a `.env` file.
