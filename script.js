const form = document.getElementById("grantForm");

const modal = document.getElementById("successModal");

let applications=
JSON.parse(
localStorage.getItem("applications")
)||[];

form.addEventListener("submit",function(e){

e.preventDefault();

let application={

id:"APP-"+Date.now(),

name:name.value,

phone:phone.value,

date:new Date().toLocaleString()

};

applications.push(application);

localStorage.setItem(
"applications",
JSON.stringify(applications)
);

document.getElementById("appID")
.innerHTML=
"Application ID:<br><b>"+
application.id+
"</b>";

modal.style.display="flex";

form.reset();

});

function closeModal(){

modal.style.display="none";

}

function toggleFAQ(element){

let p=
element.nextElementSibling;

if(p.style.display==="block"){

p.style.display="none";

}else{

p.style.display="block";

}

}

let counter=
document.getElementById("grantCounter");

let number=247;

setInterval(()=>{

if(number>120){

number--;

counter.innerText=number;

}

},5000);