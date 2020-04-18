const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;
const https = require('https') ; 

app.set('view engine', 'hbs');

app.get('/', function(req, res) {
	res.render('LogIn', {
      title: 'Welcome!'
      })
});

app.get('/NewsFeed', function(req, res) {
  res.render('NewsFeed', {
      title: 'Welcome!',
      imgsrc : "images/Mario icon.jpg",
      name : "Jose Aquino",
      username : "pacmain",
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ],

      post : [{
        postname: "LorenStarpEACH222",
        posttile : "Mario beats Peach",
        postcontent: "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        postimage: "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
      }]
     })
});

app.get('/AdminPage', function(req, res) {
  res.render("AdminPage", {
      title: 'Admin Page',
      announcements : [
       { 
            subject: "Community Guidelines",
            message: "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind." 
          },
          { 
            subject: "Online Subscription",
            message: "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!" 
          },
          { 
            subject: "Edit Profile",
            message: "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
          }
        ],
        
      reports :  [
          { 
            reporter: "LorenandMario",
            reported: "Y2Daisy",

          },
          { 
            reporter: "VillagerxJhose",
            reported: "Bowser123" 
          },
          { 
            reporter: "PikaChooseMe ",
            reported: "LuigilovesMe" 
          },
          { 
            reporter: "ZeldaLink",
            reported: "YoshiYoshi" 
          }
        ]
      
    });
});

app.get('/BanPlayers', function(req, res) {
  res.render("BanPlayers", {
      title: 'Ban Players',
      banned : [{
        reporter: "LorenandMario",
        reported: "Y2Daisy"},
        {
        reporter: "LorenandMario",
        reported: "SSS"},
        {
        reporter: "LorenandMario",
        reported: "Y2Daisy"}
      ]
    })
});

app.get('/EditProfile', function(req, res) {
  res.render("EditProfile", {
      title: 'Edit Profile',
      imgsrc : "images/Mario icon.jpg",
      editname: 'Jose Aquino',
      editusername: 'pacMain',
      editnintendoid: 'N/A',
      editmains: 'Ness, Mario',
      editsecondary: 'Zero Suit Samus',
      name : "Jose Aquino",
      username : "pacmain",
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]
    });

});

app.get('/LogIn', function(req, res) 
{
  res.render("LogIn", {
      title: 'Log In'
    })
});

app.get('/Notification', function(req, res) {
  res.render("Notification", {
      title: 'Notifications',
      imgsrc : "images/Mario icon.jpg",
      name : "Jose Aquino",
      username : "pacmain",
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ],

     notifs: [{
        notifs: "like",
        action: [
          { 
            usericon : "images/pacmanhead.png",
            user: "PacMain",
            postaction: "liked",
            posttitle: "Best Pac-man highlights!" 
          },
          { 
            usericon : "images/pacmanhead.png",
            user: "PacWoman",
            postaction: "liked",
            posttitle: "Best Pac-man highlights!" 
          }
        ]
      },
      {
        notifs: "comment",
        action: [
          { 
            usericon : "images/pacmanhead.png",
            user: "PacMain",
            postaction: "commented",
            posttitle: "Who is the best Pac-man main?" 
          }
        ]
      }
      ]
    });
});

app.get('/Post', function(req, res) {
  res.render("Post", {
      title: 'Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : {
        postbyName  : "pacmain",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : [{
        commentBy       : "LorenStarpEACH222",
        commentDate     : "03/11/20",
        commentTime     : "12:20AM",
        commentContent  : "This is the comment you've all been waiting for"
      },
      {
        commentBy       : "jHoseNair",
        commentDate     : "03/11/21",
        commentTime     : "12:30AM",
        commentContent  : "This is the comment number 2"
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]


    });
});

app.get('/PostAnnouncement', function(req, res) {
  res.render("PostAnnouncement", {
      title: 'Post Annoucement'
    });
});

app.get('/Profile', function(req, res) 
{
  res.render("Profile", {
      title       : 'Profile',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      userid      : "SW-5131-1129-2320",
      main : [{
        main : "Pac-man"
      },
      {
        main : "Mario"
      }
      ],
      secondary  : [
      {
        secondary : "Zero Suit Samus"
      },
      {
        secondary : "Link"
      }
      ],
      posts : [
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [{
        img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"}]
      },
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [
        ]
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]
    });
});

app.get('/Register', function(req, res) {
  res.render("Register", {
      title: 'Register'
    });
});

app.get('/SavedFollowed', function(req, res) {
  res.render("SavedFollowed", {
      title: 'Followed posts',
      name : "Jose Aquino",
      username : "pacmain2",
      saved : [{
        postbyImg   : "images/nesshead.png",
        postbyName  : "LorensTarPeacH",
        postTitle   : "Looking for Duo!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      },
      {
        postbyImg   : "images/nesshead.png",
        postbyName  : "jhoseZsS",
        postTitle   : "Palutena OP!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      }
      ],

       followed : [{
        postbyImg   : "images/nesshead.png",
        postbyName  : "LorensTarPeacH",
        postTitle   : "Looking for Duo!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      },
      {
        postbyImg   : "images/nesshead.png",
        postbyName  : "jhoseZsS",
        postTitle   : "Palutena OP!",
        postDate    : "May 11, 2019",
        postTime    : "6:59pm"
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]

    });
});

app.get('/Verify', function(req, res) {
  res.render("Verify", {
      title: 'Verify'
    });
});

app.get('/Post2', function(req, res) 
{
  res.render("Post2", 
  {
      title: 'Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : 
      {
        postbyName  : "OtherPerson234",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : 
        [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : 
      [
        {
          commentBy       : "LorenStarpEACH222",
          commentDate     : "03/11/20",
          commentTime     : "12:20AM",
          commentContent  : "This is the comment you've all been waiting for"
        },
        {
          commentBy       : "jHoseNair",
          commentDate     : "03/11/21",
          commentTime     : "12:30AM",
          commentContent  : "This is the comment number 2"
        }
      ],
      announcement : 
      [
        {
          title : "Community Guidelines",
          text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
        },
        {
          title : "Online Subscription",
          text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
        },
        {
          title : "Edit Profile",
          text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
        }
      ]
    });
});

app.get('/EditPost', function(req, res) 
{
  res.render("EditPost", 
  {
      title: 'Edit Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      imgsrc : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : 
      {
        postbyName  : "OtherPerson234",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : 
        [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : 
      [
        {
          commentBy       : "LorenStarpEACH222",
          commentDate     : "03/11/20",
          commentTime     : "12:20AM",
          commentContent  : "This is the comment you've all been waiting for"
        },
        {
          commentBy       : "jHoseNair",
          commentDate     : "03/11/21",
          commentTime     : "12:30AM",
          commentContent  : "This is the comment number 2"
        }
      ],
      announcement : 
      [
        {
          title : "Community Guidelines",
          text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
        },
        {
          title : "Online Subscription",
          text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
        },
        {
          title : "Edit Profile",
          text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
        }
      ]
    });
});

app.get('/Post3', function(req, res) {
  res.render("Post3", {
      title: 'Post',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      post : {
        postbyName  : "pacmain",
        postDate    : "03/10/2020",
        postTime    : "4:20pm",
        postTitle   : "Peach beats Mario",
        postContent : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image       : [{
          img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"
        }]
      },
      comment : [{
        commentBy       : "LorenStarpEACH222",
        commentDate     : "03/11/20",
        commentTime     : "12:20AM",
        commentContent  : "This is the comment you've all been waiting for"
      },
      {
        commentBy       : "jHoseNair",
        commentDate     : "03/11/21",
        commentTime     : "12:30AM",
        commentContent  : "This is the comment number 2"
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]


    });
});

app.get('/Search', function(req, res) 
{
  res.render("Search", {
      title       : 'Search Result/s',
      name        : "Jose III Aquino",
      profilePic  : "images/Mario icon.jpg",
      username    : "pacmain2",
      
      posts : [
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [{
        img : "https://ewedit.files.wordpress.com/2018/06/switch_supersmashbrosultimate_scrn01_e3_bmp_jpgcopy.jpg"}]
      },
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [
        ]
      },
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [
        ]
      },
      {
        opname: "pacmain2",
        title   : "Mario beats Peach",
        content : "In a hot match Mario dethroned Peach from being a top tier. As you can see this match was the most awaited. Mario defeated Peach in a tight match. Mario and Peach were down to their last stock.",
        image   : [
        ]
      }
      ],
      announcement : [{
        title : "Community Guidelines",
        text  : "Good day SSBU Community! We have received an influx of reports of some users displaying bad conduct. We'd like to remind you about our community guidelines! Please take note and be kind."       
      },
      {
        title : "Online Subscription",
        text  : "Good day SSBU Community! We'd like to remind you that online subscription is required for online battles!"       
      },
      {
        title : "Edit Profile",
        text  : "Good day SSBU Community! You may edit in your profile page your favorite SSBU Character! Edit now and share with everyone!" 
      }
      ]
    });
});

app.use(express.static('public'));

app.listen(port,function(){
	console.log('App listening at port ' + port)
})
