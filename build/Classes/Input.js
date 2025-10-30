var Input = /** @class */ (function () {
    function Input() {
    }
    Input.getIsShooting = function () {
        return this.isShooting;
    };
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.listen = function () {
        window.addEventListener("keydown", function (event) {
            console.log(event.key);
            switch (event.key) {
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
        });
        window.addEventListener("keyup", function (event) {
            switch (event.key) {
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = false;
                    break;
                default:
                    break;
            }
        });
        // Key Down
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                // Go right
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                // Go left
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                default:
                    break;
            }
        });
        // Key Realeased
        document.addEventListener("keyup", function (event) {
            switch (event.key) {
                // Player Stops
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                default:
                    break;
            }
        });
    };
    Input.axisX = 0;
    Input.isShooting = false;
    return Input;
}());
export { Input };
