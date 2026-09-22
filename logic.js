
let cookieButton = document.querySelector("#CookieButton")
let score = document.querySelector("#Score")
let cashMulti = document.querySelector("#CashMulti")
let Buystatus = document.querySelector("#status")


let autoClick = document.querySelector("#AutoclickerUpgrade")

let autoClickers = 0
let autoCashPerSecond = 5
let autoclickPrice = 150


let rebirth = document.querySelector("#Rebirth")

let rebirthRequirements = 1000
let rebirthCount = 1
let rebirthCashMultiplier = 1


let upgrade1 = document.querySelector("#upgrade1")
let upgrade2 = document.querySelector("#upgrade2")
let upgrade3 = document.querySelector("#upgrade3")


let currentUpgrade1 = 1
let currentUpgrade2 = 1
let currentUpgrade3 = 1


let upgrade1Price = 10
let upgrade2Price = 25
let upgrade3Price = 120

let cash = 0

let cashMultiValue = 1
let cashPerClick = 1


function updateScore() {
    score.innerText = Math.round(cash).toLocaleString()
}


let statusTimer = 2000

function showStatus(message){

    Buystatus.innerText = message

    clearTimeout(statusTimer)

    statusTimer = setTimeout(function(){
        Buystatus.innerText = ""
    }, 2000)
}

// ==========================================================
// COOKIE

cookieButton.addEventListener("click", function(){

    cash += cashPerClick * cashMultiValue

    updateScore()

    cookieButton.classList.remove("clicked")

    void cookieButton.offsetWidth

    cookieButton.classList.add("clicked")
})

// ==========================================================
// AUTOCLICKER

autoClick.addEventListener("click", function(){

    let price = autoclickPrice

    if (cash >= price) {

        cash -= price

        autoClickers += 1

        autoclickPrice = Math.round(autoclickPrice * 2)

        updateScore()

        autoClick.querySelector("p").innerText =
            "🖱️ Autoclicker: " + autoclickPrice.toLocaleString()

        showStatus("Autoclicker bought!")

    } else {

        showStatus("Not enough Cash")
    }
})

// ==========================================================
// AUTOCLICKER

setInterval(function(){

    if (autoClickers > 0) {

        cash += autoCashPerSecond * autoClickers * cashMultiValue

        updateScore()
    }

}, 1000)

//=================================================================
// UPGRADE 2

upgrade1.addEventListener("click", function(){

    let price = upgrade1Price * currentUpgrade1

    if (cash >= price){

        cash -= price

        cashMultiValue =
            Math.round((cashMultiValue + 0.5) * 10) / 10

        currentUpgrade1 += 1

        updateScore()

        cashMulti.textContent =
            "💸 Cash Multiplier: " + cashMultiValue

        let nextPrice =
            upgrade1Price * currentUpgrade1

        upgrade1.querySelector("p").innerText =
            "💰 More sell price: " + nextPrice.toLocaleString()

        showStatus("Upgrade bought!")

    } else {
        showStatus("Not enough Cash")
    }
})

//=================================================================
// UPRGADE 2

upgrade2.addEventListener("click", function(){

    let price = upgrade2Price * currentUpgrade2

    if (cash >= price){

        cash -= price

        cashMultiValue =
            Math.round((cashMultiValue + 0.75) * 10) / 10

        currentUpgrade2 += 1

        updateScore()

        cashMulti.textContent =
            "💸 Cash Multiplier: " + cashMultiValue

        let nextPrice =
            upgrade2Price * currentUpgrade2

        upgrade2.querySelector("p").innerText =
            "🏷️ Cheaper Groceries: " + nextPrice.toLocaleString()

        showStatus("Upgrade bought!")

    } else {
        showStatus("Not enough Cash")
    }
})

//=================================================================
// UPGRADE 3

upgrade3.addEventListener("click", function(){

    let price = upgrade3Price * currentUpgrade3

    if (cash >= price){

        cash -= price

        cashMultiValue =
            Math.round((cashMultiValue + 1.25) * 10) / 10

        currentUpgrade3 += 1

        updateScore()

        cashMulti.textContent =
            "💸 Cash Multiplier: " + cashMultiValue

        let nextPrice =
            upgrade3Price * currentUpgrade3

        upgrade3.querySelector("p").innerText =
            "🔥 Industrial oven: " + nextPrice.toLocaleString()

        showStatus("Upgrade bought!")

    } else {
        showStatus("Not enough Cash")
    }
})

//=================================================================
// REBIRTH

rebirth.addEventListener("click", function(){

    let price = rebirthRequirements * rebirthCount

    if (cash >= price){

        cash = 0

        autoClickers = 0
        autoCashPerSecond = 50
        autoclickPrice = 150

        currentUpgrade1 = 1
        currentUpgrade2 = 1
        currentUpgrade3 = 1

        upgrade1Price = 10
        upgrade2Price = 25
        upgrade3Price = 120

        rebirthCount += 1
        rebirthCashMultiplier += 1
        cashMultiValue = rebirthCashMultiplier
        cashPerClick = rebirthCount

        updateScore()

        cashMulti.textContent = "💸 Cash Multiplier: " + cashMultiValue

        autoClick.querySelector("p").innerText = "🖱️ Autoclicker: 150"

        upgrade1.querySelector("p").innerText = "💰 More sell price: 10"

        upgrade2.querySelector("p").innerText = "🏷️ Cheaper Groceries: 25"

        upgrade3.querySelector("p").innerText = "🔥 Industrial oven: 120"

        showStatus("You successfully Rebirthed!")

    } else {

        let needed = price - cash

        showStatus(
            "Not enough Cash! Need " +
            needed.toLocaleString() +
            " more."
        )
    }
})

