// hier komt de Mocha/Chai code waarmee index.js getest kan worden

// import de file die getest moet worden
const math = require('../index.js');

// requirements voor mocha en chai
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;

/** TESTEN IS NOG EEN WORK IN PROGRESS **/
// hieronder is een test uitprobeersel

// 1: testen of er een ander bericht word weergeven als er geen matches zijn gevonden
// const title  = (scholen.length == 0) ? "Er zijn geen matches gevonden" : "Matches:";
describe('No Matches Test', () => {
    
    it('should return true: "Er zijn geen matches gevonden"', () => {
        const scholen = []
        const result = (scholen.length == 0);
        expect(result).to.equal(true);
    });
    
    it('should return false: "Matches:"', () => {
        const scholen = ["item"]
        const result = (scholen.length == 0);
        expect(result).to.equal(false);
    });
    
});
