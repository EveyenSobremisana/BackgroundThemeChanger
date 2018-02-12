var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");

document.getElementById("BG1").addEventListener("click",function(){
    ch1.style.backgroundImage = "url(imgs/i1.jpg)";
    ch2.style.backgroundImage = "url(imgs/i2.jpg)";
    ch3.style.backgroundImage = "url(imgs/i3.jpg)";
});

document.getElementById("BG2").addEventListener("click",function(){
    ch1.style.backgroundImage = "url(imgs/i4.jpg)";
    ch2.style.backgroundImage = "url(imgs/i5.jpg)";
    ch3.style.backgroundImage = "url(imgs/i6.jpg)";
});
document.getElementById("BG3").addEventListener("click",function(){
    ch1.style.backgroundImage = "url(imgs/i7.jpg)";
    ch2.style.backgroundImage = "url(imgs/i8.jpg)";
    ch3.style.backgroundImage = "url(imgs/i9.jpg)";
});
document.getElementById("BG4").addEventListener("click",function(){
    ch1.style.backgroundImage = "url(imgs/i10.jpg)";
    ch2.style.backgroundImage = "url(imgs/i11.jpg)";
    ch3.style.backgroundImage = "url(imgs/i12.jpg)";
});


//----------------Level4a---------------------//

var zoom = document.getElementById("zoom");

document.getElementById("ch1").addEventListener("mouseenter",function(){
    zoom.style.backgroundImage =  ch1.style.backgroundImage;
});
document.getElementById("ch2").addEventListener("mouseenter",function(){
    zoom.style.backgroundImage =  ch2.style.backgroundImage;
});
document.getElementById("ch3").addEventListener("mouseenter",function(){
    zoom.style.backgroundImage =  ch3.style.backgroundImage;
});


