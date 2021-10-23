import "./formElements.scss";
import "../../../components/amount-guest/js/amount-guest.js";
import "../../../components/like-button/js/like-button.js";
import "../../../components/rating/js/rating.js";

// import "nouislider/dist/nouislider.css";
import "nouislider/dist/nouislider.js";
import noUiSlider from "nouislider";

const rangSlider = document.getElementById('range-slider');

if (rangSlider) {
  noUiSlider.create(rangSlider, {
    start: [20, 100],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  // value  - значение от 1 до 2 ползунка
  // handle - сам ползунок
  rangSlider.noUiSlider.on('update', function name(value, handle) {
    inputs[handle].value = Math.round(value[handle]);
    // console.log(value);
    // console.log(handle);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
};
