import { Ship } from "./Ship-factory.js";
// game board prototype methods 
const GameBoardProto = {
    placeShip(ship, x, y, axis) {
        // don't let the ship go over the game board boundaries 
        if (!(0 <= x && x < 10) || !(0 <= y && y < 10)) return;
        // case ship does not fit 
        if (ship.length + x >= 10 || ship.length + y >= 10) return;
        // case  ship overlap with another ship 
        if (axis === 'x' || axis === 'X') {
            for (let i = 0; i < ship.length; i++) {
                if (this.GameBoardData[y][x + i]) return;
            }
        }
        else if (axis === 'y' || axis === 'Y') {
            for (let i = 0; i < ship.length; i++) {
                if (this.GameBoardData[y + i][x]) return;
            }
        }
        //if ship is in the X axis place it 
        if (axis === 'x' || axis === 'X') {
            for(let i=0; i<ship.length; i++){
                this.GameBoardData[y][x+i] = ship;
            }
        }
        //if ship is in the Y axis place it 
        else if (axis === 'y' || axis === 'Y') {
            for(let i=0; i<ship.length; i++){
                this.GameBoardData[y+i][x] = ship;
            }
        }
    },
}
//Game board factory function 
export const GameBoard = () => {
    let GameBoardData = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    return Object.assign(Object.create(GameBoardProto), { GameBoardData });
}

