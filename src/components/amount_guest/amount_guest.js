
let amountGuestDropdown = document.querySelector('.amount-guest__dropdown');

let amountGuestQuantityAdults = 0;
let amountGuestQuantityChildren = 0;
let amountGuestQuantityBabies = 0;

function innerAmountGuests() {
  document.querySelector('.amount-guest__quantity-adults').innerHTML = amountGuestQuantityAdults;
  document.querySelector('.amount-guest__quantity-children').innerHTML = amountGuestQuantityChildren;
  document.querySelector('.amount-guest__quantity-babies').innerHTML = amountGuestQuantityBabies;

};

function innerGuestsCount() {
  // let guestsCount = document.querySelector('.amount-guest__dropdown-desc');
  let count = amountGuestQuantityAdults + amountGuestQuantityChildren + amountGuestQuantityBabies;
  let theEnding = (count = 1) ? 'гость' :
    (count >= 2) ? 'гостя' :
      'ddd';

  // if (count >= 2) {
  //   theEnding = 'гостя';
  // }

  // if (count = 1) {
  //   theEnding = 'гость';
  // } else if (count >= 2) {
  //   theEnding = 'гостя';
  // } else {
  //   theEnding = 'ddd';
  // };

  document.querySelector('.amount-guest__dropdown-desc').innerHTML = `${count} ${theEnding}`;
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
    innerGuestsCount();
  });

  imgDeductAdults.addEventListener('click', () => {
    if (amountGuestQuantityAdults > 0) amountGuestQuantityAdults--;
    innerAmountGuests();
    innerGuestsCount();
  });



  imgDeductChildren.addEventListener('click', () => {
    if (amountGuestQuantityChildren > 0) amountGuestQuantityChildren--;
    innerAmountGuests();
    innerGuestsCount();
  });

  imgAddChildren.addEventListener('click', () => {
    amountGuestQuantityChildren++;
    innerAmountGuests();
    innerGuestsCount();
  });


  imgDeductBabies.addEventListener('click', () => {
    if (amountGuestQuantityBabies > 0) amountGuestQuantityBabies--;
    innerAmountGuests();
    innerGuestsCount();
  });

  imgAddBabies.addEventListener('click', () => {
    amountGuestQuantityBabies++;
    innerAmountGuests();
    innerGuestsCount();
  });
}

amountGuestDropdown.addEventListener('click', (e) => {
  let amountGuestList = document.querySelector('.amount-guest__list');

  amountGuestList.classList.toggle('block');

  eventsAmountGuestsAddAndDeduct();
  innerAmountGuests();
  e.stopPropagation();
});