let basketQuantity = 0
const quantityToAdd = document.querySelector('.basketquantity');
let lupa = document.querySelector('.za-lupa');
let basket = document.querySelector('.basket');
const glass = document.querySelector('.glass');
const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.basket');
const closeBtn = document.querySelector('.close-btn');




function checkBasketQuantity(){
  const addToBasket = document.querySelector('.addtobasket');
  const quantityToAdd = document.querySelector('.basketquantity');
  addToBasket.addEventListener('click', function () {
    basketQuantity += +quantityToAdd.value;
    console.log(basketQuantity);
    glass.classList.add('activated');
    sidebar.classList.add('open');
  });
} 



function plusAndMinus(){
  const plus = document.querySelector('.plus');
  const minus = document.querySelector('.minus');
  let newValToAdd = +quantityToAdd.value;
  plus.addEventListener('click', function(){
    newValToAdd += 1;
    quantityToAdd.value = newValToAdd;
  });  
  minus.addEventListener('click', function(){
    if(newValToAdd <= 1){
      return;
    }
    else{
      newValToAdd -= 1;
      quantityToAdd.value = newValToAdd;
    }
  });
}


function checkOpenSidebar() {
  openBtn.addEventListener('click', function () {
    sidebar.classList.add('open');
    glass.classList.add('activated');
  });
  closeBtn.addEventListener('click', function () {
    closeSidebar();
  });
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !openBtn.contains(event.target) && !document.querySelector('.addtobasket').contains(event.target)) {
      closeSidebar();
    }
  });
  function closeSidebar() {
    sidebar.classList.remove('open');
    glass.classList.remove('activated');
  }
}

let radioBatonchik = () => {
  const radioButtons = document.querySelectorAll('.radio-button input[type="radio"]');
  radioButtons.forEach(element => {
    if(element.classList.contains('checked')){
      element.style.backgroundColor = 'red'
    }
  })
}

const addToBasketButton = document.querySelector('.add-to-basket');
let timeout;


radioBatonchik()
checkOpenSidebar()
checkBasketQuantity()
plusAndMinus()