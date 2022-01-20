// ExpressJS server
const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'
let path = require('path')
const cors = require('cors');

// Body Parser Middleware
app.use(express.json());
//parse application/x
app.use(express.urlencoded({ extended: true }))
app.use(cors());
var index = require('./index')
var skills = require('./skills')
var cv = require('./cv')
var contact = require('./contact')


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');

//Load static files in assets directory + css 
app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, '../public')));

//Routing login, register, selectrooms, profile, room
app.use("/", index);
app.use("/index.*", index);
app.use("/cv.*", cv);
app.use("/skills.*", skills);
app.use("/contact.*", contact);


//Lanzamos el servidor de forma asincrona
server = app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});