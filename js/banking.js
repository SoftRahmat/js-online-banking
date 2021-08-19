// deposit money
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const newAmount = parseFloat(inputAmountText);
  //clear input value
  inputField.value = "";

  return newAmount;
}

function updateTotalField(totalFieldId, newDepositAmount) {
  const updateTotal = document.getElementById(totalFieldId);
  const updateTotalText = updateTotal.innerText;
  const updateTotalAmount = parseFloat(updateTotalText);
  const newUpadateTotal = updateTotalAmount + newDepositAmount;
  updateTotal.innerText = newUpadateTotal;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}
function updateBalance(newDepositAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + newDepositAmount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - newDepositAmount;
  }
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit");
        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);
        console.log(depositAmount) */
    const newDepositAmount = getInputValue("deposit");
    if (newDepositAmount > 0 && newDepositAmount != "string") {
      updateTotalField("deposit-total", newDepositAmount);
      updateBalance(newDepositAmount, true);
    } else {
      console.log(alert("Please input only positive amount"));
    }

    //deposit total
    /*  const depositTotal = document.getElementById("deposit-total");
         const previousDepositAmountText = depositTotal.innerText;
         const previousDepositAmount = parseFloat(previousDepositAmountText);
         const newDepositTotal = previousDepositAmount + newDepositAmount;
         depositTotal.innerText = newDepositTotal; */

    // update balance

    /* const balanceTotal = document.getElementById("balance-total");
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        balanceTotal.innerText = newBalanceTotal;
        // depositInput.value = ""; */
  });

//withdraw handle

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById('withdraw');
        const withdrawAmountText = withdrawInput.value;
        const newWithDrawAmont = parseFloat(withdrawAmountText);
        console.log(withdrawAmountText); */
    const newWithDrawAmont = getInputValue("withdraw");

    /* const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawText = withdrawTotal.innerText;
        const prevoiusWithdrawTotal = parseFloat(previousWithdrawText);
        const newtotalWithdraw = prevoiusWithdrawTotal + newWithDrawAmont;

        withdrawTotal.innerText = newtotalWithdraw;
        withdrawInput.value = ""; */
    const currentBalance = getCurrentBalance();
    if (
      newWithDrawAmont > 0 &&
      newWithDrawAmont < currentBalance &&
      newWithDrawAmont != "string"
    ) {
      updateTotalField("withdraw-total", newWithDrawAmont);
      updateBalance(newWithDrawAmont, false);
    } else {
      console.log(alert("Please check amount and input only positive amount"));
    }
    /* const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceTotal - newWithDrawAmont;
        balanceTotal.innerText = newBalanceTotal; */
  });
