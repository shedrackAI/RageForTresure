const healthBar = document.querySelector(".heartBar");
const foodBar = document.querySelector(".foodBar");

let healthBarLevel = 100;
let fooodBarLevel = 100;


function healthBarCalculation() {
    healthBar.style.width = healthBarLevel + "%";
    foodBar.style.width = fooodBarLevel + "%";
    setInterval(() => {
        healthBar.style.width = healthBarLevel + "%";
        foodBar.style.width = fooodBarLevel + "%";
        fooodBarLevel -= 0.5;
        if (fooodBarLevel <= 0) {
            healthBarLevel -= 0.7
        }
    }, 10000);
}

(function() {
    healthBarCalculation();
})()