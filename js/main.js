window.onscroll = function () {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("pages").className = "pages2";
  } else {
    document.getElementsByClassName("pages").className = "";
  }
};
