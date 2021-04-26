import { Ball } from "./ball.js"

class Game {
    
    private ball:Ball
    
    constructor() {
        this.ball = new Ball()
        this.gameLoop()
    }
    
    private gameLoop(){
        this.ball.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

new Game()