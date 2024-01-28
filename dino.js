import * as customProperty from './customProperty.js'

const dinoElem = document.getElementById('dino')

const JUMP_SPEED = .45
const GRAVITY = .011
const FRAMES = 2
const INTERVAL = 100    //--                    --> Time Interval between FRAMES

let isJumping
let currentFrame
let currentInterval

//_________________________________________
//                              Setup Dino
export const setup = () => {
    isJumping = false
    currentFrame = 0
    currentInterval = 0
}

//___________________________________________________________________
//                                              Handle Dino Movement
export const update = (delta, speedScale) => {
    run(delta, speedScale)
    jump()
}

//______________________________________________________________________________________________
//                                                                          Animation Functions
const run = (delta, speedScale) => {

    //-> Off Ground State
    if (isJumping) {
        dinoElem.src = './assets/img/sprites/dinoStatic.png'
        return
    }

    //-> On Ground State
    if (currentInterval >= INTERVAL) {

        //-> Animation Loop
        currentFrame = (currentFrame + 1) % FRAMES
        dinoElem.src = `./assets/img/sprites/dinoRun${currentFrame}.png`

        //-> Refresh Interval
        currentInterval -= INTERVAL
    }

    //-> Acceleration Factor
    currentInterval += delta * speedScale
}

//-----------------------------------------------------------------------\\

const jump = () => {

}