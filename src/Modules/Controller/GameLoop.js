import { Player } from "../Model/Player-factory.js";
import { GameBoard } from "../Model/GameBoard-factory.js";
import { Ship } from "../Model/Ship-factory.js";
import { pubsub } from "./pubsub.js";

export let GameLoop = (function () {
    // create new player
    let PlayerOne = Player();
    let PlayerTwo = Player();
    // create battle Field
    let BattleFieldOne = GameBoard();
    let BattleFieldTwo = GameBoard();
    // create the Ships
    //player one 
    let CarrierOne = Ship(5);
    let BattleshipOne = Ship(4);
    let DestroyerOne = Ship(3);
    let SubmarineOne = Ship(3);
    let PatrolBoatOne = Ship(2);
    //player two
    let CarrierTwo = Ship(5);
    let BattleshipTwo = Ship(4);
    let DestroyerTwo = Ship(3);
    let SubmarineTwo = Ship(3);
    let PatrolBoatTwo = Ship(2);
    let winner = 0;
    function init() {
        //place player two Ships on battlefield
        RandomShipsPlacement(CarrierTwo);
        RandomShipsPlacement(BattleshipTwo);
        RandomShipsPlacement(DestroyerTwo);
        RandomShipsPlacement(SubmarineTwo);
        RandomShipsPlacement(PatrolBoatTwo);
        // send game board data to UI
        pubsub.publish("GameBoardOne", BattleFieldOne.GameBoardData);
        pubsub.publish("GameBoardTwo", BattleFieldTwo.GameBoardData);
    }
    //event subscription
    pubsub.subscribe("cordAttack", PlayerOneAttack);
    pubsub.subscribe("resetBoards", Reset);
    pubsub.subscribe("PlacementCord", PlayerShipPlacement);
    // player one attack battlefield of player two 
    function PlayerOneAttack([x, y]) {
        let attackState = PlayerOne.attack(x, y, BattleFieldTwo);
        // refresh display  
        pubsub.publish("GameBoardTwo", BattleFieldTwo.GameBoardData);
        if (attackState) PlayerTwoAttack();
        won(BattleFieldOne, BattleFieldTwo);
    }
    // player two attack battlefield of player one
    function PlayerTwoAttack() {
        PlayerTwo.RandomAttack(BattleFieldOne);
        // refresh display  
        pubsub.publish("GameBoardOne", BattleFieldOne.GameBoardData);
    }
    // place ships one battle field two randomly 
    function RandomShipsPlacement(Ship) {
        // generate random cord
        let randX = Math.floor(Math.random() * 10);
        let randY = Math.floor(Math.random() * 10);
        const axis = "xy";
        const randomAxis = axis[Math.floor(Math.random() * axis.length)];
        // place the ship
        let state = BattleFieldTwo.placeShip(Ship, randX, randY, randomAxis);
        // base case
        if (state === true) { return; }
        RandomShipsPlacement(Ship);
    }
    // reset data 
    function Reset() {
        PlayerOne = Player();
        PlayerTwo = Player();
        // create battle Field
        BattleFieldOne = GameBoard();
        BattleFieldTwo = GameBoard();
        // create the Ships
        //player one 
        CarrierOne = Ship(5);
        BattleshipOne = Ship(4);
        DestroyerOne = Ship(3);
        SubmarineOne = Ship(3);
        PatrolBoatOne = Ship(2);
        //player two
        CarrierTwo = Ship(5);
        BattleshipTwo = Ship(4);
        DestroyerTwo = Ship(3);
        SubmarineTwo = Ship(3);
        PatrolBoatTwo = Ship(2);

        winner = 0;
        init();
    }
    // winner of the game
    function won(BoardOne, BoardTwo) {
        if (BoardOne.allSunk()) winner = "PTwo";
        else if (BoardTwo.allSunk()) winner = "POne";
        pubsub.publish("winner", winner);
        winner = 0;
    }
    // player placing his ships 
    function PlayerShipPlacement([x, y, Ship, axis]) {
        let state = false;
        switch (Ship) {
            case "Carrier":
                state = BattleFieldOne.placeShip(CarrierOne, x, y, axis);
                break;
            case "Battleship":
                state = BattleFieldOne.placeShip(BattleshipOne, x, y, axis);
                break;
            case "Destroyer":
                state = BattleFieldOne.placeShip(DestroyerOne, x, y, axis);
                break;
            case "Submarine":
                state = BattleFieldOne.placeShip(SubmarineOne, x, y, axis);
                break;
            case "PatrolBoat":
                state = BattleFieldOne.placeShip(PatrolBoatOne, x, y, axis);
                break;
        }
        pubsub.publish("GameBoardOne", BattleFieldOne.GameBoardData);
        pubsub.publish("ShipPlacedState", state);
    }
    init();
})();