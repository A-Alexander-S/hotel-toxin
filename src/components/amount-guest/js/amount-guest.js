
let amountGuestDropdown = document.querySelector('.amount-guest__dropdown');
let amountGuestListButtons = document.querySelector('.amount-guest__list-buttons');
let amountGuestBtnClear = document.querySelector('.amount-guest__btn-clear');
let amountGuestBtnApply = document.querySelector('.amount-guest__btn-apply');

let amountGuestQuantityAdults = 0;
let amountGuestQuantityChildren = 0;
let amountGuestQuantityBabies = 0;

function innerAmountGuests() {
  document.querySelector('.amount-guest__quantity-adults').innerHTML = amountGuestQuantityAdults;
  document.querySelector('.amount-guest__quantity-children').innerHTML = amountGuestQuantityChildren;
  document.querySelector('.amount-guest__quantity-babies').innerHTML = amountGuestQuantityBabies;
};

function innerTotalAmountGuests() {
  let count = amountGuestQuantityAdults + amountGuestQuantityChildren + amountGuestQuantityBabies;
  let theEnding;

  if (count > 0) {
    amountGuestBtnClear.style.display = 'block';
    amountGuestListButtons.style.justifyContent = 'space-between';
  } else if (count == 0) {
    amountGuestBtnClear.style.display = 'none';
    amountGuestListButtons.style.justifyContent = '';
  }

  if (count == 1 || count == 21 || count == 31) {
    theEnding = 'гость';
  } else if ((count >= 2 && count < 5) || (count >= 22 && count <= 24)) {
    theEnding = 'гостя';
  } else if ((count >= 5 && count <= 20) || (count >= 25 && count <= 30)) {
    theEnding = 'гостей';
  } else if (count == 0) {
    count = '';
    theEnding = 'Сколько гостей';
  }

  document.querySelector('.amount-guest__dropdown-desc').innerHTML = `${count} ${theEnding}`;
};

function clearAmountGuests() {
  amountGuestQuantityAdults = 0;
  amountGuestQuantityChildren = 0;
  amountGuestQuantityBabies = 0;

  innerAmountGuests();
};

function eventsAmountGuestsAddAndDeduct() {
  let imgDeductAdults = document.querySelector('.pic-deduct-adults');
  let imgAddAdults = document.querySelector('.pic-add-adults');

  let imgDeductChildren = document.querySelector('.pic-deduct-children');
  let imgAddChildren = document.querySelector('.pic-add-children');

  let imgDeductBabies = document.querySelector('.pic-deduct-babies');
  let imgAddBabies = document.querySelector('.pic-add-babies');


  imgAddAdults.addEventListener('click', () => {
    amountGuestQuantityAdults++;
    innerAmountGuests();
    innerTotalAmountGuests();
  });

  imgDeductAdults.addEventListener('click', () => {
    if (amountGuestQuantityAdults > 0) amountGuestQuantityAdults--;
    innerAmountGuests();
    innerTotalAmountGuests();
  });



  imgDeductChildren.addEventListener('click', () => {
    if (amountGuestQuantityChildren > 0) amountGuestQuantityChildren--;
    innerAmountGuests();
    innerTotalAmountGuests();
  });

  imgAddChildren.addEventListener('click', () => {
    amountGuestQuantityChildren++;
    innerAmountGuests();
    innerTotalAmountGuests();
  });



  imgDeductBabies.addEventListener('click', () => {
    if (amountGuestQuantityBabies > 0) amountGuestQuantityBabies--;
    innerAmountGuests();
    innerTotalAmountGuests();
  });

  imgAddBabies.addEventListener('click', () => {
    amountGuestQuantityBabies++;
    innerAmountGuests();
    innerTotalAmountGuests();
  });


  amountGuestBtnClear.addEventListener('click', () => {
    clearAmountGuests();
    innerTotalAmountGuests();
  });
  amountGuestBtnApply.addEventListener('click', (e) => {
    let amountGuestList = document.querySelector('.amount-guest__list');

    amountGuestList.classList.toggle('block');
    // e.stopPropagation();
  });
}


amountGuestDropdown.addEventListener('click', (e) => {
  let amountGuestList = document.querySelector('.amount-guest__list');

  amountGuestList.classList.toggle('block');
  // e.stopPropagation();
});

eventsAmountGuestsAddAndDeduct();