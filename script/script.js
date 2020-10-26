function show_Date()
{
var D=new Date();
var current_houer=D.getHours();
var current_minute=D.getMinutes();
var current_second=D.getSeconds();
if(current_houer > 12)
    document.getElementById('ampm').innerHTML="PM";
else
    document.getElementById('ampm').innerHTML="AM";
if(current_houer == 0)
    current_houer=12;
if(current_houer > 12)
    current_houer=current_houer-12;

    document.getElementById('hour').innerHTML=current_houer;
    document.getElementById('min').innerHTML=current_minute;
    document.getElementById('sec').innerHTML=current_second;
}
setInterval("show_Date()",1000);
