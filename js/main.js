document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 214) {
      let element = document.querySelector(".navbar");
      element.classList.add("pages2")
      element.classList.remove("pages")

    } else {
      let element = document.querySelector(".navbar");
      element.classList.remove("pages2")
      element.classList.add("pages")
    }
  })
})
