import { Ball } from "./ball.js";
class Game {
    constructor() {
        this.ball = new Ball();
        this.gameLoop();
    }
    gameLoop() {
        this.ball.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map