const app = require('../index');

const chai = require('chai');
const chaiHttp = require('chai-http');
var expect = require('chai').expect
chai.use(chaiHttp)

/*
* Test the /GET route *
*/
describe('/GET login formulier', () => {
    it('it should GET the login view', (done) => {
        chai.request(app)
        .get('/login')
        .end((err, res) => {
        expect(res.status).to.be.eq(200);
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
            locatie: 'test',
            niveau: 'test',
            onderwerp: 'test'
        }
        chai.request(app)
        .post('/form')
        .send(keuze)
        .end((err, res) => {
            expect(res.status).to.be.eq(200);    
            expect(keuze).to.have.property('locatie');
            expect(keuze).to.have.property('niveau');
            expect(keuze).to.have.property('onderwerp');
            done();
        });
    });
});