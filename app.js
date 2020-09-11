var express = require('express');
var app = express();
var multer = require('multer');
var sqlite3 = require('sqlite3').verbose();
var DB_PATH = '/databases';
const DB = new sqlite3.Database(DB_PATH, function(err){
  if (err) {
      console.log(err)
      return
  }
  console.log('Connected to ' + DB_PATH + ' database.')

// ADD THIS CODE BELOW
  DB.exec('PRAGMA foreign_keys = ON;', function(error)  {
      if (error){
          console.error("Pragma statement didn't work.")
      } else {
          console.log("Foreign Key Enforcement is on.")
      }
  });
});
dbSchema = `CREATE TABLE IF NOT EXISTS Users (
  id integer NOT NULL PRIMARY KEY,
  login text NOT NULL UNIQUE,
  password text NOT NULL,
  email text NOT NULL UNIQUE,
  first_name text,
  last_name text
);`

DB.exec(dbSchema, function(err){
if (err) {
  console.log(err)
}
});

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.sendfile('public/prt17.html');
});

var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(iface.address);
    }
    ++alias;
  });
});
app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("filedata"));
app.post("/upload", function (req, res, next) {
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

app.listen(7777);

console.log('Сервер стартовал!');