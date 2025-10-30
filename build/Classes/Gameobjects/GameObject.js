import { Assets } from "../Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject(game) {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.width = this.image.width;
        this.height = this.image.height;
        this.start();
    }
    // Getter d'image et de position
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    GameObject.prototype.getGame = function () {
        return this.game;
    };
    GameObject.prototype.getWidth = function () {
        return this.width;
    };
    GameObject.prototype.getHeight = function () {
        return this.height;
    };
    GameObject.prototype.setImage = function (image) {
        this.image = image;
        this.width = image.width;
        this.height = image.height;
    };
    GameObject.prototype.setPosition = function (position) {
        this.position = position;
    };
    GameObject.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    /**
       * Vérifie si l'autre GameObject entre en collision avec ce GameObject
       */
    GameObject.prototype.overlap = function (other) {
        return (this.position.x < other.position.x + other.width &&
            this.position.x + this.width > other.position.x &&
            this.position.y < other.position.y + other.height &&
            this.position.y + this.height > other.position.y);
    };
    GameObject.prototype.start = function () { };
    GameObject.prototype.update = function () { };
    GameObject.prototype.callUpdate = function () {
        this.update();
    };
    GameObject.prototype.collide = function (other) { };
    GameObject.prototype.callCollide = function (other) {
        this.collide(other);
    };
    return GameObject;
}());
export { GameObject };
