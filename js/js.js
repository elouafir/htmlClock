$(document).ready(function(){setInterval("set()", 1000);});
function set(){
var time=new Date().toLocaleTimeString()
var parts = time.split(":");
var degS=(parts[2]*6);
$('#b').css('-webkit-transform','rotate('+ degS +'deg)');

var degM=(parts[1]*6);
$('#g').css('-webkit-transform','rotate('+ degM +'deg)');
	if (parts[0] >= 13) {
		parts[0] = parts[0] - 12 + "";
	} else if (parts[0] == "0") {
		parts[0] = "12";
	}
var degH=( parts[0] * 30 )	;
degH+=(0.5*parts[1]);
$('#p').css('-webkit-transform','rotate('+ degH +'deg)');

if(parts[2]%2==0){
$('#pondul').css('-webkit-transform','rotate(30deg)');
}
else{
$('#pondul').css('-webkit-transform','rotate(-30deg)');
}
}
//30