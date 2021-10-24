import '../scss/range-slider.scss';

import "nouislider/dist/nouislider.js";
import noUiSlider from "nouislider";

const rangSlider = document.getElementById('range-slider');

if (rangSlider) {
  noUiSlider.create(rangSlider, {
    start: [20, 100000],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 100000
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  // value  - значение от 1 до 2 ползунка
  // handle - сам ползунок
  rangSlider.noUiSlider.on('update', function name(value, handle) {
    inputs[handle].value = Math.round(value[handle]);
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