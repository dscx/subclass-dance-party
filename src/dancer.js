var Dancer = function(top, left, timeBetweenSteps){
  console.log(this);
  this.$node = $('<span class="dancer"></span>');
  this.name = name;
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function(){
  var context = this;
  var doSteps = function(){
    context.step();
  };
  setTimeout(doSteps, context._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
