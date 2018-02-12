var menu = document.getElementById("menu");


document.getElementById("open").addEventListener("click", function () {
    menu.style.left = "0px";
});
document.getElementById("close").addEventListener("click",function(){
    menu.style.left = "-110px" ;
});

//----------------Level4b---------------------//

var BackGround = document.getElementById("bg");

document.getElementById("makeBG").addEventListener("click",function(){
    BackGround.style.backgroundImage = zoom.style.backgroundImage;
});
document.getElementById("reset").addEventListener("click",function(){
    BackGround.style.backgroundImage = "url()";
});
document.getElementById("showApp").addEventListener("click",function(){
    document.getElementById("app1").style.display = "block";
});
document.getElementById("hideApp").addEventListener("click",function(){
    document.getElementById("app1").style.display = "none";
});

//----------------Level5--------------------- // 
var zoom = document.getElementById("zoom");
var Zwidth = 100;
var Zheight = 70;


document.getElementById("zoom").addEventListener("click",function(){
    document.getElementById("zoomctrl").style.display = "block";
});

document.getElementById("plus").addEventListener("click",function(){
   
    if (Zwidth < 91 || Zheight < 64) {
        Zwidth = Zwidth + 10;
        Zheight = Zheight + 7;
        } else if (Zwidth > 11 || Zheight > 8){

    } 
    
    zoom.style.width = Zwidth + "%"; 
    zoom.style.height = Zheight + "%";
        


});

document.getElementById("minus").addEventListener("click",function(){
   if (Zwidth < 91 || Zheight < 64) {
        
   }else if (Zwidth > 11 || Zheight > 8){
           Zwidth = Zwidth - 10;
            Zheight = Zheight - 7;
    } 
    
    zoom.style.width = Zwidth + "%";
    zoom.style.height = Zheight + "%";
   
});
    


//----------------Level6a---------------------// 
document.getElementById("number").addEventListener("change", function(){
    var Num = parseInt(number.value);
    
    if(Num > 12 || Num < 1) {
        alert("Doesn't exist!");
    } else {
        document.getElementById("bg").style.backgroundImage = "url(imgs/i"+Num+".jpg)";
    }
});

//----------------Level6b--------------------- // 
// previous

document.getElementById("prev").addEventListener("click", function() {
    if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")'; 
    }
        
});

//next button

document.getElementById("next").addEventListener("click", function() {
    
    if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")'; 
    }
});
