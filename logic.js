let cookieButton = document.querySelector("#CookieButton")
let score = document.querySelector("#Score")
let cashMulti = document.querySelector("#CashMulti")
let upgrade1 = document.querySelector("#Upgrade1")

let cashMultiValue = 1





let scoreValue = 0

cookieButton.addEventListener("click", function() {
    score.innerText = scoreValue ++ * cashMultiValue
})

upgrade1.addEventListener("click", function() {

})
