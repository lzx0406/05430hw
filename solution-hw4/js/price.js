// Populating the detial page with customized info
const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const rollType = params.get('roll');
console.log(rollType);

// Initialize the image
const rollImage = document.querySelector('#roll-detail-img');
rollImage.src = 'assets/products/' + rolls[rollType].imageFile;

// Initialize the title
const detailTitle = document.querySelector('#detail-topic');
detailTitle.innerText = rollType + ' Cinnamon Roll';

// Initialize the price
const detailBasePrice = document.querySelector('#item_price');
detailBasePrice.innerText = "$" + rolls[rollType].basePrice;


// Initializing the dropdown
class Glazing {
  value;
  text;
  constructor(value, text) {
    this.value = value;
    this.text = text;
  }
}
let allGlazing = [new Glazing(0,"Keep Original"), new Glazing(0,"Sugar milk"), new Glazing(0.5,"Vanilla milk"), new Glazing(1.5,"Double chocolate")];

class Pack{
  value;
  text;
  constructor(value, text) {
    this.value = value;
    this.text = text;
  }
}
let allPack = [new Pack(1, '1'), new Pack(3, '3'), new Pack(5, '6'), new Pack(10, '12')];

let selectG = document.querySelector('#glazingOptions');
let selectP = document.querySelector('#packOptions');

for(var i = 0; i < allGlazing.length; i++) {
  var opt = allGlazing[i];
  var newop = document.createElement('option');
  newop.textContent = opt.text;
  newop.value = opt.value;
  selectG.appendChild(newop);
}

for(var i = 0; i < allPack.length; i++) {
  var opt = allPack[i];
  var newop = document.createElement('option');
  newop.textContent = opt.text;
  newop.value = opt.value;
  selectP.appendChild(newop);
}


// All other functions calculating new cost
let current = {
  base: Number(rolls[rollType].basePrice),
  glazing: Number(0),
  glazingText: "Keep Original",
  pack: Number(1),
  packDisplay: '1'
};

function glazingChange(element) {
  const glazeChange = element.value;
  current.glazing = glazeChange;
  const glazeName = element.text;
  current.glazingText = glazeName;

  current.element = document.querySelector('#item_price');
  const newP = (parseFloat(current.base) + parseFloat(current.glazing)) * parseFloat(current.pack);
  console.log("new price is " + newP);
  current.element.innerText = "$" + newP.toFixed(2); 
  }

function packChange(element) {
  const packChange = element.value;
  current.pack = packChange;
  const packName = element.options[element.selectedIndex].text;
  current.packDisplay = packName;

  current.element = document.querySelector('#item_price');
  const newP = (parseFloat(current.base) + parseFloat(current.glazing)) * parseFloat(current.pack);
  console.log("new price is " + newP);
  current.element.innerText = "$" + newP.toFixed(2); 
  }


// Initializing cart array
let cart = []
// Initializing the Roll class for adding to cart
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
  this.type = rollType;
  this.glazing = rollGlazing;
  this.size = packSize;
  this.basePrice = basePrice;
  }
}

function addToCart(){
  let newItem = new Roll(
    rollType,
    current.glazingText,
    current.packDisplay,
    current.base
  );
  cart.push(newItem);
  console.log(cart);
}