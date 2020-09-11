var count = 0;
window.onload=function(){
    document.getElementById("baton").onmouseover = function () {
			if(count>0){
	clearInterval(timerId2);
	}
	count++;
		timerId = setInterval(function(){
			let im = document.getElementById("baton");
	im.height=im.height+1;
	im.length=im.length+1;
		}, 1);
	
	}
	document.getElementById("baton").onclick = function () {
		timerId5 = setInterval(function(){
			let im = document.getElementById("baton");
	im.height=im.height+1;
	im.length=im.length+1;
		}, 1);
	
	}
	document.getElementById("baton").onmouseout = function () {
		clearInterval(timerId);
		timerId2 = setInterval(function(){
			let im = document.getElementById("baton");
	im.height=im.height-1;
	im.length=im.length-1;
		}, 1);
	
	}
	class nuclear_trash{
		kaboom(y) {
			var ava = document.getElementById('baton');
			ava.setAttribute('src','kaboom.gif');
		}
   }
   document.getElementById("knop").onclick=function(){
	   batareyka = new nuclear_trash();
	   batareyka.kaboom(4);
	   //document.location.href = "/public/flappy.html";
   }
}