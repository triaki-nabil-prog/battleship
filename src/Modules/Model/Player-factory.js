import { GameBoard } from "./GameBoard-factory.js";

const PlayerProto = {
    attack(x, y, Board) {
        if (this.AlreadyAttacked(x, y, Board)) return false;
        Board.receiveAttack(x, y);
        return true;
    },
    RandomAttack(Board) {
        let successful=false;
        while(!successful){
        let randX = Math.floor(Math.random() * 10);
        let randY = Math.floor(Math.random() * 10);
        successful = this.attack(randX, randY, Board);
        }
    },
    AlreadyAttacked(x, y, Board) {
        switch (Board.GameBoardData[y][x]) {
            case 'Hit': return true;
            case 'Miss': return true;
        }
        return false;
    },
}

export const Player = () => {
    return Object.assign(Object.create(PlayerProto), {});
}