var easyCam;
var Cube;
var Debug;
var noto_font;

function setup() {
    createCanvas(640, 640, WEBGL);
    Dw.EasyCam.prototype.apply = function (n) {
        var o = this.cam;
        n = n || o.renderer,
        n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
    };
    easyCam = createEasyCam();
    // easyCam.setViewport([0,0,50,50]);
    Debug = new debugTemplate();
    noto_font = loadFont("./font/NotoSansTC-Regular.otf");
    textFont(noto_font);

    Cube = new RubikCube(100,5);
}

function draw() {
    background(200);

    Debug.showcoordinate();
    // Debug.showcoordinateText();

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                push();
                translate(Cube.cubeLineLength / 2 + k * Cube.cubeLineLength, 
                    Cube.cubeLineLength / 2 + j * Cube.cubeLineLength, 
                    Cube.cubeLineLength / 2 + i * Cube.cubeLineLength   );
                Cube.cubebox[k][j][i].createBox();
                pop();
            }
        }
    }
}

