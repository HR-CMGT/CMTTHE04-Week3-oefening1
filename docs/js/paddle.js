export class Paddle {
    constructor() {
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.upkey = "ArrowUp";
        this.downkey = "ArrowDown";
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    getRectangle() {
        return this.div.getBoundingClientRect();
    }
    onKeyDown(e) {
        console.log(e.key);
        switch (e.key) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    }
    onKeyUp(e) {
        switch (e.key) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    }
    update() {
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=paddle.js.map