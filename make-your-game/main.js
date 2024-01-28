import * as ground from './ground.js'
import * as dino from './dino.js'

//____________________________________________________________________
//                                                      HTML Elements
const worldElem = document.getElementById('world');
const scoreElem = document.getElementById('score');
const startElem = document.getElementById('start');

//_______________________________________________________________
//                                              Functionnalities
//-> Set Default Ratio
const WIDTH = 100
const HEIGHT = 30

const scale = () => {
    let index

    /* -> Set Scale Index based on Difference
    between Window Ratio & Default Ratio */
    innerWidth / innerHeight < WIDTH / HEIGHT
        ? index = window.innerWidth / WIDTH
        : index = widow.innerHeight / HEIGHT

    //-> Scale Window using resulting Index
    worldElem.style.width = `${WIDTH * index}px`
    worldElem.style.height = `${HEIGHT * index}px`
}

//____________________________________________________
//                                          Game Loop
let lastTime

const update = (time) => {

    //-> Initialize Last Time in First Call
    if (lastTime == null) {
        lastTime = time
        requestAnimationFrame(update)
        return
    }
    
    //-> Game Loop
    let delta = time - lastTime
    ground.update(delta, speedScale)
    dino.update(delta, speedScale)

    //-> Interface
    speedUp(delta)
    scoring(delta)

    //-> Recall after Updating Last Time
    lastTime = time
    requestAnimationFrame(update)
}

//___________________________________________________________________________
//                                                              Calculations
const ACCELERATION = .00001
let speedScale
const speedUp = (delta) => speedScale += delta * ACCELERATION

//-------------------------------------------\\
const SCORE_FACTOR = .01
let score

const scoring = (delta) => {
    score += delta * SCORE_FACTOR
    scoreElem.textContent = Math.floor(score)
}

//___________________________________________________
//                                      Game Trigger
const handleStart = () =>   {
    lastTime = null
    score = 0
    speedScale = 1
    ground.setup()
    dino.setup()
    startElem.classList.add('hide')
    requestAnimationFrame(update)
}

//______________________________________________________________________________
//                                                                  Main Script
scale()
addEventListener('resize', scale)
document.addEventListener('keydown', handleStart, {once: true})
