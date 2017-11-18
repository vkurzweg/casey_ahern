/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

require('dotenv').config();
const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  }
})
const bodyParser = require('body-parser');
const sm = require('sitemap');
const compression = require('compression');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

const sitemap = sm.createSitemap({
  hostname: 'http://alohabrothers.surf',
  cacheTime: 600000,
  urls: [
    { url: '/rates', changefreq: 'monthly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/instructors', changefreq: 'monthly', priority: 0.7 },
    { url: '/instructors-hawaii', changefreq: 'monthly', priority: 0.7 },
    { url: '/gallery', changefreq: 'monthly', priority: 0.7 },
    { url: '/faq', changefreq: 'monthly', priority: 0.8 },
    { url: '/press', changefreq: 'monthly', priority: 0.8 },
  ]
});

app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});



// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

function handleSendMail(req, res){
  console.log('req.body', req.body);


  sendmail({
      from: req.body.email,
      to: 'nickfowler9@gmail.com',
      subject: 'Aloha Brothers Surf Lessons',
      html: '<p>name: ' + req.body.name +'</p>' + '<p>email: ' + req.body.email + '</p>' + '<p>number: ' + req.body.cellNumber +'</p>' + '<p>message: ' + req.body.message + '</p>'
    }, function(err, reply) {
      console.log(reply);
      console.log(err && err.stack);
      if (reply.indexOf('221') >= 0){
        res.status(200).send('Message sent');
      }
      console.dir(reply);
  });
}

function handleCareersContact(req, res){
  console.log('req.body', req.body);


  sendmail({
      from: req.body.email,
      to: 'nickfowler9@gmail.com',
      subject: 'Careers at Aloha Brothers Surf Lessons',
      html: '<p>name: ' + req.body.name +'</p>' + '<p>email: ' + req.body.email + '</p>' + '<p>number: ' + req.body.cellNumber +'</p>' + '<p>message: ' + req.body.message + '</p>'
    }, function(err, reply) {
      console.log(reply)
      console.log(err && err.stack);
      if (reply.indexOf('221') >= 0){
        res.status(200).send('Message sent');
      }
      console.dir(reply);
  });
}

app.use('/contactus', handleSendMail);

app.use('/alohacareers', handleCareersContact);


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});

// Alternate mailer code
// const nodemailer = require('nodemailer');
// const email = require('emailjs');
// const server  = email.server.connect({
//    user:    process.env.AUTH_USER,
//    password:process.env.AUTH_PASS,
//    host:    "smtp.gmail.com",
//    ssl:     true
// });
  // server.send({
  //    text:    req.body.message,
  //    from:    req.body.email,
  //    'reply-to': req.body.email,
  //    to:      "nickfowler9@gmail.com",
  //    subject: "Aloha Brothers Surf Lessons"
  // }, function(err, message) { console.log(err || message); });


//   const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//           user: process.env.AUTH_USER,
//           pass: process.env.AUTH_PASS,
//       }
//     });

//   const mail = {
//     from: req.body.name + '<' + req.body.email + '>',
//     to: process.env.AUTH_USER,
//     subject: 'New Website Message - Aloha Brothers',
//     html: '<p>name: ' + req.body.name +'</p>' + '<p>email: ' + req.body.email + '</p>' + '<p>number: ' + req.body.cellNumber +'</p>' + '<p>message: ' + req.body.message + '</p>'
//   }

//   transporter.sendMail(mail, function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Message sent: " + response.accepted, response.rejected, response.messageId);
//     }
//    transporter.close();
//    res.json({msg: 'Message sent'})
//   });
