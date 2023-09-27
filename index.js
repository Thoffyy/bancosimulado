const loginArea = document.getElementById("LoginArea");
const dashboard = document.getElementById("Dashboard");
const submitBtn = document.getElementById("Submit");
const deposit = document.getElementById("Deposit");
const withdraw = document.getElementById("Withdraw");
const balance = document.getElementById("balance");
const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdraw-input");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

submitBtn.addEventListener('click', () => {
    loginArea.style.display = "none";
    dashboard.classList.remove("d-none");
})

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
})

withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0) {
        alert("Você não possui saldo para efetuar um saque");
    } else if (Number(value) > Number(balance.innerText)) {
        alert("Você não possui saldo suficiente para sacar " + value);
    } else {
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        const balanceValue = Number(balance.innerText) - Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
})
