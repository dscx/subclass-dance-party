var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer color"></span>');
  this.setPosition(top, left);
 // console.log(Object.prototype.hasOwnProperty(this.setPosition)); 
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;
ColorDancer.prototype._oldStep = Dancer.prototype.step;
ColorDancer.prototype.step = function() {
  this._oldStep();
  this.$node.fadeIn();
};

ColorDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
ColorDancer.prototype.lineUp = function(top, left){
   var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};