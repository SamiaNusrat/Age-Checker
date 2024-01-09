let input = document.getElementById("input")
var x = document.forms["myForm"]["fname"].value;

let adultDescription = document.getElementById("adultDescription")
let adultAge = document.getElementById("adultAge")

let childDescription = document.getElementById("childDescription")
let childAge = document.getElementById("childAge")

input.addEventListener('input', function()
{
    let age = parseInt(this.value)

    let adult = document.getElementById("adult") //Adult Card
    let child = document.getElementById("child") //Child Card

    if(age>=18)
    {
        adult.style.display='block'
        child.style.display='none'
        adultAge.innerText=age+" Years Old"
        adultDescription.innerText = "You Are An Adult"
        
    }
    else if(age<18)
    {
        adult.style.display='none'
        child.style.display='block'
        childAge.innerText=age+" Years Old"
        childDescription.innerText = "You Are A Child"
    }

    else if(x == "") 
    {
        adult.style.display='block'
        child.style.display='block'
    }    
})