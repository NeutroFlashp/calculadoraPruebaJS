window.addEventListener('load', () =>{ /*escucha cuando carga completamente el html*/
    const display = document.querySelector('.calculator-display');/*buscar el primer elemento que encuentre de la clase*/
    const keypadButtons = document.getElementsByClassName('keypad-buttons');/*buscar elementos por nombre de clase - Botones guardados en constante*/

    const keypadButtonsArray = Array.from(keypadButtons);/*convertir los elementos encontrados a array*/

    /*iterar por el array de botones*/
    keypadButtonsArray.forEach ((button)=>{
        /*se agrega listener a los botones*/
        button.addEventListener('click',()=>{
            /*console.log(button.innerHTML) imprimir por consola numero por click de eventos*/
            calculadora(button,display)
        })
    })

    function calculadora(button,display){
        switch(button.innerHTML){
           case 'C':
                borrar(display);
                break;
            case '=':
                calcular(display);
                break;
            default:
                actualizar(display, button);
                break;
        }
    }

    function calcular(display){
        display.innerHTML = eval(display.innerHTML)/*toma el string ,resuelve la operacion y lo guarda en el innerHTML del display*/
    }

    function actualizar(display,button){
        if(display.innerHTML == 0){
            display.innerHTML = '';
        }
        display.innerHTML += button.innerHTML
    }

    function borrar(display){
        display.innerHTML = 0;
    }
});