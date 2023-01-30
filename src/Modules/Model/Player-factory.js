import { GameBoard } from "./GameBoard-factory.js";

const PlayerProto = {
    attack(x, y, Board) {
        if (this.AlreadyAttacked(x, y, Board)) return false;
        Board.receiveAttack(x, y);
        return true;
    },
    RandomAttack(Board) {
        let randX = Math.floor(Math.random() * 10);
        let randY = Math.floor(Math.random() * 10);
        return this.attack(randX, randY, Board);
    },
    AlreadyAttacked(x, y, Board) {
        switch (Board.GameBoardData[y][x]) {
            case 0: return false;
            case 'Hit': return true;
            case 'Miss': return true;
        }
    },
}

export const Player = () => {
    return Object.assign(Object.create(PlayerProto), {});
}