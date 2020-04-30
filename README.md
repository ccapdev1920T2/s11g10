# Super Smash Bros Forum - GROUP 10
The Super Smash Bros Ultimate has garnered massive attention from the Nintendo fans since the game’s release date in December of 2018. With the growing population of Nintendo Switch users, the SSBU (Super Smash Bros Ultimate) fanbase has increased indefinitely. This web application is created for the SSBU gaming community which allows users to interact with one another and share their personal techniques, ideas, and tips to other gamers. 

## Prerequisites

## Start up
To run the server, open up the command prompt and navigate through the folder where the files are contained. To create the node modules, use the command 

            npm install --save

js file app_data.js using the command

            node add_data.js
This will create the database and populate it with a few users, posts and announcements

Next, run the js file app.js to start the servers using the command

            node app.js
Lastly, on your browser (the members use Google Chrome), enter the url

            localhost:3000
## Web App - USER
Once the server is runnIng, it will be available at localhost:3000. This will then bring you to the login page which allows you to login or register as a new user
To Login, enter any of the credentials below:
| username | password |
| --- | --- |
| y2aquino | a |
| yenwich | a |
| yoki | a |
| jhosemighuel | a |

Once logged in, it will bring you to your profile where you can see all you posts. You will also see a header with buttons that allow you to search for posts, go back to your profile, go to the newsfeed, see your notifications, see your Saved and Followed posts, Edit profile and Log out. From this page, you can now explore the web app and interact with other users.
### Create Post
For a user to create a post, you must provide a title and the text. Adding an image is optional and will only support png and jpeg files. A user is also allowed to edit a post and change the image as well. 

### Like, Dislike, Save, Follow and Report Post
Users are capable of commenting, liking and disliking posts of all users. When a user does any of these, a notification is sent to the owner of the post. They are also allowed to save and follow posts. This will show up in the Saved and Followed page of the user.

## Web App - ADMIN
To login as admin, enter the following credentials:
| username | password |
| --- | --- |
| admin | admin |

This will log you in to the admin account. An admin account keeps track of the posts, users, reports, and announcements. 

### Post Announcements
As an admin, you can post announcements that can be seen on the newsfeed of the registered members. 

### Ban Users
They can also delete posts, view reports, and ban users. There is a set of guidelines that an admin must follow when banning users. Terms and conditions being checked to determine whether the user is a candidate for being banned.

## Authors
- ANYAYAHAN, Loren Rae
- AQUINO, Jose III
- DE ASIS, Jhose Mhiguel
