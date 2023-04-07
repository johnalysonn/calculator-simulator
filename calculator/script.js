let screen = document.querySelector('#screen');
let reset = document.querySelector('input#reset')
let remove = document.querySelector('input#delete');
let calc = document.querySelector('input#result')

function actionbutton(valor){
    if(screen.value == 'ERROR!'){
        screen.value = valor;
    }
    else{
        screen.value += valor;
    }
}
reset.onclick = function(){
    screen.value = '';
}
remove.onclick = function(){
    let value = screen.value;
    screen.value = value.substring(0, value.length - 1);
}
calc.onclick = function(){
    let value = screen.value;
    if(value){
        if(eval(value)==null){
            screen.value = 'ERROR!';
        }
        else{
            screen.value = eval(value);
        }
    }else{
        screen.value = 'ERROR!';
    }
}