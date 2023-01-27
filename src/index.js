// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input")
  const subTotal = product.querySelector(".subtotal span")

  subTotal.textContent = Number(price.textContent)*Number(quantity.value)
  return Number(subTotal.textContent);
  
}

function calculateAll() {
  const allProducts = document.querySelectorAll(".product")
  const totalPriceElement = document.querySelector("#total-value span")
  let total = 0;

  allProducts.forEach(prod =>{
    updateSubtotal(prod)
    total+=updateSubtotal(prod)
  })

  totalPriceElement.textContent=total
}


function removeProduct(event) {
  const productToRemove = event.currentTarget.closest(".product")
  productToRemove.remove()
  calculateAll()

}

function createProduct() {
  let newNameToAdd = document.querySelector('.create-product [type="text"]')
  let newPriceToAdd = document.querySelector('.create-product [type="number"]')


  const tableBodyElement = document.querySelector("tbody")
  const line = document.querySelector(".product")
  const newLine = line.cloneNode(true)
  tableBodyElement.appendChild(newLine)

  let newLinePrice = newLine.querySelector('.price span');
  let newLineName = newLine.querySelector(".name span")
  newLine.querySelector(".quantity input").value = 1;

  newLinePrice.textContent=newPriceToAdd.value;
  newLineName.textContent=newNameToAdd.value;
  
  calculateAll()

  const newRemoveButton = newLine.querySelector(".btn.btn-remove")
  newRemoveButton.addEventListener("click",event => {
    removeProduct(event)
  }) 

  newPriceToAdd.value=0;
  newNameToAdd.value=""
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll(".btn.btn-remove")
  removeButton.forEach( btn => {
    btn.addEventListener("click", event => {
      removeProduct(event)
    })
  })

  const createButton = document.getElementById('create');
  createButton.addEventListener("click", createProduct)

      
})