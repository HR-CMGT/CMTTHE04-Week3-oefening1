export class Paddle {

    private div: HTMLElement
    private x: number
    private y: number

    private downkey: string
    private upkey: string

    private downSpeed: number = 0
    private upSpeed: number = 0

    constructor() {
        this.div = document.createElement("paddle")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.upkey   = "ArrowUp"
        this.downkey = "ArrowDown"

        this.x = 0
        this.y = 200

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        // log het toetsenbord:
        console.log(e.key)

        switch (e.key) {
            case this.upkey:
                this.upSpeed = 5
                break
            case this.downkey:
                this.downSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key) {
            case this.upkey:
                this.upSpeed = 0
                break
            case this.downkey:
                this.downSpeed = 0
                break
        }
    }

    public update() {
        this.y = this.y - this.upSpeed + this.downSpeed
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}