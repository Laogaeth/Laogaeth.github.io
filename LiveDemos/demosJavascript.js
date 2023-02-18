const box = document.querySelector(".cartoon--speech--animate");

setTimeout(() => {
  const box = document.querySelector(".cartoon--speech--animate");
  box.classList.add("hidden");
}, 5000);
  box.addEventListener("transitionend", () => {
    box.style.display = "none";
  });


  //slideshow
  $(document).ready(function () {
    $(".slick").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });

  //
    const showNextImagesButton = document.getElementById("show-next-images");
    const imageContainers = document.querySelectorAll(".img--container");
    let nextImageIndex = 1;

    showNextImagesButton.addEventListener("click", () => {
      if (nextImageIndex < imageContainers.length) {
        imageContainers[nextImageIndex].classList.remove("hidden");
        nextImageIndex++;
      } else {
        showNextImagesButton.disabled = true;
      }
    });