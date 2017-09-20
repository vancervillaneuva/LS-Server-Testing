const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
	
    name: {
         type: String,
        require: true,
    },
    ownerName: {
         type: String,
        require: true,
    },
    species: {
         type: String,
        require: true,
    },
    age: {
         type: String,
        require: true,
    },
    sex: { 
         type: String,
        require: true,
    },
    weight: { 
         type: String,
        require: true,
    },
    lastVisit: { 
         type: Date,
        require: true,
    },
    insurance: { 
         type: String,
        require: true,
    },
    email: { 
         type: String,
        require: true,
    },

});


PatientSchema.methods.getName = function() {
	return this.name
};

PatientSchema.statics.getAllPatients =function(cb) {
	Patient.find({}, (err, patient) => {
      if (err)return cb(err);
      cb(patient);
    });
}


const Patient = mongoose.model('Patient', PatientSchema);
module.exports = Patient;