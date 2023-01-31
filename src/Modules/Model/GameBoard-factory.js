import { Ship } from "./Ship-factory.js";
// game board prototype methods 
const GameBoardProto = {
    // places a ship at a given coordinate's on the game board
    placeShip(ship, x, y, axis) {
        // don't let the ship go over the game board boundaries 
        if (!(0 <= x && x < 10) || !(0 <= y && y < 10)) return;
        // case ship does not fit in x axis
        if (((ship.length-1) + x > 9 || y > 9) && (axis === 'x' || axis === 'X')) return;
        // case ship does not fit in y axis
        if ((x > 9 || (ship.length-1) + y > 9) && (axis === 'y' || axis === 'Y')) return;
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
            for (let i = 0; i < ship.length; i++) {
                this.GameBoardData[y][x + i] = ship;
            }
        }
        //if ship is in the Y axis place it 
        else if (axis === 'y' || axis === 'Y') {
            for (let i = 0; i < ship.length; i++) {
                this.GameBoardData[y + i][x] = ship;
            }
        }
        this.Ships.push(ship);
    },
    receiveAttack(x, y) {
        if (this.GameBoardData[y][x]) {
            this.GameBoardData[y][x].hit();
            this.GameBoardData[y][x] = "Hit";
        }
        else this.GameBoardData[y][x] = "Miss";
    },
    // test if all ships are sunk
    allSunk() {
        let NbSunken = 0;
        this.Ships.forEach(ship => { if (ship.sunk) NbSunken++; });
        if (this.Ships.length === NbSunken) return true;
        else return false;
    }
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
    let Ships = [];
    return Object.assign(Object.create(GameBoardProto), { GameBoardData, Ships });
}

