function entergame() {
    const startbtn = document.querySelector(".startbtn");
    const room1 = document.querySelector(".room1");
    const room2 = document.querySelector(".room2");
    const main1 = document.querySelector("#main1")

    startbtn.addEventListener("click", () => {
        room1.style.display = "none";
        room2.style.display = "flex";
        main1.style.display = "flex";
    });
}

entergame();

function finallyroom2(){
    const roombox2 = document.querySelector("#roombox2");
    const main1 = document.querySelector("#main1")
    const main2 = document.querySelector("#main2")

    roombox2.addEventListener("click", () =>{
        main1.style.display = "none";
        main2.style.display = "flex";
    })
}
finallyroom2()