# FS Architecture:
        |
        + - - assets/ - +
        |               + - - audio/ -- +
        |               |               + - - soundEffects/
        |               |               |               +- running.mp3
        |               |               |               +- blasting.mp3
        |               |               |               +- jumping.mp3
        |               |               |               +- gravity.mp3
        |               |               |               +- grounding.mp3
        |               |               |
        |               |               + - - soundtrack/
        |               |                               +- intro.mp3
        |               |                               +- mainMenuTheme.mp3
        |               |                               +- inGameTheme.mp3
        |               |                               +- pauseMenu.mp3
        |               |                               +- victoryTheme.mp3
        |               |            
        |               + - - css/ - -- +
        |               |               +- style.css
        |               |
        |               |
        |               + - - img/ - -- +
        |                               + - - objects/ -+
        |                               |               +- cactus.png
        |                               |               +- ground.png
        |                               |
        |                               + - - sprites/ -+
        |                               |               +- dinoLose.png
        |                               |               +- dinoRun0.png
        |                               |               +- dinoRun1.png
        |                               |               +- dinoStatic.png
        |                               |
        |                               +- background.png
        |
        |
        + - - docs/ - - +
        |               +- struct.md
        |               +- ReadMe.md
        |
        |
        + - - src/ - -- +
        |               + - - animation/+
        |               |               +- spriteData.js
        |               |               +- spriteAnimation.js
        |               |
        |               + - - characters/
        |               |               +- playerController.js
        |               |               +- nonPlayerController.js
        |               |
        |               + - - engine/ - +
        |               |               +- gameLoop.js
        |               |               +- rendering.js
        |               |               +- inputSystem.js
        |               |
        |               + - - gameState/
        |               |               +- mainMenu.js
        |               |               +- inGame.js
        |               |               +- pauseMenu.js
        |               |
        |               + - - interface/
        |               |               +- livesCounter.js
        |               |               +- scoreDisplay.js
        |               |               +- timer.js
        |               |
        |               + - - physics/ -+
        |                               +- collisionDetection.js
        |                               +- collisionResolution.js
        |                               +- gravityEffect.js
        |            
        |
        +- script.js
        |
        +- index.html

<br>

# DOM Tree:
        |
        |_ _ < head > __
        |               |_ _ < title > _
        |               |               |_ _ > Jurassic Run <
        |               |       
        |               |_ _ < link > 'stylesheet'
        |               |
        |               |_ _ < script > 'module'
        |
        |
        |_ _ < body > __
                        |_ _ < div > #world __ _
                                                |_ _ < div > #score __ _
                                                |                       |_ _ > 0 <
                                                |
                                                |_ _ < div > #start __ _
                                                |                       |_ _ > Press Any Key To Start <
                                                |
                                                |_ < img > .ground
                                                |
                                                |_ < img > .ground
                                                |
                                                |_ < img > #dino

<br>

# MODELS / VARIABLES
```js

const WIDTH
const HEIGHT
let index

```

<br>

# FUNCTIONS:
## Scale
```js



```