const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use('/public', express.static(__dirname+"/public"));

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