const http = require('http');
const { PORT = 8000 } = process.env;
// new
const hostName = "localhost"

const fs = require('fs');
const url = require('url');
const path = require('path');

// mime type
const mime = require("mime-types");

const public_dir = path.join(__dirname, '../public/');
console.log(public_dir);

const onRequest = (req, res) => {
  let parsedURL = url.parse(req.url, true);

  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  console.log(path, 'path');
  switch (path) {
    case "":
      path = "index.html";
      break;
    case "cars":
      path = "cars.html";
      break;
}

console.log(`Requested path ${path} `);

let file = public_dir + path;
fs.readFile(file, function (err, content) {
  if (err) {
    console.log(`File Not Fount ${file}`);
    res.writeHead(404);
    res.end();
  }

  else {
    console.log(`Returning ${path}`);
    res.setHeader("X-Content-Type-Options", "nosniff");
    let type = mime.lookup(path);
    res.writeHead(200, { "Content-type": type });
    res.end(content);
  }
});
};
http.createServer(onRequest).listen(PORT, () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
});

// function getHTML(htmlFileName) {
//   const htmlFilePath = path.join(public_dir, htmlFileName);
//   return fs.readFileSync(htmlFilePath, 'utf-8')
// }

// function onRequest(req, res) {
//   switch (req.url) {
//     case "/":
//       res.writeHead(200)
//       res.end(getHTML("index.html"))
//       return;
//     case "/cars":
//       res.writeHead(200)
//       res.end(getHTML("cars.html"))
//       return;
//   }

//   console.log(req.url);
//   let path = public_dir + req.url;
//   fs.readFile(path, (err, data) => {
//     if (path.includes(".svg")) {
//       res.writeHead(200, {"content-type": "image/svg+xml"});
//     } 
    
//     else if (path.includes("\.css$")) {
//       res.writeHead(200, {"content-type": "text/css"});
//     } 

//     else if (path.includes("\.png$")) {
//       res.writeHead(200, {"content-type": "image/png+xml"});
//     } 
    
//     else {
//       res.writeHead(200);
//     } 
//     res.end(data);
//   });
// }

// const server = http.createServer(onRequest);

// // Jalankan server
// server.listen(PORT, 'localhost', () => {
//   console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
// })








// http.createServer((req, res) => {
//   if (req.url === "/") {
//     let htmlPath = public_dir + "/index.html";
//     fs.readFile(htmlPath, "UTF-8", function (err, html) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(html);
//     });

//   } 
  
//   else if (req.url === "/cars") {
//     let htmlPath = public_dir + "/cars.html";
//     fs.readFile(htmlPath, "UTF-8", function (err, html) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(html);
//   });
// }
  
//   else if (req.url.match("\.css$")) {
//     let cssPath = path.join(__dirname, 'public', req.url);
//     let fileStream = fs.createReadStream(cssPath, 'UTF-8');
//     res.writeHead(200, { "Content-Type": "text/css" });
//     fileStream.pipe(res);
//   } 
  
//   else if (req.url.match("\.png$")) {
//     let pngPath = path.join(public_dir, req.url);
//     let fileStream = fs.createReadStream(pngPath, 'UTF-8');
//     res.writeHead(200, { "Content-Type": "image/png" });
//     fileStream.pipe(res);
//   } 
  
//   else if (req.url.match("\.jpeg$")) {
//     let jpegPath = path.join(public_dir, req.url);
//     let fileStream = fs.createReadStream(jpegPath, 'UTF-8');
//     res.writeHead(200, { "Content-Type": "image/jpeg" });
//     fileStream.pipe(res);
//   } 
  
//   else if (req.url.match("\.js$")) {
//     let jsPath = path.join(public_dir, req.url);
//     let fileStream = fs.createReadStream(jsPath, 'UTF-8');
//     res.writeHead(200, { "Content-Type": "text/javascript" });
//     fileStream.pipe(res);
//   } 
  
//   else {
//     let htmlPath = public_dir + "/404.html";
//     res.writeHead(404)
//     res.end(getHTML("404.html"))
//     fs.readFile(htmlPath, "UTF-8", function (err, html) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.end(html);
//   })

//   }
//  }).listen(PORT, 'localhost', () => {
//   console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
// })



