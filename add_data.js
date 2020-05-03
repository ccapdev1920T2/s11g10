// const express = require('express');
// const hbs = require('hbs');
// const path = require("path");
// const app = express();
const db = require('./models/db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// db.createCollection("Posts");
db.createDatabase();


var post = {
	postbyName 	: "yenwich",
	postTitle	: "FOX!!!",
	postusericon : "/images/default.png",
	content		: "This is my new favorite character! Meet Fox!",
	image 		: [{
		img : "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/yifwpaqahlja8s7o8g7m.png"
	}],
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "05/01/2020",
	postTime : "11:30"
}

db.insertOne("Posts", post);


var post = {
	postbyName 	: "y2aquino",
	postTitle	: "SSBU Here I go",
	postusericon : "/images/default.png",
	content		: "Hello SSBU community! I just bought my ssbu game and Im ready to play!",
	image 		: [{
		img : "https://i.pinimg.com/originals/98/9c/68/989c68d5d428b005dda1042025d19539.png"
	}],
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "05/01/2020",
	postTime : "10:30"
}

db.insertOne("Posts", post);


var post = {
	postbyName 	: "jhosemhiguel",
	postTitle	: "FANART",
	postusericon : "/images/default.png",
	content		: "Hello guys check out my ssbu cool fanart!",
	image 		: [{
		img : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f8a1d4d0-66b5-4f4e-8a85-28876063523c/ddh6xcg-f1852415-2081-40ad-aefa-98a0bc3b7128.jpg/v1/fill/w_800,h_600,q_75,strp/ssbu_glasses_by_bellhenge_ddh6xcg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvZjhhMWQ0ZDAtNjZiNS00ZjRlLThhODUtMjg4NzYwNjM1MjNjXC9kZGg2eGNnLWYxODUyNDE1LTIwODEtNDBhZC1hZWZhLTk4YTBiYzNiNzEyOC5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9itmiXZfUCr1ZRUJ3xjvxQhNenBPRXeb8bXUrBfcvzw"
	}],
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "05/02/2020",
	postTime : "12:27"
}

db.insertOne("Posts", post);



var post = {
	postbyName 	: "thefish",
	postTitle	: "Join me",
	postusericon : "/images/default.png",
	content		: "Playing with 7 other pllayers is fun and challenging. Comment if you want to join my game!",
	image 		: [{
		img : "/images/post1.jpg"	
	}],
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "04/30/2020",
	postTime : "12:27"
}

db.insertOne("Posts", post);


var post = {
	postbyName 	: "y2aquino",
	postTitle	: "SSBU IS FUN",
	postusericon : "/images/default.png",
	content		: "I've been playing ssbu for 14 hours straight already and I still can't stop!",
	nLikes  : 0,
    nDislikes : 0,
	postDate		: "04/30/2020",
	postTime : "12:27"
}

db.insertOne("Posts", post);


// var post = {
// 	postbyName 	: "y2aquino",
// 	postTitle	: "This is one Post Title2",
// 	postusericon : "/images/default.png",
// 	content		: "This is the content of the post. I hope this pops up and it is correct.",
// 	nLikes  : 0,
//     nDislikes : 0,
// 	postDate		: "10/11/1010",
// 	postTime : "4:30"
// }

// db.insertOne("Posts", post);

// var post = {
// 	postbyName 	: "yenwich",
// 	postTitle	: "This is one Post Title3",
// 	postusericon : "/images/default.png",
// 	content		: "This is the content of the post. I hope this pops up and it is correct.",
// 	image 		: [{
// 		img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
// 	}],
// 	nLikes  : 0,
//     nDislikes : 0,
// 	postDate		: "10/12/1010",
// 	postTime : "4:30"
// }

// db.insertOne("Posts", post);

// var post = {
// 	postbyName 	: "yenwich",
// 	postTitle	: "This is one Post Title4",
// 	postusericon : "/images/default.png",
// 	content		: "This is the content of the post. I hope this pops up and it is correct.",
// 	nLikes  : 0,
//     nDislikes : 0,
// 	postDate		: "10/12/1010",
// 	postTime : "4:30"
// }

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





//Users

bcrypt.hash("passwordy2", saltRounds, function(err, hash){
	db.insertOne("Users", {
		name : "y2 Aquino",
		uname : "y2aquino",
		nintendoid : "1223434",
		password : hash,
		email : "jose@youtube.com",
		pic : "/images/default.png",
		main : "Peach",
		secondary : "superman",
		status : true
	});
});

bcrypt.hash("passwordyen", saltRounds, function(err, hash){
	db.insertOne("Users", {
		name : "Yen Anyayahan",
		uname : "yenwich",
		nintendoid : "123456",
		password : hash,
		email : "yenwich@twitter.com",
		pic : "/images/default.png",
		main : "Mario",
		secondary : "Pacman",
		status : true
	});
});


bcrypt.hash("passwordjhose", saltRounds, function(err, hash){
		db.insertOne("Users", {
		name : "Jhose De Asis",
		uname : "jhosemhiguel",
		nintendoid : "12123434",
		password : hash,
		email : "jhose@gmail.com",
		pic : "/images/default.png",
		main : "Link",
		secondary : "Zelda",
		status : true
	});
});

bcrypt.hash("passwordmichael", saltRounds, function(err, hash){
		db.insertOne("Users", {
		name : "Michael Scofield",
		uname : "thefish",
		nintendoid : "12123434",
		password : hash,
		email : "michael_fish@yahoo.com",
		pic : "/images/default.png",
		main : "Ness",
		secondary : "Daisy",
		status : true
	});
});


var user = {
	name : "ADMIN",
	uname : "admin",
	nintendoid : "12123434",
	password : "admin",
	pic : "/images/nesshead.png",
	status : true
}

db.insertOne("Users", user);

