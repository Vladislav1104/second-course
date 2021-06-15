let symbols = ['C','1', '2', '3', '+', '4', '5', '6', '-','7', '8', '9', '/', '0', '.', '=', '*'];

let calc = document.getElementsByClassName('calc')[0];
    
let text = document.createElement('p');
text.className = 'text_area';
calc.appendChild(text);

symbols.forEach(function (symbol) {
    var symbolElement = document.createElement('div');
    symbolElement.className = 'btn';        
    symbolElement.innerHTML = symbol;
    calc.appendChild(symbolElement);
});

document.querySelectorAll('.btn').forEach(function (button) {
    button.addEventListener('click', onButtonClick);
});

function onButtonClick(btn_click) {
    if (btn_click.target.innerHTML === 'C') {
        text.innerHTML = '0';
    } else if (btn_click.target.innerHTML === '=') {
        try{
            text.innerHTML = eval(text.innerHTML);
        }
        catch{
            text.innerHTML = 'invalid input';
        }
        
    } else if (text.innerHTML === '0' && btn_click.target.innerHTML !== '.') {
        text.innerHTML = btn_click.target.innerHTML;
    } else {
        text.innerHTML += btn_click.target.innerHTML;
    }
};