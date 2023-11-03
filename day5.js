// console.log(buttons);

const myinputfield = document.getElementById("usernsme");
const mybutton = document.getElementById("submitbutton");

mybutton.addEventListener("click",myclicklistner);

function myclicklistner(){
    alert(myinputfield.value)
}
