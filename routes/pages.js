const express= require('express');
const authController = require('../controllers/auth');

const router = express.Router();

  
router.get('/profile',authController.isLoggedIn,(req, res, next) => {
    if(req.user == undefined) {
      res.render('login');
      }
});

router.get('/profile2',authController.isLoggedIn2,(req, res, next) => {
  if(req.user == undefined) {
    res.render('login2');
    }
});

router.get('/admin', authController.isLoggedIn3, (req, res) => {
  if(req.user == undefined) {
    res.render('login3');
  }

});

router.get('/login', authController.isLoggedIn, (req, res) => {
   if(req.user == undefined) {
     res.render('login');
   }
});

router.get('/login2', authController.isLoggedIn2, (req, res) => {
  if(req.user == undefined) {
    res.render('login2');
  }
});

router.get('/login3', authController.isLoggedIn3, (req, res) => {
  if(req.user == undefined) {
    res.render('login3');
  }
});

router.get('/index', (req,res) => {
    res.render('index');
});





module.exports = router;