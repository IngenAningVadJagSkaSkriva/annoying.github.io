var a = 10;
var y = window.outerHeight;
var x = window.outerWidth;
setInterval(() => {
    window.resizeBy(a,a);
    window.moveTo((screen.width / 2 - window.outerWidth / 2),(screen.height / 2 - window.outerHeight / 2));
    if(window.outerHeight >= screen.height && window.outerWidth >= screen.width) {
        a = 0 - a;
    } else if(window.outerHeight <= y && window.outerWidth <= x) a = 0 - a;
},1);