let current = {
  price: Number(0),
  base: Number(2.49),
  glazing: Number(0),
  pack: Number(1)
};

function glazingChange(element) {
  const glazeChange = element.value;
  current.glazing = glazeChange;

  current.element = document.querySelector('#item_price');
  const newP = (parseFloat(current.base) + parseFloat(current.glazing)) * parseFloat(current.pack);
  console.log("new price is " + newP);
  current.element.innerText = "$" + newP.toFixed(2); 
  }

function packChange(element) {
  const packChange = element.value;
  current.pack = packChange;

  current.element = document.querySelector('#item_price');
  const newP = (parseFloat(current.base) + parseFloat(current.glazing)) * parseFloat(current.pack);
  console.log("new price is " + newP);
  current.element.innerText = "$" + newP.toFixed(2); 
  }