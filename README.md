# A Techies Blog

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Links](#links-for-app-and-github)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Links for App and GitHub

* [Personal GitHub](https://github.com/labeutler?tab=repositories)
* [GitHub Repository](https://github.com/labeutler/a_techies_blog)
* Deployed[Heroku]() Link

## Description

This is a site that will allow people with tech knowledge to share their knowledge, while enjoying learning from those around them.  You should be able to publish articles, write blog posts or just share your thoughts or oppinions.

This project has really given me some serious challenges.  I was able to utilize my instructor, TA's, tutor and BCS for assistance. I even leaned on a fellow student.  In the end, I finally got the majority of it and I'm thrilled.  

### User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria

```md
GIVEN a CMS-style blog site

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Installation

In order to view the app, please click on the link above, listed in links.


## Usage

### When you open the link, you will be presented with the home screen. If you click on "Home", this is the same page that will present. You can use the other links, Dashboard, Login and Logout as well.

![alt text](/public/css/images/Home.png)


### When you click on Dashboard, you will be prompted to log in.

![alt text](/public/css/images/Login.png)


### If you don't already have an account, you may click on "Sign Up HERE!" Once you have created your username and password, you will be welcomed back and your blogs will still be here.

![alt text](/public/css/images/Signup.png)


### Once logged in, you will be taken to your personal dashboard where you will see your previously added items.

![alt text](/public/css/images/Loggedin.png)


### When you click on a blog title from the home page, you will be taken to the blog where you can read more and add comments.

![alt text](/public/css/images/BlogFromHome.png)


### You can see here that another comment has been added onto the post.

![alt text](/public/css/images/CommentAdded.png)


### If you would like to edit or delete your comment, you can do that by going to your dashboard, then slecting the item you'd like to adjust.

![alt text](/public/css/images/EditDelete.png)


### Once you delete an item, you are directed back to Your Personal Dashboard to see what is left.

![alt text](/public/css/images/DeletedItem.png)



## Credits

* Use of Mini Project for assistance
* [Model-View-Controller paradigm example](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/)
* [Express-Handlebars Link](https://www.npmjs.com/package/express-handlebars)
* [MySQL2 Link](https://www.npmjs.com/package/mysql2)
* [Sequelized Link](https://www.npmjs.com/package/sequelize)
* [dotenv package Link](https://www.npmjs.com/package/dotenv)
* [BCrypt Package Link](https://www.npmjs.com/package/bcrypt)
* [Express-Session Link](https://www.npmjs.com/package/express-session)
* [Connect-Session-Sequelize Link](https://www.npmjs.com/package/connect-session-sequelize)
* [Cookie helper](https://expressjs.com/en/resources/middleware/session.html)
* [Understanding JawsDB](https://devcenter.heroku.com/articles/jawsdb#:~:text=JawsDB%20is%20a%20MySQL%2FMariaDB,for%20use%20with%20your%20application.)
* [Understanding Hooks](https://sequelize.org/docs/v6/other-topics/hooks/)
* [Router Help](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
* [Edit Post in Handlebars](https://stackoverflow.com/questions/71327680/trying-to-update-the-body-of-a-blog-post-using-sequelize-and-handlebars-js)
* [Adding Comment via Handlebars](https://stackoverflow.com/questions/49416853/adding-comment-features-to-blog-using-express-and-handlebars)
* [Handlebar Helpers](https://handlebarsjs.com/guide/builtin-helpers.html#each)

* Chris Baird, Tutor
* Ask BCS
* Instructor and TA's

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

## First Steps

* Open Integrated Terminal and install the following </br>

* Install Express Handlebars </br>
npm install express-handlebars </br>

* Install MySQL2  </br>
npm install --save mysql2 </br>

* Install Sequelize </br>
npm install --save sequelize </br>
npm install --save mysql2 </br>

* Install dotenv </br>
npm install dotenv --save </br>

* Install bcrypt </br>
npm install bcrypt </br>

* Install Express </br>
npm install express-session </br>
'var session = require('express-session')' will be used to call </br>

* Install Connect session sequelize </br>
npm install connect-session-sequelize </br>

## Files Needed to Complete App

* Controller
API's
- user
- post
- comments
- index.js
index.js
dashboar
home-routs
* db
schema.sql
* models
index.js
- post - belongs to what user
- post - has many comments
- comment - belongs to what user
User
- id
- username
- password
Post
- title
- description
Comments
- description
* views (hold the handlebars)
main-handlebars
add-post
signup
login
new-post
edit-post
all-post