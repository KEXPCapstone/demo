# KEXP Shelves

#### John Laws, Monica Cao, Adam Bourn
#### Informatics

### Summary
As the world’s premier listener-supported radio station, 90.3 KEXP-FM enables on-air hosts to provide excellent curated programming for a global community. KEXP’s library of 70,000+ albums is an essential resource and archive of the station’s sonic identity, yet digital media tools have been ineffective at preserving this heritage. 

‘Shelves’ amplifies DJs’ ability to craft creative broadcasts by augmenting the physical music library with tools for searching, organizing, and discovery.  Additionally, custom categorization in the form of user created "shelves" enables a means of folksonomy for the KEXP library.  Shelves is intended to demonstrate some of the possible interactions afforded by KEXP's digital media library which are not yet possible. 

Faced by a musical landscape dominated by algorithmic suggestion, ‘Shelves’ aides KEXP in its mission to preserve “robot-free radio” and places human curation back at the heart of the listener experience.


### Table of Contents 
  - All repos: https://githb.com/KEXPCapstone
  - Shelves API: https://github.com/KEXPCapstone/shelves-server
    - Authentication
    - Session Handling
    - Database drivers
    - Resource path definitions
    - Microservice style architecture for supporting 'library' and 'shelves' interactions.
  - Shelves Frontend: https://github.com/KEXPCapstone/shelves
    - 
  - Demo Page: https://kexpcapstone.github.io/demo/
  
### Technological Decisions

#### Stack
- Angular
- Angular Material
- Go
- Redis
- MongoDB
- Docker
- DigitalOcean

For our frontend, we used Angular for its two way data binding and because we wanted to use Angular Material components.  These components helped us in styling the website in a manner that aligns well with KEXP's design language.

We wrote our web server in Go because of team familiarity with both the language and the Go driver for MongoDB.  

We chose MongoDB for our database because it made the most sense for us to store our data as documents/collections and because of team familiarity.  


### Contact
kexpcapstone@gmail.com

  
