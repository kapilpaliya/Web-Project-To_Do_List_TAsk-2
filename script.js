let data = document.getElementById("data");
let work = document.getElementById("work");

function add() {
    if (data.value == "") {
        alert("Pz Enter The Task :");
    }
    else {        
        let ch = document.createElement("li");
        ch.innerText = `${data.value}`;
        work.appendChild(ch);

        let rm = document.createElement("span");
        rm.innerHTML = "\u00d7";
        ch.appendChild(rm);
    }
    data.value = "";
}

work.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
}, false);