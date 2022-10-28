let homeScore=document.getElementById('home-score')
let homeCount=0
let guestScore=document.getElementById('guest-score')
let guestCount=0

function homePlusOnePoint() {
    homeCount=homeCount+1
    homeScore.innerText=homeCount    
}

function homePlusTwoPoints() {
    homeCount=homeCount+2
    homeScore.innerText=homeCount
}

function homePlusThreePoints() {
    homeCount=homeCount+3
    homeScore.innerText=homeCount
}


function guestPlusOnePoint() {
    guestCount=guestCount+1
    guestScore.innerText=guestCount    
}

function guestPlusTwoPoints() {
    guestCount=guestCount+2
    guestScore.innerText=guestCount
}

function guestPlusThreePoints() {
    guestCount=guestCount+3
    guestScore.innerText=guestCount
}