export class Shark{
    x : number
    y : number
    div : HTMLElement

    verticalSpeed : number = 0

    constructor() {
        console.log("Fish was created!")

        // Add the event listeners to the window for the keyboard events

        this.create()
    }

    create() {
        this.div = document.createElement("shark")
        document.body.appendChild(this.div)

        // generate x and y values
    }

    update() {
        // Add the vertical speed to the y-value
        
        // Draw the shark on the right coordinate (x, y)
        
    }

    onKeyDown(e: KeyboardEvent): void {
        // log the keyboard
        console.log(e.key)

        // Check if the key in the event (e.key) matches the desired input
        
            // When the "ArrowUp" key is pressed
        
                // Give the vertical speed a negative value
        
        
            // When the "ArrowDown" key is pressed
        
                // Give the vertical speed a positive value
        
        
        
    }

    onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp or ArrowDown key has been released
        
            // Make the vertical speed 0
        
        
    }
}