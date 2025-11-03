
import { GameObject } from "./GameObject.js";
import { Assets } from "../Assets.js";
import { Player } from "./Player.js";
import { Earth } from "./Earth.js"; // Importer Earth pour la collision

export class Alien extends GameObject {
    private speed: number = 1;
    private isAlive: boolean = true;

    protected start(): void {
        this.setImage(Assets.getAlienImage());
        this.setPosition({
            x: Math.random() * this.getGame().CANVAS_WIDTH,
            y: Math.random() * this.getGame().CANVAS_HEIGHT / 4 - 50
        });
    }

    protected collide(other: GameObject): void {
        if (other instanceof Player) {
            console.log("Miam Miam !");
            // this.getGame().over();
        } else if (other instanceof Earth) {
            console.log("L'alien touche la Terre !");
            other.takeDamage(10); // Retire 10 points de vie à la Terre
            this.kill(); // Optionnel : détruire l'alien après l'impact
        }
    }

    protected update(): void {
        if (this.isAlive) {
            // Descendre vers le bas
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
}