const RedAnimation = window.anime ({
  targets: ".red",
  translateX: 4000,
  duration: 5000,
  delay: 500
});

const GreenAnimation = window.anime ({
  targets: ".green",
  translateX: 4000,
  duration: 5000,
  delay: 1500
});
const BlueAnimation = window.anime ({
  targets: ".blue",
  translateX: 4000,
  duration: 5000,
  delay: 2000
});

const TextAnimation = window.anime ({
  targets: "h1",
  translateX: '5em',
  easing: 'easeOutCubic',
  duration: 1000,
  delay: 3000,
  complete: function(anim) {
    document.getElementById("red-box").style.display = "none";
    document.getElementById("green-box").style.display = "none";
    document.getElementById("blue-box").style.display = "none";
  }
});

const BackgroundChange = window.anime ({
  complete: function(anim) {
    document.body.style.backgroundColor = "#000";
    document.documentElement.style.backgroundColor = "#000";
  },
  delay: 4000,
  duration: 1
})

const TextChange = window.anime ({
  targets: "h1, h2",
  color: "#fff",
  delay: 4000,
  duration: 1
})
