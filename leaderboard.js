const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const country=document.getElementById("country");
const score=document.getElementById("score");
const button=document.getElementById("submitbutton");
const resultcontainers=document.getElementById("resultcontainer");

button.addEventListener("click",()=>{
  
    const resultcontainer=document.createElement("div");
    resultcontainer.classList.add("resultcontainer");

    resultcontainer.style.display="flex";
    resultcontainer.innerHTML=`
    <p class="name">${fname.value}</p>
    <p class="laname">${lname.value}</p>
    <p class="cname">${country.value}</p>
    <p class="sscore">${score.value}</p>
    <p class="deleteicon">&#x1f5d1;</p>
    `
    console.log(resultcontainer);
    resultcontainers.appendChild(resultcontainer);

})