import { useState } from 'react';

function PurchaseNumbers(){
  const [ purchase , setPurchase ] = useState('0');
  const [ downPayment, setDownPayment ] = useState('0');
  const [ repayment, setRepayment ] = useState('1');
  const [ interest, setInterest ] = useState('0')

  function handleClick(){
   let purchasePrice = `${purchase}`;
   let deposit = `${downPayment}`;
   let monthlyRate = (`${interest}`/ 12) / 100;
   let numberOfPayments = `${repayment}` * 12;
   let principal = purchasePrice - deposit;
   let mortgageAmount;

   if( principal && numberOfPayments && deposit && monthlyRate > 0 ){
     mortgageAmount = Math.floor((principal * ((monthlyRate * ( (1 +monthlyRate) ** numberOfPayments) / (( (1 + monthlyRate)** numberOfPayments) - 1) ) ) ));
   } else {
     alert("enter values greater than 0")
   }

   document.getElementById('mortgage-price').innerHTML = mortgageAmount;
   document.getElementById("loan-value").innerHTML = principal;
  }

  return (
    <div className="main-div">
    <h1>Mortgage Calculator </h1>
    <wrapper>
      <div className="slidecontainer">
        <span> Purchase Price : <span> ${purchase} </span> </span>
        <input type="range" min="0" max="1000000" onChange={(e) => {setPurchase(e.target.value)}} className="slider" id="purchase-slider" />
      </div>

      <div className="slidecontainer">
        <span> Down Payment : <span> ${downPayment}</span> </span>
        <input type="range" min="0" max="1000000" onChange={(e) => {setDownPayment(e.target.value)}} className="slider"  id="payment-slider"/>
      </div>

      <div className="slidecontainer">
        <span> Repayment Time :  <span> {repayment} years </span> </span>
        <input type="range" min="0" max="30" onChange={(e) => {setRepayment(e.target.value)}} className="slider" id="repayment-slider" />
      </div>

      <div className="slidecontainer">
        <span> Interest Rate  : <span> {interest}% </span> </span>
        <input type="range" min="0.1" max="100" onChange={(e) => {setInterest(e.target.value)}} className="slider" id="interest-slider"/>
      </div>

      </wrapper>

      <section>
        <span> Loan Amount <h3 id="loan-value"> </h3></span>
        <span> Estimated pr.month <h3 id="mortgage-price"> </h3></span>
      </section>
      <button onClick={handleClick}>Get A Mortgage Quote</button>
    </div>
  )
}

function MainDisplay(){
  return(
    <div>
      <PurchaseNumbers />
    </div>
  )
}

export default MainDisplay;
