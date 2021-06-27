let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(__dirname + '/public'));

/* const Logger = (req,res,next) => 
{
        let date = new Date()
        let day = date.getDay()
        let hour = date.getHours()
        
        if (hour < 9 || hour > 16 || day > 5 || day < 1) {
                res.render('error')
        }
                next();
}
app.use(Logger)  */

/* app.use((request, response, next) => {
  let today = new Date();
  console.log(today)
  if (today.getDay() === 0 || today.getDay() === 6) {
    response.end('Application is only available during working hours Monday to Friday,  from 9 to 17');
  } 
  else {
  next();
  
   }
}); */


app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname + '/services.html'));
});

app.listen(5000);

console.log("Running at Port 5000");