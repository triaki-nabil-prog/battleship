export const Ship = (length = 0) => {
    // factory functions created object's prototype 
    // so we don't have method's copied when ships created 
    const objProto = {
        hit() {
            this.hits++;
            this.isSunk();
        },
        isSunk() { if (this.length === this.hits) this.sunk = true; }
    }

    return Object.assign(Object.create(objProto), { length, hits: 0, sunk: false });
}
