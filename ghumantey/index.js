e.addEventListener("keyup", (el) => {
  if (el.target.value.length > 0) {
    document.getElementsByClassName("bi-caret-down-fill")[i].style.transform =
      "rotate(900deg)";
  } else {
    document.getElementsByClassName("bi-caret-down-fill")[i].style.transform =
      "rotate(0deg)";
  }
});
