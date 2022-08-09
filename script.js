var div =document.createElement("div");
div.style.textAlign="center";
var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button= document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo);

var active=document.createElement("div");
active.setAttribute("id","active")

div.append(input,button,active);
document.body.append(div);

async function foo(){
    let res = document.getElementById("country").value;
    let url = `https://api.covid19api.com/dayone/country/${res}`;

    let result = await fetch(url);
    let result1 = await result.json();
    var index = result1.length-1;
    active.innerHTML=`Total Active Cases : ${result1[index].Active}<br><br>
    Total Recovered Cases : ${result1[index].Recovered} <br><br>
    Total Death : ${result1[index].Deaths}`
}

