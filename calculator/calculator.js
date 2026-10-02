const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number')
console.log(buttons);

// numbers.forEach(number =>{
//     number.addEventListener('click', ()=>{
//        console.log(number.textContent)  
//     })
// })
buttons.forEach(button => {
    button.addEventListener('click', () =>{
       if (button.classList.contains('number')) {
    display.value = display.value + button.textContent;
}

        
        if(button.textContent === 'Ac' ){
            display.value= '';
        }
        if(button.textContent === 'del'){
            display.value = display.value.slice(0, -1);
        }
        if(button.textContent === '%'){
            display.value = Number(display.value)/100;
        }
        if (button.textContent === '+/-') {
    display.value = Number(display.value) * -1;
        }
        if(button.textContent === '.'){
            if(!display.value.includes('.')){
                display.value += '.';
            }
        }
        if (button.textContent === '+'){
            operator ='add';
            firstNumber = display.value;
            display.value = '';
        
        }else if(button.textContent === '-'){
            operator = 'subs';
            firstNumber = display.value;
            display.value = '';
             
        }else if(button.textContent === '*'){
            operator = 'mult';
            firstNumber = display.value;
            display.value = '';
              
        }else if(button.textContent === '/'){
            operator = 'div'
            firstNumber = display.value;
            display.value = '';
           
        };

      if( button.textContent === '='){
        let secondNumber = Number(display.value)
         if (operator === 'add') {
        display.value = Number(firstNumber) + secondNumber;
    }
    }
     if( button.textContent === '='){
        let secondNumber = Number(display.value)
         if (operator === 'subs') {
        display.value = Number(firstNumber) - secondNumber;
    }
    }
     if( button.textContent === '='){
        let secondNumber = Number(display.value)
         if (operator === 'mult') {
        display.value = Number(firstNumber) * secondNumber;
    }
    }
     if( button.textContent === '='){
        let secondNumber = Number(display.value)
         if (operator === 'div') {
        display.value = Number(firstNumber) / secondNumber;
    }
    }

        
        
       
    })
})

const display = document.querySelector('.input')

 
let operator;
let firstNumber;
let secondNumber;
