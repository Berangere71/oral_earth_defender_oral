import { Player } from "../Classes/Gameobjects/Player.js";
import { Alien } from "./Gameobjects/Alien.js";
import { Input } from "./Input.js";
import { Star } from "./Gameobjects/Star.js";
import { Earth } from "./Gameobjects/Earth.js";
var Game = /** @class */ (function () {
    function Game() {
        this.nbAliens = 10;
        this.nbStar = 100;
        this.gameObjects = [];
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        // Init Game canvas
        var canvas = document.querySelector("canvas");
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
        this.context = canvas.getContext("2d");
        Input.listen();
    }
    Game.prototype.over = function () {
        alert("GameOver !");
        window.location.reload();
    };
    Game.prototype.start = function () {
        // Clear context
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.player = new Player(this);
        this.draw(this.player);
        this.instanciate(this.player);
        this.earth = new Earth(this);
        this.instanciate(this.earth);
        // ++ Instanciation de l'alien
        this.alien = new Alien(this);
        this.draw(this.alien);
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        this.star = new Star(this);
        this.draw(this.star);
        for (var i = 0; i < 100; i++) {
            this.instanciate(new Star(this));
        }
        Input.listen();
        this.loop();
    };
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            // console.log("Frame!");
            // J'efface la frame précédente.
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // Je redessine le joueur à chaque frame
            _this.draw(_this.player);
            // Je mets à jour le joueur
            _this.player.callUpdate();
            _this.draw(_this.alien);
            _this.alien.callUpdate();
            _this.draw(_this.star);
            _this.star.callUpdate();
            _this.draw(_this.earth);
            _this.earth.callUpdate();
            _this.gameObjects.forEach(function (go) {
                go.callUpdate();
                _this.draw(go);
                _this.gameObjects.forEach(function (other) {
                    // +
                    // Si le gameObject chevauche un gameObject qui n'est pas lui-même
                    if (other != go && go.overlap(other)) {
                        console.log("Deux GameObject différents se touchent");
                        go.callCollide(other); // J'appelle la méthode collide de mon GameObject
                    }
                });
            });
        }, 10); // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    };
    ;
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.destroy = function (gameObject) {
        this.gameObjects = this.gameObjects.filter(function (go) { return go != gameObject; });
    };
    return Game;
}());
export { Game };
