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
            done();
            });
        });
    });
    
/*
* Test the /POST route*

* Error message: *
* Timeout of 10000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves *
*/
    
    describe('/POST keuze', () => {
        it('it should POST keuze', (done) => {
        
        let keuze = {
            locatie: 'test',
            niveau: 'test',
            onderwerp: 'test'
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