import * as customProperty from './customProperty.js'

const grounds = document.querySelectorAll('.ground')

const SPEED = .05

//_____________________________________________________________________
//                                                  Join Ground Pieces
export const setup = () => {
    customProperty.set(grounds[0], '--left', 0)
    customProperty.set(grounds[1], '--left', 300)
}

//_______________________________________________________________________________________________
//                                                                              Ground Animation
export const update = (delta, speedScale) => grounds.forEach(ground => {

    customProperty.update(ground, '--left', delta * speedScale * SPEED * - 1)
    
    //-> Restart Process using 'Ouroboros' Cycle
    if (customProperty.get(ground, '--left') <= -300) {
        customProperty.update(ground, '--left', 600)
    }
})
