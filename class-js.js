// Define objects to store prices
var prices = {
    milk: {
      "Regular": 0,
      "Almond": 1.00,
      "Coconut": 1.50
    },
    size: {
      "Small": 2.00,
      "Medium": 3.00,
      "Large": 4.00
    },
    iceCreamFlavor: {
      "Vanilla": 1.00,
      "Chocolate": 1.00,
      "Strawberry": 1.50
    },
    toppings: {
      "Whipped Cream": 0.50,
      "Chocolate Chips": 0.75,
      "Sprinkles": 0.50
    }
  };
  
  // Function to calculate the total bill
  function calculateBill() {
    var totalBill = 0;
  
    // Get selected options
    var selectedMilk = document.getElementById("milkType").value;
    var selectedSize = document.querySelector('input[name="size"]:checked').value;
    var selectedIceCreamFlavor = document.getElementById("iceCreamFlavor").value;
    var selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(input => input.value);
  
    // Calculate total bill
    totalBill += prices.milk[selectedMilk];
    totalBill += prices.size[selectedSize];
    totalBill += prices.iceCreamFlavor[selectedIceCreamFlavor];
    selectedToppings.forEach(function(topping) {
      totalBill += prices.toppings[topping];
    });
  
    // Display the total bill
    var billElement = document.getElementById("bill");
    billElement.innerHTML = "<p>Total: $" + totalBill.toFixed(2) + "</p>";
  }
  
  // Add event listener to the calculate button
  document.getElementById("calculateButton").addEventListener("click", calculateBill);
  
  // Sip & Start Section
  document.getElementById("milkType").addEventListener("change", updateTotal);
  document.getElementById("iceCreamFlavor").addEventListener("change", updateTotal);
  
  function updateTotal() {
    var selectedMilk = document.getElementById("milkType").value;
    var selectedIceCreamFlavor = document.getElementById("iceCreamFlavor").value;
  
    var milkPrice = prices.milk[selectedMilk];
    var iceCreamPrice = prices.iceCreamFlavor[selectedIceCreamFlavor];
  
    document.getElementById("milkPrice").innerText = "$" + milkPrice.toFixed(2);
    document.getElementById("iceCreamPrice").innerText = "$" + iceCreamPrice.toFixed(2);
  
    calculateBill();
  }
  
  // Whipped Variables Section
  document.getElementById("ingredientQuantity").addEventListener("input", updateTotal);
  
  function updateTotal() {
    var ingredientQuantity = parseFloat(document.getElementById("ingredientQuantity").value) || 0;
    var ingredientPrice = 2.00; // Example price per ingredient
  
    document.getElementById("ingredientPrice").innerText = "$" + (ingredientQuantity * ingredientPrice).toFixed(2);
  
    calculateBill();
  }
  
  // Events on a Straw Section
  var checkboxes = document.querySelectorAll('input[name="toppings"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      calculateBill();
    });
  });
  