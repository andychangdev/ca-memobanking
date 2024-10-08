<h1 align="center"> Memobanking </h1>

<p align="center">
  <a href="#💡-purpose">Purpose</a> •
  <a href="#⚙️-functionality">Functionality</a> •
  <a href="#🎯-target-audience">Target Audience</a> •
  <a href="#️🏛️-application-architecture-design">App Architecture Design</a> •
  <a href="#📡-dataflow-diagram">Dataflow Diagram</a> •
  <a href="#🎨-wireframes">Wireframes</a> •
  <a href="#📚-tech-stack">Tech Stack</a> •
  <a href="#📝-project-development-log">Project Development Log</a> •
  <a href="#💎-application-testing">Application Testing</a> •
</p>

## 📍 Links

<h3 align="center"><a href="https://memobanking.netlify.app/">🌐 Live Website</a>
</h3>

<h3 align="center"><a href="https://github.com/andychangdev/ca-memobanking">📦 Github Repo</a></h3>

## 🚀 Purpose

In today's fast-paced, digitalised world, mental health has become more crucial than ever. Young people, in particular, are facing unprecedented levels of stress, anxiety, and depression. The pressures of social media, academic demands, and societal expectations have contributed to a growing mental health crisis among the youth. 

By providing a structured way to track and understand emotions, Memobanking aims to be a proactive platform in addressing these issues. It encourages self-awareness and emotional regulation, key components in maintaining mental health and preventing the escalation of mental illnesses. Whether for personal growth or mental health management, Memobanking offers users valuable tools to navigate and understand one’s emotional landscape.  Through personalised insights and the ability to share experiences, Memobanking not only aids individual users but also fosters a broader conversation about mental health, promoting understanding and support within the community.

## ⚙️ Functionality

1. **Emotion Logging**
    
    Users can log their emotions by selecting from categories like Joy, Anger, Sadness, Fear, and Disgust. They have the option to write a brief note or reason for their emotion.

2. **Emotion History Log**
    
    Users can reflect back on their past emotion entries through a history log. Their emotion enteries can be categorised and filtered by date and emotion type for easy tracking and analysis.

3. **Graphical Data Visualisation**
    
    Users can track their emotional trends over time using graphs, identifying patterns and fluctuations.

4. **User Profiles**

    Users can choose to share their emotion history log and graphs publicly. They have options to control over what information is shared, such as hiding or showing reasons behind their emotions.
 

## 🎯 Target Audience

1. **Individuals with Mental Health Concerns**

    People dealing with anxiety, depression, or other mental health issues would find the app valuable for understanding their emotion patterns and indentifying potential triggers. 

2. **Therapy Clients**

    People who are already seeing therapists or counselors can use the app to track their progress and share data with their mental health professionals.

2. **Social Media Users**

    People who are active on social media might enjoy the feature that allows them to share their emotional data publicly, adding a personal and reflective aspect to their online presence.

### Personas & User Stories
<img src="./docs/personas/persona_riley.excalidraw.png" width="800">

<img src="./docs/personas/persona_mum.excalidraw.png" width="800">

<img src="./docs/personas/persona_sadness.excalidraw.png" width="800">


**Revision**
21-07-2024: 

- As a user, I want to create an account, so I can save my emotion entries and customise my experience on the platform.
- As a user, I want to log in to my account, so I can access my emotion entries and features.





## 🏛️ Application Architecture Design

<img src="./docs/diagrams/app_architecture.excalidraw.png" width="1280">


## 📡 Dataflow Diagram

<img src="./docs/diagrams/app_dataflow.excalidraw.png" width="1280">

## 🎨 Wireframes

**Brainstorm:**

<img src="./docs/brainstorm.excalidraw.png" width="1280">

**Logo Design:**

<img src="./docs/logo.excalidraw.svg" width="300">

**Sitemap:**

<img src="./docs/wireframes/sitemap.excalidraw.png" width="1280">

**Homepage:**

<img src="./docs/wireframes/home_page.excalidraw.png" width="1280">

**Sign Up Page:**

<img src="./docs/wireframes/signup_page.excalidraw.png" width="1280">

**Login Up Page:**

<img src="./docs/wireframes/login_page.excalidraw.png" width="1280">

**External Pages: About/Contact**

<img src="./docs/wireframes/external_pages.excalidraw.png" width="1280">

**User Profile Page:**

<img src="./docs/wireframes/user_profile.excalidraw.png" width="1280">

**Emotion Modal Menu:**

<img src="./docs/wireframes/emotion_modal.excalidraw.png" width="1280">

**Entries Modal Menu:**

<img src="./docs/wireframes/entries_modal.excalidraw.png" width="1280">

**Account Modal Menu:**

<img src="./docs/wireframes/account_modal.excalidraw.png" width="1280">

## 📚 Tech Stack

### **Frontend:**

| Services | Description |
| ------- | ----------- |
| [React](https://www.npmjs.com/package/react) | React is a powerful and widely adopted JavaScript library for building user interfaces. In this application, it used to create reusable UI components that can be easily integrated into application, improving efficiency and flexibility throughout the development process. |
| [React Router DOM](https://www.npmjs.com/package/react-router-dom) |  React Router DOM is flexible routing library for React apps. It allows developers to define routes and manage navigation within the app. In this application, React Router DOM was used to handle page routing, allowing users to navigate seamlessly across different pages within the application without reloading the entire page.
| [React Icons](https://www.npmjs.com/package/react-icons) | React Icons is a library that provides a collection of customisable icons for use in React applications. In this application, React Icons was used for certain buttons across the user interface to simplify development process |
| [Axios](https://www.npmjs.com/package/axios) | Axios is a promise-based HTTP client for making requests to remote servers. In this application, Axios was used to perform HTTP requests to fetch and send data between the frontend and backend API. |
| [Date-fns](https://www.npmjs.com/package/date-fns) | Date-fns is a date utility library that provides simple functions for manipulating JavaScript dates in browser and Node.js. In this application, Date-fns was used to format the date of emotion entries. |
| [Chart.js](https://www.npmjs.com/package/chart.js?activeTab=readme) | Chart.js is a Javascript library for data visualization which supports various types of graphs. In this application, Chart.js was used to display user's emotion entry data to increase user engagement and insight. By visualizing emotion trends and distributions, users can better understand their emotional patterns, which enhances their experience and encourages reflective practices|



### **Backend:**

| Services | Description |
| ------- | ----------- |
| [Node.js](https://www.npmjs.com/package/node) | Node.js is runtime environment for executing sever-side code and manage operations using JavaScript outside the browser. In this application, Node.js was used to write server-side logic, scripts, and install a wide range of libraries through npm, improving efficiency and flexibility throughout the development process.cumbersome compared to traditional backend technologies.|
| [Express.js](https://www.npmjs.com/package/express) | Express.js is a web application framework for Node.js that simplifies the process of building RESTful API services. In this application, Express.js was used to set up the server, define route handlers, manage routing, and handle middleware. |
| [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) | MongoDB Atlas is a database service that provides a scalable and cloud-based MongoDB database. It allows developers to create applications that can store, query and manage data in a non-relational (noSQL) format. In this application,  MongoDB Atlas was used to handle large volumes of data, performing operations such as create, read, update, and delete (CRUD) on NoSQL documents. It is connected to Mongoose in the application's backend to enable efficient interaction with the MongoDB Atlas database.|
| [Mongoose](https://www.npmjs.com/package/mongoose) | Mongoose is an Object Data Modeling (ODM) tool designed to interact with MongoDB databases using Javascript. It simplifies data validation, querying, and relationships between data models without the need to write raw NoSQL queries. In this application, Mongoose was used to define schemas and models to structure and manage data in MongoDB. Furthermore, Mongoose queries were used to within the application's routes to query for user and emotion documents and create CRUD operations.
| [Dotenv](https://www.npmjs.com/package/dotenv) | Dotenv provides a way to manage environment variables in a Node.js application. This library allows developers to keep sensitive data, such as JWT keys and database credentials, secure and organised. In this application, Dotenv was used to load environment variables for connecting to the MongoDB database and for creating and verifying JWT tokens, ensuring that sensitive information was not exposed in the codebase.
| [Cors](https://www.npmjs.com/package/cors) | CORS is a security feature implemented in web browsers to control cross-origin requests which help prevent unauthorised access to resources. In this application, CORS was configured to allow cross-origin requests from anywhere without restrictions. While this approach is less secure, it allowed me to focus on the application's development and functionality without being constrained by cross-origin issues.|
| [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) | JSON Web Tokens allows developers to add JSON Web Token (JWT) based authentication and authorisation to their application. JWT based authentication means it follows the RFC 7519 standard, which is an internet standard that defines a secure method for transmitting data between a client and a server using JSON format tokens. In this application, JWTs are used to authorize users during login and authenticate them before performing certain CRUD operations.
| [BcryptJS](https://www.npmjs.com/package/bcryptjsn) | BcryptJS allows developers to use Bcrypt hashing algorithm to securely store passwords in their database. Bcrypt is a popular cryptographic algorithm designed to hash passwords by converting them into a string of characters that are highly resistant to various password-cracking techniques, such as brute force, rainbow table, and dictionary attacks. It is available in many programming languages and frameworks. In this application, the Javascript version of Bcrypt was used to hash and salt the user's password during registration. This makes the application more secure and protected against unauthorised access to user accounts. |


## 📝 Project Development Log

In this project, I have opted to use a Kanban workflow as my method of planning and tracking the development of my application. Each column represents a different phase of development. Cards flow from one column to the next as they progress towards completion. The workflow involves the following phases: Backlog, To-Do, In-Progress, Review and Completed.

### Part A

<details>
<summary>04-07-2024</summary>

**Trello Kanban:**
<img src="./docs/kanban/part_a/04-07-2024.jpeg" width="1280">

**Checklist: Generate Project Idea**

<img src="./docs/checklists/part_a/generate_project_idea.png" width="500">

**Checklist: Write Project Documentation**

<img src="./docs/checklists/part_a/write_project_documentation.png" width="500">

**Checklist: Design Application UX/UI Design**

<img src="./docs/checklists/part_a/design_uxui_design.png" width="500">
</details>


<details>
<summary>05-07-2024</summary>

**Trello Kanban:**
<img src="./docs/kanban/part_a/05-07-2024.jpeg" width="1280">

**Checklist: Write Project Documentation**

<img src="./docs/checklists/part_a/write_project_documentation_v2.png" width="500">
</details>


<details>
<summary>07-07-2024</summary>

**Trello Kanban:**
<img src="./docs/kanban/part_a/07-07-2024.png" width="1280">
</details>


<details>
<summary>15-07-2024</summary>

**Trello Kanban:**
<img src="./docs/kanban/part_a/15-07-2024.jpeg" width="1280">
</details>

<details>
<summary>21-07-2024</summary>

**Trello Kanban:**
<img src="./docs/kanban/part_a/21-07-2024.jpeg" width="1280">
</details>

### Part B

<details>
<summary>26-07-2024</summary>

**Trello Kanban:**
<img src="./docs/kanban/part_b/26-07-2024.jpeg" width="1280">

</details>


<details>
<summary>27-07-2024</summary>

**Trello Kanban:**
<img src="./docs/kanban/part_b/27-07-2024.jpeg" width="1280">

**Checklist: Setup Frontend**

<img src="./docs/checklists/part_b/setup_frontend.png" width="500">

**Checklist: Create App Homepage**

<img src="./docs/checklists/part_b/create_app_homepage.png" width="500">
</details>


<details>
<summary>28-07-2024</summary>

### Summary of Changes: 
- Setup Frontend [Completed]
- Create App Homepage [2/3]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/8d9630caed72bc7ea6ee85a7081fa9eea887298d">⛙ Github Merge Pull #1: feature/static-site</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/28-07-2024.jpeg" width="1280">

**Checklist: Create User Authentication UI**

<img src="./docs/checklists/part_b/create_user_authentication_ui.png" width="500">

**Checklist: App Homepage**

<img src="./docs/checklists/part_b/create_app_homepage_v2.png" width="500">
</details>



<details>
<summary>01-08-2024</summary>

### Summary of Changes:
- Create User Authentication UI [2/3]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/192ae47d742f83ebbcc1766c2b92ff98cee98621">⛙ Github Merge Pull #2: feature/auth-ui</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/01-08-2024.jpeg" width="1280">

**Checklist: Setup Backend**

<img src="./docs/checklists/part_b/setup_backend.png" width="500">

**Checklist: Create User Authentication UI**

<img src="./docs/checklists/part_b/create_user_authentication_ui_v2.png" width="500">

### Summary of Changes:
- Setup Backend [Completed]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/07e10691562add17ff733c366ce810704d901658">⛙ Github Merge Pull #3: feature/auth-backend</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/01-08-2024_v2.jpeg" width="1280">


**Checklist: Create User Authentication**

<img src="./docs/checklists/part_b/create_user_authentication.png" width="500">

**Checklist: Create User Module Checklist**

<img src="./docs/checklists/part_b/create_users_module.png" width="500">

</details>


<details>
<summary>02-08-2024</summary>

### Summary of Changes:
- Create User User Module [1/2]
- Create User Authentication [4/4]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/07e10691562add17ff733c366ce810704d901658">⛙ Github Merge Pull #3: feature/auth-backend</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/02-08-2024.jpeg" width="1280">

</details>

<details>
<summary>03-08-2024</summary>

### Summary of Changes:
- Create User Authentication UI [Completed]]
- Create User Authentication [Completed]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/bf8fbb021be3b4c2e47d5bcd69a5e0977c880cbd">⛙ Github Merge Pull #4: feature/signup-frontend</a>
- <a href="https://github.com/andychangdev/ca-memobanking/commit/eae7905a2f1832ec3acb44505d06b6bc00c56f45">⛙ Github Merge Pull #5: feature/login-frontend</a>
- <a href="https://github.com/andychangdev/ca-memobanking/commit/591f06bae405d071564cab0263a56008a10453db">⛙ Github Merge Pull #6: feature/auth-api-integration</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/03-08-2024.jpeg" width="1280">

</details>

<details>
<summary>04-08-2024</summary>

### Summary of Changes:
- Create User Module [Completed] (Create get user data route and integration)
- <a href="https://github.com/andychangdev/ca-memobanking/commit/aa8c245ccb30672637289c3711377411af0521f2">⛙ Github Merge Pull #7: feature/app-routing</a>
- <a href="https://github.com/andychangdev/ca-memobanking/commit/229d8d651445a70757939d9d03d757cc67ed416e">⛙ Github Merge Pull #8: feature/dashboard-frontend</a>
- <a href="https://github.com/andychangdev/ca-memobanking/commit/0ba0e18515f0cc8abdfd6802486fa3468eae4b64">⛙ Github Merge Pull #9: feature/dashboard-backend</a>
- <a href="https://github.com/andychangdev/ca-memobanking/commit/c62c22cfb3f5b79b19f773d9ee22484b89310ed2">⛙ Github Merge Pull #10: feature/dashboard-api-integration</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/04-08-2024.jpeg" width="1280">

</details>

<details>
<summary>05-08-2024</summary>

### Summary of Changes:
- Create App Homepage[Completed] (Populate app with content)
- <a href="https://github.com/andychangdev/ca-memobanking/commit/d33d47b29c32d11088b861a761eca0cc6ae3be2a">⛙ Github Merge Pull #11: feature/populate-content</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/05-08-2024.jpeg" width="1280">

</details>

<details>
<summary>06-08-2024</summary>

### Summary of Changes:
- Create Emotion Module [5/5]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/fdc79fd9211734a8c1e4a31a4851f0cdc81f3792">⛙ Github Merge Pull #12: feature/emotion-entry-backend</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/06-08-2024.jpeg" width="1280">

<img src="./docs/kanban/part_b/06-08-2024_v2.jpeg" width="1280">

**Checklist: Create Emotion Module**

<img src="./docs/checklists/part_b/create_emotion_module.png" width="500">

</details>

<details>
<summary>07-08-2024</summary>

### Summary of Changes:
- Create User Dashboard
- <a href="https://github.com/andychangdev/ca-memobanking/commit/7b81aa71168c2fa24fb851224c8bdc6d46407b42">⛙ Github Merge Pull #13: feature/get-entries-integration</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/07-08-2024.jpeg" width="1280">

</details>

<details>
<summary>08-08-2024</summary>

### Summary of Changes:
- Create Delete Emotion Feature [Completed]
- Create Add Emotion Feature [Completed]
- Create User Dashboard [Completed]
- Create Emotion Module [Completed]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/23bbe47c7653344911ff49c2543cc05f8c0986ca">⛙ Github Merge Pull #14: feature/add-entry-integration</a>
- <a href="https://github.com/andychangdev/ca-memobanking/commit/e92a155dd2865c176cd4fd70ca9c818e134f7e03">⛙ Github Merge Pull #15: feature/delete-entry-integration</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/08-08-2024.jpeg" width="1280">

<img src="./docs/kanban/part_b/08-08-2024_V2.jpeg" width="1280">

</details>

<details>
<summary>09-08-2024</summary>

### Summary of Changes:
- Deploy Application [Completed]
- Create Graphical Data Visualization [Completed]
- Conduct Application Testing [Completed]
- <a href="https://github.com/andychangdev/ca-memobanking/commit/65581a275ee50fd0550bfe8ce1498c0eadee681a">⛙ Github Merge Pull #16: test/automated-testing-frontend</a>
- <a href="https://github.com/andychangdev/ca-memobanking/commit/415f01c25dd0a4c5a8a2a726413888959e25446d">⛙ Github Merge Pull #17: feature/data-visualization</a>

**Trello Kanban:**
<img src="./docs/kanban/part_b/08-08-2024_V2.jpeg" width="1280">

<img src="./docs/kanban/part_b/09-08-2024.jpeg" width="1280">

<img src="./docs/kanban/part_b/09-08-2024_v2.jpeg" width="1280">

**Checklist: Deploy Application**

<img src="./docs/checklists/part_b/deploy_application.png" width="500">

**Checklist: Conduct Application Testing**

<img src="./docs/checklists/part_b/conduct_application_testing.png" width="500">

</details>

## 💎 Application Testing

### Development Testing

**DevTest.04-08-2024: Auth CRUD Operations**
<img src="./docs//application_testing/DevTest_04-08-2024.png" width="1280">

**DevTest.04-08-2024: User Login and SignUp**
<img src="./docs/application_testing/DevTest_04-08-2023_t2.png" width="1280">

**DevTest.07-08-2024: GET User Data Route**
<img src="./docs/application_testing/DevTest_07_08_2024.png" width="1280">

### Production Testing

**ProdTest.09-08-2024: Emotions CRUD Operations**
<img src="./docs//application_testing/ProdTest_09_08_2024_t1.png" width="1280">

**ProdTest.09-08-2024: Dashboard**
<img src="./docs//application_testing/ProdTest_09_08_2024_t2.png" width="1280">

**ProdTest.09-08-2024: GET Emotion Count Route**
<img src="./docs//application_testing/ProdTest_09_08_2024_t3.png" width="1280">