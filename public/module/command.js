class commandControler{

    constructor() {
        this.commandfile            ;
        this.command                ;
        this.fileMutex      = false ;
        this.processMutex   = true  ;
    }

    disable(){
        Cube.back1_clockwise = false;
        Cube.back2_clockwise = false;
        Cube.back3_clockwise = false;
        Cube.left1_clockwise = false;
        Cube.left2_clockwise = false;
        Cube.left3_clockwise = false;
        Cube.down1_clockwise = false;
        Cube.down2_clockwise = false;
        Cube.down3_clockwise = false;
        Cube.front1_clockwise = false;
        Cube.front2_clockwise = false;
        Cube.front3_clockwise = false;
        Cube.right1_clockwise = false;
        Cube.right2_clockwise = false;
        Cube.right3_clockwise = false;
        Cube.up1_clockwise = false;
        Cube.up2_clockwise = false;
        Cube.up3_clockwise = false;

        Cube.back1_Counterclockwise = false;
        Cube.back2_Counterclockwise = false;
        Cube.back3_Counterclockwise = false;
        Cube.left1_Counterclockwise = false;
        Cube.left2_Counterclockwise = false;
        Cube.left3_Counterclockwise = false;
        Cube.down1_Counterclockwise = false;
        Cube.down2_Counterclockwise = false;
        Cube.down3_Counterclockwise = false;
        Cube.front1_Counterclockwise = false;
        Cube.front2_Counterclockwise = false;
        Cube.front3_Counterclockwise = false;
        Cube.right1_Counterclockwise = false;
        Cube.right2_Counterclockwise = false;
        Cube.right3_Counterclockwise = false;
        Cube.up1_Counterclockwise = false;
        Cube.up2_Counterclockwise = false;
        Cube.up3_Counterclockwise = false;

        Cube.up_right = false;
        Cube.up_left = false;
        Cube.up_back = false;
        Cube.up_front = false;
        Cube.up_fix_right = false;
        Cube.up_fix_left = false;
    }

    read(){
        Command.commandfile = [];
        Command.commandfile = loadStrings("/public/command.txt", function(){
            console.log(Command.commandfile.length);
            if (Command.commandfile.length == 1) {
                // print_color();
                Command.processMutex = false;
                // noLoop();
            } else if (Command.commandfile.length != 0 && Command.commandfile.length != 1){
                Command.command = Command.commandfile[0];
                Command.processMutex = false;
                console.log("Read command: " + String(Command.command));
                Command.enable(Command.command);
            }
        });
    }

    clear(){
        this.command = "";
        delete_command();
        this.disable();
    }

    enable(commandstr){
        console.log(commandstr);
        if (commandstr == "back1_clockwise") {
            Cube.back1_clockwise = true;

        } else if (commandstr == "back2_clockwise") {
            Cube.back2_clockwise = true;
        } else if (commandstr == "back3_clockwise") {
            Cube.back3_clockwise = true;
        } else if (commandstr == "left1_clockwise") {
            Cube.left1_clockwise = true;
        } else if (commandstr == "left2_clockwise") {
            Cube.left2_clockwise = true;
        } else if (commandstr == "left3_clockwise") {
            Cube.left3_clockwise = true;
        } else if (commandstr == "down1_clockwise") {
            Cube.down1_clockwise = true;
        } else if (commandstr == "down2_clockwise") {
            Cube.down2_clockwise = true;
        } else if (commandstr == "down3_clockwise") {
            Cube.down3_clockwise = true;
        } else if (commandstr == "front1_clockwise") {
            Cube.front1_clockwise = true;
        } else if (commandstr == "front2_clockwise") {
            Cube.front2_clockwise = true;
        } else if (commandstr == "front3_clockwise") {
            Cube.front3_clockwise = true;
        } else if (commandstr == "right1_clockwise") {
            Cube.right1_clockwise = true;
        } else if (commandstr == "right2_clockwise") {
            Cube.right2_clockwise = true;
        } else if (commandstr == "right3_clockwise") {
            Cube.right3_clockwise = true;
        } else if (commandstr == "up1_clockwise") {
            Cube.up1_clockwise = true;
        } else if (commandstr == "up2_clockwise") {
            Cube.up2_clockwise = true;
        } else if (commandstr == "up3_clockwise") {
            Cube.up3_clockwise = true;
        } else if (commandstr == "back1_Counterclockwise") {
            Cube.back1_Counterclockwise = true;
        } else if (commandstr == "back2_Counterclockwise") {
            Cube.back2_Counterclockwise = true;
        } else if (commandstr == "back3_Counterclockwise") {
            Cube.back3_Counterclockwise = true;
        } else if (commandstr == "left1_Counterclockwise") {
            Cube.left1_Counterclockwise = true;
        } else if (commandstr == "left2_Counterclockwise") {
            Cube.left2_Counterclockwise = true;
        } else if (commandstr == "left3_Counterclockwise") {
            Cube.left3_Counterclockwise = true;
        } else if (commandstr == "down1_Counterclockwise") {
            Cube.down1_Counterclockwise = true;
        } else if (commandstr == "down2_Counterclockwise") {
            Cube.down2_Counterclockwise = true;
        } else if (commandstr == "down3_Counterclockwise") {
            Cube.down3_Counterclockwise = true;
        } else if (commandstr == "front1_Counterclockwise") {
            Cube.front1_Counterclockwise = true;
        } else if (commandstr == "front2_Counterclockwise") {
            Cube.front2_Counterclockwise = true;
        } else if (commandstr == "front3_Counterclockwise") {
            Cube.front3_Counterclockwise = true;
        } else if (commandstr == "right1_Counterclockwise") {
            Cube.right1_Counterclockwise = true;
        } else if (commandstr == "right2_Counterclockwise") {
            Cube.right2_Counterclockwise = true;
        } else if (commandstr == "right3_Counterclockwise") {
            Cube.right3_Counterclockwise = true;
        } else if (commandstr == "up1_Counterclockwise") {
            Cube.up1_Counterclockwise = true;
        } else if (commandstr == "up2_Counterclockwise") {
            Cube.up2_Counterclockwise = true;
        } else if (commandstr == "up3_Counterclockwise") {
            Cube.up3_Counterclockwise = true;
        } else if (commandstr == "up_right") {
            Cube.up_right = true;
            Cube.front1_clockwise = true;
            Cube.front2_clockwise = true;
            Cube.front3_clockwise = true;
        } else if (commandstr == "up_left") {
            Cube.up_left = true;
            Cube.front1_Counterclockwise = true;
            Cube.front2_Counterclockwise = true;
            Cube.front3_Counterclockwise = true;
        } else if (commandstr == "up_back") {
            Cube.up_back = true;
            Cube.left1_clockwise = true;
            Cube.left2_clockwise = true;
            Cube.left3_clockwise = true;
        } else if (commandstr == "up_front") {
            Cube.up_front = true;
            Cube.left1_Counterclockwise = true;
            Cube.left2_Counterclockwise = true;
            Cube.left3_Counterclockwise = true;
        } else if (commandstr == "up_fix_right") {
            Cube.up_fix_right = true;
            Cube.up1_Counterclockwise = true;
            Cube.up2_Counterclockwise = true;
            Cube.up3_Counterclockwise = true;
        } else if (commandstr == "up_fix_left") {
            Cube.up_fix_left = true;
            Cube.up1_clockwise = true;
            Cube.up2_clockwise = true;
            Cube.up3_clockwise = true;
        }
    }
}

function delete_command(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "/clearcommand", true);
    xhttp.send();
}

function print_color() {
    console.log("IN");
    var data = new FormData();
    var xhttp = new XMLHttpRequest();

    for (var m = 0; m < 3; m++) {
        for (var n = 0; n < 3; n++) {
            data.append(Cube.cubebox[n][0][m].up,"nothing");
        }
    }

    for (var m = 0; m < 3; m++) {
        for (var n = 0; n < 3; n++) {
            data.append(Cube.cubebox[0][m][n].left, "nothing");
        }
    }

    for (var m = 0; m < 3; m++) {
        for (var n = 0; n < 3; n++) {
            data.append(Cube.cubebox[n][m][2].front, "nothing");
        }
    }

    for (var m = 0; m < 3; m++) {
        for (var n = 2; n >= 0; n--) {
            data.append(Cube.cubebox[2][m][n].right, "nothing");
        }
    }

    for (var m = 0; m < 3; m++) {
        for (var n = 2; n >= 0; n--) {
            data.append(Cube.cubebox[n][m][0].back, "nothing");
        }
    }

    for (var m = 2; m >= 0; m--) {
        for (var n = 0; n < 3; n++) {
            data.append(Cube.cubebox[n][2][m].down, "nothing");
        }
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("POST", "/printcolor", true);
    xhttp.send(data);
}
