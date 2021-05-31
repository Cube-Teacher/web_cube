class debugTemplate{

    constructor() {}

    showcoordinate(){
        line(-300, 0, 0, 300, 0, 0);
        line(0, -300, 0, 0, 300, 0);
        line(0, 0, -300, 0, 0, 300);
    }

    showcoordinateText(){
        textSize(50);
        // text("up", 200, -200, 200);    // UP
        // text("right", 500, 200, 200); // right
        // text("down", 200, 600, 200);  // down
        // text("left", -300, 200, 200);    // left
        // text("front", 150, 200, 500);   // front
        // text("back", 150, 200, -300);  // back
        text("Y", 0, 300);
        text("X", 300, 0);
        // text("Z", 0, 0, 300);
    }
}