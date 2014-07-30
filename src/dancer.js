var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.name = name;
  this.neighbors = [];
  this._timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
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

Dancer.prototype.lineUp = function(top, left){
   var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};