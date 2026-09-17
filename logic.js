let cookieButton = document.querySelector("#CookieButton")
let score = document.querySelector("#Score")
let cashMulti = document.querySelector("#CashMulti")

// upgrades --------------------------------------------------
let upgrade1 = document.querySelector("#upgrade1")
let upgrade2 = document.querySelector("#upgrade2")
let upgrade3 = document.querySelector("#upgrade3")
// -----------------------------------------------------------

let cashMultiValue = 1
let cashPerClick = 1
// --------------------------
let currentUpgrade1 = 1
let currentUpgrade2 = 1
let currentUpgrade3 = 1

let upgrade1Price = 10
let upgrade2Price = 25
let upgrade3Price = 120
// ------------------------------
let scoreValue = 0
let cash = scoreValue

// --------
let Buystatus = document.querySelector("#status")
// -------

cookieButton.addEventListener("click", function() {
    cash += cashPerClick * cashMultiValue
    score.innerText = Math.round(cash).toLocaleString()

    // Start animation
    cookieButton.classList.remove("clicked")
    void cookieButton.offsetWidth
    cookieButton.classList.add("clicked")
})

upgrade1.addEventListener("click", function() {
    let pricecount = upgrade1Price * currentUpgrade1
    let price = pricecount * currentUpgrade1

    console.log(cash)
    console.log(price)

    if(cash >= price){
    cash -= price
    score.innerText = Math.round(cash).toLocaleString()

    cashMultiValue = Math.round((cashMultiValue + 0.5) * 10) / 10
    cashMulti.textContent = "Cash Multiplier: " + cashMultiValue

    currentUpgrade1 += 1

    pricecount = upgrade1Price * currentUpgrade1
    price = pricecount * currentUpgrade1
    upgrade1.innerText = "More sell price: " + price
    Buystatus.innerText = "good"
    }else{
        Buystatus.innerText = "Error"
    }

})

upgrade2.addEventListener("click", function() {
    let pricecount = upgrade2Price * currentUpgrade2
    let price = pricecount * currentUpgrade2

    console.log(cash)
    console.log(price)

    if(cash >= price){
    cash -= price
    score.innerText = Math.round(cash)

    cashMultiValue = Math.round((cashMultiValue + 0.75) * 10) / 10
    cashMulti.textContent = "Cash Multiplier: " + cashMultiValue

    currentUpgrade2 += 1

    pricecount = upgrade2Price * currentUpgrade2
    price = pricecount * currentUpgrade2
    upgrade2.innerText = "Cheaper Groceries: " + price
    Buystatus.innerText = "good"
    }else{
        Buystatus.innerText = "Error"
    }

})

upgrade3.addEventListener("click", function() {
    let pricecount = upgrade3Price * currentUpgrade3
    let price = pricecount * currentUpgrade3

    console.log(cash)
    console.log(price)

    if(cash >= price){
    cash -= price
    score.innerText = Math.round(cash)

    cashMultiValue = Math.round((cashMultiValue + 1.25) * 10) / 10
    cashMulti.textContent = "Cash Multiplier: " + cashMultiValue

    currentUpgrade3 += 1

    pricecount = upgrade3Price * currentUpgrade3
    price = pricecount * currentUpgrade3
    upgrade3.innerText = "Cheaper Groceries: " + price
    Buystatus.innerText = "good"
    }else{
        Buystatus.innerText = "Error"
    }

})

