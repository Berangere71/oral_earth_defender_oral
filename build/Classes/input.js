var Input = /** @class */ (function () {
    function Input() {
    }
    // +
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.listen = function () {
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                // Go right
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                //Go left
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                default:
                    break;
            }
        });
        document.addEventListener("Keyup", function (event) {
            switch (event.key) {
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
    return Input;
}());
export { Input };
