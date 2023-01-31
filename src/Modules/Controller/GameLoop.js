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

    //place Ships on battlefield
    //player one 
    BattleFieldOne.placeShip(CarrierOne, 0, 0, 'y');
    BattleFieldOne.placeShip(BattleshipOne, 4, 5, 'y');
    BattleFieldOne.placeShip(DestroyerOne, 2, 2, 'y');
    BattleFieldOne.placeShip(SubmarineOne, 6, 5, 'x');
    BattleFieldOne.placeShip(PatrolBoatOne, 7, 6, 'x');
    //player two 
    BattleFieldTwo.placeShip(CarrierTwo, 2, 0, 'x');
    BattleFieldTwo.placeShip(BattleshipTwo, 0, 9, 'x');
    BattleFieldTwo.placeShip(DestroyerTwo, 9, 7, 'Y');
    BattleFieldTwo.placeShip(SubmarineTwo, 0, 4, 'x');
    BattleFieldTwo.placeShip(PatrolBoatTwo, 5, 6, 'x');

    // send game board data to UI
    pubsub.publish("GameBoardOne", BattleFieldOne.GameBoardData);
    pubsub.publish("GameBoardTwo", BattleFieldTwo.GameBoardData);
})();