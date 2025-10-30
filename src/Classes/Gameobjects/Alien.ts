
import { Assets } from "../Assets.js"
import { GameObject } from "./GameObject.js"
import { Player } from "./Player.js"

export class Alien extends GameObject{
    private speed : number = 1;
    private isAlive: boolean = true;

       protected start(): void {
           this.setImage(Assets.getAlienImage());
           // Codez ici ...
           this.setPosition ( {
           x: Math.random() * this.getGame () .CANVAS_WIDTH,
           y: Math.random() * this.getGame () .CANVAS_HEIGHT /4 - 50   
           });
       
       }
   
        
        protected collide(other: GameObject): void {
            if (other instanceof Player) {
                console.log ("Miam Miam !")
                // this.getGame().over()
            }
        }

        protected update(): void {
            if (this.isAlive) {
            // Descend vers le bas
            this.setPosition({
                x: this.getPosition().x,
                y: this.getPosition().y + this.speed
            });
        }
        }

        public getIsAlive(): boolean {
        return this.isAlive;
        }

        public kill(): void {
        this.isAlive = false;
        }   

        public hasReachedEarth(earthY: number): boolean {
        return this.getPosition().y + this.getHeight() >= earthY;
        }

        public hasReachedPlayer(playerY: number): boolean {
        return this.getPosition().y + this.getHeight() >= playerY;
        }
}