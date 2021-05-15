export class Fish {
    
    x : number = 0
    y : number = 0
    div : HTMLElement

    constructor() {
        console.log("Fish was created!")

        this.create()
    }

    create() {
        this.div = document.createElement("fish")
        document.body.appendChild(this.div)

        // Generate a random x and y value within de width and height of the viewport
    }

    update() {
        // Move the fish (x-value) to the left. 

        // Check if the fish is completely outside the screen (left side)

            // Place the fish on the right side outside the screen

            // Generate a random y-value
            
        

        // Draw the fish on the right coordinate (x, y)
        
    }

    killFish(){
        this.div.classList.add("dead")
    }
}