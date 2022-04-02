//process.env.NODE_ENV = 'test';

const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp)

describe('School', () => {

/*
* Test the /GET route*
*/

    describe('/GET school', () => {
        it('it should GET schools', (done) => {
            chai.request(app)
            .get('/matches')
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
            });
        });
    });

});