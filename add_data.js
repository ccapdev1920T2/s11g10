// const express = require('express');
// const hbs = require('hbs');
// const path = require("path");
// const app = express();
const db = require('./models/db.js');

// db.createCollection("Posts");
db.createDatabase();

var post = {
	postbyName 	: "yenwich",
	postTitle	: "This is one Post Title",
	postusericon : "/images/default.png",
	content		: "This is the content of the post. I hope this pops up and it is correct.",
	image 		: [{
		img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
	}],
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "10/14/1010",
	postTime : "4:30"
}

db.insertOne("Posts", post);

var post = {
	postbyName 	: "y2aquino",
	postTitle	: "This is one Post Title2",
	postusericon : "/images/default.png",
	content		: "This is the content of the post. I hope this pops up and it is correct.",
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "10/11/1010",
	postTime : "4:30"
}

db.insertOne("Posts", post);

var post = {
	postbyName 	: "yenwich",
	postTitle	: "This is one Post Title3",
	postusericon : "/images/default.png",
	content		: "This is the content of the post. I hope this pops up and it is correct.",
	image 		: [{
		img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
	}],
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "10/12/1010",
	postTime : "4:30"
}

db.insertOne("Posts", post);

var post = {
	postbyName 	: "yenwich",
	postTitle	: "This is one Post Title4",
	postusericon : "/images/default.png",
	content		: "This is the content of the post. I hope this pops up and it is correct.",
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "10/12/1010",
	postTime : "4:30"
}

db.insertOne("Posts", post);


var announcement = {
	title 	: "This is the First announcement",
	text 	: "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."
}; 

db.insertOne("Announcements", announcement)

var announcement = {
	title 	: "This is the Second announcement",
	text 	: "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."
}; 

db.insertOne("Announcements", announcement)

var announcement = {
	title 	: "This is the Third announcement",
	text 	: "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."
}; 

db.insertOne("Announcements", announcement)


var user = {
	name : "y2 Aquino",
	uname : "y2aquino",
	nintendoid : "1223434",
	password : "a",
	email : "qwe@qwe.com",
	pic : "/images/default.png",
	main : "Peach1",
	secondary : "superman1",
	status : true
}

db.insertOne("Users", user);

var user = {
	name : "Yen Anyayahan",
	uname : "yenwich",
	nintendoid : "123456",
	password : "a",
	email : "asdf@asdf.com",
	pic : "/images/default.png",
	main : "Peach12",
	secondary : "superman12",
	status : true
}

db.insertOne("Users", user);

var user = {
	name : "Jhose De Asis",
	uname : "jhosemighuel",
	nintendoid : "12123434",
	password : "a",
	email : "zxc@zxc.com",
	pic : "/images/default.png",
	main : "Peach3",
	secondary : "superman3",
	status : true
}

db.insertOne("Users", user);

var user = {
	name : "Yoki Cuison",
	uname : "yoki",
	nintendoid : "1234534",
	password : "a",
	email : "ewq@zxc.com",
	pic : "/images/default.png",
	main : "Peach3",
	secondary : "superman3",
	status : true
}

db.insertOne("Users", user);
































var user = {
	name : "ADMIN",
	uname : "admin",
	nintendoid : "12123434",
	password : "admin",
	pic : "/images/nesshead.png",
	status : true
}

db.insertOne("Users", user);

