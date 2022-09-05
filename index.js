let counter = document.getElementById("counter-el");
let entries = document.getElementById("entry");
let count = 0;

function add() {
    count += 1;
    counter.textContent = count;
}

function minus() {
    count -= 1;
    counter.textContent = count;
}

function save() {
    let saved =  " " + count + " - ";
    entries.textContent += saved;
    counter.textContent = 0;
    count = 0;
}

