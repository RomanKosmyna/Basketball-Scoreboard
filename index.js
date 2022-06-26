let countHome = 0;
let countGuest = 0;

let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

// HOME ELEMENT STARTS //
function addOneHome() {
    countHome += 1;
    homeEl.textContent = countHome;
}

function addTwoHome() {
    countHome += 2;
    homeEl.textContent = countHome;
}

function addThreeHome() {
    countHome += 3;
    homeEl.textContent = countHome;
}

function resetHome() {
    homeEl.textContent = 0;
    countHome = 0;
}
// HOME ELEMENT ENDS //

// GUEST ELEMENT STARTS //
function addOneGuest() {
    countGuest += 1;
    guestEl.textContent = countGuest;
}

function addTwoGuest() {
    countGuest += 2;
    guestEl.textContent = countGuest;
}

function addThreeGuest() {
    countGuest += 3;
    guestEl.textContent = countGuest;
}

function resetGuest() {
    guestEl.textContent = 0;
    countGuest = 0;
}
// GUEST ELEMENT ENDS //