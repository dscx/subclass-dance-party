$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    //adding new dancer to array
    //console.log(window.dancer);
    window.dancers.push(dancer);
  dancer.$node.on('mouseover', function(){
    // $(this).css({ 'border-color': '50px solid black'});
    $(this).toggleClass('highlighted');
  });
  });

  $(".lineUpDancerButton").on("click", function(event){

      var lineUpFunctionName = $(this).data("line-up-dancer");
      var lineUpFunction = window[lineUpFunctionName];

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp($("body").height() * Math.random(), 0);
    };
  });


   var inRange = function() {
    // for every object
    // console.log($('.dancer').find('style').css("top"));
    // console.log('inRange Runs');

    // get coordinates of all other objects and caluculate distance
    // square root of abs(this.left - target.left)^2+abd(this.top - target.top)^2
    for ( var i = 0; i < window.dancers.length; i++ ) {
      for (var j = 0; j < window.dancers.length; j++) {
        var leftDist = Math.abs(window.dancers[i].left - window.dancers[j].left);
        var topDist = Math.abs(window.dancers[i].top - window.dancers[j].top);
        var cSquared = Math.pow(leftDist, 2) + Math.pow(topDist, 2);
        var distance = Math.sqrt(cSquared);
        //console.log("The distance between "+window.dancers[i] +" and "+window.dancers[j]+" is "+distance);
        if (distance > 0 && distance < 100 ) {
          //console.log("We are neighbors!!!");
          window.dancers[i].neighbors.push(window.dancers[j]);
        }
      }
    }
 $(".color").each(function(collection){
  //console.log('line 72');
  var newStyle = {width: "100px"};
  for (var k = 0; k < window.dancers.length; k++) {
    //console.log(window.dancers[k] instanceof ColorDancer);
    if(window.dancers[k] instanceof ColorDancer){
      //console.log(window.dancers[k].neighbors + " neighbor");
      for (var l = 0; l < window.dancers[k].neighbors.length; l++) {

        window.dancers[k].neighbors[l].$node.css(newStyle);
        
      };
      
    }
  };
  console.log(this);
 })
  };


    //store threshold or own position var pos = this.left | if (target.pos >= (this.pos - 10) && target.pos <= this.pos + 10) {then do something};
    // store indexes (window.dancers) within a distance threshold into a "neighbors" array
      // var distance = Math.sqrt( Math.pow( ( Math.abs (window.dancers[i].left - window.dancers[j].left)),2) + Math.pow( (Math.abs(window.dancers[i].top- window.dancers[j].top)), 2 ) );
      // console.log(distance);

    // update something on neighbors

  setInterval(inRange, 5000);

});

// window.position[ [left, top], [left, top], [left, top], ];
// window.dancers[0,1,2 ]

