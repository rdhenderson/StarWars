'use strict'
function Character(name, hp, atk, ctr) {
	this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.ctr = ctr;
}

var game = function (character) {
    var gameRound = 1;
    var playerCharacter = character; 
    var oppCharacter = {}; 

    return {

    	chooseOpponent : function () {
    	},

    	initiateAttack : function () {
    	},

    	counterAttack : function () {
    	},

    	printScreen : function () {   
      }
    }
};
//initiate game

function drawCharacterSelect(characterSet) {
  console.log("drawing character selection");

	var keys = [];
  var heroCol = '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
  var pArena = $("#battleArena");
  var newDiv = $("<div>");

	$("#banner").text("Please select a character:");


  for(var key in roster) {
    console.log("Key: " + key + " | " + characterSet[key].name);
    pArena.append(heroCol + '<img class="hero-icon glowing-border centered" src="./assets/images/' + key + '.png" alt="' + characterSet[key].name +'"> </div>');
  }

  $(".hero-icon").click(function (){
    var hero = $(this).attr("data");
    console.log("hero:" + hero + " " + roster[hero].name);  
  });
      
    //     <img class="hero-icon glowing-border centered" src="./assets/images/skywalker.png" alt="luke skywalker">
    //   </div>
    //   <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    //     <img class="hero-icon glowing-border centered" src="./assets/images/yoda3.png" alt="yoda">
    //   </div>

    //     <!-- <div class="clearfix visible-sm"> USE THIS IF COLUMNS DON'T LINE UP EVENLY--> 
        
    //   <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    //     <img class="hero-icon glowing-border centered" src="./assets/images/kylo.png" alt="kylo ren">
    //   </div>
      
    //   <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    //     <img class="hero-icon glowing-border centered" src="./assets/images/chewbacca.png" alt="chewbacca">
    //   </div>

    //   </div> <!--close internal row-->
    // </div> <!--close hero select-->
}

function charClickHandler(){
  var hero = $(this).attr("data");
  console.log("hero:" + hero);
  console.log(roster);  
}



//Initialize characters
var roster = {
	lukeSkywalker : new Character("Luke Skywalker", 100, 10, 10),
	darthVader : new Character("Darth Vader", 100, 10, 10),
	emperorPalpatine : new Character("Emperor Palpatine", 60, 15, 15),
	chewbacca : new Character("Chewbacca", 200, 5, 15)
};

//Character Select
drawCharacterSelect(roster);

//console.log("javascript executing");

