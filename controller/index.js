const express = require('express');
const app = express();
const db = require('../models/db.js');
const controller = require('../controller/index');
const  bodyParser = require('body-parser');
var ObjectId = require("mongodb").ObjectId;
var sess = "y2aquino";

app.use(bodyParser());


const indexFunctions = {

	getAdminPage : function(req,res,next) {
    if(!req.session.user){
      res.redirect("/Login");
    }
    else{
      db.findMany("Reports", {},{},{}, function(reports){
        db.findMany("Announcements", {}, {}, {}, function(result){
        		res.render("AdminPage", {
              title: 'Admin Page',
              announcements : result,
              reports :  reports
            });	
          });
        });
    }
  	},

    postAdminPage : function(req,res,next){

      var id = ObjectId(req.body.id);
      query = {"_id" : id};

      db.deleteOne("Announcements", query);

      res.redirect("/AdminPage");

    },

  	getBanPlayers : function(req,res,next){
      if(!req.session.user){
      res.redirect("/Login");
      }
      else{
        db.findMany("Reports", {}, {}, {}, function(reports){
    		  res.render("BanPlayers", {
          title: 'Ban Players',
          banned : reports
        });
      });
      }
    },

	getLogIn: function(req,res,next) {
		res.render("LogIn", {
     		 title: 'Welcome!'
      });
	},

	getVerify: function(req, res, next) {
		res.render("Verify", {
			title: 'Verify'
		});
	},

	getEditProfile : function(req,res,next) {

    var username = req.session.user.uname;
    var query = {uname : username}


    db.findMany("Announcements", {}, {}, {}, function(result){
    		res.render("EditProfile", {
          title: 'Edit Profile',
          imgsrc : req.session.user.pic,
          editname: req.session.user.name,
          editusername: req.session.user.uname,
          editnintendoid: req.session.user.nintendoid,
          editmains: req.session.user.main,
          editsecondary: req.session.user.secondary,
          name : req.session.user.name,
          username : req.session.user.uname,
          announcement : result
      });
    });
  },

  postEditProfile : function(req,res,next){
      var query = {uname : req.session.user.uname};

      db.updateOne("Users", query, {
        $set : {
          name        : req.body.name,
          uname       : req.body.username,
          nintendoid  : req.body.nintendoID,
          main        : req.body.main,
          secondary   : req.body.secondary,
        }
      });

      var query2 = { postbyName : req.session.user.uname};
      //renames all post to new username
      db.updateMany("Posts", query2, {
        $set : {
          postbyName : req.body.username
        }
      },{ multi : true });


      query2 = { commenter : req.session.user.uname};
      //renames all commenter to new username
      db.updateMany("Comments", query2, {
        $set : {
          commenter : req.body.username
        }
      },{ multi : true });


      query2 = { commentto : req.session.user.uname};
      //renames all commentto to new username
      db.updateMany("Comments", query2, {
        $set : {
          commentto : req.body.username
        }
      },{ multi : true });

      //renames all likes to new username
      db.updateMany("Likes", {liker : req.session.user.uname}, {
        $set : {
          liker : req.body.username
        }
      },{ multi : true });
      //renames all dislikes to new username
      db.updateMany("Dislikes", {disliker : req.session.user.uname}, {
        $set : {
          disliker : req.body.username
        }
      },{ multi : true });

      //renames all notifications to new username
      db.updateMany("Notifications", {notifyTo : req.session.user.uname}, {
        $set : {
          notifyTo : req.body.username
        }
      }, { multi : true});

      //renames all notifications to new username
      db.updateMany("Notifications", {actionby : req.session.user.uname}, {
        $set : {
          actionby : req.body.username
        }
      }, { multi : true});

      //renames all followed to new username
      db.updateMany("Followed", {savetouser : req.session.user.uname},{
        $set : {
          savetouser : req.body.username
        }
      }, {multi : true});

      db.updateMany("Followed", { "post.postbyName" : req.session.user.uname},{
        $set : {
          "post.postbyName" : req.body.username
        }
      }, {multi : true});

      //renames all followed to new username
      db.updateMany("Saved", {savetouser : req.session.user.uname},{
        $set : {
          savetouser : req.body.username
        }
      }, {multi : true});

      db.updateMany("Saved", { "post.postbyName" : req.session.user.uname},{
        $set : {
          "post.postbyName" : req.body.username
        }
      }, {multi : true});

      //renames all reports to new username
      db.updateMany("Reports", {reporter : req.session.user.uname},{
        $set : {
          reporter : req.body.username
        }
      }, {multi : true});

      db.updateMany("Reports", { "post.postbyName" : req.session.user.uname},{
        $set : {
          "post.postbyName" : req.body.username
        }
      }, {multi : true});

      query = {uname : req.body.username}

      if(req.file){
        req.body.postPic = req.file.filename;
        var img = "/images/" + req.body.postPic;

        db.updateOne("Users", query, {
          $set : {
            pic : img
          }
        });

        db.updateMany("Posts", {postbyName : req.body.username}, {
          $set : {
            postusericon : img
          }
        });

        db.updateMany("Saved", { "post.postbyName" : req.session.user.uname},{
        $set : {
          "post.postusericon" : img
        }
        }, {multi : true});

        db.updateMany("Followed", { "post.postbyName" : req.session.user.uname},{
        $set : {
          "post.postusericon" : img
        }
        }, {multi : true});

        db.updateMany("Notifications", { actionby : req.session.user.uname},{
        $set : {
          actionbyIcon : img
        }
        }, {multi : true});

      }



      db.findOne("Users", query, function(result){
        req.session.user = null;
        req.session.user = result;
        req.session.save();
        res.redirect("/Profile/" + req.body.username)
      });


      ;


  },

	getNotifications : function(req,res,next){
    if(!req.session.uname){
        res.redirect("/Login");
    }
    else{
      var username = req.session.user.uname;

      db.findMany("Notifications", {notifyTo : username},{ date : -1, time : -1},{}, function(result){
        db.findMany("Announcements", {}, {}, {}, function(announcements){ 
          res.render("Notification", {
            title: 'Notifications',
            imgsrc : req.session.user.pic,
            name : req.session.user.name,
            username : username,
            announcement : announcements,
            notifs: result
          });
        });
      });
    }
		
	},

	getPostAnnouncement : function(req,res,next) {
    if(!req.session.user){
      res.redirect("/Login");
    }
    else{
  		res.render("PostAnnouncement", {
        title: 'Post Annoucement'
      });
    }
	},

  postAnnouncement  : function(req,res, next) {
    if(req.body.sub != "" && req.body.Subject != ""){
      db.insertOne("Announcements", {
        title : req.body.sub,
        text : req.body.content
      });
      res.redirect("/PostAnnouncement");
    }
    else{
      alert("Fill up announcement form");
    }
  },

	getRegister : function(req,res,next) {
		  res.render("Register", {
      title: 'Register'
    });
		},

	getSavedFollowed : function(req,res,next) {
    if(!req.session.uname){
        res.redirect("/Login");
    }
    else{
      db.findMany("Announcements", {},{},{}, function(announcements){
        db.findMany("Saved", {savetouser : req.session.user.uname}, {},{}, function(saved){
          db.findMany("Followed", {savetouser : req.session.user.uname}, {},{}, function(followed){
        		 res.render("SavedFollowed", {
              title: 'Followed posts',
              name : req.session.user.name,
              username : req.session.user.uname,
              profilePic : req.session.user.pic,
              saved : saved,
              followed : followed,
              announcement : announcements

                });
             });
          });
        });
    }
	},

	

  postRegister : function(req,res) {

    //console.log(req.body);

    var name = req.body.name;
    var username = req.body.username;
    var nintendoid = req.body.id;
    var pw = req.body.pass;
    var email = req.body.email;
    
    var error = "";
    //console.log(req.body.username);

    var query1 = {
      uname : username
    };

    var query2 = {
      email : email
    };

    var password = false;
    var pwmatch = "";
    if(pw != req.body.pass1){
      password = true;
      pwmatch = "Password does not match";
    }

    if(name){
      if(username){
        if(pw){
          if(req.body.pass1){
            if(email){
              //check if already exists
              db.findOne("Users", query1, function (result){
                  if(result == null){
                    db.findOne("Users", query2, function(result2){
                      if(result2 == null){
                                db.insertOne("Users", {
                                name : name,
                                uname : username,
                                nintendoid : nintendoid,
                                password : pw,
                                email : email,
                                pic : "/images/default.png",
                                main : "",
                                secondary : "",
                                status : true
                                  }); 
                                res.redirect("/verify");
                      }
                      else
                        error = error + "\nEmail is taken";
                        //res.redirect("/Register");
                        res.render("Register", {
                          password : password,
                          username: false,
                          email : true,
                          content : req.body,
                          error : error,
                          pwmatch : pwmatch
                        });
                    });
                  }
                  else{
                      db.findOne("Users", query2, function(email){
                        if(email){
                          error = "Username and email are taken";
                          res.render("Register", {
                          password : password,
                          username: true,
                          email : true,
                          content : req.body,
                          error : error,
                          pwmatch : pwmatch
                        });
                        }
                        else{
                          error = "Username is taken";
                          res.render("Register", {
                          password : password,
                          username: true,
                          email : false,
                          content : req.body,
                          error : error,
                          pwmatch : pwmatch
                        });
                        }
                      });
                  }
              });
            }else{
        res.render("Register",{
          error : "Please fill up missing parts",
          content : req.body
        })
      }
        }else{
        res.render("Register",{
          error : "Please fill up missing parts",
          content : req.body
        })
      }
      }else{
        res.render("Register",{
          error : "Please fill up missing parts",
          content : req.body
        })
      }
    }
    else{
        res.render("Register",{
          error : "Please fill up missing parts",
          content : req.body
        })
      }
    }
      else{
        res.render("Register",{
          error : "Please fill up missing parts",
          content : req.body
        })
      }

     },

     postLogIn : function(req,res){
        
        var username = req.body.username;
        var pw = req.body.pass;
        var error = "";
        
        console.log(username);
        console.log(pw);
        if(username == "admin" && pw == "admin"){
          var query2 = {uname : username};
           db.findOne("Users", query2, function (admin){
            req.session.user = admin;
            res.redirect("/AdminPage");
           });
        }
        else{
        var query = {uname : username};

        db.findOne("Users", query, function (result){
          if(result == null){
             error = "Username does not exist.";
             res.render("LogIn", {
                          error : error
                        });
          }
          else{
            if(result.status){
                if(result.password == pw){
                  req.session.uname = username;
                  req.session.user = result;
                  res.redirect("/profile/" + username);
                }
                else{
                  error = "Username and password do not match.";
                  res.render("LogIn", {
                          error : error
                        });
                }
            }
            else{
              error = "You have been banned from the Forum.";
              res.render("LogIn", {
                       error : error
                        });
            }
          };
        });
      }

     },


     getProfile : function(req,res,next){

      if(!req.session.uname){
        res.redirect("/Login");
      }
      else{
      var uname = req.session.user.uname;
      var name = req.params.username;
      var query = {uname : uname};
      var query2 = {uname : name};
      var query3 = {postbyName : name};
      var profile = {};

      db.findOne("Users", query, function(res2){
        if(res2 == null)
            res.redirect("/Login");
        else{
        //console.log("profile" + profile);


            db.findOne('Users', query2, function (result){
              db.findMany("Posts", query3, { postDate : -1, postTime : -1}, {}, function(res3){
              if(result == null)
                res.redirect("/Login");
              else{
                  var passed = false;
                      if(res2.postbyName == req.session.user.uname)
                        passed = true;
                  db.findMany("Announcements", {}, {}, {}, function(announcements){
                      res.render("Profile", {
                      title       : 'Profile',
                      name        : res2.name,
                      profilePic  : res2.pic,
                      username    : res2.uname,
                      userid      : res2.nintendoid,
                      pname        : result.name,
                      pprofilePic  : result.pic,
                      pusername    : result.uname,
                      puserid      : result.nintendoid,

                      pmain : result.main,

                      psecondary  : result.secondary,
                      posts : res3,
                      announcement : announcements,
                      passed : passed
                          });
                      });
                }
            });
            });
        }
      });
    }

  },

  postProfile : function(req,res,next){
        var search = req.body.search;
      res.redirect("/search/" + search);
  },

  getNewsfeed : function (req, res, next) {

    if(!req.session.user){
      res.redirect("/Login");
    }
    else{
      var uname = req.session.user.uname;
      var query = {uname : uname};

      db.findOne('Users', query, function (result){
        var user = true;
      if(result != null){

        var query2 = {};
       // var projection2 = "postname posttitle postcontent postimage postdate";

        db.findMany("Posts", query2, { postDate : -1, postTime : -1}, {}, function(res2){
          db.findMany("Announcements", query2, {}, {}, function(res3){
            res.render("NewsFeed", {
            title: 'Welcome!',
            imgsrc : result.pic,
            name : result.name,
            username : result.uname,
            announcement : res3,
            post : res2,
            user : user
          });
        });
      });

      }
      });
    }
    if(uname == "admin"){
      user = false;
      db.findMany("Posts", {}, {}, {}, function(res2){
          db.findMany("Announcements", {}, {}, {}, function(res3){
            res.render("NewsFeed", {
            title: 'Welcome!',
            imgsrc : "/images/nesshead.png",
            name : "ADMIN",
            username : "admin",
            announcement : res3,
            post : res2,
            user : user 
          });
        });
      });
    }
  },

  postNewsfeed : function(req,res,next){
    var title = req.body.postTitle;
    var content = req.body.content;



    if(req.body.search != null){
        var search = req.body.search;
      res.redirect("/search/" + search);
    }
    else{
      if(req.body.postTitle != ""){
        if(req.body.content != ""){
          console.log("entered post if");
          var d = new Date();
          var date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
          if(d.getMinutes() < 10){
            var time = d.getHours() + ":0" + d.getMinutes();
          }else{
            var time = d.getHours() + ":" + d.getMinutes();
          }
            if(req.file){
              req.body.postPic = req.file.filename;
              var img = "/images/" + req.body.postPic;
              //insert one to posts
              db.insertOne("Posts", {
              postbyName : req.session.user.uname,
              postTitle  : title,
              postusericon : req.session.user.pic,
              content : content,
              image   : [{ img : img}] , 
              nLikes  : 0,
              nDislikes : 0,
              postDate: date,
              postTime : time
              });
            }
            else{
              db.insertOne("Posts", {
              postbyName : req.session.uname,
              postTitle  : title,
              postusericon : req.session.user.pic,
              content : content,
              postDate: date,
              postTime : time
              });

            }

            res.redirect("/Newsfeed");
        
        }
          else{
            res.redirect("/Newsfeed");
          }
        }
        else{
          res.redirect("/Newsfeed");
      }
    }  


    // db.insertOne("Users", {
    //           name : name,
    //           uname : username,
    //           nintendoid : nintendoid,
    //           password : pw,
    //           email : email,
    //           pic : "images/default.jpg",
    //           // main : [{
    //           //   main : "main 1"
    //           // },{
    //           //   main : "main 2"
    //           // }]
    //             }); 
    //           res.redirect("/verify");

  },

  getSearch : function(req,res,next){
    if(!req.session.uname){
      res.redirect("/Login");
    }

    else {
      var uname = req.session.uname;
      var search = '{ "$text" : { "$search" : "' + req.query.search + '" } }';
      search = req.params.search;
      var query = {uname : uname};

      db.findOne('Users', query, function (result){
        console.log(result);
        var query2 = { postTitle : search};
        db.findMany("Posts", query2, {}, {}, function(result2){
          db.findMany("Announcements", {}, {}, {}, function(res3){

              res.render("Search", {
                title       : 'Search Result/s',
                profilePic : result.pic,
                name : result.name,
                username : result.uname,
                posts : result2,
                announcement : res3
            });
            });
         });
     });
    }
  },

  postSearch : function(req,res,next){
        var search = req.body.search;
      res.redirect("/search/" + search);
  },

  getPost : function(req,res,next) {
    if(!req.session.user){
      res.redirect("/Login");
    }
    else{
      var id = ObjectId(req.params.objectid);
      var query = { '_id' : id};
      var commentquery = { postID : id};

      db.findOne("Posts",query, function(result){
        if(result != null){
          db.findMany("Announcements", {}, {}, {}, function(res3){
            db.findMany("Comments", commentquery, {}, {}, function(comments){
                var passed = true;
                var admin = false;
                if(result.postbyName == req.session.user.uname){
                  passed = false;
                }

                if(req.session.user.uname == "admin"){
                  passed = false;
                }

                var like = false;
                var dislike = false;
                var saved = false;
                var followed = false;
                //checks if post is liked
                db.findOne("Likes", {liker : req.session.user.uname, "postid" : ObjectId(req.params.objectid)}, function(likeresult){
                  
                  if(likeresult){
                    like = true;
                  }
                  db.findOne("Dislikes", {disliker : req.session.user.uname, "postid" :  ObjectId(req.params.objectid)}, function(dislikeresult){
                    console.log(dislikeresult)
                    if(dislikeresult){
                      dislike = true;
                    }
                    
                    db.findOne("Saved", { "post._id" :ObjectId(req.params.objectid), savetouser : req.session.user.uname}, function(save){
                      if(save){
                        saved = true;
                      }

                      db.findOne("Followed", { "post._id" :ObjectId(req.params.objectid), savetouser : req.session.user.uname}, function(follow){
                      if(save){
                        followed = true;
                      }

                      res.render("Post", {
                      title: 'Post',
                      name        : req.session.user.name,
                      profilePic : req.session.user.pic,
                      username    : req.session.user.uname,
                      post : result,
                      comment : comments,
                      announcement : res3,
                      passed : passed,
                      admin : admin,
                      like : like,
                      dislike : dislike,
                      saved : save,
                      followed : follow
                         });
                       });
                    });
                });
                  });
                });
             });
        }
        else{
            res.redirect("/Login");
        }
      });

    }
  },

  postPost : function(req,res,next){
    var d = new Date();
    var date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
    if(d.getMinutes() < 10){
            var time = d.getHours() + ":0" + d.getMinutes();
          }else{
            var time = d.getHours() + ":" + d.getMinutes();
          }

    if(req.body.search != null){
        var search = req.body.search;
      res.redirect("/search/" + search);
    }
    else{
        var comment = req.body.comment;
        var commenter = req.body.commenter;
        var commentto = req.body.commentto;
        var d = new Date();
        var date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
        if(d.getMinutes() < 10){
            var time = d.getHours() + ":0" + d.getMinutes();
          }else{
            var time = d.getHours() + ":" + d.getMinutes();
          }
        

        if(req.body.comment != ""){
          db.insertOne("Comments", {
            postID : ObjectId(req.params.objectid),
            comment : comment,
            commenter : commenter,
            commentto : commentto,
            commentDate : date,
            commentTime : time
          })

          db.insertOne("Notifications", {
              notifyTo : commentto,
              postid : ObjectId(req.params.objectid),
              action : "commented on",
              actionby : commenter,
              actionbyIcon : req.session.user.pic,
              date : date,
              time : time
            });
          res.redirect("/Post/" + ObjectId(req.params.objectid));
        }
        else{
          res.redirect("/Post/" + ObjectId(req.params.objectid));
        }
  }
  },

  getEditPost : function(req,res,next) {
  if(!req.session.uname){
    res.redirect("/Login");
  }
  else{
      var id = ObjectId(req.params.postid);
      var query = { "_id" : id}
      var commentquery = { postID : id};

      db.findOne("Posts", query, function(result){
        console.log(result);
        if(result != null){
          db.findMany("Comments", commentquery, {}, {}, function(result2){
            db.findMany("Announcements", {}, {}, {}, function(result3){

              res.render("EditPost",{
                title: 'Edit Post',
                name : req.session.user.name,
                profilePic : req.session.user.pic,
                username    : req.session.user.uname,
                post : result,
                comment : result2,
                announcement : result3
              });

            });
          });
        }
        else{
          res.redirect("/Login");
        }
      });
    }
  },

  postEditPost : function(req,res, next){
    if(!req.session.uname){
        res.redirect("/Login");
      }
      else{
            if(req.body.search != null){
                var search = req.body.search;
              res.redirect("/search/" + search);
            }
            else{
              var id = ObjectId(req.body.id);
              if(req.file){
                  req.body.postPic = req.file.filename;
                  var img = "/images/" + req.body.postPic;
              db.updateOne("Posts", {'_id' : id}, {
                  $set : { postTitle : req.body.postTitle, content   : req.body.newPostContent,
                  image     : [{
                    img : img
                  }]
                   }
                 }
                );
              }
              else{
                  db.updateOne("Posts", {'_id' : id},{
                  $set : {
                  postTitle : req.body.postTitle,
                  content   : req.body.newPostContent}}
                  );
                }

              res.redirect("/post/" + req.body.id);
            }
          }
},

  getDeletePost : function(req,res){
    var id = ObjectId(req.params.id)
    var query = {"_id" : id};
    db.deleteOne("Posts", query);
    res.redirect("/Newsfeed");
  },

  getLogout : function(req, res){
    req.session.destroy();
    res.redirect("/Login");
  },

  getLike : function(req, res){

    var postid = ObjectId(req.params.postid);
    var liker = req.params.liker;
    var query = { postid : postid, liker : liker}
    var query2 = { postid : postid, disliker : liker}
    var d = new Date();
    var date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
    if(d.getMinutes() < 10){
            var time = d.getHours() + ":0" + d.getMinutes();
          }else{
            var time = d.getHours() + ":" + d.getMinutes();
          }

    // db.createCollection("Likes");
    db.findOne("Dislikes", query2, function(result2){
      if(result2){
        console.log("DELETE LIKE");
        db.deleteOne("Dislikes", query2);
        db.updateOne("Posts", { "_id" : postid}, {
          $inc : {
            nDislikes : -1
          }
        });
      }
      db.findOne("Likes", query, function(result){
        if(result){
          console.log("already liked");
        }
        else{
          console.log("like successful");
          db.insertOne("Likes", {
            liker   : liker,
            postid  : postid,
            likeDate : date,
            likeTime : time
          });
          db.updateOne("Posts", { "_id" : postid}, {
          $inc : {
            nLikes : 1
          }
          });

          //create notif 
          db.findOne("Posts", {"_id" : postid}, function(post){
            var postbyName = post.postbyName;
            db.insertOne("Notifications", {
              notifyTo : postbyName,
              postid : postid,
              action : "liked",
              actionby : liker,
              actionbyIcon : req.session.user.pic,
              date : date,
              time : time
            });
          });
        }
      });
    });
    res.redirect("/post/"+postid);
  },

  getDislike : function(req, res){
    var postid = ObjectId(req.params.postid);
    var disliker = req.params.disliker;
    var d = new Date();
    var date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
    if(d.getMinutes() < 10){
            var time = d.getHours() + ":0" + d.getMinutes();
          }else{
            var time = d.getHours() + ":" + d.getMinutes();
          }
    var query = { postid : postid, liker : disliker}
    var query2 = { postid : postid, disliker : disliker}

    



    db.findOne("Likes", query, function(result2){
      if(result2){
        console.log("DELETE LIKE");
        db.deleteOne("Likes", query);
        db.updateOne("Posts", { "_id" : postid}, {
          $inc : {
            nLikes : -1
          }
        });
      }
      db.findOne("Dislikes", query2, function(result){
        if(result){
          console.log("already disliked");
        }
        else{
          console.log("dislike successful");

          db.insertOne("Dislikes", {
            disliker   : disliker,
            postid  : postid,
            dislikeDate : date,
            dislikeTime : time
          });
          db.updateOne("Posts", { "_id" : postid}, {
          $inc : {
            nDislikes : 1
          }
          });

          //create notif 
          db.findOne("Posts", {"_id" : postid}, function(post){
            var postbyName = post.postbyName;

            db.insertOne("Notifications", {
              notifyTo : postbyName,
              postid : postid,
              action : "disliked",
              actionby : disliker,
              actionbyIcon : req.session.user.pic,
              date : date,
              time : time
            });
          });
          }
      });
    });
    res.redirect("/post/"+postid);
    // res.send({
    //   liker : "y2",
    //   postid: "231223452"
    // });
  },

  getSave : function(req,res,next){

    db.findOne("Saved", { "post._id" :ObjectId(req.params.postid) , savetouser : req.params.saveto } , function(result){
      console.log("WHERE DID U GO " + result);
      if(result){
        console.log("entered ifffff");
        db.deleteOne("Saved", { "post._id" :ObjectId(req.params.postid), savetouser : req.params.saveto });
      }
      else{
        console.log("entered else");
        db.findOne("Posts", { "_id" :  ObjectId(req.params.postid)}, function(post){ 
          db.insertOne("Saved", {
            savetouser    : req.params.saveto,
            post : post
            });
          });
        
      }
    });


    res.redirect("/post/"+ req.params.postid);
  },

  getFollow : function(req,res,next){
    db.findOne("Followed", {"post._id" : ObjectId(req.params.postid) , savetouser : req.params.saveto } , function(result){
      if(result){
        db.deleteOne("Followed", { "post._id" :ObjectId(req.params.postid), savetouser : req.params.saveto });
      }
      else{
        db.findOne("Posts", { "_id" :  ObjectId(req.params.postid)}, function(post){ 
          db.insertOne("Followed", {
            savetouser    : req.params.saveto,
            post : post
            });
          });
        
      }
    });


    res.redirect("/post/"+ req.params.postid);
  },

  getReport : function(req,res,next){
    var postid = ObjectId(req.params.postid);
    var reporter = req.session.user.uname;

    db.findOne("Reports", { "post._id" : postid, reporter : reporter}, function(result){
      if(result){
        console.log("alredy reported");
      }
      else{
        db.findOne("Posts", {"_id" : postid}, function(post){
          db.insertOne("Reports", {
            reporter : reporter,
            post : post
          })
        });
      }
      res.redirect("/post/"+ postid);
    });
  },

  getBanUser : function(req,res,next){
    var banuser = req.params.username;
    
    db.updateOne("Users", { uname : banuser}, {
      $set : {
        status : false
      }});
    db.deleteMany("Reports", {"post.postbyName" : banuser});

    res.redirect("/BanPlayers");
  },

  getDeleteReport : function(req,res,next){
    var reportid = ObjectId(req.params.reportid);
    db.deleteOne("Reports", { "post._id" : reportid});

    res.redirect("/BanPlayers");
  }

}

module.exports = indexFunctions;