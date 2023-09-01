const express = require('express');
const bodyParser = require ('body-parser');
const  { randomBytes } = require ('crypto');

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
res.send (posts);
});


app.post('/posts', (req, res) => {
const id = randomBytes(4).toString('hex');
const  {title} = req.body;
console.log ("{title}",{title});
console.log ("req.body",req.body);

posts[id] = {
    id, title
};

console.log ("posts[id] ",posts[id] );
console.log ("posts",posts);
 

 res.status(201).send(posts[id])

});

app.listen(4001, () => {
    console.log('Listening on port 40001');
})