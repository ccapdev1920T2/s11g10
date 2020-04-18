# Super Smash Bros Forum - GROUP 10
The Super Smash Bros Forum is a community where players of Super Smash Bro Ultimate can share their thoughts, idea, expriences and queries through posting images.

## Start up
To run the server, open up the command prompt and navigate through the folder where the files are contained. To create the node modules, use the command 

            npm install --save

js file app_data.js using the command

            node add_data.js
This will create the database and populate it with a few users, posts and announcements

Next, run the js file app.js to start the servers using the command

            node app.js
## Web App - USER
Once the server is runnong, it will be available at localhost:3000. This will then bring you to the login page which allows you to login or register as a new user
To Login, enter any of the credentials below:

            username: y2aquino                              username: yenwich
            password: a                                     password: a
            
            username: yoki                                  username: jhosemighuel
            password: a                                     password: a

Once logged in, it will bring you to your profile where you can see all you posts. You will also see a header with buttons that allow you to search for posts, go back to your profile, go to the newsfeed, see your notifications, see your Saved and Followed posts, Edit profile and Log out. From this page, you can now explore the web app and interact with other users.

## Web App - ADMIN
To login as admin, enter the following credentials:

            username: admin
            password: admin
            
This will log you in to the admin account. An admin account keeps track of the posts, users, reports, and announcements. As an admin, you can create and delete posts, view reports, and ban users.

