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
    
/*
* Test the /POST route*
*/
    
    describe('/POST keuze', () => {
        it('it should POST keuze', (done) => {
        
        let keuze = {
        locatie: 'Amsterdam',
        niveau: 'HBO',
        onderwerp: 'Design en Creatie'
        }
        
        chai.request(app)
        .post('/form')
        .send(keuze)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.keuze.should.have.property('locatie');
            res.body.keuze.should.have.property('niveau');
            res.body.keuze.should.have.property('onderwerp');
            done();
            });
        });
    });

});