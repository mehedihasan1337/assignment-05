function homeButton() {
    document.getElementById('button-home')
    window.location = 'home.html'

}
function indexButton() {
    document.getElementById('index-button')
    window.location = 'index.html'

}


// donate-btn1 
// step-1: add 
document.getElementById('donate-a1').addEventListener('click', function (event) {
   event.preventDefault()
   const donatInput1 = document.getElementById('donate-input1').value
   const donatInput1Num = parseFloat(donatInput1);


   console.log(donatInput1)

   if (donatInput1 > 0) {
      const balance = document.getElementById('donate-amount1').innerText;
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber + donatInput1Num;

      document.getElementById('donate-amount1').innerText = newBalance;


      const mainBalance = document.getElementById('main-balance').innerText;
      const mainBalanceNumber = parseFloat(mainBalance);
      const mainNewBalance = mainBalanceNumber - donatInput1Num;

      document.getElementById('main-balance').innerText = mainNewBalance;

     if (donatInput1 < 0) {

     }

     else {
        alert('successfully')
        // history list
    
     }




   }
   else {
      alert('Invalid Donation amount')
   }
});







//  patr 2                                                       part 2

// donate-btn1 
// step-1: add 
document.getElementById('donate-a2').addEventListener('click', function (event) {
   event.preventDefault()
   const donatInput2 = document.getElementById('donate-input2').value
   const donatInput2Num = parseFloat(donatInput2);


   

   if (donatInput2 > 0) {
      const balance2 = document.getElementById('donate-amount2').innerText;
      const balanceNumber2 = parseFloat(balance2);
      const newBalance2 = balanceNumber2 + donatInput2Num;

      document.getElementById('donate-amount2').innerText = newBalance2;


      const mainBalance = document.getElementById('main-balance').innerText;
      const mainBalanceNumber = parseFloat(mainBalance);
      const mainNewBalance = mainBalanceNumber - donatInput2Num;

      document.getElementById('main-balance').innerText = mainNewBalance;

     if (donatInput2 < 0) {

     }
     else {
        alert('successfully')
        // history list
    
    

 
     }




   }
   else {
      alert('Invalid Donation amount')
   }
});





// part 3                                        part3


// donate-btn1 
// step-1: add 
document.getElementById('donate-a3').addEventListener('click', function (event) {
   event.preventDefault()
   const donatInput3 = document.getElementById('donate-input3').value
   const donatInput3Num = parseFloat(donatInput3);




   if (donatInput3 > 0) {
      const balance3 = document.getElementById('donate-amount3').innerText;
      const balanceNumber3 = parseFloat(balance3);
      const newBalance3 = balanceNumber3 + donatInput3Num;

      document.getElementById('donate-amount3').innerText = newBalance3;


      const mainBalance = document.getElementById('main-balance').innerText;
      const mainBalanceNumber = parseFloat(mainBalance);
      const mainNewBalance = mainBalanceNumber - donatInput3Num;

      document.getElementById('main-balance').innerText = mainNewBalance;

     if (donatInput3 < 0) {

     }
     else {
        alert('successfully')
        // history list
    
    
    
 
     }




   }
   else {
      alert('Invalid Donation amount')
   }
});


 
 
 //  history tab 
 const historyTab = document.getElementById('history-tab');
 const donationTab = document.getElementById('donation-tab');
 historyTab.addEventListener('click', function () {
 
 
    historyTab.classList.add('text-black', 'bg-[#B4F461]', 'py-4', 'px-7', 'font-semibold', 'text-xl', 'rounded-xl');
    donationTab.classList.remove('text-black', 'bg-[#B4F461]',);
    donationTab.classList.add('text-[#11111171]',);
 
    document.getElementById("donation-hidden").classList.add("hidden")
 
    donationTab.addEventListener('click', function(){
      donationTab.classList.add(
         'text-black', 'bg-[#B4F461]', 'py-4', 'px-7', 'font-semibold', 'text-xl', 'rounded-xl'
         
      )
      historyTab.classList.remove(
         'text-black', 'bg-[#B4F461]'
      )
      document.getElementById("donation-hidden").classList.remove("hidden")

    })
     
 })
 
 
 
 
 
 

