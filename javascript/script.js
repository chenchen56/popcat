ha=0;
var hb = document.getElementById("num");
hb.innerText = ha;




var img = document.getElementById("img");
img.addEventListener("mouseup", function(){
    this.src = "cat.jpg" ;

})
img.addEventListener("mousedown", function(){
    this.src = "CATA.jpg" ;
    ha = ha+1;
    hb.innerText = ha;

})



