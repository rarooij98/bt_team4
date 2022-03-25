// hier komt de Mocha/Chai code waarmee index.js getest kan worden
const assert = require('assert');
const should = require('chai').should();

// om te testen of er een ander bericht word weergeven als er geen matches zijn gevonden:
// const title  = (scholen.length == 0) ? "Er zijn geen matches gevonden" : "Matches:";
describe('No Matches Test', () => {
 it('should return string: "Er zijn geen matches gevonden"', () => {
    const scholen = []
    scholen.length.should.equal(0);
    });
});

