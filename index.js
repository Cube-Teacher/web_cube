const express = require('express')
const bodyParser = require('body-parser')
const multiparty = require('multiparty');
const fs = require('fs');
const { argv } = require('process');
const app = express()
const port = 3000

app.use('/public', express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.get('/initend', (req, res) => {
    res.sendStatus(200);
    console.log("clear init.txt");
    deleteInit();
});

app.get("/clearcommand", (req,res) => {
    res.sendStatus(200);
    console.log("clear command.txt");
    deleteCommand();
});

var end = false;
app.post("/printcolor", (req,res)=>{
    let form = new multiparty.Form();

    if(end==false){
        form.parse(req, function (err, fields, files) {
            Object.keys(fields).forEach(function (name) {
                console.log(name);
                appendCommand(name);
            });
        });
        end = true;
    }

    console.log("here");

    var filename = "./public/" + String(process.argv[2] + ".txt");
    var lines = require('fs').readFileSync(filename, 'utf-8')
        .split('\n')
        .filter(Boolean);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function deleteInit(){
    fs.writeFile("./public/init.txt","",function(err){
        if(err){
            console.log("Error of index.js deleteInit");
        }
    });
}

function deleteCommand() {
    var lines = require('fs').readFileSync('./public/command.txt', 'utf-8')
        .split('\n')
        .filter(Boolean);

    // console.log(lines);

    if (lines.length == 1) {
        emptyCommand();
    } else if(lines.length != 0){
        for (var i = 1; i < lines.length; i++) {
            if (i == 1) {
                emptyCommand();
            }
            appendCommand(lines[i])
        }
    }
}

function emptyCommand() {
    fs.writeFileSync("./public/command.txt", "", function (err) {
        if (err) {
            console.log("Error of clearing command.txt");
        }
    });
}

function appendCommand(a) {
    fs.appendFileSync("./public/command.txt", a, function (err) {
        if (err) {
            console.log("Error of index.js: appendCommnad");
        }
    });
    fs.appendFileSync("./public/command.txt", "\n", function (err) {
        if (err) {
            console.log("Error of index.js: appendCommand");
        }
    });
}

function resultTofile(){
    fs.appendFileSync("./public/0.txt", a, function (err) {
        if (err) {
            console.log("Error of index.js: appendCommnad");
        }
    });
    fs.appendFileSync("./public/0.txt", "\n", function (err) {
        if (err) {
            console.log("Error of index.js: appendCommand");
        }
    });
}