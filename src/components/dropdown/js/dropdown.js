let dropdown = document.querySelectorAll(".dropdown");

// let dropdownBtn = dropdown[0].querySelector(".dropdown__btn");
// let dropdownList = dropdown[0].querySelector(".dropdown-list");

dropdown.forEach(item => (

  item.querySelector(".dropdown__btn").addEventListener("click", () => {
    item.querySelector(".dropdown__btn").classList.toggle("dropdown__btn_active")
    item.querySelector(".dropdown-list").classList.toggle("dropdown-list_display_block");

  })
));