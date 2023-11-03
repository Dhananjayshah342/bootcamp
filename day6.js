const myInput =document.getElementById('baigan');
myInput.getEventlistener('change', amankumar);

function amankumar(){
    const khakhaghumeho=prompt ('us me kha kha ghume ho');
    if(khakhaghumeho=='amankumar'){
        alert('correct');
    }else
    alert('wrong');
}