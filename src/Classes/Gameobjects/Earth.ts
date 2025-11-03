
import { GameObject } from "./GameObject.js";
import { Assets } from "../Assets.js";

export class Earth extends GameObject{
        private health: number = 100; 
        protected start(): void {
        const earthImage = Assets.getEarthImage();
        this.setImage(earthImage);
       


        this.setPosition ( {
        x: this.getGame().CANVAS_WIDTH / 2 - earthImage.width/2,
        y: this.getGame().CANVAS_HEIGHT - 35  });
  
    }

        protected update() : void{ }

        public takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`La Terre a maintenant ${this.health} points de vie.`);
        if (this.health <= 0) {
            this.destroy();
        }
    }
        private destroy(): void {
        console.log("La Terre est détruite !");
        // Logique pour gérer la destruction de la Terre
    }
}