var totalAmount = document.getElementById("total-amount");
var userAmount = document.getElementById("user-amount");
var checkAmountButton = document.getElementById("check-amount");
var totalAmountButton = document.getElementById("total-amount-button");
var productTitle = document.getElementById("product-title");
var errorMessage = document.getElementById("budget-error");
var productTitleError = document.getElementById("product-title-error");
var productCostError = document.getElementById("product-cost-error");
var amount = document.getElementById("amount");
var expenditureValue = document.getElementById("expenditure-value");
var balanceValue = document.getElementById("balance-amount");
var list = document.getElementById("list");
var tempAmount = 0;

totalAmountButton.addEventListener("click", function() {
  tempAmount = totalAmount.value;
  if (tempAmount === "" || tempAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    amount.innerHTML = tempAmount;
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    totalAmount.value = "";
  }
});

function listCreator(expenseName, expenseValue) {
  var sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);
  sublistContent.innerHTML = "<p class='product'>" + expenseName + "</p><p class='amount'>" + expenseValue + "</p>";
}

checkAmountButton.addEventListener("click", function() {
  if (!userAmount.value || !productTitle.value) {
    productTitleError.classList.remove("hide");
    return false;
  }

  var expenditure = parseInt(userAmount.value);
  var sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum;
  var totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;
  listCreator(productTitle.value, userAmount.value);
  productTitle.value = "";
  userAmount.value = "";
});
