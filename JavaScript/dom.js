// select paragraph tag using id
// var para = document.getElementById("one")
// console.log(para.textContent);
// para.textContent = "Bye"

// var title = document.getElementById("title")
// console.log(title.textContent);
// title.textContent = "Bye World!"

/* Events & Eventhandler */

// var title = document.getElementById("title")
// console.log(title.textContent);
// title.textContent = "Bye World!"

// function change() 
// {
//     title.textContent = "Bye World!"
// }

// change()

/* Exercise */

// var num1 = document.getElementById("num1")
// var num2 = document.getElementById("num2")
// var p = document.getElementById("result")

// function add() 
// {
//     var total = Number(num1.value) + Number(num2.value)
//     console.log(total);
//     p.textContent = "Total: " + total
// }

/* Random Numbers */

// var a = Math.random()

// console.log(a*10);
// console.log(Math.floor(a*10)+1);

// var b = Math.floor(1.99) // Downwords and roundup

// console.log(b); // 1

/* Guess the number project */

// Select input box, para
var guestNumber = document.getElementById("guestNumber")
var result = document.getElementById("Result")
// var randomNumber = Math.floor(Math.random()*10) + 1
var score = document.getElementById("Score")
var totalScore = 10
guestNumber.value = ""

function check()
{
    var randomNumber = Math.floor(Math.random()*10) + 1
    var enteredNumber = guestNumber.value 
    if (randomNumber == enteredNumber) { 
        console.log(randomNumber);
        console.log("Right");
        result.textContent = "Right"
        alert("You Won!!!!")
    } else {
        totalScore = totalScore - 1
        console.log(randomNumber);
        console.log("Wrong");
        result.textContent = "Wrong"
        score.textContent = "Score: " + totalScore 

        // ✅ Check if score has reached 0
        if (totalScore <= 0) {
            alert("You Lost! Game Over ❌")
        }
    }

    // ✅ Clear the input for the next try
    guestNumber.value = ""
}