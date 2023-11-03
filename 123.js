const myinput = document.getelementById('name');
const mybutton = document.getelementById('submitbutton');

mybutton.addelementlistner('click',function9(){
    const userInput = myinput.value;
    if(userinput.length<3){
        alert("length should be more than 3");
    }else if(userInput.lengt> 10){
        alert("length should be less than 10");
    }else{
        for(let i=0 ;i<userinput.length;i++){
            if(userinput[i]<'0'){
                alert("should be number");
                break;
            }
            if(userinput[i]>'9'){
                alert("should be number");
                break;
            }
        }
    }
})