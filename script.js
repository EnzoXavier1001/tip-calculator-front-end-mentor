
const numberPeople = document.querySelector("#number-people")
const totalPerPerson = document.querySelector(".total-person")
const tipAmount = document.querySelector(".tip-amount")
const customTipAmount = document.querySelector(".custom")
const btnTips = document.querySelectorAll(".btn-tips")
const bill = document.querySelector("#bill")
const errorMessage = document.querySelector(".error-message")

bill.addEventListener("change", function() {
  errorMessage.style.display = "block"
})

btnTips.forEach(function(tip) {
  tip.addEventListener("click", function() {
    clearTipButtons()
    if(!tip.classList.contains("custom")) {
      tip.classList.add("active")
    } else {
      tip.classList.add("click")
    }
  })
})

function clearTipButtons() {
  btnTips.forEach(function(tip) {
    tip.classList.remove("active")
  })
}

numberPeople.addEventListener("change", function() {
  const billValue = Number(bill.value)
  const numberPeopleValue = numberPeople.value
  if(numberPeopleValue > 0) {
    errorMessage.style.display = "none"
    btnTips.forEach(function(tip) {
      if(tip.classList.contains("active")) {
        const tipPerc = tip.getAttribute("data-tip")
        calculateTotalAmount(tipPerc, billValue, numberPeopleValue)
      } else if (tip.classList.contains("click")) {
        const tipPerc = tip.value
        calculateTotalAmount(tipPerc, billValue, numberPeopleValue)
      }
    })
  } 
})

function calculateTotalAmount(tipPerc, billValue, numberPeopleValue) {
  const perc = (tipPerc / 100)
  const totalPerPersonAmount = (billValue + (perc * billValue)) / numberPeopleValue
  const totalTipAmount = (billValue * perc) / numberPeopleValue

  tipAmount.textContent = "$" + totalTipAmount.toFixed(2)
  totalPerPerson.textContent = "$" + totalPerPersonAmount.toFixed(2)
}

function clearFields() {
  clearTipButtons()
  bill.value = ""
  customTipAmount.value = ""
  totalPerPerson.textContent = "$0.00"
  tipAmount.textContent = "$0.00"
  numberPeople.value = ""
}