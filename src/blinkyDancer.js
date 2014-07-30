var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  //console.log("this is blink "+Object.prototype.hasOwnProperty(this.setPosition));
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype._oldStep = Dancer.prototype.step;
BlinkyDancer.prototype.step = function() {
  this._oldStep();
  this.$node.toggle();
};
BlinkyDancer.prototype.lineUp = function(top, left){
   var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};