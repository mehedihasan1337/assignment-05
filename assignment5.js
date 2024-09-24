
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



}) 
    const donateBtn2 = document.getElementById("donate-btn2");
    donateBtn2.addEventListener("click", function () {
    const donateInput2 = parseFloat(document.getElementById('donate-input2').value);
    console.log(donateInput2)


}) 
    const donateBtn3 = document.getElementById("donate-btn3");
    donateBtn3.addEventListener("click", function () {
    const donateInput3 = parseFloat(document.getElementById('donate-input3').value);
    console.log(donateInput3)


}) 