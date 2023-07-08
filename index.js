
var box = document.getElementById('box')

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var btn6 = document.getElementById('btn6')
var btn7 = document.getElementById('btn7')
var btn8 = document.getElementById('btn8')
var btn9 = document.getElementById('btn9')
var btnp = document.getElementById('btnp')
var btnmul = document.getElementById('btnmul')
var btnsub = document.getElementById('btnsub')
var btndel = document.getElementById('btndel')
var btndot = document.getElementById('btndot')
var btndiv = document.getElementById('btndiv')
var btneq = document.getElementById('btneq')

console.log(btn1.innerHTML)

box.value = ""

btn1.addEventListener("click", function () {
    box.value += btn1.innerHTML
})

btn2.addEventListener("click", function () {
    box.value += btn2.innerHTML
})
btn3.addEventListener("click", function () {
    box.value += btn3.innerHTML
})

btn4.addEventListener("click", function () {
    box.value += btn4.innerHTML
})
btn5.addEventListener("click", function () {
    box.value += btn5.innerHTML
})

btn6.addEventListener("click", function () {
    box.value += btn6.innerHTML
})
btn7.addEventListener("click", function () {
    box.value += btn7.innerHTML
})

btn8.addEventListener("click", function () {
    box.value += btn8.innerHTML
})
btn9.addEventListener("click", function () {
    box.value += btn9.innerHTML
})

btndot.addEventListener("click", function () {
    box.value += btndot.innerHTML
})

btnsub.addEventListener("click", function () {
    box.value += btnsub.innerHTML
})

btnp.addEventListener("click", function () {
    box.value += btnp.innerHTML
})
btndel.addEventListener("click", function () {
    var current =box.value
    var updateValue=current.slice(0,-1)
    box.value=updateValue
})
btnmul.addEventListener("click", function () {
    box.value += btnmul.innerHTML
})
btndiv.addEventListener("click", function () {
    box.value += btndiv.innerHTML
})


btnclr.addEventListener("click", function () {
    box.value=""
})




btneq.addEventListener("click", function () {


    console.log()
    var evaluate = eval(box.value)
    box.value = ""
    box.value += evaluate
})














