document.addEventListener("DOMContentLoaded", function () {
  const expenseForm = document.getElementById("expenseForm");
  const expenseList = document.getElementById("expenseList");
  const totalButton = document.getElementById("totalButton");
  const totalDisplay = document.getElementById("totalDisplay");

  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amount");

    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    if (name && amount) {
      addExpense(name, amount);
      nameInput.value = "";
      amountInput.value = "";
    }
  });

  function addExpense(name, amount) {
    const li = document.createElement("li");
    li.innerHTML = `${name}: Rs.${amount.toFixed(2)}`;

    expenseList.appendChild(li);
  }

  totalButton.addEventListener("click", function () {
    const expenseItems = expenseList.querySelectorAll("li");
    let total = 0;

    expenseItems.forEach(function (item) {
      const amount = parseFloat(item.innerHTML.split(": Rs.")[1]);
      total += amount;
    });

    totalDisplay.innerHTML = `Rs.${total.toFixed(2)}`;
  });
});
