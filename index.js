const express = require('express');
const app = express();
// const Post = require('./models/post');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const posts = require('./routes/posts')

const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/work', (req, res) => {
    res.render('home', {
        title: 'yay it worked'
    });
});

app.use(express.static('public'));

app.use(posts);

app.listen(3000, () => {
    console.log('Running on port 3000');
});

// app.use((req, res, next) => {
//     console.log(`Got a request: ${req.path}`);
//     next();
// });

// app.post('/', (req, res) => {
//     res.send('That was totally a post request!');
// });

// // vv route vv
// app.get('/', (req, res) => {
//     console.log('In the main route!')
//     // vv route handler vv
//     Post.findOne( {
//         where: {
//             id: 1
//         }
//     })
//         .then((post) => {
//             res.send(`<h1>${post.title}</h1><br><p>${post.content}</p>`);
//         });
// });

// app.get('/tables', (req, res) => {
//     res.send('Here is that hot table you wanted');
// });

// app.get('/scores', (req, res) => {
//     res.send('Whoa HIGH SCORE NICE!!!!')
// });

