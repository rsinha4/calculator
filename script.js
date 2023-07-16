let input = ""; //initially the input would be blank
let buttons = document.querySelectorAll('.button'); //lets button be buttons.

Array.from(buttons).forEach((button) => { //apply a function for each button
    button.addEventListener('click', (e) => { //add a click event listener on each button

        if (e.target.innerHTML == '=') { //if the = button is clicked
            input = eval(input); //evaluate the output 
            document.querySelector('input').value = input; //and print it 

        } else if (e.target.innerHTML == 'C') { //if else 'C' is clicked.
            input = "" //The input would again go blank
            document.querySelector('input').value = input; //blank input

        } else {
            console.log(e.target)
            input = input + e.target.innerHTML; // concatinate the buttons pressed on the calc.
            document.querySelector('input').value = input; //print the buttons pressed on the input screen.
        }

    })
})