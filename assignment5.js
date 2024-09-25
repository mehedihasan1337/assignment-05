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

    // history list
    const historyItem = document.createElement("div");
    historyItem.innerHTML = `
    <p>$${donatInput1.toFixed(2)}</p>
     <p>${new Date().toLocaleDateString()}</p>
    `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer. firstChild)
 
    
})





