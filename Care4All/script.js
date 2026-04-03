let requestCount = 0;

document.getElementById("supportForm").addEventListener("submit", function(e){

e.preventDefault();

requestCount++;

document.getElementById("response").innerText =
"Your request has been recorded. Our healthcare volunteers will contact you within 24 hours.";

});



document.getElementById("volunteerForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("volunteerResponse").innerText =
"Thank you for registering as a volunteer. Our NGO team will reach out soon.";

});



function typeEffect(text, elementId){

let i = 0;
let speed = 30;

function typing(){
if(i < text.length){
document.getElementById(elementId).innerHTML += text.charAt(i);
i++;
setTimeout(typing,speed);
}
}

document.getElementById(elementId).innerHTML="";
typing();
}


function chatbot(){

let question = document.getElementById("chatInput").value.toLowerCase();
let response="";

if(question.includes("fever")){
response="For fever, please drink fluids, rest well, and consult a doctor if fever persists.";
}
else if(question.includes("covid")){
response="If you suspect COVID symptoms, isolate and contact your healthcare provider.";
}
else if(question.includes("emergency")){
response="For emergencies please contact your nearest hospital immediately.";
}
else{
response="Thank you for your question. Our healthcare volunteers will guide you soon.";
}

typeEffect(response,"chatResponse");

}



function showSummary(){

document.getElementById("summary").innerText =
"Total Patient Requests Received: " + requestCount;

}