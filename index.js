// Prices and tax rates
const snackPrices = [100, 50, 10, 20, 30, 60, 15];
const groceryPrices = [40, 70, 60, 150, 50, 80, 90];
const beautyPrices = [40, 200, 300, 100, 150, 60, 50];
const taxRate = 0.1;

function calculateTotalBill() {
    let totalSnacksPrice = 0, totalGroceryPrice = 0, totalBeautyPrice = 0;
    let snacksOrdered = 0, groceryOrdered = 0, beautyOrdered = 0;

    // Validate and calculate Snacks
    for (let i = 1; i <= 7; i++) {
        let quantity = parseInt(document.getElementById(`snack${i}`).value);
        if (quantity > 0) {
            snacksOrdered++;
            if (snacksOrdered > 3) {
                alert("You can order only 3 Snacks items.");
                return;
            }
            totalSnacksPrice += quantity * snackPrices[i - 1];
        }
    }

    // Validate and calculate Grocery
    for (let i = 1; i <= 7; i++) {
        let quantity = parseInt(document.getElementById(`grocery${i}`).value);
        if (quantity > 0) {
            groceryOrdered++;
            if (groceryOrdered > 3) {
                alert("You can order only 3 Grocery items.");
                return;
            }
            totalGroceryPrice += quantity * groceryPrices[i - 1];
        }
    }

    // Validate and calculate Beauty & Hygiene
    for (let i = 1; i <= 7; i++) {
        let quantity = parseInt(document.getElementById(`beauty${i}`).value);
        if (quantity > 0) {
            beautyOrdered++;
            if (beautyOrdered > 3) {
                alert("You can order only 3 Beauty & Hygiene items.");
                return;
            }
            totalBeautyPrice += quantity * beautyPrices[i - 1];
        }
    }

    // Calculate taxes
    let snacksTax = totalSnacksPrice * taxRate;
    let groceryTax = totalGroceryPrice * taxRate;
    let beautyTax = totalBeautyPrice * taxRate;

    // Display results
    document.getElementById("totalSnacksPrice").value = totalSnacksPrice.toFixed(2);
    document.getElementById("snacksTax").value = snacksTax.toFixed(2);
    document.getElementById("totalGroceryPrice").value = totalGroceryPrice.toFixed(2);
    document.getElementById("groceryTax").value = groceryTax.toFixed(2);
    document.getElementById("totalBeautyPrice").value = totalBeautyPrice.toFixed(2);
    document.getElementById("beautyTax").value = beautyTax.toFixed(2);

    // Generate bill
    let customerName = document.getElementById("customerName").value;
    let phoneNo = document.getElementById("contactNo").value;

    document.getElementById("displayCustomerName").textContent = customerName;
    document.getElementById("displayPhoneNo").textContent = phoneNo;

    let billDetails = "";
    billDetails += `Total Snacks Price: ${totalSnacksPrice.toFixed(2)}<br>`;
    billDetails += `Snacks Tax: ${snacksTax.toFixed(2)}<br>`;
    billDetails += `Total Grocery Price: ${totalGroceryPrice.toFixed(2)}<br>`;
    billDetails += `Grocery Tax: ${groceryTax.toFixed(2)}<br>`;
    billDetails += `Total Beauty & Hygiene Price: ${totalBeautyPrice.toFixed(2)}<br>`;
    billDetails += `Beauty & Hygiene Tax: ${beautyTax.toFixed(2)}<br>`;

    document.getElementById("billDetails").innerHTML = billDetails;
  
}

function clearFields() {
    document.getElementById("customerName").value = "";
    document.getElementById("contactNo").value = "";
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`snack${i}`).value = "0";
        document.getElementById(`grocery${i}`).value = "0";
        document.getElementById(`beauty${i}`).value = "0";
    }
    document.getElementById("totalSnacksPrice").value = "";
    document.getElementById("snacksTax").value = "";
    document.getElementById("totalGroceryPrice").value = "";
    document.getElementById("groceryTax").value = "";
    document.getElementById("totalBeautyPrice").value = "";
    document.getElementById("beautyTax").value = "";
    document.getElementById("billArea").innerHTML = "";
}

function exit() {
    window.close();
}
