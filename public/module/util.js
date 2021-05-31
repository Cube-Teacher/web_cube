function draw_color(color_str){
    if (color_str == "GREEN") { return "#009b48"; }
    else if (color_str == "WHITE") { return "#ffffff"; }
    else if (color_str == "RED") { return "#b71234"; }
    else if (color_str == "YELLOW") { return "#ffd500"; }
    else if (color_str == "BLUE") { return "#0046ad"; }
    else if (color_str == "ORANGE") { return "#ff5800"; }
    else if (color_str == "BLACK") { return "#000000"; }
    return 0;
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}