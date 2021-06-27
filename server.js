let express = require("express"); 
let app     = express();
let path    = require("path");


const logger=(req,res,next)=>{
  let date = new Date()
  let day = date.getDay()
  let hour = date.getHours()
  console.log(day) 
  console.log(hour) 
  if (hour < 9 || hour > 16 ||  day < 1  ||day > 5) {
          res.send('Application is only available during working hours Monday to Friday,  from 9 to 17')
  }
          next();
}

app.use(logger)

app.use(express.static(__dirname + '/public'));

app.get('/index',(req,res)=>{
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/contact',(req,res)=>{
  res.sendFile(path.join(__dirname+'/contact.html'));
});

app.get('/services',(req,res)=>{
  res.redirect(path.join(__dirname + '/services.html'));
});

app.listen(3000);

console.log("Running at Port 3000");