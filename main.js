let num1 = 0;

let num2 = 0


let button =  document.querySelector('.btn1')

let button2 = document.querySelector('.btn2')

let button3 = document.querySelector('.btn3')
console.log(button)

console.log(button2)

console.log(button3)

button.addEventListener('click', () => {

    
    num1 = num1 + 1
    console.log(num1)
    p.textContent = num1
})
button2.addEventListener("click", () => {
    console.log('+1')
    num2 = num2 + 1 
    p3.textContent = num2


})

button3.addEventListener("click", () => {

num1 = 0
num2 = 0
p.textContent = num1
p3.textContent = num2

})

let p = document.querySelector('.p1')

let p3 = document.querySelector('.p3')

