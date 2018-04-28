export const projects = [
  {
   "title": "Slack Clone",
    "description": "Built the backend and a simplistic web client for a chat application with a microservice architecture.  Developed custom gateway authentication in Go and handled sessions with Redis.  Upgraded authenticated users to a Websocket connection and notified of new messages with RabbitMQ. Microservice for messaging built in Node with data stored in MongoDB. Containerized in Docker and used bash scripts for automated deployment to DigitalOcean.",
    "imageUrl": require('./img/SlackClone.png'),
    "skills": "Go, Docker, Node, Javascript, Redis, MongoDB, DigitalOcean, RabbitMQ, Bash",
    "githubLink": null,
    "otherLink": null 
  },
  {
    "title": "AudioRoam",
    "description": "Developed a music discovery app for Android in a team of four. Allows local artists to “drop” a song at a location, which other users can then listen to upon visiting that location, as well as read information about the song as provided by the artist. Responsible for Firebase integration, overall design, and multiple feature implementations (favorites, uploads, pins, etc).",
    "imageUrl": require('./img/AudioRoam.png'),
    "skills": "Android, Java, Google Maps API",
    "githubLink": "https://github.com/AudioRoam/android",
    "otherLink": null
  },
  {
    "title": "Patient Appointments Manager",
    "description": "Implemented a database using MS SQL Server for a hypothetical hospital appointment manager. Determined all the necessary entities and relationships from a mockup of the UI. Developed stored procedures for transactions involving patients, doctors, new appointments, and error handling. Created thorough documentation, diagrams, and sample reports to detail application functionalities.",
    "imageUrl": require('./img/SQL.png'),
    "skills": "SQL, Documentation, Stored Procedures",
    "githubLink": null,
    "otherLink": null
  },
  {
    "title": "RollCall",
    "description": "Alongside another student, designed high-fidelity mockups of the UI of a mobile application intended to monitor the use of toilet paper and order more when it detects low levels. Responsible for usability testing, prototyping, writing a design specification, and conducting user research. Presented final draft as a video prototype; video voted for best actor and best comedy by other students in the class.",
    "imageUrl": require('./img/RollCall.png'),
    "skills": "Design thinking, user research",
    "githubLink": null,
    "otherLink": "https://docs.google.com/document/d/1UDsyFqyYBmrOsUusS_zI2tOqSbJhlxxE-YjqFHEgMF8/edit?usp=sharing"
  },
  {
    "title": "Fabella",
    "description": "In a team of 4, developed a responsive website dedicated to curating stories of different minority communities in America. Implemented functionality of moderator accounts, posting stories, and multi-page architecture, and aided in website styling using Material Design Lite. Voted best in class by other students.",
    "imageUrl": require('./img/Fabella.png'),
    "skills": "React",
    "githubLink": "https://github.com/andrewjoung/final-project",
    "otherLink": null
  },
  {
    "title": "Twitter Sentiment Analysis",
    "description": "Developed a website which performs a sentiment analysis on any given (English tweeting) twitter user. Website determines the frequency of particular words and hashtags, then references which sentiments corresponds to those words, which is displayed as a percentage representing the percentage of all the words that the user has tweeted that have that sentiment.",
    "imageUrl": require('./img/TwitterSentiment.png'),
    "skills": "Javascript, sentiment analysis",
    "githubLink": null,
    "otherLink": "https://info343-au16.github.io/challenges-abourn/sentiment/"
  },
  {
    "title": "Image Comparison Tool",
    "description": "Developed a program that analyzed each composite pixel of two images, determined a highly specific color value for that pixel, and then compare the similarity of the two images based on which colors were present. Collaborated with another student, providing valuable practice in technical communication and pair programming.",
    "imageUrl": require('./img/ImageComparison.png'),
    "skills": "Java, algorithims",
    "githubLink": null,
    "otherLink": null
  }
]
