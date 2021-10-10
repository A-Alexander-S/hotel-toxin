
let likeButton = document.querySelectorAll(".like-button")
let likeCounter = document.querySelector(".like-button__like-counter")



for (elem of likeButton) {
  elem.addEventListener("click", (e) => {
    colorChange(e)
  })
}

function colorChange(e) {
  if (!e.currentTarget.hasAttribute("data-like")) {
    e.currentTarget.setAttribute("data-like", "like")

    let count = e.currentTarget.querySelector(".like-button__like-counter").innerHTML
    count = +count + 1
    e.currentTarget.querySelector(".like-button__like-counter").innerHTML = count

    e.currentTarget.style.border = "1px solid #BC9CFF"
    e.currentTarget.style.color = "#BC9CFF"
    e.currentTarget.querySelector(".pic-heart").remove()
    e.currentTarget.insertAdjacentHTML("afterbegin",
      `<svg class="pic-heart" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.93026 7.88672L4.3248 7.33984C3.63469 6.71484 3.13339 6.2526 2.82089 5.95312C2.50839 5.65365 2.15683 5.28255 1.7662 4.83984C1.3886 4.39714 1.12818 4 0.984952 3.64844C0.841723 3.28385 0.770108 2.91276 0.770108 2.53516C0.770108 1.89714 0.984952 1.35677 1.41464 0.914062C1.85735 0.471354 2.40422 0.25 3.05526 0.25C3.81047 0.25 4.43547 0.542969 4.93026 1.12891C5.42506 0.542969 6.05006 0.25 6.80526 0.25C7.45631 0.25 7.99667 0.471354 8.42636 0.914062C8.86907 1.35677 9.09042 1.89714 9.09042 2.53516C9.09042 3.04297 8.92115 3.57031 8.58261 4.11719C8.24407 4.66406 7.87297 5.13932 7.46933 5.54297C7.0787 5.94661 6.43417 6.55208 5.53573 7.35938L4.93026 7.88672Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="4.93026" y1="-6" x2="4.93026" y2="14" gradientUnits="userSpaceOnUse">
              <stop stop-color="#BC9CFF"/>
              <stop offset="1" stop-color="#8BA4F9"/>
            </linearGradient>
          </defs>
        </svg>`)
  } else if (e.currentTarget.hasAttribute("data-like")) {
    e.currentTarget.removeAttribute("data-like")

    let count = e.currentTarget.querySelector(".like-button__like-counter").innerHTML
    count = +count - 1
    e.currentTarget.querySelector(".like-button__like-counter").innerHTML = count

    e.currentTarget.style.border = "1px solid rgba(31, 32, 65, 0.25)"
    e.currentTarget.style.color = "rgba(31, 32, 65, 0.25)"
    e.currentTarget.querySelector(".pic-heart").remove()
    e.currentTarget.insertAdjacentHTML("afterbegin",
      `<svg class="pic-heart" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.03906 6.73438C5.66406 6.17448 6.1263 5.7513 6.42578 5.46484C6.72526 5.17839 7.05078 4.83984 7.40234 4.44922C7.75391 4.05859 7.99479 3.71354 8.125 3.41406C8.26823 3.11458 8.33984 2.82161 8.33984 2.53516C8.33984 2.11849 8.19661 1.77344 7.91016 1.5C7.63672 1.22656 7.29167 1.08984 6.875 1.08984C6.54948 1.08984 6.24349 1.18099 5.95703 1.36328C5.68359 1.54557 5.49479 1.77995 5.39062 2.06641H4.60938C4.50521 1.77995 4.3099 1.54557 4.02344 1.36328C3.75 1.18099 3.45052 1.08984 3.125 1.08984C2.70833 1.08984 2.35677 1.22656 2.07031 1.5C1.79688 1.77344 1.66016 2.11849 1.66016 2.53516C1.66016 2.82161 1.72526 3.11458 1.85547 3.41406C1.9987 3.71354 2.24609 4.05859 2.59766 4.44922C2.94922 4.83984 3.27474 5.17839 3.57422 5.46484C3.8737 5.7513 4.33594 6.17448 4.96094 6.73438L5 6.77344L5.03906 6.73438ZM6.875 0.25C7.52604 0.25 8.06641 0.471354 8.49609 0.914062C8.9388 1.35677 9.16016 1.89714 9.16016 2.53516C9.16016 2.91276 9.08854 3.28385 8.94531 3.64844C8.80208 4 8.53516 4.39714 8.14453 4.83984C7.76693 5.28255 7.42188 5.65365 7.10938 5.95312C6.79688 6.2526 6.29557 6.71484 5.60547 7.33984L5 7.88672L4.39453 7.35938C3.49609 6.55208 2.84505 5.94661 2.44141 5.54297C2.05078 5.13932 1.6862 4.66406 1.34766 4.11719C1.00911 3.57031 0.839844 3.04297 0.839844 2.53516C0.839844 1.89714 1.05469 1.35677 1.48438 0.914062C1.92708 0.471354 2.47396 0.25 3.125 0.25C3.88021 0.25 4.50521 0.542969 5 1.12891C5.49479 0.542969 6.11979 0.25 6.875 0.25Z" fill="#1F2041" fill-opacity="0.25"/>
       </svg>
      `)
  }
}


