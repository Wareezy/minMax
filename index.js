
//this code is ust simply inserting values
let btnInsert=document.querySelector('[data-insert]')


let displayMin=document.querySelector('[data-min]')
let displayMax=document.querySelector('[data-max]')

 

function find(){
    let input=document.querySelector('[data-add]').value
    let input2=document.querySelector('[data-add2]').value

let small=Math.min(input,input2)
let big=Math.max(input,input2)

displayMin.value=small
displayMax.value=big
}

btnInsert.addEventListener('click', find)