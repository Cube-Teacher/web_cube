var cube_sketch = function(p){

    var easyCam;
    var Cube;
    var Debug;
    var noto_font;
    var Command;

    var teach;

    // var sketch_x, sketch_y, sketch_weight, sketch_heigth;

    p.setup = function() {

        var pos = p.createCanvas(400, 400, p.WEBGL);
        pos.position(0,0);

        Dw.EasyCam.prototype.apply = function (n) {
            var o = this.cam;
            n = n || o.renderer,
            n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
        };
        easyCam = p.createEasyCam();

        Debug = new debugTemplate();

        noto_font = p.loadFont("./public/font/NotoSansTC-Regular.otf");
        p.textFont(noto_font);

        Cube = new RubikCube(100,5);
        Cube.add_black();

        Command = new commandControler();
    }

    p.draw = function() {

        p.background(200);

        // Debug.showcoordinate();
        // Debug.showcoordinateText();

        Cube.init(p, Cube);
        Command.read(p, Cube, Command);

        if(Command.processMutex){
            Cube.rotate(Cube, Command);
        }

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                for (var k = 0; k < 3; k++) {
                    p.push();
                    
                    if ((i == 0 && Cube.back1_clockwise) || (i == 1 && Cube.back2_clockwise) || (i == 2 && Cube.back3_clockwise) ||
                        (i == 0 && Cube.front3_clockwise) || (i == 1 && Cube.front2_clockwise) || (i == 2 && Cube.front1_clockwise)) {
                        p.translate(0 - (0 * p.sqrt(2) * p.sin(p.radians(45 - Cube.rotateAngle))), 0 - (0 * p.sqrt(2) * p.cos(p.radians(45 - Cube.rotateAngle))), 0);
                        p.rotateZ(p.radians(Cube.rotateAngle));
                    }

                    if ((i == 0 && Cube.back1_Counterclockwise) || (i == 1 && Cube.back2_Counterclockwise) || (i == 2 && Cube.back3_Counterclockwise) ||
                        (i == 0 && Cube.front3_Counterclockwise) || (i == 1 && Cube.front2_Counterclockwise) || (i == 2 && Cube.front1_Counterclockwise)) {
                        p.translate(0 - (0 * p.sqrt(2) * p.cos(p.radians(-45 + Cube.rotateAngle))), 0 + (0 * p.sqrt(2) * p.sin(p.radians(-45 + Cube.rotateAngle))), 0);
                        p.rotateZ(p.radians(-Cube.rotateAngle));
                    }

                    if ((j == 0 && Cube.up1_clockwise) || (j == 1 && Cube.up2_clockwise) || (j == 2 && Cube.up3_clockwise) ||
                        (j == 0 && Cube.down3_clockwise) || (j == 1 && Cube.down2_clockwise) || (j == 2 && Cube.down1_clockwise)) {
                        p.translate(0 - (0 * p.sqrt(2) * p.cos(p.radians(45 - Cube.rotateAngle))), 0, 0 - (0 * p.sqrt(2) * p.sin(p.radians(45 - Cube.rotateAngle))));
                        p.rotateY(p.radians(Cube.rotateAngle));
                    }

                    if ((j == 0 && Cube.up1_Counterclockwise) || (j == 1 && Cube.up2_Counterclockwise) || (j == 2 && Cube.up3_Counterclockwise) ||
                        (j == 0 && Cube.down3_Counterclockwise) || (j == 1 && Cube.down2_Counterclockwise) || (j == 2 && Cube.down1_Counterclockwise)) {
                        p.translate(0 + (0 * p.sqrt(2) * p.sin(p.radians(-45 + Cube.rotateAngle))), 0, 0 - (0 * p.sqrt(2) * p.cos(p.radians(-45 + Cube.rotateAngle))));
                        p.rotateY(p.radians(-Cube.rotateAngle));
                    }

                    if ((k == 0 && Cube.right3_clockwise) || (k == 1 && Cube.right2_clockwise) || (k == 2 && Cube.right1_clockwise) ||
                        (k == 0 && Cube.left1_clockwise) || (k == 1 && Cube.left2_clockwise) || (k == 2 && Cube.left3_clockwise)) {
                        p.translate(0, 0 - (0 * p.sqrt(2) * p.sin(p.radians(45 - Cube.rotateAngle))), 0 - (0 * p.sqrt(2) * p.cos(p.radians(45 - Cube.rotateAngle))));
                        p.rotateX(p.radians(Cube.rotateAngle));
                    }

                    if ((k == 0 && Cube.right3_Counterclockwise) || (k == 1 && Cube.right2_Counterclockwise) || (k == 2 && Cube.right1_Counterclockwise) ||
                        (k == 0 && Cube.left1_Counterclockwise) || (k == 1 && Cube.left2_Counterclockwise) || (k == 2 && Cube.left3_Counterclockwise)) {
                        p.translate(0, 0 - (0 * p.sqrt(2) * p.cos(p.radians(-45 + Cube.rotateAngle))), 0 + (0 * p.sqrt(2) * p.sin(p.radians(-45 + Cube.rotateAngle))));
                        p.rotateX(p.radians(-Cube.rotateAngle));
                    }

                    // translate(  -1*Cube.cubeLineLength  + k * Cube.cubeLineLength, 
                    //             -1*Cube.cubeLineLength  + j * Cube.cubeLineLength, 
                    //             -1*Cube.cubeLineLength  + i * Cube.cubeLineLength   );
                    p.translate(Cube.cubeLineLength * -1 + k * Cube.cubeLineLength, Cube.cubeLineLength * -1 + j * Cube.cubeLineLength, Cube.cubeLineLength * -1 + i * Cube.cubeLineLength);
                    Cube.cubebox[k][j][i].createBox(p);
                    p.pop();
                }
            }
        }

        if(Command.processMutex == false){
            Cube.updateHandler(Cube, Command);
        }
    }
}

var teach_sketch = function (p) {

    var num_img = []        // for image name: 1.png, 2.png ...         range : [1,20]
    var num_img_done = []   // for image name: 1-1.png, 2-1.png ...     range : [1,20]
    var a_img = []          // for image name: a1.png, a2.png ...       range : [1,23]
    var b_img = []          // for image name: b1.png, b2.png ...       range : [1,7]
    var c_img = []          // for image name: c1.png, c2.png ...       range : [1,2]
    var j_img = []          // for image name: c1.png, c2.png ...       range : [1,8]
    var m_img = []          // for image name: c1.png, c2.png ...       range : [1,3]
    var p_img = []          // for image name: c1.png, c2.png ...       range : [1,15]
    var q_img = []          // for image name: c1.png, c2.png ...       range : [1,16]
    var u_img = []          // for image name: c1.png, c2.png ...       range : [1,7]

    var Teacher ;

    p.setup = function () {
        var pos = p.createCanvas(1130,760,p.P2D);
        pos.position(400,0);

        var img_path = "./public/img/";
        var img_extension = ".png";

        for(var i=1;i<=20;i++){
            num_img.push(p.loadImage(img_path + String(i) + img_extension));
            num_img_done.push(p.loadImage(img_path + String(i) + "-1"+ img_extension));
        }

        fetch_img(p, a_img, 23, "a", img_path, img_extension);
        fetch_img(p, b_img, 7,  "b", img_path, img_extension);
        fetch_img(p, c_img, 2,  "c", img_path, img_extension);
        fetch_img(p, j_img, 8,  "j", img_path, img_extension);
        fetch_img(p, m_img, 3,  "m", img_path, img_extension);
        fetch_img(p, p_img, 15, "p", img_path, img_extension);
        fetch_img(p, q_img, 16, "q", img_path, img_extension);
        fetch_img(p, u_img, 7,  "u", img_path, img_extension);

        Teacher = new teacherTemplate(num_img, num_img_done, a_img, b_img, c_img, j_img, m_img, p_img, q_img, u_img);
    }

    p.draw = function () {
        p.background(200);
        // p.text("hello",200,200);
        Teacher.req(p, Teacher);

        if (Teacher.title_img_bool) { Teacher.show_title_img(p, Teacher); }
        if (Teacher.title_text_bool) { Teacher.show_title_txt(p, Teacher); }
        if (Teacher.subtitle_img_bool) { Teacher.show_subtitle_img(p, Teacher); }
        if (Teacher.subtitle_text_bool) { Teacher.show_subtitle_txt(p, Teacher);}
        if (Teacher.step_img_bool) { Teacher.show_step_img(p, Teacher);}
    }
}

var Rubik_Cube = new p5(cube_sketch);
var Rubik_Cube2 = new p5(teach_sketch);

function fetch_img(p, img_array, idx, name_extension, img_path, img_extension){
    for (var i = 1; i <= idx; i++) {
        if(name_extension=="p"){
            if(i==5 || i==11){
                continue;
            }
        }
        img_array.push(p.loadImage(img_path + String(name_extension) + String(i) + img_extension));
    }
}