import { pubsub } from "../Controller/pubsub.js";

export let GameUi = (function () {
    //Game board state

    //cache DOM
    const PlayerName = document.querySelector(".name");
    const NewPlayerField = document.querySelector(".player-new")
    const GridOne = document.querySelector(".grid-one");
    const GridTwo = document.querySelector(".grid-two");
    const DisplayText = document.querySelector(".display-text");
    const restart = document.querySelector(".restart");
    const start = document.querySelector(".start");
    const GridOneCells = document.querySelectorAll(".grid-one div");
    const GridTwoCells = document.querySelectorAll(".grid-two div");

    //Bind events
    AddGlobalEventListener("click", ".new-game", PlaceShips);
    AddGlobalEventListener("click", ".restart", RestartGame);
    AddGlobalEventListener("click", ".start", DisplayBattleField);
    AddGlobalEventListener("click", ".grid-two div", AttackFieldTwo);
    //event listeners binder function
    function AddGlobalEventListener(type, selector, callback) {
        document.addEventListener(type, (e) => {
            if (e.target.matches(selector)) {
                callback(e);
            }
        });
    }
    //event subscription
    pubsub.subscribe("GameBoardOne", RenderFieldOne);
    pubsub.subscribe("GameBoardTwo", RenderFieldTwo);
    //display player game board to place ships 
    function PlaceShips() {
        NewPlayerField.style.display = "none";
        GridOne.style.display = "grid";
        DisplayText.style.display = "block"
        DisplayText.textContent = `Place your Ships Captain ${PlayerName.value}`;
        restart.style.display = "block";
        start.style.display = "block";
    }
    // return to  captain name selection 
    function RestartGame() {
        GridOne.style.display = "none";
        GridTwo.style.display = "none";
        DisplayText.style.display = "none";
        restart.style.display = "none";
        start.style.display = "none";
        NewPlayerField.style.display = "flex";
        pubsub.publish("resetBoards",true);
    }
    // display both game boards 
    function DisplayBattleField() {
        start.style.display = "none";
        GridTwo.style.display = "grid";
    }
    // populate players One game board one 
    function RenderFieldOne(FieldDataOne) {
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                if (typeof FieldDataOne[y][x] === "object") { GridOneCells[Number(`${y}${x}`)].style.backgroundColor = "#8A5F08" }
                else if (FieldDataOne[y][x] === "Hit") { GridOneCells[Number(`${y}${x}`)].style.backgroundColor = "#B02522" }
                else if (FieldDataOne[y][x] === "Miss") { GridOneCells[Number(`${y}${x}`)].style.backgroundColor = "#354F8B" }
                else if(FieldDataOne[y][x] === 0){GridOneCells[Number(`${y}${x}`)].style.backgroundColor = "#0F265D" }
            }
        }
    }
    // populate players Two game board Two 
    function RenderFieldTwo(FieldDataTwo) {
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                if (typeof FieldDataTwo[y][x] === "object") { GridTwoCells[Number(`${y}${x}`)].style.backgroundColor = "#8A5F08" }
                else if (FieldDataTwo[y][x] === "Hit") { GridTwoCells[Number(`${y}${x}`)].style.backgroundColor = "#B02522" }
                else if (FieldDataTwo[y][x] === "Miss") { GridTwoCells[Number(`${y}${x}`)].style.backgroundColor = "#354F8B" }
                else if(FieldDataTwo[y][x] === 0){GridTwoCells[Number(`${y}${x}`)].style.backgroundColor = "#0F265D" }
            }
        }
    }
    // attack enemy battle field  two 
    function AttackFieldTwo(cell) {
        let yx, rest = 0;
        let y, x = 0;
        let coordinate = [];
        GridTwoCells.forEach(elem => {
            if (elem.className === cell.target.className) [rest, yx] = elem.className.split('-');
        });
        [y, x] = yx.split('');
        coordinate.push(+x);
        coordinate.push(+y);
        pubsub.publish("cordAttack", coordinate)
    }
})();