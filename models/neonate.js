var mongoose = require("mongoose");

var neonateSchema = new mongoose.Schema({
    district: { type: String },
    block: { type: Number },
    village: { type: String },
    phc: { type: String },
    subCenter: { type: String },
    rhc: { type: Number },
    year: { type: Number },
    head: { type: String },
    name: { type: String },
    mother: { type: String },

    // Details of respondent
    respondent: { type: String },
    relationship: { type: String },
    liveWith: { type: String },
    respondentEducation: { type: String },
    category: { type: String },
    religion: { type: String },

    // Details of deceased
    sex: { type: Boolean },
    ageInDays: { type: String },
    dob: { type: String },
    dod: { type: String },
    address: { type: String },
    //pin: { type: Number },
    placeOfDeath: { type: String },
    probableCause: { type: String },

    // Neonatal
    injury: { type: String },
    kindOfInjury: { type: String },
    mothersAge: { type: Number },
    pregnancyDuration: { type: Number },
    td: { type: String },
    complications: { type: String },
    complicationsType: { type: String },
    singleOrMultiple: { type: String },
    birthPlace: { type: String },
    attendedDelivery: { type: String },
    umbilicalCord: { type: String },

    // After Birth
    moveCryBreath: { type: String },
    bruises: { type: String },
    malformations: { type: String },
    size: { type: String },
    weight: { type: Number },
    stopCry: { type: String },
    daysAfterStoppedCrying: { type: Number },
    firstBreastfed: { type: String },
    otherThanBreastMilk: { type: String },
    suckleNormally: { type: String },
    StopSuckingInNormalWay: { type: String },
    CompletedDays: {type:String},

    // Details of sickness at death
    fever: { type: String },
    feverDays: { type: String },
    difficultyBreathing: { type: String },
    difficultyBreathingDays: { type: String },
    fastBreathing: { type: String },
    fastBreathingDays: { type: String },
    inDrawingChest: { type: String },
    cough: { type: String },
    grunting: { type: String },
    nostrilsFlare: { type: String },
    diarrhoea: { type: String },
    diarrhoeaDays: { type: String },
    vomit: { type: String },
    vomitDays: { type: String },
    rednessAroundUnbilicalCord: { type: String },
    pustulesRashes: { type: String },
    yellowEyesOrSkin: { type: String },
    spasmsOrFits: { type: String },
    unresponsiveOrUnconscious: { type: String },
    bulgingFontanelle: { type: String },
    cold: { type: String },
    legsDiscoloured: {type:String},
    yellow: { type:String},
    blood : {type:String},
    narrativeLanguageCode: { type: String },

    //symptoms: { type: String },
    //date: { day: { type: Number }, month: { type: Number }, year: { type: Number } }
});

module.exports = mongoose.model('Neonate', neonateSchema);