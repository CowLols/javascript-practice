

let x;
let y;
let z;





document.getElementById("rollbtn").onclick=function(){
     x = Math.floor(Math.random() * 6) + 1;
     y = Math.floor(Math.random() * 6) + 1;
     z = Math.floor(Math.random() * 6 )+ 1;
    
    document.getElementById("xlabel").InnerHTML = x;
    document.getElementById("ylabel").InnerHTML = y;
    document.getElementById("zlabel").InnerHTML = z;
}
