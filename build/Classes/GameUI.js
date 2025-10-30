import { Heart } from "./Gameobjects/Heart.js";
var GameUI = /** @class */ (function () {
    function GameUI(game) {
        this.hearts = [];
        this.maxLives = 10;
        this.game = game;
        this.initHearts();
    }
    GameUI.prototype.initHearts = function () {
        // Crée 10 cœurs
        for (var i = 0; i < this.maxLives; i++) {
            var heart = new Heart(this.game);
            heart.setSize(30, 30); // Petits cœurs
            heart.setPosition({
                x: 10 + i * 35, // Espacés de 35 pixels
                y: 10
            });
            this.hearts.push(heart);
        }
    };
    GameUI.prototype.getHearts = function () {
        return this.hearts;
    };
    GameUI.prototype.removeHeart = function () {
        if (this.hearts.length > 0) {
            this.hearts.pop(); // Retire le dernier cœur
        }
    };
    GameUI.prototype.getRemainingLives = function () {
        return this.hearts.length;
    };
    GameUI.prototype.drawScore = function (context, aliensKilled, totalAliens) {
        context.fillStyle = "white";
        context.font = "24px Arial";
        context.fillText("Score: ".concat(aliensKilled, "/").concat(totalAliens), 10, 60);
    };
    return GameUI;
}());
export { GameUI };
