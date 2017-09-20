const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Food = require('./patient');
const server = require('./server');
const chai = require('chai');
const { expect } = chai;
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

describe('/patient', () => {

   let patientId;

    beforeEach((done) => {

      new Patient({
        name: 'Basha'
      }).save((err, savePatient) => {

         patientId = savePatient.id;
         done();
      });

    });


    afterEach((done) => {
        Patient.remove({}, (err) => {
           if (err) {
             console.log(err);
             return done();
           }
           done();
        });
    });


   // Get 
	 describe('[GET] /patient', () => {
         it('should get all the patients', (done) => {
              chai.request(server)
              .get('/patient')
              .end((err, res)=> {
               if (err) return done(err);
               expect(res.status).to.equal(200);
               expect(Array.isArray(res.body)).to.equal(true);
               expect(res.body[0].name).to.equal('Basha');
               done();
              });
         });
	 });

	 describe('[POST] /patient', () => {
           it('should add a new patient', (done) => {
               const patient = {
                   name: 'Basha',
               }
              chai.request(server)
                .post('/patient')
                .send(patient)
                .end((err, res) => {
                 if (err) return done(err);
                  expect(res.status).to.equal(201);
                  expect(res.body.name).to.equal('Basha');
                  done();
                });
          });
	 });

	 describe('[PUT] /patient/:id', () => {

	 });

	 describe('[DELETE] /patient/:id', () => {
          it('should delete a patient', (done) => {
               const patient = {
                   name: 'Basha',
               }
              chai.request(server)
                .post('/patient')
                .send(patient)
                .end((err, res) => {
                 if (err) return done(err);
                  expect(res.status).to.equal(201);
                  expect(res.body.name).to.equal('Basha');
                  done();
                });
          });
	 });
});