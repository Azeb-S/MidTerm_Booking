// when teh form submitted validate
//err-dest err-date err-num

document.addEventListener("DOMContentLoaded", () => {
 document.getElementById('book-form').onsubmit = () => {

  clearErrors()
  let isValid = true

  let destination = document.getElementById('destination').value
  let departure_date = document.getElementById('departure-date')
  let traveleres_num = document.getElementById('number-travelers')

  //errors
  let destination_errror = document.getElementById('err-dest')
  let date_errror = document.getElementById('err-date')
  let number_errror = document.getElementById('err-num')

  // Destination
  if (destination === "none" || destination === "") {
   destination_errror.style.display = "block"
   isValid = false
  }
  // Date (check the value)
  if (!departure_date.value) {
   date_errror.style.display = "block"
   isValid = false
  }
  // Travelers (parse number)
  const travelers = parseInt(traveleres_num.value, 10) || 0
  if (travelers <= 0) {
   number_errror.style.display = "block"
   isValid = false
  }
  return isValid


 }

 function clearErrors() {
  let errors = document.getElementsByClassName("errorr")
  for (let i = 0; i < errors.length; i++) {
   errors[i].style.display = "none"
  }
 }
})