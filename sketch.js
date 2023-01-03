var bird;
var score;
var sc;
var canShowScore = 0;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  score = 0;
  if (canShowScore === 0) {
    sc = createP('Score: 0');
    canShowScore = 1;
  }
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
      score = 0;
      sc.html('Score: '+score);
      //console.log("score: "+score);
    }

    if (!pipes[i].hits(bird) && pipes[i].x == bird.x) {
      score++;
      sc.html('Score: '+score);
      //console.log("score: "+score);
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ' || keyCode == UP_ARROW) {
    bird.up();
    //console.log("SPACE");
  }
}

function mousePressed() {
  bird.up();
}