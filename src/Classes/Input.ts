export class Input{
    private static axisX : Direction = 0;
    private static isShooting : boolean = false;
   

    public static getIsShooting(): boolean {
        return this.isShooting;
    }

    public static getAxisX(){
        return this.axisX;
    }
    public static listen(){

         window.addEventListener("keydown",(event)=>{
            console.log(event.key)
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
        window.addEventListener("keyup",(event)=>{
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
        document.addEventListener("keydown",(event)=>{
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
        document.addEventListener("keyup",(event)=>{
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
    }
}

type Direction = 0 | 1 | -1;