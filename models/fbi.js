var mongoose = require("mongoose");

var FbiSchema = new mongoose.Schema({
    // User reference
    filledBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    //Background Information
    name: { type: String },
    age: {
        years: { type: Number },
        months: { type: Number },
        days: { type: Number }
    },
    sex: { type: Boolean },
    address: { 
        pincode: { type: Number},
        district: { type: String},
        state: { type: String},
        locality:{type: String}
     },
    orderOfBirth: { type: Number },
    caste: { type: String },
    immunization: [
        { type: String }
    ],
    bplCard: { type: Boolean },
    weight: { type: Number },
    growthCurve: { type: String },
    pastIllness: { type: Boolean },
    //natureOfIllness: { type: String },

    // Symptoms during Illness
    inabilityToFeed: { type: Number },
    fever: { type: Number },
    looseStools: { type: Number },
    vomiting: { type: Number },
    fastBreathing: { type: Number },
    convulsions: { type: Number },
    appearanceOfSkinRashes: { type: Number },
    injury: { type: Number },
    otherSymptom: { type: String },

    // Details of treatment
    treatmentTaken: { type: Boolean },
    treatmentLocation: [
        { type: String }
    ],

    // Probable cause of death
    disease: [
        { type: String }
    ],

    // According to the respondent, cause of death
    causeOfDeath: { type: String },

    // Occurence of delay
    delay: [
        { type: String }
    ],

    // Advice according to analysis
    advice: [
        { type: String }
    ],
});

module.exports = mongoose.model("Fbi", FbiSchema);