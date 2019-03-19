// business logic
function Account(balance) {
  this.balance = balance;
};

Account.prototype.Deposit = function () {
  return this.balance(balance + deposit);
};

Account.prototype.Withdrawal = function () {
  return this.balance (balance - withdrawal);
};


// user interface logic
$(document).ready(function() {
  $("form#register").submit(function() {
    event.preventDefault();
    debugger;
    var balance = parseInt($("input#initialInput").val());
    var userAccount = new Account (balance);
  });
  console.log(userAccount.balance);
  $("form#depositWithdraw").submit(function() {
    debugger;
    event.preventDefault();
    var deposit = parseInt($("input#depositInput").val());
    var withdrawal = parseInt($("input#withdrawalInput").val());
    if (deposit === ("" || 0)) {
      userAccount.Withdrawal();
    } else {
      userAccount.Deposit();
    }
    alert(userAccount.balance);
  });
});
