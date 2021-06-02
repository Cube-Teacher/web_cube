class teacherTemplate{
    constructor(num_img, num_img_done, a_img, b_img, c_img, j_img, m_img, p_img, q_img, u_img){
        this.title_text         = "";
        this.title_img          = [];
        this.title_text_bool    = false;
        this.title_img_bool     = false;
        this.subtitle_text      = "";
        this.subtitle_img       = [];
        this.subtitle_text_bool = false;
        this.subtitle_img_bool  = false;
        this.step_img           = [];
        this.step_img_bool      = false;
        this.img = new Map([
            ["1.png", num_img[0]],
            ["2.png", num_img[1]],
            ["3.png", num_img[2]],
            ["4.png", num_img[3]],
            ["5.png", num_img[4]],
            ["6.png", num_img[5]],
            ["7.png", num_img[6]],
            ["8.png", num_img[7]],
            ["9.png", num_img[8]],
            ["10.png", num_img[9]],
            ["11.png", num_img[10]],
            ["12.png", num_img[11]],
            ["13.png", num_img[12]],
            ["14.png", num_img[13]],
            ["15.png", num_img[14]],
            ["16.png", num_img[15]],
            ["17.png", num_img[16]],
            ["18.png", num_img[17]],
            ["19.png", num_img[18]],
            ["20.png", num_img[19]],
            ["1-1.png", num_img_done[0]],
            ["2-1.png", num_img_done[1]],
            ["3-1.png", num_img_done[2]],
            ["4-1.png", num_img_done[3]],
            ["5-1.png", num_img_done[4]],
            ["6-1.png", num_img_done[5]],
            ["7-1.png", num_img_done[6]],
            ["8-1.png", num_img_done[7]],
            ["9-1.png", num_img_done[8]],
            ["10-1.png", num_img_done[9]],
            ["11-1.png", num_img_done[10]],
            ["12-1.png", num_img_done[11]],
            ["13-1.png", num_img_done[12]],
            ["14-1.png", num_img_done[13]],
            ["15-1.png", num_img_done[14]],
            ["16-1.png", num_img_done[15]],
            ["17-1.png", num_img_done[16]],
            ["18-1.png", num_img_done[17]],
            ["19-1.png", num_img_done[18]],
            ["20-1.png", num_img_done[19]],
            ["a1.png" , a_img[0]],
            ["a2.png" , a_img[1]],
            ["a3.png" , a_img[2]],
            ["a4.png" , a_img[3]],
            ["a5.png" , a_img[4]],
            ["a6.png" , a_img[5]],
            ["a7.png" , a_img[6]],
            ["a8.png" , a_img[7]],
            ["a9.png" , a_img[8]],
            ["a10.png", a_img[9]],
            ["a11.png", a_img[10]],
            ["a12.png", a_img[11]],
            ["a13.png", a_img[12]],
            ["a14.png", a_img[13]],
            ["a15.png", a_img[14]],
            ["a16.png", a_img[15]],
            ["a17.png", a_img[16]],
            ["a18.png", a_img[17]],
            ["a19.png", a_img[18]],
            ["a20.png", a_img[19]],
            ["a21.png", a_img[20]],
            ["a22.png", a_img[21]],
            ["a23.png", a_img[22]],
            ["b1.png", b_img[0]],
            ["b2.png", b_img[1]],
            ["b3.png", b_img[2]],
            ["b4.png", b_img[3]],
            ["b5.png", b_img[4]],
            ["b6.png", b_img[5]],
            ["b7.png", b_img[6]],
            ["c1.png", c_img[0]],
            ["c2.png", c_img[1]],
            ["j1.png", j_img[0]],
            ["j2.png", j_img[1]],
            ["j3.png", j_img[2]],
            ["j4.png", j_img[3]],
            ["j5.png", j_img[4]],
            ["j6.png", j_img[5]],
            ["j7.png", j_img[6]],
            ["j8.png", j_img[7]],
            ["m1.png", m_img[0]],
            ["m2.png", m_img[1]],
            ["m3.png", m_img[2]],
            ["p1.png", p_img[0]],
            ["p2.png", p_img[1]],
            ["p3.png", p_img[2]],
            ["p4.png", p_img[3]],
            ["p6.png", p_img[4]],
            ["p7.png", p_img[5]],
            ["p8.png", p_img[6]],
            ["p9.png", p_img[7]],
            ["p10.png", p_img[8]],
            ["p12.png", p_img[9]],
            ["p13.png", p_img[10]],
            ["p14.png", p_img[11]],
            ["p15.png", p_img[12]],
            ["q1.png", q_img[0]],
            ["q2.png", q_img[1]],
            ["q3.png", q_img[2]],
            ["q4.png", q_img[3]],
            ["q5.png", q_img[4]],
            ["q6.png", q_img[5]],
            ["q7.png", q_img[6]],
            ["q8.png", q_img[7]],
            ["q9.png", q_img[8]],
            ["q10.png", q_img[9]],
            ["q11.png", q_img[10]],
            ["q12.png", q_img[11]],
            ["q13.png", q_img[12]],
            ["q14.png", q_img[13]],
            ["q15.png", q_img[14]],
            ["q16.png", q_img[15]],
            ["u1.png", u_img[0]],
            ["u2.png", u_img[1]],
            ["u3.png", u_img[2]],
            ["u4.png", u_img[3]],
            ["u5.png", u_img[4]],
            ["u6.png", u_img[5]],
            ["u7.png", u_img[6]]
        ]);
    }
    req(p, teacher){
        var title_img_arr = p.loadStrings("./public/title_img.txt", function (){
            if (title_img_arr.length == 1) {
                teacher.title_img = [];
                teacher.title_img_bool = false;
            } else if (title_img_arr.length != 0 && title_img_arr.length != 1) {
                teacher.title_img = title_img_arr;
                teacher.title_img_bool = true;
            }
        })
        var title_txt_arr = p.loadStrings("./public/title_text.txt", function () {
            if (title_txt_arr.length == 1) {
                teacher.title_text = "";
                teacher.title_text_bool = false;
            } else if (title_txt_arr.length != 0 && title_txt_arr.length != 1) {
                teacher.title_text = title_txt_arr[0];
                teacher.title_text_bool = true;
            }
        })
        var subtitle_img_arr = p.loadStrings("./public/subtitle_img.txt", function () {
            if (subtitle_img_arr.length == 1) {
                teacher.subtitle_img = [];
                teacher.subtitle_img_bool = false;
            } else if (subtitle_img_arr.length != 0 && subtitle_img_arr.length != 1) {
                teacher.subtitle_img = subtitle_img_arr;
                teacher.subtitle_img_bool = true;
            }
        })
        var subtitle_txt_arr = p.loadStrings("./public/subtitle_text.txt", function () {
            if (subtitle_txt_arr.length == 1) {
                teacher.subtitle_text = "";
                teacher.subtitle_text_bool = false;
            } else if (subtitle_txt_arr.length != 0 && subtitle_txt_arr.length != 1) {
                teacher.subtitle_text = subtitle_txt_arr[0];
                teacher.subtitle_text_bool = true;
            }
        })
        var step_img_arr = p.loadStrings("./public/step_img.txt", function () {
            if (step_img_arr.length == 1) {
                teacher.step_img = [];
                teacher.step_img_bool = false;
            } else if (step_img_arr.length != 0 && step_img_arr.length != 1) {
                teacher.step_img = step_img_arr;
                teacher.step_img_bool = true;
            }
        })
    }

    show_title_img(p, teacher) {
        for (var i = 0; i < teacher.title_img.length-1 ; i++) { 
            // console.log(teacher.img.get(String(teacher.img_arr[i])));
            p.image(teacher.img.get(String(teacher.title_img[i])),10,10+200*(i),600,200);
        }
    }

    show_title_txt(p, teacher){
        p.textSize(20);
        var txt_len = teacher.title_text.length;
        var txt_mod = teacher.title_text.length % 25;
        var idx = Math.floor(txt_len / 25);
        // console.log(txt_len, " ", txt_mod, " ", idx);
        for (var i = 0; i <= idx; i++) {
            if (i == idx) {
                p.text(teacher.title_text.substring(i * 25, i * 25 + txt_mod), 620, 30 + i * 20);
            } else {
                p.text(teacher.title_text.substring(i * 25, i * 25 + 25), 620, 30 + i * 20);
            }
        }
    }

    show_subtitle_img(p, teacher) {
        for (var i = 0; i < teacher.subtitle_img.length - 1; i++) {
            // console.log(teacher.img.get(String(teacher.img_arr[i])));
            p.image(teacher.img.get(String(teacher.subtitle_img[i])), 10, 220 + 200 * (i), 600, 200);
        }
    }

    show_subtitle_txt(p, teacher) {
        p.textSize(20);
        var txt_len = teacher.subtitle_text.length;
        var txt_mod = teacher.subtitle_text.length % 25;
        var idx = Math.floor(txt_len/25);
        // console.log(txt_len," ",txt_mod," ",idx);
        for(var i=0;i<=idx;i++){
            if(i==idx){
                p.text(teacher.subtitle_text.substring(i * 25, i * 25 + txt_mod), 620, 240 + i * 20);
            } else {
                p.text(teacher.subtitle_text.substring(i * 25, i * 25 + 25), 620, 240 + i * 20);
            }
        }
    }

    show_step_img(p, teacher) {
        for (var i = 0; i < teacher.step_img.length - 1; i++) {
            if(i>6){
                p.image(teacher.img.get(String(teacher.step_img[i])), 10 + 160 * (i-7), 590, 150, 150);
            } else {
                p.image(teacher.img.get(String(teacher.step_img[i])), 10 + 160 * (i), 430, 150, 150);
            }
        }
    }
}

function send_req(teacher){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            teacher.res_text = this.responseText;
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "/steps", true);
    xhttp.send();
}

function clear_req(teacher) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
 
        }
    };
    xhttp.open("GET", "/steps", true);
    xhttp.send();
}