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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earth.prototype.start = function () {
        var heartImage = Assets.getHeartImage();
        this.setImage(heartImage);
        this.setSize(30, 30); // Petite taille pour le HUD
    };
    Earth.prototype.update = function () {
        // Pas d'update nécessaire
    };
    return Earth;
}(GameObject));
export { Earth };
