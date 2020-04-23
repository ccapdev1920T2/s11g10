const express = require('express');
const router = express();
const controller = require('../controller/index');
const session = require("express-session");
const  bodyParser = require('body-parser');
const multer = require("multer");


router.use(session({secret : 'y2y2y2'}));


router.use(express.static(__dirname + '/public'));

const multerConf = {
  storage : multer.diskStorage({
      destination : function(req, file, next){
      next(null,'/public/images')
      console.log("disk storage done");
    },
      filename : function(req, file, next){
        // console.log(file);
        const ext = file.mimetype.split('/')[1];
        next(null, file.fieldname + '-' + Date.now() + '.' + ext);
        console.log("filename done");
    }
  }),
fileFilter : function(req, file, next){
	if(!file){
		console.log("entered first if");
		next();
	}
	const image = file.mimetype.startsWith('image/');
	if(image){
		console.log("entered 2nd if");
		next(null, true);
	}
	else{
		console.log("entered else");
		next({message : "File type not supported"}, false);
	}
}
}

const { uname } = session;


// var storage = multer.diskStorage({
//       destination : function(req, file, next){
//       next(null,'./public/images')
//     },
//       filename : function(req, file, next){
//         // console.log(file);
//         const ext = file.mimetype.split('/')[1];
//         next(null, file.fieldname + '-' + Date.now() + '.' + ext);
//     }
//   });

// var upload = multer({storage : storage});



router.use(bodyParser());


router.get('/', controller.getLogIn);
router.post('/', controller.postLogIn);

router.get("/Verify", controller.getVerify);

router.get('/Login', controller.getLogIn);
router.post('/Login', controller.postLogIn);

router.get('/register', controller.getRegister);
router.post('/register', controller.postRegister);

//router.get('/profile', controller.getProfile2);
router.get('/profile/:username', controller.getProfile);
router.post('/profile/:username', controller.postProfile);

router.get('/Newsfeed', controller.getNewsfeed);
router.post('/Newsfeed', multer(multerConf).single('postPic'), controller.postNewsfeed);



//router.get('/search', controller.getSearch);
router.get('/search/:search', controller.getSearch);
router.post('/search/:search', controller.postSearch);


router.get('/SavedFollowed', controller.getSavedFollowed);


router.get('/Post', controller.getPost);
router.get('/Post/:objectid', controller.getPost);
router.post('/Post/:objectid', controller.postPost);




// router.get('/Post2', controller.getPost2);
// router.get('/Post3', controller.getPost3);

//router.get('/editpost', controller.getEditPost);
router.get('/editpost/:postid', controller.getEditPost);
router.post('/editpost/:postid', multer(multerConf).single('postPic'), controller.postEditPost);

router.get('/editprofile', controller.getEditProfile);
router.post("/editprofile", multer(multerConf).single('profilePic'), controller.postEditProfile)

router.get('/notification', controller.getNotifications);

router.get('/postannouncement', controller.getPostAnnouncement);
router.post('/postannouncement', controller.postAnnouncement);



router.get('/adminpage', controller.getAdminPage);
router.post('/adminpage', controller.postAdminPage);
router.get('/banplayers', controller.getBanPlayers);



router.get("/getDeletePost/:id", controller.getDeletePost);
router.get("/like/:postid/:liker", controller.getLike);
router.get("/dislike/:postid/:disliker", controller.getDislike);
router.get("/save/:postid/:saveto/:postbyName", controller.getSave);
router.get("/follow/:postid/:saveto/:postbyName", controller.getFollow);
router.get("/report/:postid", controller.getReport);
router.get("/ban/:username", controller.getBanUser);
router.get("/dismiss/:reportid", controller.getDeleteReport);

router.get("/getLogout", controller.getLogout);

module.exports = router;