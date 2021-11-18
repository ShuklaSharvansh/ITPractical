const mysql = require('mysql');
const db = require('../model/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');
const nodemailer = require('nodemailer');

//login 
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
      return res.status(400).render("login", {
        message: 'Please provide email and password'
      });
    }
  
    // 2) Check if user exists && password is correct
    db.start.query('SELECT * FROM student WHERE email = ?', [email], async(error, results) => {
        if(results==0) {
            return res.status(401).render("login", {
            message: 'Email does not exist'
             });
        }
        console.log(results);
        console.log(password);
        const isMatch = await bcrypt.compare(password, results[0].password);
        console.log(isMatch);
        if(!results || !isMatch ) {
         return res.status(401).render("login", {
           message: 'Incorrect email or password'
        });
      } else {
        // 3) If everything ok, send token to client
        const id = results[0].rollno;
        console.log(id);
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
        });
  
        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        };
        res.cookie('jwt', token, cookieOptions);
        res.render('index', {message : 'Login Successful!'});
     }
    });
  };

  exports.login2 = async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
      return res.status(400).render("login2", {
        message: 'Please provide email and password'
      });
    }
  
    // 2) Check if user exists && password is correct
    db.start.query('SELECT * FROM teacher WHERE email = ?', [email], async(error, results) => {
        if(results==0) {
            return res.status(401).render("login2", {
            message: 'Email does not exist'
             });
        }
        console.log(results);
        console.log(password);
        const isMatch = await bcrypt.compare(password, results[0].password);
        console.log(isMatch);
        if(!results || !isMatch ) {
         return res.status(401).render("login2", {
           message: 'Incorrect email or password'
        });
      } else {
        // 3) If everything ok, send token to client
        const id = results[0].id;
        console.log(id);
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
        });
  
        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        };
        res.cookie('jwt', token, cookieOptions);
        res.render('index', {message : 'Login Successful!'});
     }
    });
  };

  exports.login3 = async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
      return res.status(400).render("login3", {
        message: 'Please provide email and password'
      });
    }
  
    // 2) Check if user exists && password is correct
    db.start.query('SELECT * FROM admin WHERE email = ?', [email], async(error, results) => {
        if(results==0) {
            return res.status(401).render("login3", {
            message: 'Email does not exist'
             });
        }
        console.log(results);
        console.log(password);
        const isMatch = await bcrypt.compare(password, results[0].password);
        console.log(isMatch);
        if(!results || !isMatch ) {
         return res.status(401).render("login3", {
           message: 'Incorrect email or password'
        });
      } else {
        // 3) If everything ok, send token to client
        const id = results[0].id;
        console.log(id);
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
        });
  
        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        };
        res.cookie('jwt', token, cookieOptions);
        res.render('index', {message : 'Login Successful!'});
     }
    });
  };
    

//registration by admin
exports.register = (req, res) => {
    
    console.log(req.body);
    const {name, email, password, c_password, rollno, dob} = req.body;

    db.start.query('SELECT email FROM student WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }
        if(!name || !email || !password || !c_password || !dob|| !rollno) {
            return res.status(401).render("admin", {
            message: 'Fill all the fields'
             });
        }
        if(results.length > 0){
            return res.render('admin', {
                message : 'That email is already in use!'
            })
        }
        else if(password !== c_password){
            return res.render('admin', {
                message : 'Passwords do not match!'
            })
        }

        let h_password = await bcrypt.hash(password,8);
        console.log(h_password);

        db.start.query('INSERT INTO student SET ?', {name: name, email: email, password: h_password, rollno: rollno, dob: dob}, (error,results) => {
            if(error){
                console.log(error);
            }
            res.render('admin',{message : 'Registeration Successful'})
        });
    });
};

exports.register2 = (req, res) => {
    
  console.log(req.body);
  const {name, email, password, c_password} = req.body;

  db.start.query('SELECT email FROM teacher WHERE email = ?', [email], async (error, results) => {
      if(error){
          console.log(error);
      }
      if(!name || !email || !password || !c_password) {
          return res.status(401).render("admin", {
          message: 'Fill all the fields'
           });
      }
      if(results.length > 0){
          return res.render('admin', {
              message : 'That email is already in use!'
          })
      }
      else if(password !== c_password){
          return res.render('admin', {
              message : 'Passwords do not match!'
          })
      }

      let h_password = await bcrypt.hash(password,8);
      console.log(h_password);

      db.start.query('INSERT INTO teacher SET ?', {name: name, email: email, password: h_password}, (error,results) => {
          if(error){
              console.log(error);
          }
          const output='<p>You can successfully log into the system with username '+req.body.email+', and password'+req.body.password+'</p>'

                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                      user: 'shukla.sharvansh15@gmail.com', // generated ethereal user
                      pass: '123Sharvansh', // generated ethereal password
                    },
                    tls:{
                        rejectUnauthorized: false
                    }
                  });
                
                  // send mail with defined transport object
                  let info = transporter.sendMail({
                    from: '"Auto confirm " <shukla.sharvansh15@gmail.com>', // sender address
                    to: req.body.email, // list of receivers
                    subject: "Registration Confirmed", // Subject line
                    text: "Hello world?", // plain text body
                    html: output, // html body
                  });

          res.render('admin',{message : 'Registeration Successful'})
      });
  });
};

//logged in check for all types
exports.isLoggedIn = async (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt, 
        process.env.JWT_SECRET
        );

      console.log(decoded);
      
      // 2) Check if user still exists
      db.start.query('SELECT * FROM student WHERE rollno = ?', [decoded.id], (error, result) => {
        console.log(result)
        if(!result) {
          return next();
        }
        // THERE IS A LOGGED IN USER
        //req.user = result[0];
        req.user = result[0];
          db.start.query('SELECT * FROM student WHERE rollno = ?',[decoded.id], (err, row) => {
          if(!err)
          {
            console.log(row);
            req.locals = row[0];
            res.render('profile', {
              user:req.user,
              row})
          }
          else{
            console.log(err);
          }
        });

        return next();
      });
    } catch (err) {
      return next();
    }
  } else {
    next();
  }
};

exports.isLoggedIn2 = async (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded1 = await promisify(jwt.verify)(
        req.cookies.jwt, 
        process.env.JWT_SECRET
        );

      console.log(decoded1);
      
      // 2) Check if user still exists
      db.start.query('SELECT * FROM teacher WHERE id = ?', [decoded1.id], (error, result) => {
        console.log(result)
        if(!result) {
          return next();
        }
        // THERE IS A LOGGED IN USER
        //req.user = result[0];
        req.user = result[0];
          db.start.query('SELECT * FROM student WHERE score > 0', (err, row) => {
          if(!err)
          {
            console.log(row);
            req.locals = row[0];
            res.render('profile2', {
              user:req.user,
              row})
          }
          else{
            console.log(err);
          }
        });

        return next();
      });
    } catch (err) {
      return next();
    }
  } else {
    next();
  }
};

exports.isLoggedIn3 = async (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt, 
        process.env.JWT_SECRET
        );

      console.log(decoded);
      
      // 2) Check if user still exists
      db.start.query('SELECT * FROM admin WHERE id = ?', [decoded.id], (error, result) => {
        console.log(result)
        if(!result) {
          return next();
        }
        // THERE IS A LOGGED IN USER
        //req.user = result[0];
        req.user = result[0];

          db.start.query('SELECT * FROM admin WHERE id = ?',[decoded.id], (err, row) => {
          if(!err)
          {
            //console.log(row);
            req.locals = row[0];
            res.render('admin', {
              user:req.user,
              row})
          }
          else{
            console.log(err);
          }
        });

        return next();
      });
    } catch (err) {
      return next();
    }
  } else {
    next();
  }
};

//logout
exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  //res.status(200).redirect("/index");
  res.render('index',{message : 'Logout Successful'})
};

//teacher editing
exports.deletestudent = (req, res) => 
{  
  console.log(req.body);
  const {name, email} = req.body;

  db.start.query('SELECT email FROM student WHERE email = ?', [email], async (error, results) => {
      if(error){
          console.log(error);
      }
      if(!name || !email ) {
          return res.status(401).render("editStudent", {
          message: 'Fill all the fields'
           });
      }
      if(results.length <= 0){
         alert("Student does not exist");
      }

      db.start.query('DELETE FROM student WHERE email = ?', [email], (error,results) => {
          if(error){
              console.log(error);
          }
                  res.status(201).redirect("/profile2");
      });
  });
};
exports.editstudent = (req, res) => 
{  
  console.log(req.body);
  const {name, email,rollno, dob, score} = req.body;

  db.start.query('SELECT email FROM student WHERE email = ?', [email], async (error, results) => {
      if(error){
          console.log(error);
      }
      if(!name || !email || !rollno || !dob || !score) {
          return res.status(401).render("profile2", {
          message: 'Fill all the fields'
           });
      }
      if(results.length <= 0){
         alert("Student does not exist");
      }
      db.start.query('UPDATE student SET ? WHERE email = ?', [{name: name, rollno : rollno, dob : dob, score: score },email], (error,results) => {
          if(error){
              console.log(error);
          }
                  res.status(201).redirect("/profile2");
      });
  });
};
