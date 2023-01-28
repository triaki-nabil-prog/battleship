import {Ship} from "../../../Modules/Model/Ship-factory.js";

test("size 3 Ship creation", ()=>{
expect(Ship(3)).toEqual({length:3,hits:0,sunk:false})
});

test("size 6 Ship creation", ()=>{
    expect(Ship(6)).toEqual({length:6,hits:0,sunk:false})
    });

test("ship hit", ()=>{
    let obj = Ship(3);
    obj.hit();
    expect(obj).toEqual({length:3,hits:1,sunk:false})
});

test("ship sink", ()=>{
    let obj = Ship(3);
    obj.hit();
    obj.hit();
    obj.hit();
    expect(obj).toEqual({length:3,hits:3,sunk:true})
});

test("try to hit a already sunk ship", ()=>{
    let obj = Ship(3);
    obj.hit();
    obj.hit();
    obj.hit();
    obj.hit();
    obj.hit();
    obj.hit();
    expect(obj).toEqual({length:3,hits:3,sunk:true})
});