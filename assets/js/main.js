
/* javascript */

let goggles = document.querySelector(".goggles");
let text = document.querySelector(".text");
let main = document.querySelector("main");

goggles.addEventListener("mouseover", function(){
    this.src = "assets/img/Fog.png"
    this.style.cursor = "not-allowed";
    text.innerText = "Yeah Right.";
    main.style.transition = '1s'
    main.style.opacity = 1;
    });

goggles.addEventListener("mouseout", function () {
    
    this.src = "assets/img/Speedo_Speed_Socket.png"
    text.innerText = "Anti-Fog lens with UV Protection";
    this.style.cursor = "pointer";
    main.style.transition = '10s'
    main.style.opacity = 0;
    });




