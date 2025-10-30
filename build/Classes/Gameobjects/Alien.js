var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
import { Player } from "./Player.js";
var Alien = /** @class */ (function (_super) {
    __extends(Alien, _super);
    function Alien() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        _this.isAlive = true;
        return _this;
    }
    Alien.prototype.start = function () {
        this.setImage(Assets.getAlienImage());
        // Codez ici ...
        this.setPosition({
            x: Math.random() * this.getGame().CANVAS_WIDTH,
            y: Math.random() * this.getGame().CANVAS_HEIGHT / 4 - 50
        });
    };
    Alien.prototype.collide = function (other) {
        if (other instanceof Player) {
            console.log("Miam Miam !");
            // this.getGame().over()
        }
    };
    Alien.prototype.update = function () {
        if (this.isAlive) {
            // Descend vers le bas
            this.setPosition({
                x: this.getPosition().x,
                y: this.getPosition().y + this.speed
            });
        }
    };
    Alien.prototype.getIsAlive = function () {
        return this.isAlive;
    };
    Alien.prototype.kill = function () {
        this.isAlive = false;
    };
    Alien.prototype.hasReachedEarth = function (earthY) {
        return this.getPosition().y + this.getHeight() >= earthY;
    };
    Alien.prototype.hasReachedPlayer = function (playerY) {
        return this.getPosition().y + this.getHeight() >= playerY;
    };
    return Alien;
}(GameObject));
export { Alien };
