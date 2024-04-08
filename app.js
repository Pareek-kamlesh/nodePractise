// Creating server

// const http = require('http');

// const server=http.createServer((req, res)=>{
//     if(req.url==='/'){
//         res.end('Welcome to the homepage');
//     }
//     if(req.url==='/about'){
//         res.end('Welcome to the about page');
//     }

//     res.end(`
//     <h1>Oops!!</h1>
//     <p>No such page exists</p>
//     <a href="/">Back to home</a>
//     `);
    
    
// })

// server.listen(5000);

const _= require("lodash")

const items= [1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);