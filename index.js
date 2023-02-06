
document.getElementById("button").onclick = function(){

  const checkbox = document.getElementById("checkbox")
  const visa = document.getElementById("visa")
  const mastercard = document.getElementById("mastercard")
  const paypal = document.getElementById("paypal")

  if(checkbox.checked){
    console.log("clicked!")
  }
  else{
    console.log("not clicked!")
  }

  if(visa.checked){
    console.log("you are using visa.")
  }
  else if(mastercard.checked){
    console.log("you are using mastercard.")
  }
  else if(paypal.checked){
    console.log("you are usig paypal.")
  }
  else{
    console.log("you haven't selected anything.")
  }
}
