
import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { Position } from "../Positions/Position.js";
import { Player } from "../Gameobjects/Player.js";
import { Earth } from "../Gameobjects/Earth.js";

export class GameObject{
    
    private position : Position;
    private image : HTMLImageElement;
    private game : Game;
    private earth : Earth;
    private player : Player;
    private width : number;
    private height : number;
  
    
    constructor(game : Game){
        this.position = {
            x : 0,
            y : 0
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.width = this.image.width;
        this.height = this.image.height;

        this.start();
    }

    // Getter d'image et de position
    public getImage() : HTMLImageElement{
        return this.image;
    }
    public getPosition() : Position{
        return this.position;
    }
    public getGame() : Game{
        return this.game;
    }

    public getWidth() : number {
        return this.width;
    }

    public getHeight () : number {
        return this.height;
    }

    public setImage(image : HTMLImageElement) {
        this.image = image;

        this.width = image.width;
        this.height = image.height;
    }

    public setPosition(position : Position) {
        this.position = position;
    }

    public setSize(width : number,height : number) {
        this.width = width;
        this.height = height;
    }


  /**
     * Vérifie si l'autre GameObject entre en collision avec ce GameObject
     */
     public overlap(other: GameObject): boolean {
        return (
            this.position.x < other.position.x + other.width &&
            this.position.x + this.width > other.position.x &&
            this.position.y < other.position.y + other.height &&
            this.position.y + this.height > other.position.y
        );
    }

    protected start(): void {}

    protected update(): void {}

    public callUpdate() {
        this.update();
    }

    protected collide(other: GameObject): void {}

    public callCollide(other: GameObject) {
        this.collide(other);
    }
}

 






