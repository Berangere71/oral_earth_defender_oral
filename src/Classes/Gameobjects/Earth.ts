
import { GameObject } from "./GameObject.js";
import { Assets } from "../Assets.js";

export class Earth extends GameObject{

        protected start(): void {
        const earthImage = Assets.getEarthImage();
        this.setImage(earthImage);
       
        this.setSize(1500,10000);

        this.setPosition ( {
        x: this.getGame().CANVAS_WIDTH / 2 - earthImage.width/2,
        y: this.getGame().CANVAS_HEIGHT - 35  });
  
    }

    protected update() : void{
       



    }

}