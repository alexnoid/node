t = 0;
window.onload=function papapa(){
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
    
    glav = new Image();
    glav.src="img.png";
    //document.images.glav.height=100;

    //alert("si vic pasem parabellum");
    setInterval(() => {
        t+=2;
        ctx.drawImage(glav,t,0);
    }, 1000);
    requestAnimationFrame(papapa);


    
    
}