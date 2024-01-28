let inp = document.getElementById('input');
let btn=document.querySelectorAll('.button');
let string="";
        
let array = Array.from(btn);

array.forEach(button => {
    button.addEventListener('click', e => {

        if(e.target.innerHTML =="=") {
        string = eval(string);
        inp.value = string;
        } 
        else if(e.target.innerHTML == "C"){
            string = "";
            inp.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            inp.value = string;
        }
        else{
            string=string+e.target.innerHTML;
            inp.value = string;
        }
    })
})