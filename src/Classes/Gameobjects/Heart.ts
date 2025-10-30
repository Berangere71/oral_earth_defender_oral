

import { GameObject } from "./GameObject.js";
import { Assets } from "../Assets.js";

export class Earth extends GameObject{

    protected start(): void {
        const heartImage = Assets.getHeartImage();
        this.setImage(heartImage);
        this.setSize(30, 30); // Petite taille pour le HUD
    }

    protected update(): void {
        // Pas d'update nécessaire
    }
}
