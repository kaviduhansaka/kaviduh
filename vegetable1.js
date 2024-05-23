const priceRange = document.getElementById('priceRange');
const priceOutput = document.getElementById('priceOutput');

priceRange.addEventListener('input', function() {
  priceOutput.value = '$' + this.value;
});




 function addToCart() {

  if (quantity >= 1 && quantity <= 20) {
    // Add the item to the cart with the specified quantity
    alert("Added " + quantity + " items to the cart!");
    // Here you can add code to actually add the item to the cart
  } else {
    alert("Please enter a quantity between 1 and 20.");
  }
}
