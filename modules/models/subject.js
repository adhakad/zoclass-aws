const mongoose = require('mongoose');

const SubjectModel = mongoose.model('subject', {
    subject: {type: String},
    image:{type:String},
});

module.exports = SubjectModel;
