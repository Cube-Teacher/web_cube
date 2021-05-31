var easyCam;
var Cube;
var Debug;
var noto_font;
var Command;

function setup() {
    createCanvas(640, 640, WEBGL);

    Dw.EasyCam.prototype.apply = function (n) {
        var o = this.cam;
        n = n || o.renderer,
        n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
    };
    easyCam = createEasyCam();

    Debug = new debugTemplate();

    noto_font = loadFont("./public/font/NotoSansTC-Regular.otf");
    textFont(noto_font);

    Cube = new RubikCube(100,5);
    Cube.add_black();
    Cube.init();

    Command = new commandControler();
}

var a = 0;

function draw() {
    background(200);

    Debug.showcoordinate();
    // Debug.showcoordinateText();


    if(Command.processMutex){
        Command.read();
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                push();
                
                if ((i == 0 && Cube.back1_clockwise) || (i == 1 && Cube.back2_clockwise) || (i == 2 && Cube.back3_clockwise) ||
                    (i == 0 && Cube.front3_clockwise) || (i == 1 && Cube.front2_clockwise) || (i == 2 && Cube.front1_clockwise)) {
                    translate(150 - (150 * sqrt(2) * sin(radians(45 - Cube.rotateAngle))), 150 - (150 * sqrt(2) * cos(radians(45 - Cube.rotateAngle))), 0);
                    rotateZ(radians(Cube.rotateAngle));
                }

                if ((i == 0 && Cube.back1_Counterclockwise) || (i == 1 && Cube.back2_Counterclockwise) || (i == 2 && Cube.back3_Counterclockwise) ||
                    (i == 0 && Cube.front3_Counterclockwise) || (i == 1 && Cube.front2_Counterclockwise) || (i == 2 && Cube.front1_Counterclockwise)) {
                    translate(150 - (150 * sqrt(2) * cos(radians(-45 + Cube.rotateAngle))), 150 + (150 * sqrt(2) * sin(radians(-45 + Cube.rotateAngle))), 0);
                    rotateZ(radians(-Cube.rotateAngle));
                }

                if ((j == 0 && Cube.up1_clockwise) || (j == 1 && Cube.up2_clockwise) || (j == 2 && Cube.up3_clockwise) ||
                    (j == 0 && Cube.down3_clockwise) || (j == 1 && Cube.down2_clockwise) || (j == 2 && Cube.down1_clockwise)) {
                    translate(150 - (150 * sqrt(2) * cos(radians(45 - Cube.rotateAngle))), 0, 150 - (150 * sqrt(2) * sin(radians(45 - Cube.rotateAngle))));
                    rotateY(radians(Cube.rotateAngle));
                }

                if ((j == 0 && Cube.up1_Counterclockwise) || (j == 1 && Cube.up2_Counterclockwise) || (j == 2 && Cube.up3_Counterclockwise) ||
                    (j == 0 && Cube.down3_Counterclockwise) || (j == 1 && Cube.down2_Counterclockwise) || (j == 2 && Cube.down1_Counterclockwise)) {
                    translate(150 + (150 * sqrt(2) * sin(radians(-45 + Cube.rotateAngle))), 0, 150 - (150 * sqrt(2) * cos(radians(-45 + Cube.rotateAngle))));
                    rotateY(radians(-Cube.rotateAngle));
                }

                if ((k == 0 && Cube.right3_clockwise) || (k == 1 && Cube.right2_clockwise) || (k == 2 && Cube.right1_clockwise) ||
                    (k == 0 && Cube.left1_clockwise) || (k == 1 && Cube.left2_clockwise) || (k == 2 && Cube.left3_clockwise)) {
                    translate(0, 150 - (150 * sqrt(2) * sin(radians(45 - Cube.rotateAngle))), 150 - (150 * sqrt(2) * cos(radians(45 - Cube.rotateAngle))));
                    rotateX(radians(Cube.rotateAngle));
                }

                if ((k == 0 && Cube.right3_Counterclockwise) || (k == 1 && Cube.right2_Counterclockwise) || (k == 2 && Cube.right1_Counterclockwise) ||
                    (k == 0 && Cube.left1_Counterclockwise) || (k == 1 && Cube.left2_Counterclockwise) || (k == 2 && Cube.left3_Counterclockwise)) {
                    translate(0, 150 - (150 * sqrt(2) * cos(radians(-45 + Cube.rotateAngle))), 150 + (150 * sqrt(2) * sin(radians(-45 + Cube.rotateAngle))));
                    rotateX(radians(-Cube.rotateAngle));
                }

                // translate(  -1*Cube.cubeLineLength  + k * Cube.cubeLineLength, 
                //             -1*Cube.cubeLineLength  + j * Cube.cubeLineLength, 
                //             -1*Cube.cubeLineLength  + i * Cube.cubeLineLength   );
                translate(Cube.cubeLineLength / 2 + k * Cube.cubeLineLength, Cube.cubeLineLength / 2 + j * Cube.cubeLineLength, Cube.cubeLineLength / 2 + i * Cube.cubeLineLength);
                Cube.cubebox[k][j][i].createBox();
                pop();
            }
        }
    }

    if(Command.processMutex == false){
        Cube.updateHandler();
    }

    // if (Cube.right1_Counterclockwise==true){
    //     if(Cube.rotateAngle>90){
    //         Cube.right1_Counterclockwise = false;
    //         Cube.rotateAngle = 0;
    //         Cube.Update_Counterclockwise_right1();
    //         Cube.right2_Counterclockwise=true;
    //     } else {
    //         Cube.rotateAngle += 3;
    //     }
    // }

    // if (Cube.right2_Counterclockwise){
    //     if (Cube.rotateAngle > 90) {
    //         Cube.right2_Counterclockwise = false;
    //         Cube.rotateAngle = 0;
    //         Cube.Update_Counterclockwise_right2();
    //     } else {
    //         Cube.rotateAngle += 3;
    //     }
    // }
}

