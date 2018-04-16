var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrganizerSchema = new Schema({
    authorizerId:{
        type: String
    },
    fullName: {
        type: String,
        unique: true,
        required: true
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    photo: {
        type: String
    },
    job: {
        type: String
    },
    authenticatedWith:{
        type: String,
        enum: ['linkedin','meetup']
    },
    URL: {
        type: String,
        unique: true,
    },
    messagesSent: {
        type: Number,
        default: 0
    },
    linkedinClickd: {
        type: Number,
        default: 0
    },
    email:{
        type: String,
        default: null
    },
    meshNetworkName:{
        type: String,
        default: "My Network"
    },
    meshCreated: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meshes"
    }],
    acceptedTermsAndConditions: {
        type: Number,
        default: 0
    },
    acceptedTermsAndConditionsOn: {
        type: Number,
        default: 0
    }
});

var Organizer = mongoose.model("Organizer", OrganizerSchema);
module.exports = Organizer;