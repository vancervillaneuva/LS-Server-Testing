const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Patient = require('./patient');
const server = require('./server');
const chai = require('chai');
const { expect } = chai;
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);
const sinon = require('sinon');


describe('Patient', () => {
	describe('#getName()', () => {
     if('should return the name of the patient ', () => {
       const patient = new Patient({
          name: 'Basha',
       });
       expect(patient.getName()).to.equal('Basha');
     });
	});
    
    describe('#getAllpatients()', () => {
       sinon.stub(patient, 'find');
       patient.find.yields(null, [{ name: 'Cheska'}]);
       patient.getAllpatients(() => {
            expect(patients.length).to.equal(1);
            expect(patients[0].name).to.equal('Cheska');
            Patient.find.restore();
       });
    });

});
