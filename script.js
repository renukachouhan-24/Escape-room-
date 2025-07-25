function entergame() {
    const startbtn = document.querySelector(".startbtn");
    const room1 = document.querySelector(".room1");
    const room2 = document.querySelector(".room2");
    const main1 = document.querySelector("#main1")

    startbtn.addEventListener("click", () => {
        room1.style.display = "none";
        room2.style.display = "block";
        main1.style.display = "block";
    });
}

entergame();
