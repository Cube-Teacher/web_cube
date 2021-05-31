class boxTemplate{
    constructor(boxLinethickness, sideLinethickness){
        this.up     = "WHITE"   ;
        this.down   = "YELLOW"  ;
        this.right  = "ORANGE"  ;
        this.left   = "RED"     ;
        this.back   = "GREEN"   ;
        this.front  = "BLUE"    ;
        this.len = boxLinethickness/2  ;
        this.lineThickness = sideLinethickness;
    }

    createBox(){

        strokeWeight(this.lineThickness);
        var len = this.len;

        fill(draw_color(this.up));
        

        // TOP
        beginShape();
        vertex(-len, -len, -len);
        vertex(len, -len, -len);
        vertex(len, -len, len);
        vertex(-len, -len, len);
        endShape(CLOSE);

        // // DOWN
        fill(draw_color(this.down));
        beginShape();
        vertex(-len, len, -len);
        vertex(len, len, -len);
        vertex(len, len, len);
        vertex(-len, len, len);
        endShape(CLOSE);

        // 
        fill(draw_color(this.right));
        beginShape();
        vertex(len, -len, -len);
        vertex(len, -len, len);
        vertex(len, len, len);
        vertex(len, len, -len);
        endShape(CLOSE);

        // 
        fill(draw_color(this.left));
        beginShape();
        vertex(-len, -len, -len);
        vertex(-len, -len, len);
        vertex(-len, len, len);
        vertex(-len, len, -len);
        endShape(CLOSE);

        // 
        fill(draw_color(this.back));
        beginShape();
        vertex(len, -len, -len);
        vertex(-len, -len, -len);
        vertex(-len, len, -len);
        vertex(len, len, -len);
        endShape(CLOSE);

        // 
        beginShape();
        fill(draw_color(this.front));
        vertex(len, -len, len);
        vertex(-len, -len, len);
        vertex(-len, len, len);
        vertex(len, len, len);
        endShape(CLOSE);

        strokeWeight(1);
    }
}

class RubikCube{
    constructor(boxLineLength, sideLinethickness) {
        this.cubeLineLength = boxLineLength;
        this.sideLinethickness = sideLinethickness;
        this.tmpcolor;
        
        this.cubebox = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
        this.tmpColorArr = [[], [], [], [], [], [], [], [], []];

        for (var i = 0; i < 9; i++) {
            this.tmpColorArr[i] = new boxTemplate(this.cubeLineLength, this.sideLinethickness);
        }

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 3; k++) {
                    this.cubebox[i][j][k] = new boxTemplate(this.cubeLineLength, this.sideLinethickness);
                }
            }
        }

        this.prebox = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 3; k++) {
                    this.prebox[i][j][k] = new boxTemplate(this.cubeLineLength, this.sideLinethickness);
                }
            }
        }

        this.right1_Counterclockwise = false;
        this.right2_Counterclockwise = false;
        this.right3_Counterclockwise = false;
        this.left1_Counterclockwise  = false;
        this.left2_Counterclockwise  = false;
        this.left3_Counterclockwise  = false;

        this.back1_Counterclockwise  = false;
        this.back2_Counterclockwise  = false;
        this.back3_Counterclockwise  = false;
        this.front1_Counterclockwise = false;
        this.front2_Counterclockwise = false;
        this.front3_Counterclockwise = false;

        this.up1_Counterclockwise    = false;
        this.up2_Counterclockwise    = false;
        this.up3_Counterclockwise    = false;
        this.down1_Counterclockwise  = false;
        this.down2_Counterclockwise  = false;
        this.down3_Counterclockwise  = false;

        this.right1_clockwise = false;
        this.right2_clockwise = false;
        this.right3_clockwise = false;
        this.left1_clockwise  = false;
        this.left2_clockwise  = false;
        this.left3_clockwise  = false;

        this.back1_clockwise  = false;
        this.back2_clockwise  = false;
        this.back3_clockwise  = false;
        this.front1_clockwise = false;
        this.front2_clockwise = false;
        this.front3_clockwise = false;

        this.up1_clockwise    = false;
        this.up2_clockwise    = false;
        this.up3_clockwise    = false;
        this.down1_clockwise  = false;
        this.down2_clockwise  = false;
        this.down3_clockwise  = false;

        this.up_right     = false;
        this.up_left      = false;
        this.up_back      = false;
        this.up_front     = false;
        this.up_fix_right = false;
        this.up_fix_left  = false;

        this.rotateAngle = 0.0;
        this.rotateSpeed = 89.0;
    }

    add_black(){
        for (var i = 0; i < 3; i++) {
            for (var k = 0; k < 2; k++) {
                for (var j = 0; j < 3; j++) {
                    this.cubebox[j][i][k].front     = "BLACK";
                }
            }
            for (var k = 1; k < 3; k++) {
                for (var j = 0; j < 3; j++) {
                    this.cubebox[j][i][k].back      = "BLACK";
                }
            }
            for (var k = 0; k < 2; k++) {
                for (var j = 0; j < 3; j++) {
                    this.cubebox[k][i][j].right     = "BLACK";
                }
            }
            for (var k = 1; k < 3; k++) {
                for (var j = 0; j < 3; j++) {
                    this.cubebox[k][i][j].left      = "BLACK";
                }
            }
            if (i == 0 || i == 1) {
                for (var k = 0; k < 3; k++) {
                    for (var j = 0; j < 3; j++) {
                        this.cubebox[k][i][j].down  = "BLACK";
                    }
                }
            }
            if (i == 1 || i == 2) {
                for (var k = 0; k < 3; k++) {
                    for (var j = 0; j < 3; j++) {
                        this.cubebox[k][i][j].up    = "BLACK";
                    }
                }
            }
        }
    }

    init(){
        var tmp_init = loadStrings("/public/init.txt", function(){
            if(tmp_init.length==54){        
                console.log("Init Cube");
                for (var i = 0; i < 3; i++){
                    for(var j = 0; j < 3; j++) {
                        Cube.cubebox[j][0][i].up    = String(tmp_init[i * 3 + j]);
                    }
                }
                for(var i = 0; i<3; i++) {
                    for (var j = 0; j < 3; j++) {
                        Cube.cubebox[j][i][2].front = String(tmp_init[i * 3 + j + 9]);
                    }
                }
                for (var i = 0; i < 3; i++) {
                    for (var j = 2; j >= 0; j--) {
                        Cube.cubebox[j][i][0].back  = String(tmp_init[i * 3 + 2 - j + 18]);
                    }
                }
                for (var i = 0; i < 3; i++) {
                    for (var j = 2; j >= 0; j--) {
                        Cube.cubebox[2][i][j].right = String(tmp_init[i * 3 + 2 - j + 27]);
                    }
                }
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        Cube.cubebox[0][i][j].left  = String(tmp_init[i * 3 + j + 36]);
                    }
                }
                for (var i = 2; i >= 0; i--) {
                    for (var j = 0; j < 3; j++) {
                        Cube.cubebox[j][2][i].down  = String(tmp_init[(2 - i) * 3 + j + 45]);
                    }
                }
                delete_Init();
            }
        });
    }

    Updateright(idx){
        for (var i = 0; i < 9; i++) {
            this.tmpColorArr[i] = new boxTemplate(this.cubeLineLength, this.sideLinethickness);
        }

        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                this.tmpcolor = this.cubebox[idx][m][n].up;
                this.cubebox[idx][m][n].up = this.cubebox[idx][m][n].front;
                this.cubebox[idx][m][n].front = this.cubebox[idx][m][n].down;
                this.cubebox[idx][m][n].down = this.cubebox[idx][m][n].back;
                this.cubebox[idx][m][n].back = this.tmpcolor;
                this.tmpColorArr[m * 3 + n] = this.cubebox[idx][m][n];
            }
        }

        for (var m = 0; m < 3; m++) {
            for (var n = 2; n >= 0; n--) {
                this.cubebox[idx][n][m] = this.tmpColorArr[m * 3 + 2 - n];
            }
        }
    }

    Update_Counterclockwise_right(idx){
        
        for (var i = 0; i < 9; i++) {
            this.tmpColorArr[i] = new boxTemplate(this.cubeLineLength, this.sideLinethickness);
        }

        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                this.tmpcolor = this.cubebox[idx][m][n].up;
                this.cubebox[idx][m][n].up = this.cubebox[idx][m][n].back;
                this.cubebox[idx][m][n].back = this.cubebox[idx][m][n].down;
                this.cubebox[idx][m][n].down = this.cubebox[idx][m][n].front;
                this.cubebox[idx][m][n].front = this.tmpcolor;
                this.tmpColorArr[m * 3 + n] = this.cubebox[idx][m][n];
            }
        }

        for (var m = 2; m >= 0; m--) {
            for (var n = 0; n < 3; n++) {
                this.cubebox[idx][n][m] = this.tmpColorArr[(2 - m) * 3 + n];
            }
        }
    }

    Updateback(idx){

        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                this.tmpcolor = this.cubebox[m][n][idx].up;
                this.cubebox[m][n][idx].up = this.cubebox[m][n][idx].left;
                this.cubebox[m][n][idx].left = this.cubebox[m][n][idx].down;
                this.cubebox[m][n][idx].down = this.cubebox[m][n][idx].right;
                this.cubebox[m][n][idx].right = this.tmpcolor;
                this.tmpColorArr[m * 3 + n] = this.cubebox[m][n][idx];
            }
        }

        for (var m = 0; m < 3; m++) {
            for (var n = 2; n >= 0; n--) {
                this.cubebox[n][m][idx] = this.tmpColorArr[(m) * 3 + 2 - n];
            }
        }
    }

    Update_Counterclockwise_back(idx){

        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                this.tmpcolor = this.cubebox[m][n][idx].up;
                this.cubebox[m][n][idx].up = this.cubebox[m][n][idx].right;
                this.cubebox[m][n][idx].right = this.cubebox[m][n][idx].down;
                this.cubebox[m][n][idx].down = this.cubebox[m][n][idx].left;
                this.cubebox[m][n][idx].left = this.tmpcolor;
                this.tmpColorArr[m * 3 + n] = this.cubebox[m][n][idx];
            }
        }

        for (var m = 2; m >= 0; m--) {
            for (var n = 0; n < 3; n++) {
                this.cubebox[n][m][idx] = this.tmpColorArr[(2 - m) * 3 + n];
            }
        }
    }

    Updateup(idx){

        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                this.tmpcolor = this.cubebox[n][idx][m].right;
                this.cubebox[n][idx][m].right = this.cubebox[n][idx][m].front;
                this.cubebox[n][idx][m].front = this.cubebox[n][idx][m].left;
                this.cubebox[n][idx][m].left = this.cubebox[n][idx][m].back;
                this.cubebox[n][idx][m].back = this.tmpcolor;
                this.tmpColorArr[m * 3 + n] = this.cubebox[n][idx][m];
            }
        }

        for (var m = 0; m < 3; m++) {
            for (var n = 2; n >= 0; n--) {
                this.cubebox[m][idx][n] = this.tmpColorArr[m * 3 + (2 - n)];
            }
        }
    }

    Update_Counterclockwise_up(idx){

        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                this.tmpcolor = this.cubebox[n][idx][m].right;
                this.cubebox[n][idx][m].right = this.cubebox[n][idx][m].back;
                this.cubebox[n][idx][m].back = this.cubebox[n][idx][m].left;
                this.cubebox[n][idx][m].left = this.cubebox[n][idx][m].front;
                this.cubebox[n][idx][m].front = this.tmpcolor;
                this.tmpColorArr[m * 3 + n] = this.cubebox[n][idx][m];
            }
        }

        for (var m = 2; m >= 0; m--) {
            for (var n = 0; n < 3; n++) {
                this.cubebox[m][idx][n] = this.tmpColorArr[(2 - m) * 3 + n];
            }
        }
    }

    /*
    because Cube it is symmetric
    left1 is equal to right3
    left2 is equal to right2
    left3 is equal to right1
    */

    Updateright1() { this.Updateright(2); }
    Updateright2() { this.Updateright(1); }
    Updateright3() { this.Updateright(0); }

    Updateback1() { this.Updateback(0); }
    Updateback2() { this.Updateback(1); }
    Updateback3() { this.Updateback(2); }

    Updateup1() { this.Updateup(0); }
    Updateup2() { this.Updateup(1); }
    Updateup3() { this.Updateup(2); }

    Update_Counterclockwise_right3() { this.Update_Counterclockwise_right(0); }
    Update_Counterclockwise_right2() { this.Update_Counterclockwise_right(1); }
    Update_Counterclockwise_right1() { this.Update_Counterclockwise_right(2); }

    Update_Counterclockwise_back3() { this.Update_Counterclockwise_back(2); }
    Update_Counterclockwise_back2() { this.Update_Counterclockwise_back(1); }
    Update_Counterclockwise_back1() { this.Update_Counterclockwise_back(0); }

    Update_Counterclockwise_up3() { this.Update_Counterclockwise_up(2); }
    Update_Counterclockwise_up2() { this.Update_Counterclockwise_up(1);}
    Update_Counterclockwise_up1() { this.Update_Counterclockwise_up(0);}
    
    Updateleft1(){ this.Updateright3(); }
    Updateleft2(){ this.Updateright2(); }
    Updateleft3(){ this.Updateright1(); }

    Updatefront1(){ this.Updateback3(); }
    Updatefront2(){ this.Updateback2(); }
    Updatefront3(){ this.Updateback1(); }

    Updatedown1(){ this.Updateup3(); }
    Updatedown2(){ this.Updateup2(); }
    Updatedown3(){ this.Updateup1(); }

    Update_Counterclockwise_left1(){ this.Update_Counterclockwise_right3(); }
    Update_Counterclockwise_left2(){ this.Update_Counterclockwise_right2(); }
    Update_Counterclockwise_left3(){ this.Update_Counterclockwise_right1(); }

    Update_Counterclockwise_front1(){ this.Update_Counterclockwise_back3(); }
    Update_Counterclockwise_front2(){ this.Update_Counterclockwise_back2(); }
    Update_Counterclockwise_front3(){ this.Update_Counterclockwise_back1(); }

    Update_Counterclockwise_down1(){ this.Update_Counterclockwise_up3(); }
    Update_Counterclockwise_down2(){ this.Update_Counterclockwise_up2(); }
    Update_Counterclockwise_down3(){ this.Update_Counterclockwise_up1(); }

    updateHandler(){
        Cube.rotateAngle += Cube.rotateSpeed;
        if (Cube.rotateAngle > 90) {
            Cube.update();
            Cube.rotateAngle = 0.0;
            Command.processMutex = true;
            Command.clear();
        }
    }

    update(){
        if (Command.command == ("up_right")) {
            Cube.Updatefront1();
            Cube.Updatefront2();
            Cube.Updatefront3();
        } else if (Command.command == ("up_left")) {
            Cube.Update_Counterclockwise_front1();
            Cube.Update_Counterclockwise_front2();
            Cube.Update_Counterclockwise_front3();
        } else if (Command.command == ("up_back")) {
            Cube.Updateleft1();
            Cube.Updateleft2();
            Cube.Updateleft3();
        } else if (Command.command == ("up_front")) {
            Cube.Update_Counterclockwise_left1();
            Cube.Update_Counterclockwise_left2();
            Cube.Update_Counterclockwise_left3();
        } else if (Command.command == ("up_fix_right")) {
            Cube.Update_Counterclockwise_up1();
            Cube.Update_Counterclockwise_up2();
            Cube.Update_Counterclockwise_up3();
        } else if (Command.command == ("up_fix_left")) {
            Cube.Updateup1();
            Cube.Updateup2();
            Cube.Updateup3();
        } else {
            if (Command.command == ("back1_clockwise")) {
                Cube.Updateback1();
            } else if (Command.command == ("back2_clockwise")) {
                Cube.Updateback2();
            } else if (Command.command == ("back3_clockwise")) {
                Cube.Updateback3();
            } else if (Command.command == ("left1_clockwise")) {
                Cube.Updateleft1();
            } else if (Command.command == ("left2_clockwise")) {
                Cube.Updateleft2();
            } else if (Command.command == ("left3_clockwise")) {
                Cube.Updateleft3();
            } else if (Command.command == ("down1_clockwise")) {
                Cube.Updatedown1();
            } else if (Command.command == ("down2_clockwise")) {
                Cube.Updatedown2();
            } else if (Command.command == ("down3_clockwise")) {
                Cube.Updatedown3();
            } else if (Command.command == ("front1_clockwise")) {
                Cube.Updatefront1();
            } else if (Command.command == ("front2_clockwise")) {
                Cube.Updatefront2();
            } else if (Command.command == ("front3_clockwise")) {
                Cube.Updatefront3();
            } else if (Command.command == ("right1_clockwise")) {
                Cube.Updateright1();
            } else if (Command.command == ("right2_clockwise")) {
                Cube.Updateright2();
            } else if (Command.command == ("right3_clockwise")) {
                Cube.Updateright3();
            } else if (Command.command == ("up1_clockwise")) {
                Cube.Updateup1();
            } else if (Command.command == ("up2_clockwise")) {
                Cube.Updateup2();
            } else if (Command.command == ("up3_clockwise")) {
                Cube.Updateup3();
            } else if (Command.command == ("back1_Counterclockwise")) {
                Cube.Update_Counterclockwise_back1();
            } else if (Command.command == ("back2_Counterclockwise")) {
                Cube.Update_Counterclockwise_back2();
            } else if (Command.command == ("back3_Counterclockwise")) {
                Cube.Update_Counterclockwise_back3();
            } else if (Command.command == ("left1_Counterclockwise")) {
                Cube.Update_Counterclockwise_left1();
            } else if (Command.command == ("left2_Counterclockwise")) {
                Cube.Update_Counterclockwise_left2();
            } else if (Command.command == ("left3_Counterclockwise")) {
                Cube.Update_Counterclockwise_left3();
            } else if (Command.command == ("down1_Counterclockwise")) {
                Cube.Update_Counterclockwise_down1();
            } else if (Command.command == ("down2_Counterclockwise")) {
                Cube.Update_Counterclockwise_down2();
            } else if (Command.command == ("down3_Counterclockwise")) {
                Cube.Update_Counterclockwise_down3();
            } else if (Command.command == ("front1_Counterclockwise")) {
                Cube.Update_Counterclockwise_front1();
            } else if (Command.command == ("front2_Counterclockwise")) {
                Cube.Update_Counterclockwise_front2();
            } else if (Command.command == ("front3_Counterclockwise")) {
                Cube.Update_Counterclockwise_front3();
            } else if (Command.command == ("right1_Counterclockwise")) {
                Cube.Update_Counterclockwise_right1();
            } else if (Command.command == ("right2_Counterclockwise")) {
                Cube.Update_Counterclockwise_right2();
            } else if (Command.command == ("right3_Counterclockwise")) {
                Cube.Update_Counterclockwise_right3();
            } else if (Command.command == ("up1_Counterclockwise")) {
                Cube.Update_Counterclockwise_up1();
            } else if (Command.command == ("up2_Counterclockwise")) {
                Cube.Update_Counterclockwise_up2();
            } else if (Command.command == ("up3_Counterclockwise")) {
                Cube.Update_Counterclockwise_up3();
            }
        }
    }
}

function delete_Init(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "/initend", true);
    xhttp.send();
}