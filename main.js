
canvas = 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="#00B5C7";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.arc(200, 300, 80 ,0 , 2*Math.PI);
ctx.stroke();

color="#000000";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.arc(390, 300, 80 ,0 , 2*Math.PI);
ctx.stroke();

color="#DF0024";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.arc(580, 300, 80 ,0 , 2*Math.PI);
ctx.stroke();

color="#F4C300";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.arc(295, 389, 80 ,0 , 2*Math.PI);
ctx.stroke();

color="#009F3D";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=13;
ctx.arc(485, 389, 80 ,0 , 2*Math.PI);
ctx.stroke();
