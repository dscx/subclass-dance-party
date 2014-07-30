var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer shape"></span>');
  this.setPosition(top, left);
 // console.log(Object.prototype.hasOwnProperty(this.setPosition)); 
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype._oldStep = Dancer.prototype.step;
SquareDancer.prototype.step = function() {
  this._oldStep();
  this.$node.fadeIn();
};

SquareDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
SquareDancer.prototype.lineUp = function(top, left){
   var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};