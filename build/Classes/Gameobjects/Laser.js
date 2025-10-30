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
var Laser = /** @class */ (function (_super) {
    __extends(Laser, _super);
    function Laser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 10;
        _this.isActive = true;
        return _this;
    }
    Laser.prototype.start = function () {
        this.setImage(Assets.getLaserImage());
        this.setPosition({
            x: this.getGame().getPlayer().getPosition().x,
            y: this.getGame().getPlayer().getPosition().y - this.getImage().height
        });
    };
    Laser.prototype.update = function () {
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y - 10,
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
    };
    Laser.prototype.getIsActive = function () {
        return this.isActive;
    };
    Laser.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Laser;
}(GameObject));
export { Laser };
