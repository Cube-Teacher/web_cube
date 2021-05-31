# web_cube

## library

1. p5.js
2. [p5.EasyCam](https://github.com/diwi/p5.EasyCam)

## ref

[beacon](https://www.pigo.idv.tw/archives/3088)

## error list

* p5.easycam:
    ```
    Uncaught TypeError: renderer.camera is not a function
    at EasyCam.apply (p5.easycam.js:608)
    at EasyCam.update (p5.easycam.js:591)
    at p5.easycam.js:429
    at callMethod (p5.js:55140)
    at Array.forEach (<anonymous>)
    at p5.redraw (p5.js:55148)
    at p5.<anonymous> (p5.js:48840)
    at p5.<anonymous> (p5.js:48742)
    at new p5 (p5.js:49029)
    at _globalInit (p5.js:48414)
    ```
    
    * solution by author [here](https://github.com/diwi/p5.EasyCam/issues/5)