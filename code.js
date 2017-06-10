var columns=5;
var rows=5;
var fps=60;

var tiles=[];
tiles[0]="x.png";

var state=[]; for(i=0; i<columns*rows; i++){state[i]=0;}


var coinwidth=Math.min(Math.floor((window.innerWidth-200)/columns), Math.floor((window.innerHeight-200)/rows));
var coinheight=coinwidth;

var deskcontents="<table style=\"position:absolute; left:100px;\">";

for(i=0; i<rows; i++){
  deskcontents=deskcontents+"<tr>";
  for(j=0; j<columns; j++){
    deskcontents=deskcontents+"<td style=\"width:"+coinwidth+"px; height:"+coinheight+"px;\" id=\"H"+(columns*i+j)+"\" onclick=\"flip("+(columns*i+j)+")\" class=\"holder\"><img style=\"width:"+coinwidth+"px; height:"+coinheight+"px;\" id=\""+(columns*i+j)+"\" src=\"\" draggable=\"false\"></img></td>"
  }
  deskcontents=deskcontents+"</tr>"
}

deskcontents=deskcontents+"</table>"

document.getElementById("desk").innerHTML=deskcontents;

function dynamicresize(){
  coinwidth=Math.min(Math.floor((window.innerWidth-200)/columns), Math.floor((window.innerHeight-200)/rows));
  coinheight=coinwidth;
  for(i=0; i<rows*columns; i++){
    document.getElementById("H"+i).style.width=coinwidth+"px";
    document.getElementById("H"+i).style.height=coinheight+"px";
    document.getElementById(i).style.width=coinwidth+"px";
    document.getElementById(i).style.height=coinheight+"px";
  }
  setTimeout(dynamicresize, 1000/fps);
}

dynamicresize();
