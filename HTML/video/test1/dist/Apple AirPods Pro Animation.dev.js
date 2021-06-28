"use strict";

console.clear();
var canvas = document.getElementById("hero-lightpass");
var context = canvas.getContext("2d");
canvas.width = 1158;
canvas.height = 770;
var frameCount = 147;

var currentFrame = function currentFrame(index) {
  return "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/".concat((index + 1).toString().padStart(4, '0'), ".jpg");
};

var images = [];
var airpods = {
  frame: 0
};

for (var i = 0; i < frameCount; i++) {
  var img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate

});
images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}