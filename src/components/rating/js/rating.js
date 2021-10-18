
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}

//main function ratings
function initRatings() {
  let ratingActive, ratingValue;
  // Бегаем по всем рейтингам на странице
  for (let index = 0; index < ratings.length; index++) {
    let rating = ratings[index];
    initRating(rating);
  }

  // Инициализируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  // Инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.getAttribute('data-value');
    // ratingValue = rating.querySelector('.rating__value');
  }

  // Изменяем ширину активных звёзд
  function setRatingActiveWidth(index = ratingValue) {
    // function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // Возможность указать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
        // Обновление переменных
        initRatingVars(rating);
        //Обновление активных звёзд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        // обновление активных звезд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (e) {
        // Обновление переменных
        let www = index + 1;
        rating.setAttribute('data-value', `${www}`)
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          // Отправить на сервер
          // setRatingValue(ratingItem.value, rating);
        } else {
          // let www = index + 1;
          //  Отобразить указанную оценку
          // rating.setAttribute('data-value', `${www}`);
          // ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      })
    }
  }

  // async function setRatingValue(value, rating) {
  //   if (!rating.classList.contains('rating_sending')) {
  //     rating.classList.add('rating_sending');

  //     // Отправка данных (value) на сервер
  //     let response = await fetch('rating.json', {
  //       method: 'GET',

  //       // body: JSON.stringify({
  //       //   userRating: value
  //       // }),
  //       // headers: {
  //       //   'content-type': 'application/json'
  //       // }
  //     });
  //     if (response.ok) {
  //       const result = await response.json();

  //       //Получаем новый рейтинг
  //       const newRating = result.newRating;

  //       //Вывод нового среднего результата
  //       rating.setAttribute('data-value', newRating)
  //       // ratingValue.innerHTML = newRating;

  //       //Обновление активных звезд
  //       setRatingActiveWidth();

  //       rating.classList.remove('rating_sending');
  //     } else {
  //       alert('Ошибка');

  //       rating.classList.remove('rating_sending');
  //     }
  //   }
  // }
}