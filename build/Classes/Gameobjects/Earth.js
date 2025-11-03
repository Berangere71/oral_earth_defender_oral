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
import { GameObject } from "./GameObject.js";
import { Assets } from "../Assets.js";
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.health = 100;
        return _this;
    }
    Earth.prototype.start = function () {
        var earthImage = Assets.getEarthImage();
        this.setImage(earthImage);
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2 - earthImage.width / 2,
            y: this.getGame().CANVAS_HEIGHT - 35
        });
    };
    Earth.prototype.update = function () { };
    Earth.prototype.takeDamage = function (amount) {
        this.health -= amount;
        console.log("La Terre a maintenant ".concat(this.health, " points de vie."));
        if (this.health <= 0) {
            this.destroy();
        }
    };
    Earth.prototype.destroy = function () {
        console.log("La Terre est détruite !");
        // Logique pour gérer la destruction de la Terre
    };
    return Earth;
}(GameObject));
export { Earth };
