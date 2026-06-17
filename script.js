// OPEN WINDOWS

function openWindow(id){
    document.getElementById(id).style.display = "block";
}

// CLOSE WINDOWS

function closeWindow(id){
    document.getElementById(id).style.display = "none";
}

// START MENU

const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");

startBtn.addEventListener("click", () => {

    if(startMenu.style.display === "block"){
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }

});

// LIVE CLOCK

function updateClock(){

    const now = new Date();

    const clock = document.getElementById("clock");

    clock.innerHTML =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

}

setInterval(updateClock, 1000);

updateClock();

// ARCHIVE PASSWORD

function unlockArchive(){

    const password =
        document.getElementById(
            "archivePassword"
        ).value;

    const result =
        document.getElementById(
            "archiveResult"
        );

    // CHANGE THIS LATER

    if(password === "PASSWORD_HERE"){

        result.innerHTML = `
        <h3>Entry 000</h3>

        <p>
        Replace this with your real
        message later.
        </p>
        `;

    }

    else{

        result.innerHTML = `
        Incorrect password.
        `;

    }

}

// DRAGGABLE WINDOWS

const windows =
document.querySelectorAll(".window");

windows.forEach(win => {

    const titlebar =
    win.querySelector(".titlebar");

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;

    titlebar.addEventListener(
        "mousedown",
        (e)=>{

        dragging = true;

        offsetX =
        e.clientX -
        win.offsetLeft;

        offsetY =
        e.clientY -
        win.offsetTop;

    });

    document.addEventListener(
        "mousemove",
        (e)=>{

        if(!dragging) return;

        win.style.left =
        e.clientX - offsetX + "px";

        win.style.top =
        e.clientY - offsetY + "px";

    });

    document.addEventListener(
        "mouseup",
        ()=>{

        dragging = false;

    });

});

// WELCOME MESSAGE

setTimeout(() => {

    const note =
    document.createElement("div");

    note.innerHTML =
    "Welcome back.";

    note.style.position = "fixed";
    note.style.top = "20px";
    note.style.right = "20px";

    note.style.padding = "12px 18px";

    note.style.background =
    "rgba(255,255,255,.15)";

    note.style.backdropFilter =
    "blur(20px)";

    note.style.borderRadius =
    "12px";

    note.style.color =
    "white";

    document.body.appendChild(note);

    setTimeout(()=>{
        note.remove();
    },3000);

},1000);
