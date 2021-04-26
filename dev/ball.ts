export class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number
    
    constructor() {
        this.div = document.createElement("ball")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
    }
    
    public update() : void {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}