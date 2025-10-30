
import { GameObject } from "../Classes/Gameobjects/GameObject.js";
import { Player } from "../Classes/Gameobjects/Player.js";
import { Alien } from "./Gameobjects/Alien.js";
import { Input } from "./Input.js";
import { Star } from "./Gameobjects/Star.js";
import { Earth } from "./Gameobjects/Earth.js";


export class Game{

        //Public attributs
   
    private context : CanvasRenderingContext2D;
    private player : Player;
    private alien : Alien;
    private nbAliens : number = 10;
    private nbStar : number = 100;
    private gameObjects : GameObject[] = [];
    private earth : Earth;
    private star : Star;
    
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;

    public over() : void {
        alert("GameOver !")
        window.location.reload();
    }
    
    constructor(){
        // Init Game canvas
        const canvas : HTMLCanvasElement = document.querySelector("canvas");
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
        this.context = canvas.getContext("2d");

        Input.listen();
    }

 

    public start() : void{
        // Clear context
        this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
       
        this.player = new Player(this);
        this.draw(this.player);
        this.instanciate(this.player);

        this.earth = new Earth(this);
        this.instanciate(this.earth);

        // ++ Instanciation de l'alien
        this.alien = new Alien(this);
        this.draw(this.alien);
        for (let i=0; i<this.nbAliens; i++){
            this.instanciate(new Alien(this));
        }

        this.star = new Star(this);
        this.draw(this.star);
        for (let i = 0; i < 100; i++){
            this.instanciate(new Star(this));
        }

        Input.listen();

        this.loop();

    }
    
    private draw(gameObject : GameObject){
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        );
    }
    private loop(){
    setInterval(()=>{
        // console.log("Frame!");
        // J'efface la frame précédente.
        this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        
        // Je redessine le joueur à chaque frame
        this.draw(this.player);
        // Je mets à jour le joueur
        this.player.callUpdate();

        this.draw(this.alien);
        this.alien.callUpdate();

        this.draw(this.star);
        this.star.callUpdate();

        this.draw(this.earth);
        this.earth.callUpdate();

        this.gameObjects.forEach(go=>{
            go.callUpdate();
            this.draw(go);
        if(go instanceof Alien && this.player.overlap(go)){ 
        console.log("Alien touche le joueur");
            }

        this.gameObjects.forEach(other=>{
        // +
        // Si le gameObject chevauche un gameObject qui n'est pas lui-même
            if(other != go && go.overlap(other)){
            console.log("Deux GameObject différents se touchent");
            go.callCollide(other); // J'appelle la méthode collide de mon GameObject
            }
        })
        })
         
    },10); // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
};

public instanciate(gameObject : GameObject) : void {
    this.gameObjects.push(gameObject);
}
public getPlayer() : Player{
    return this.player;
}
public destroy(gameObject : GameObject) : void {
    this.gameObjects = this.gameObjects.filter(go=>go!=gameObject);
}

    
}
