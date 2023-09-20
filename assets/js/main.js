
/* javascript */
let targetElement1 = document.querySelector("h2");

targetElement1.addEventListener("mouseover", mouseoverHandler);

function mouseoverHandler() {
    console.log(this.innerText);
    this.innerText = "Yeah Right.";
    this.style = "cursor: wait";
    }

targetElement1.addEventListener("mouseout", function () {
    this.innerText = "Anti-fog lens with UV Protection";
    this.style = "cursor: pointer";
    });



    
// let targetElement2 = document.querySelector(".goggles img");

// targetElement2.addEventListener("mouseover", mouseoverHandler);

// function mouseoverHandler() {
//     this.src = "assets/img/Fog.png";
//     this.style.cursor = "wait";
// }

// targetElement2.addEventListener("mouseout", function () {
//     this.src = "assets/img/Speedo_Speed_Socket.png";
//     this.style = cursor = "pointer";
// });





