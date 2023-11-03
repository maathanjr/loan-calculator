document.getElementById('calculate').addEventListener('click', function () {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
  
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = years * 12;
  
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
  
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').textContent = totalPayment.toFixed(2);
    document.getElementById('total-interest').textContent = totalInterest.toFixed(2);
  
    document.getElementById('results').classList.remove('hidden');
  });
  