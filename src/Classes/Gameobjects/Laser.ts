
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
import { Alien } from "./Alien.js";
import { Player } from "./Player.js";

export class Laser extends GameObject {
    private speed: number = 10;
    private isActive: boolean = true;    
    
    protected start(): void {

        this.setImage(Assets.getLaserImage());
        this.setPosition({
            x : this.getGame().getPlayer().getPosition().x,
            y : this.getGame().getPlayer().getPosition().y - this.getImage().height
        })
    }

    protected update(): void {
        this.setPosition({
            x : this.getPosition().x,
            y : this.getPosition().y -10,
        });

        if (this.isActive) {
            // Monte vers le haut
            this.setPosition({
                x: this.getPosition().x,
                y: this.getPosition().y - this.speed
            });

        if (this.getPosition().y < -this.getHeight()) {
                this.isActive = false;
            }
    }  
}
    public getIsActive(): boolean {
        return this.isActive;
    }

    public deactivate(): void {
        this.isActive = false;
    }

}