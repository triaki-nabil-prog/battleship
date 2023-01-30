import { Player } from "../../../Modules/Model/Player-factory.js";
import { GameBoard } from "../../../Modules/Model/GameBoard-factory.js";
import { Ship } from "../../../Modules/Model/Ship-factory.js";

test("player  attack ", () => {
    let player01 = Player();
    let GameBoard01 = GameBoard();
    let s1 = Ship(5);
    let s2 = Ship(4);
    GameBoard01.placeShip(s1, 1, 1, "y");
    GameBoard01.placeShip(s2, 2, 1, "x");
    player01.attack(1, 1, GameBoard01);
    player01.attack(3, 1, GameBoard01);
    player01.attack(9, 9, GameBoard01);
    expect(GameBoard01.GameBoardData).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, "Hit", s2, "Hit", s2, s2, 0, 0, 0, 0],
        [0, s1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, s1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, s1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, s1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, "Miss"],
    ]);
});

test("player  attack a already attacked zone ", () => {
    let player01 = Player();
    let GameBoard01 = GameBoard();
    let s1 = Ship(5);
    GameBoard01.placeShip(s1, 1, 1, "y");
    player01.attack(1, 1, GameBoard01);
    expect(player01.AlreadyAttacked(1, 1, GameBoard01)).toBeTruthy();
    expect(player01.AlreadyAttacked(3, 1, GameBoard01)).toBeFalsy();
});

test("random attack", () => {
    let player01 = Player();
    let GameBoard01 = GameBoard();
    let s1 = Ship(5);
    GameBoard01.placeShip(s1, 1, 1, "y");
    expect(player01.RandomAttack(GameBoard01)).toBeTruthy();
});