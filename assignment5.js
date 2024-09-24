
function homeButton() {
    document.getElementById('button-home')
    window.location = '/home.html'

}
function indexButton() {
    document.getElementById('index-button')
    window.location = '/index.html'

}

    const donateBtn1 = document.getElementById("donate-btn1");
    donateBtn1.addEventListener("click", function () {
    const donateInput1 = parseFloat(document.getElementById('donate-input1').value);
    
    const donateAmount1Element = document.getElementById("donate-amount1");
    donateAmount1Element.innerText = donateInput1;
    //
    if(donateInput1 >0 ){
      const mainBalance = document.getElementById("main-balance").innerText;
      const balanceNumber = parseFloat(mainBalance);


      const newBalance = balanceNumber - donateInput1 
       document.getElementById("main-balance").innerText = newBalance;
        console.log(newBalance)
      

    }
    else{
        alert('failed to add money.')
    }
}) 
 