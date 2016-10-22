(function () {
  var container = document.getElementById('container');
  var fragment = document.createDocumentFragment(); // https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
  

  var screenWidth = $(document).width();
  var screenHeight = $(document).height();


  var minSize = screenWidth/30;
  var maxSize = screenWidth/8;

  // var circleSize = [60, 80, 160];
  var distance = 4; // How far elements can travel. Using REM in this pen.
  var amount = ((screenWidth/100) + (screenHeight/100))/3; // Num of elements to generate

  function begin() {
    for (var i = 0; i < amount; i++) {
      fragment.appendChild(createElement());
    }
    container.appendChild(fragment); // append all dynamically created elements at once
    generateAnimation(); // then build their animation
  }

  function createElement() {
    var element = document.createElement('div');
    // var diameter = circleSize[Math.floor(Math.random() * circleSize.length)];
    var diameter = Math.floor(Math.random() * maxSize + minSize) - 1;

    element.style.width = diameter + 'px';
    element.style.height = diameter + 'px';
    element.style.top = Math.floor(Math.random() * 50) + '%';
    element.style.left = Math.floor(Math.random() * 100) + '%';

    return element;
  }

  function generateAnimation() {
    var collection = document.querySelectorAll('#container > div');
    collection = Array.prototype.slice.call(collection);

    collection.forEach(function (element) {
      element.animate([{ transform: 'translate(0,0)' }, { transform: 'translate(' + getDistance() + 'rem,' + getDistance() + 'rem)' }], {
        duration: (Math.random() + 1) * 5000,
        direction: 'alternate',
        easing: 'ease-in-out',
        fill: 'both',
        iterations: Infinity
      });
    });
  }

  // Generates a random +/- number
  function getDistance() {
    var num = Math.floor(Math.random() * distance) + 1;
    return num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  }

  function bubbleParallax() {
    console.log('as');
  }

  begin();
})();