import { Fish } from "./fish.js"
import { Shark } from "./shark.js"

class Game {
      
    // store fish in array
        
    

    constructor() {
        console.log("Game was created!")
        
        // Create the fish

        // Create the shark
        

        this.gameLoop()
    }

    gameLoop() {
        // update the fish

            // check collision between shark and fish

        // update the shark
        

        requestAnimationFrame(() => this.gameLoop())
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

new Game()