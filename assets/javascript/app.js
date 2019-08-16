var imagesrcArr = [
  "assets/images/background-screen-big.jpg",
  "assets/images/background-screen-small.jpg"
];

function checkBackground() {
  var imagesrc = $(window).width() <= 1000 ? imagesrcArr[1] : imagesrcArr[0];

  var granimInstance = new Granim({
    element: "#canvas-image-blending",
    direction: "top-bottom",
    isPausedWhenNotInView: true,
    image: {
      source: imagesrc,
      stretchMode: ["stretch-if-bigger", "stretch-if-bigger"],
      blendingMode: "multiply"
    },
    states: {
      "default-state": {
        gradients: [
          ["#29323c", "#485563"],
          ["#FF6B6B", "#556270"],
          ["#80d3fe", "#7ea0c4"],
          ["#f0ab51", "#eceba3"]
        ],
        transitionSpeed: 7000,
        loop: true
      }
    }
  });
}

$(document).ready(function() {
  checkBackground();
  $(window).resize(function() {
    checkBackground();
  });
})

