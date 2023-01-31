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
    //event subscription
    pubsub.subscribe("cordAttack", PlayerOneAttack)
    // player one attack battlefield of player two 
    function PlayerOneAttack([x, y]) {
        PlayerOne.attack(x, y, BattleFieldTwo);
        // refresh display  
        pubsub.publish("GameBoardTwo", BattleFieldTwo.GameBoardData);
        PlayerTwoAttack();
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
    //place Ships on battlefield
    //player one 
    BattleFieldOne.placeShip(CarrierOne, 0, 0, 'y');
    BattleFieldOne.placeShip(BattleshipOne, 4, 5, 'y');
    BattleFieldOne.placeShip(DestroyerOne, 2, 2, 'y');
    BattleFieldOne.placeShip(SubmarineOne, 6, 5, 'x');
    BattleFieldOne.placeShip(PatrolBoatOne, 7, 6, 'x');
    //player two 
    RandomShipsPlacement(CarrierTwo);
    RandomShipsPlacement(BattleshipTwo);
    RandomShipsPlacement(DestroyerTwo);
    RandomShipsPlacement(SubmarineTwo);
    RandomShipsPlacement(PatrolBoatTwo);


    // send game board data to UI
    pubsub.publish("GameBoardOne", BattleFieldOne.GameBoardData);
    pubsub.publish("GameBoardTwo", BattleFieldTwo.GameBoardData);
})();