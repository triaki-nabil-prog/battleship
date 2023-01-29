// factory functions created object's prototype 
// so we don't have method's copied when ships created 
const ShipProto = {
    hit() {
        if (!this.sunk) {
            this.hits++;
            this.isSunk();
        }
    },
    isSunk() { if (this.length === this.hits) this.sunk = true; }
}

export const Ship = (length = 0) => {
    return Object.assign(Object.create(ShipProto), { length, hits: 0, sunk: false });
}
