
const numberPeople = document.querySelector("#number-people")
const totalPerPerson = document.querySelector(".total-person")
const total = document.querySelector(".total")
const btnTips = document.querySelectorAll(".btn-tips")

btnTips.forEach(function(tip) {
  tip.addEventListener("click", function() {
    clearButtons()
    if(!tip.classList.contains("custom")) {
      tip.classList.add("active")
    }
  })
})

function clearButtons() {
  btnTips.forEach(function(tip) {
    tip.classList.remove("active")
  })
}

numberPeople.addEventListener("change", function() {
  const bill = Number(document.querySelector("#bill").value)
  const numberPeopleValue = numberPeople.value
  btnTips.forEach(function(tip) {
    // Verificar se algum elemento do tip tem active
    if(tip.classList.contains("active")) {
      const tipValue = tip.getAttribute("data-tip")
      const perc = (tipValue / 100)
      const result = bill + (perc * bill)
      const tipAmount = (bill * perc) / numberPeopleValue

      const resultPerson = result / numberPeopleValue
      total.textContent = "$" + tipAmount.toFixed(2)
      totalPerPerson.textContent = "$" + resultPerson.toFixed(2)
    }
  })
})

function clearFields() {
  clearButtons()
  document.querySelector("#bill").value = ""
  totalPerPerson.textContent = "$0.00"
  total.textContent = "$0.00"
  document.querySelector(".custom").value = ""
}