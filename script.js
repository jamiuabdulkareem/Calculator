const display = document.querySelector('.display-screen');
const button = document.querySelectorAll('button');

button.forEach((item) =>{
  item.onclick = () =>{
    if (item.id == 'clear') {
      display.innerText = '';
    } else if(item.id == 'backspace'){
      let string = display.innerText.toString();
      display.innerHTML = string.substr(0, string.length - 1);
    } else if (display.innerText != '' && item.id == 'equal'){
      display.innerText = eval(display.innerText);
    } else if (display.innerText == '' && item.id == 'equal'){
      display.innerText = '0';
      setTimeout(() => (display.innerText = ''),.2000);
    } else {
      display.innerText += item.id;
    }
  }
});

