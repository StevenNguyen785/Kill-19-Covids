// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/hacZU523FyM

function Ship() {
  this.pos = createVector(random(width), random(height));
  this.r = 80;
  this.heading = 80;
  this.rotation = 2;
  this.vel = createVector(0, 0);
  this.isBoosting = false;

  this.boosting = function(b) {
    this.isBoosting = b;
  }

  this.update = function() {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }

  this.boost = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }

  this.hits = function(asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (d < this.r + asteroid.r) {
      return true;
    } else {
      return false;
    }
  }

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    strokeWeight(4)
    fill(0, 0, 255);
    stroke(255, 255, 0);
    ellipse(100, 46, 55, 100);;
    pop();
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  this.setRotation = function(a) {
    this.rotation = a;
  }

  this.turn = function() {
    this.heading += this.rotation;
  }

}
