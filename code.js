

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["41e7c9c3-e252-4561-b406-c908f0175dec","1b8ce215-9618-4a25-8e01-a51c881f79bc","76b957ff-cb43-4849-84b0-136e91c14c1c","a61db18b-feb3-492c-81b6-f325b66f5767","73b23bf6-63da-4fca-b3a0-6ae401620b1b","f3eaa361-3876-4db7-a236-66b49d802a85","bbb6026d-f3e3-4299-bba8-5d14ea001f28","01260f2f-88b2-4567-96f1-db1aea98795d","d315e5b1-efe0-4ca4-93ba-79c34028b95d","8bfc99f5-f1ac-4db1-99a9-746e1c8c8cfb","728ae86c-d028-4d17-acb6-dba9161d91e9","e634506a-39bb-4492-92ad-7040777694f1","d4534beb-8743-4cca-80bf-3c1359a997f7","ddbd0020-7579-4720-b5ba-a3a057fe0684","7ed06340-eaf6-44a6-bc4b-89a3f38ac4c7","7d129c3b-a03d-4a7c-8617-813598859946","adc493dd-f0cd-421a-9e6a-c18d207a1d97","1c6a7189-5656-42c6-b168-61e529b62d02","a69f3b39-11fc-4a86-8c7f-2d3489cd9ecf","13973f9d-908f-4486-b42e-ea6cdd690c24","834d0ce3-6a1b-4b0a-8e06-95feff6b9008","a72659ad-8489-4d20-b3d3-4216b17e34bc","285e842c-e66c-4ad5-b279-adf353367c1f","b4a56cd9-c7bf-4f0a-928f-c8888b4aea74","71ce7d3f-7890-497b-b825-017276a868b9"],"propsByKey":{"41e7c9c3-e252-4561-b406-c908f0175dec":{"name":"avocado","sourceUrl":"assets/api/v1/animation-library/gamelab/n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn/category_food/avocado.png","frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n8fJsHnvUoqBkvrfZO8e3NoCGekl_Fmn/category_food/avocado.png"},"1b8ce215-9618-4a25-8e01-a51c881f79bc":{"name":"avocado6","sourceUrl":null,"frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"WePlkgmJWoghgsUiDQMR6znyymlHDHzI","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/1b8ce215-9618-4a25-8e01-a51c881f79bc.png"},"76b957ff-cb43-4849-84b0-136e91c14c1c":{"name":"avocado7","sourceUrl":null,"frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"kSAqnj1Xq8X5XfuyawzJ9RcvusC2q06r","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/76b957ff-cb43-4849-84b0-136e91c14c1c.png"},"a61db18b-feb3-492c-81b6-f325b66f5767":{"name":"avocado5","sourceUrl":null,"frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"SxKjQq48WLLYRdQkwCp9qiUJHyHleC9_","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/a61db18b-feb3-492c-81b6-f325b66f5767.png"},"73b23bf6-63da-4fca-b3a0-6ae401620b1b":{"name":"avocado4","sourceUrl":null,"frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"MPMcsZfskqoV3u9VBnDzRlCHBXzU_Zbo","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/73b23bf6-63da-4fca-b3a0-6ae401620b1b.png"},"f3eaa361-3876-4db7-a236-66b49d802a85":{"name":"avocado3","sourceUrl":null,"frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"RPef4jol1uTaH98Sgp411GIKigeC8VhU","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/f3eaa361-3876-4db7-a236-66b49d802a85.png"},"bbb6026d-f3e3-4299-bba8-5d14ea001f28":{"name":"avocado2","sourceUrl":null,"frameSize":{"x":386,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"2bZD4HMy7FzBDnYWI_VJnAk24HSIV_Qx","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":368},"rootRelativePath":"assets/bbb6026d-f3e3-4299-bba8-5d14ea001f28.png"},"01260f2f-88b2-4567-96f1-db1aea98795d":{"name":"turtle","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"gqOV7Wv_F7rPS3.Sg58QSfMEk_C7b9R9","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/01260f2f-88b2-4567-96f1-db1aea98795d.png"},"d315e5b1-efe0-4ca4-93ba-79c34028b95d":{"name":"turtleupgrade1","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ss4kJnMcQPhLNMKSUCic1nM54r4FfwZY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/d315e5b1-efe0-4ca4-93ba-79c34028b95d.png"},"8bfc99f5-f1ac-4db1-99a9-746e1c8c8cfb":{"name":"turtleupgrade2","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"J0uqkSO28TBrclB0ZGEi0EtImuYoKABD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/8bfc99f5-f1ac-4db1-99a9-746e1c8c8cfb.png"},"728ae86c-d028-4d17-acb6-dba9161d91e9":{"name":"turtleupgrade3","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"GwOsgEsbOmnTLosnXoASMgNl43HWacy8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/728ae86c-d028-4d17-acb6-dba9161d91e9.png"},"e634506a-39bb-4492-92ad-7040777694f1":{"name":"turtleupgrade4","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bs8b30mip1ItfxPIZRx8mJXWS_pM3MN2","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/e634506a-39bb-4492-92ad-7040777694f1.png"},"d4534beb-8743-4cca-80bf-3c1359a997f7":{"name":"turtleupgrade5","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"n8PaDdU5747p.RUmjzG3Dv3iM_Idpwgt","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/d4534beb-8743-4cca-80bf-3c1359a997f7.png"},"ddbd0020-7579-4720-b5ba-a3a057fe0684":{"name":"turtleupgrade6","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tn6sS.xlnjY2OphGib66Ioe6nbqNSrD.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/ddbd0020-7579-4720-b5ba-a3a057fe0684.png"},"7ed06340-eaf6-44a6-bc4b-89a3f38ac4c7":{"name":"turtleupgrade7","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"2krTgxLxvFbfZjZnqFQcfaPsmvilrXKI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/7ed06340-eaf6-44a6-bc4b-89a3f38ac4c7.png"},"7d129c3b-a03d-4a7c-8617-813598859946":{"name":"turtleupgrade8","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"n9DUgIjMQcB9oUKB_rky5lcebEcYiZtA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/7d129c3b-a03d-4a7c-8617-813598859946.png"},"adc493dd-f0cd-421a-9e6a-c18d207a1d97":{"name":"turtleupgrade9","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"m_hFxjnXem0w8b8mcs4oxST2jp3vwVCN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/adc493dd-f0cd-421a-9e6a-c18d207a1d97.png"},"1c6a7189-5656-42c6-b168-61e529b62d02":{"name":"turtleupgrade10","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"9S8Agva.x3MlNzdyh_oKFTv6e0xcpwM6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/1c6a7189-5656-42c6-b168-61e529b62d02.png"},"a69f3b39-11fc-4a86-8c7f-2d3489cd9ecf":{"name":"turtleupgrade11","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"Kr1wvfb2itOvkP5ONvHCUWI_zngO9orS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/a69f3b39-11fc-4a86-8c7f-2d3489cd9ecf.png"},"13973f9d-908f-4486-b42e-ea6cdd690c24":{"name":"turtleupgrade12","sourceUrl":null,"frameSize":{"x":196,"y":186},"frameCount":1,"looping":true,"frameDelay":12,"version":"PFpcAHtqNUTpdmWXG8j5HuwV8FvkulYk","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":186},"rootRelativePath":"assets/13973f9d-908f-4486-b42e-ea6cdd690c24.png"},"834d0ce3-6a1b-4b0a-8e06-95feff6b9008":{"name":"jellybean","sourceUrl":"assets/v3/animations/YkiK-s2qquDLN-qCGknyzeybQ456h7U7blZb-ierAtg/834d0ce3-6a1b-4b0a-8e06-95feff6b9008.png","frameSize":{"x":279,"y":180},"frameCount":1,"looping":true,"frameDelay":4,"version":"Of8L_0JgaDg16FCbhOToWwSFwBH4.N2Q","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":279,"y":180},"rootRelativePath":"assets/v3/animations/YkiK-s2qquDLN-qCGknyzeybQ456h7U7blZb-ierAtg/834d0ce3-6a1b-4b0a-8e06-95feff6b9008.png"},"a72659ad-8489-4d20-b3d3-4216b17e34bc":{"name":"jellybean2","sourceUrl":null,"frameSize":{"x":279,"y":180},"frameCount":1,"looping":true,"frameDelay":12,"version":"1Fu8BXJkIcWtrVr4urZBsk6hO7qoGphB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":279,"y":180},"rootRelativePath":"assets/a72659ad-8489-4d20-b3d3-4216b17e34bc.png"},"285e842c-e66c-4ad5-b279-adf353367c1f":{"name":"jellybean3","sourceUrl":null,"frameSize":{"x":279,"y":180},"frameCount":1,"looping":true,"frameDelay":12,"version":"uSP0gDBsJSMVCC.WsUknAwIdDZ2.UF6h","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":279,"y":180},"rootRelativePath":"assets/285e842c-e66c-4ad5-b279-adf353367c1f.png"},"b4a56cd9-c7bf-4f0a-928f-c8888b4aea74":{"name":"jellybean4","sourceUrl":null,"frameSize":{"x":279,"y":180},"frameCount":1,"looping":true,"frameDelay":12,"version":"OipMsT7UL56.a9TytUcUFZNZN4qcm.od","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":279,"y":180},"rootRelativePath":"assets/b4a56cd9-c7bf-4f0a-928f-c8888b4aea74.png"},"71ce7d3f-7890-497b-b825-017276a868b9":{"name":"wavethings","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":5,"version":"WQLkJ38oGJylk5VXbBKVInkWHOUUL7Gv","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/71ce7d3f-7890-497b-b825-017276a868b9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// GAME SETUP
// create player, target, and obstacles
playSound("assets/category_background/synthesize.mp3", true);
var backround = createSprite(200, 200);
backround.setAnimation("wavethings");
backround.scale = 4;
var turtle = createSprite(200, 100);
turtle.setAnimation("turtle");
turtle.scale = 0.5;
var jellybean1 = createSprite(200, -50);
jellybean1.setAnimation("jellybean");
jellybean1.scale = 0.07;
jellybean1.velocityY = 2.5;
var jellybean2 = createSprite(50, -30);
jellybean2.setAnimation("jellybean2");
jellybean2.scale = 0.07;
jellybean2.velocityY = 2;
var jellybean3 = createSprite(100, -20);
jellybean3.setAnimation("jellybean3");
jellybean3.scale = 0.07;
jellybean3.velocityY = 2.5;
var jellybean4 = createSprite(350, -60);
jellybean4.setAnimation("jellybean4");
jellybean4.scale = 0.07;
jellybean4.velocityY = 3;
var avacato = createSprite(randomNumber(10, 350), randomNumber(10, 350));
avacato.setAnimation("avocado");
avacato.scale = 0.1;

var health = 75;

var score = 0;
function draw() {
  background("blue");
  fill("white");
  noStroke();
  ellipse(randomNumber(1, 400), randomNumber(1, 400), 10, 10);
  fill("black");
  text("score:", 288, 21);
  text(score, 322, 21);
  text("health:", 288, 35);
  text(health, 328, 35);
  
  // FALLING
  turtle.velocityY = turtle.velocityY + 0.2;
  
  // LOOPING
  if (jellybean1.y > 450) {
    jellybean1.y = -50;
    jellybean1.x = randomNumber(20, 380);
  }
  if (jellybean2.y > 450) {
    jellybean2.y = -50;
    jellybean2.x = randomNumber(20, 380);
  }
  if (jellybean3.y > 450) {
    jellybean3.y = -50;
    jellybean3.x = randomNumber(20, 380);
  }
  if (jellybean4.y > 450) {
    jellybean4.y = -50;
    jellybean4.x = randomNumber(20, 380);
  }
  
  
  // PLAYER CONTROLS
  // change the y velocity when the user clicks "up"
  if (keyDown("up")) {
    turtle.velocityY = -5;
  }
  
  // decrease the x velocity when user clicks "left"
  if (keyDown("left")) {
    turtle.velocityX = -3;
  }
  
  // increase the x velocity when the user clicks "right"
  if (keyDown("right")) {
    turtle.velocityX = 3;
  }
  
  // SPRITE INTERACTIONS
  // reset the coin when the player touches it
  
  if (turtle.isTouching(avacato)) {
    score = score + 1;
    avacato.x = randomNumber(20, 380);
    avacato.y = randomNumber(20, 380);
  }
  
  //health
  if (jellybean4.isTouching(turtle)) {
    health = health - 0.1;
  }
  if (jellybean3.isTouching(turtle)) {
    health = health - 0.1;
  }
  if (jellybean1.isTouching(turtle)) {
    health = health - 0.1;
  }
  if (jellybean2.isTouching(turtle)) {
    health = health - 0.1;
  }
  
  // DRAW SPRITES
  drawSprites();
  //upgrades
  //upgrade10
  if (score < 65) {
    turtle.setAnimation("turtleupgrade12");
    avacato.setAnimation("avocado7");
  }
  //upgrade10
  if (score < 60) {
    turtle.setAnimation("turtleupgrade11");
  }
  //upgrade10
  if (score < 55) {
    turtle.setAnimation("turtleupgrade10");
    avacato.setAnimation("avocado6");
  }
  //upgrade9
  if (score < 50) {
    turtle.setAnimation("turtleupgrade9");
  }
  //upgrade8
  if (score < 45) {
    turtle.setAnimation("turtleupgrade8");
    avacato.setAnimation("avocado5");
  }
  //upgrade7
  if (score < 40) {
    turtle.setAnimation("turtleupgrade7");
  }
  //upgrade6
  if (score < 35) {
    turtle.setAnimation("turtleupgrade6");
    avacato.setAnimation("avocado4");
  }
  //upgrade5
  if (score < 30) {
    turtle.setAnimation("turtleupgrade5");
  }
  //upgrade4
  if (score < 25) {
    turtle.setAnimation("turtleupgrade4");
    avacato.setAnimation("avocado3");
  }
  //upgrade3
  if (score < 20) {
    turtle.setAnimation("turtleupgrade3");
  }
  //upgrade2
  if (score < 15) {
    turtle.setAnimation("turtleupgrade2");
    avacato.setAnimation("avocado2");
  }
  //upgrade1
  if (score < 10) {
    turtle.setAnimation("turtleupgrade1");
    avacato.setAnimation("avocado");
  }
  
  if (score < 5) {
    turtle.setAnimation("turtle");
    avacato.setAnimation("avocado");
  }
  // GAME OVER
  if (health < 1) {
    background("black");
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
    text("score:", 120, 247);
    text(score, 272, 249);
  }
  if (turtle.x < -50 || turtle.x > 450 || turtle.y < -50 || turtle.y > 450) {
    background("black");
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
    text("score:", 120, 247);
    text(score, 272, 249);
  }
  //win
  if (score > 65) {
    background("yellow");
    textSize(50);
    fill("pink");
    text("you win!!", 100, 200);
    text("score:", 100, 247);
    text(score, 252, 249);
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
