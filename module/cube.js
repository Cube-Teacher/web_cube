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
        
        this.cubebox = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
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
        this.rotateSpeed = 1.0;
    }
}