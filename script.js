function choose(element) {

    // obtaining the select information
    const types_animal = document.querySelector('#animal')
    // obtaining the chosen value
    const chosen_animal = types_animal.value
    // displayin the an alert for the chosen animal
    alert(" You are looking for a : " + chosen_animal)
    
}
function remove_donate(element) {

    // use .remove to remove the chosen element  with onclick = function(this)
    element.remove()
    // change css of the element: from justify-content = space between to  space-evenly
    document.getElementById('nav_layout').style.justifyContent = "space-evenly"

}

function add_pettings1(element) {
    
    // obtain element (span) using id first and then second term is the children i want.
    const span = document.querySelector("#pettings1 span")
    // obtain inner text from element
    const text = span.innerHTML
    // change text into integers with parseInt
    const numero = parseInt(text)
    // add a 1 every time the button like is clicked
    numero_plus = numero + 1
    // take the element span and change it with the addition of likes
    span.innerHTML = numero_plus

    
}

function add_pettings2(element) {
    
    // obtain element (span) using id first and then second term is the children i want.
    const span = document.querySelector("#pettings2 span")
    // obtain inner text from element
    const text = span.innerHTML
    // change text into integers with parseInt
    const numero = parseInt(text)
    // add a 1 every time the button like is clicked
    numero_plus = numero + 1
    // take the element span and change it with the addition of likes
    span.innerHTML = numero_plus

    
}
function add_pettings3(element) {
    
    // obtain element (span) using id first and then second term is the children i want.
    const span = document.querySelector("#pettings3 span")
    // obtain inner text from element
    const text = span.innerHTML
    // change text into integers with parseInt
    const numero = parseInt(text)
    // add a 1 every time the button like is clicked
    numero_plus = numero + 1
    // take the element span and change it with the addition of likes
    span.innerHTML = numero_plus

    
}


