# HomeCucine
A Web Application for Home Cucine

##Overview 
This is the repository cotaining the project for Home Cucine. 
Home Cucine was committed on 15 September 2015. The first beta version will be relased in 1th November 2015, then, after 15 days of tests from all the involved parts it will be officially relased on 15th November 2015. 
These dates could be a arbitrarily anticipate by the developer. 
This application is composed by two main parts: client side and server side.
Client side is the website visibile to all users, while server side handle's user request and returns html pages from client side, 
and manage all the business logic of the apllication (content managment, users management, file ulpading, session management etc.).
There is also another client-side part that is a graphical user interface to Server Side's application for allowing management by non developers. 

##Technology Stack 
The client side application is deployed as a standard website, using HTML5, CSS3 and Javascript. 
Some of the relased files are pre-processed using Jade and SCSS3 to help maintinability and development. The client side development is 
supported by a task automator software called gulp. You can navigate the gulpfile to check the tasks. 
Server side application and api is written in Node.js, using industry-standard frameworks such as Express.js
The database used in MongoDB (for fastness with Node.js), and static files are server from Amazon S3. 

##Status of work
Now the project has been set-up, and the user interface for the admin was written in html 

##Status of this document. 
5-10-2015
To keep this document public, some code about reserved business logic is kept private and obscured from this repository. 
In this repository you can navigate the project structure and the framework used. 
