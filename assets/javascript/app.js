var firebaseConfig = {
  apiKey: "AIzaSyD52f-UCABztH7EG0agUP78JUhEBDxAYAI",
  authDomain: "priyam-portfolio.firebaseapp.com",
  databaseURL: "https://priyam-portfolio.firebaseio.com",
  projectId: "priyam-portfolio",
  storageBucket: "priyam-portfolio.appspot.com",
  messagingSenderId: "875730837320",
  appId: "1:875730837320:web:db81ff0abeb5bbca4e9d7d",
  measurementId: "G-2T9PZ5C4Q6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#submit-button").on("click", function() {
  event.preventDefault();

  var name = $("#name")
    .val()
    .trim();
  var email = $("#email")
    .val()
    .trim();
  var message = $("#msg")
    .val()
    .trim();

  $(".portfolio-form").trigger("reset");

  database.ref().push({
    name: name,
    email: email,
    message: message
  });
});

var imagesrcArr = [
  "assets/images/background-screen-big-01.jpg",
  "assets/images/background-screen-small.jpg"
];

function backgroundGradient() {
  var imagesrc = $(window).width() <= 600 ? imagesrcArr[1] : imagesrcArr[0];

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
        transitionSpeed: 4000,
        loop: true
      }
    }
  });
}

function arrangePortfolio() {
  if ($(window).width() <= 750) {
    $(".portfolio-content")
      .children()
      .removeClass("flex-row");
    $(".portfolio-content")
      .children()
      .addClass("flex-column");
  } else {
    $(".portfolio-content")
      .children()
      .addClass("flex-row");
    $(".portfolio-content")
      .children()
      .removeClass("flex-column");
  }
}

$(document).ready(function() {
  AOS.init();
  backgroundGradient();
  arrangePortfolio();
  $(window).resize(function() {
    backgroundGradient();
    arrangePortfolio();
  });

  $(".page-lnk").click(function() {
    var anchor = $(this).attr("dest");

    // $(".link-wrap").removeClass("visible");
    // $("nav span").removeClass("active");
    // $("nav")
    //   .find('[dest="' + anchor + '"]')
    //   .addClass("active");

    $("html, body").animate(
      {
        scrollTop: $("#" + anchor).offset().top
      },
      1000
    );
  });

  $("#go-btn").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top
      },
      1000
    );
  });
});
