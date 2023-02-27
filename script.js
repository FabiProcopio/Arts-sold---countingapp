const button = document.getElementById('button');
const name = document.getElementById('selection');
const format = document.getElementById('format');
const price = document.getElementById('price');

const result = document.getElementById('result');


function deleteLastInput() {
  let list = document.getElementById('myList');
  list.removeChild(list.childNodes[list.childNodes.length - 1]);
}


var currentdate = new Date(); 
var datetime = "Selling time:" + currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

const sales = () => {

  
  let result = document.getElementById('price').value;
    if (result != "") {
      let list = document.getElementById('myList');
      let item = document.createElement('li');
      item.innerHTML = `${name.value} -- ${format.value} -- ${result} R$ <br>          ${datetime}`;
      list.appendChild(item);

  
      document.getElementById('price').value='';
    }


}

button.addEventListener('click', sales);

