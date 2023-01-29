import { GameBoard } from "../../../Modules/Model/GameBoard-factory.js";
import { Ship } from "../../../Modules/Model/Ship-factory.js";

test("place a ship Y axis ", () => {
    let GameBoardOne = GameBoard();
    let ship = Ship(4);
    GameBoardOne.placeShip(ship, 0, 0, "Y");
    expect(GameBoardOne.GameBoardData).toEqual([
        [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
});

test("place a ship X axis ", () => {
    let GameBoardOne = GameBoard();
    let ship = Ship(4);
    GameBoardOne.placeShip(ship, 0, 0, "X");
    expect(GameBoardOne.GameBoardData).toEqual([
        [ship, ship, ship, ship, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
});

test("place a ship over the boards boundaries  ", () => {
    let GameBoardOne = GameBoard();
    let ship = Ship(4);
    GameBoardOne.placeShip(ship, 10, 10, "X");
    expect(GameBoardOne.GameBoardData).toEqual([
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
    ]);
});

test("ships don't fit ", () => {
    let GameBoardOne = GameBoard();
    let ship = Ship(11);
    GameBoardOne.placeShip(ship, 0, 0, "y");
    expect(GameBoardOne.GameBoardData).toEqual([
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
    ]);
});

test("ships don't over lap ", () => {
    let GameBoardOne = GameBoard();
    let ship01 = Ship(4);
    let ship02 = Ship(4);
    GameBoardOne.placeShip(ship01, 0, 0, "y");
    GameBoardOne.placeShip(ship02, 0, 2, "y");
    expect(GameBoardOne.GameBoardData).toEqual([
        [ship01, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ship01, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ship01, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ship01, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
});