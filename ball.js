
function createBallDiv(id, x, y) {
    var div = document.createElement('div');
      div.id = id;
      div.style.zIndex = 0;
      div.style.position = 'absolute';
      div.style.left = x + 'px';
      div.style.top = y + 'px';
      div.style.borderRadius = '50%';
      div.style.width = '100px';
      div.style.height = '100px';
      div.style.backgroundColor = getRandomColor();
      // Then append the whole thing onto the body
      document.getElementsByTagName('body')[0].appendChild(div);
      return div;
  }

  function createBall(index) {
    let x = getRandomWidth();
    let y = getRandomHeight();
    let div = createBallDiv(index, x, y)
    var ball = {
      id: index,
      velocityX: Math.floor(10*(Math.random())),
      velocityY: Math.floor(10*(Math.random())),
      positionX: x,
      positionY: y,
      nearEdge: false
    }
    return ball;
  }
  
  function getRandomColor(){
    var r = Math.floor(255*(Math.random()));
    var g = Math.floor(255*(Math.random()));
    var b = Math.floor(255*(Math.random()));        
    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return color;
  }
  
  function getRandomWidth() {
    var width = window.innerWidth;
    var x = Math.floor(Math.random()*width);
    if (x>(width-100)) x = width - 100;
    return x;
  }
  function getRandomHeight() {
    var height = window.innerHeight;
    var y = Math.floor(Math.random()*height);
    if (y>(height-100)) y = height - 100;
    return y;
  }