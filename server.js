/*jshint esversion: 6 */

// Importing modules
var express = require('express'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require("passport-local"),
    bodyParser = require("body-parser"),
    app = express(),
    passportLocalMongoose = require("passport-local-mongoose");

// Importing models
var User = require('./models/user');
var Fbi  = require('./models/fbi');
var Neonate = require('./models/neonate');
var postNeonate = require('./models/postNeonate');

var authRoutes = require('./routes/auth');
var apiRoutes = require('./routes/api');

// Connecting to MongoDB via mongoose
mongoose.connect("mongodb://intern:intern1@ds151596.mlab.com:51596/hp_intern", {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useCreateIndex: true,
    useNewUrlParser: true
});

// For session
app.use(require("express-session")({
    secret: "Rusty is the cutest",
    resave: false,
    saveUninitialized: false,
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Using external routes 
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get("/", function (req, res) {
    res.render('login');
});

app.get("/ashaForm", isAshaLoggedIn, function(req, res) {
    res.render('ashaForm', {req});
});

app.get("/bmoForm", isBMOLoggedIn, function(req, res) {
    res.render('bmoForm', {req});
});

app.get("/anmForm", isANMLoggedIn, function(req, res) {
    res.render('anmForm', {req});
});

app.post('/ashaForm', isAshaLoggedIn, function(req, res) {
    var ashaForm = new AshaForm({
        name : req.body.name,
        address: req.body.address
    });

    ashaForm.save((err) => {
        if(!err) {
            return 
        }
        return res.status(400).send();
    });
}); 


    




////////////////////////////////////////////////////////////////////////////////////////////

// Fbi Form save code 

app.post('/update', isANMLoggedIn , function(req,res){
    var fbiForm = new Fbi({
        name : req.body.nameOfTheChild,
        age : {
            years : req.body.year,
            months: req.body.month,
            days: req.body.days,
        },
        sex: req.body.gender,
        address: {
            pincode: req.body.pincode,
            district: req.body.district,
            state: req.body.state,
            locality: req.body.locality
        },
        orderOfBirth: req.body.order,
        caste: req.body.caste,
        immunization: req.body.immunization,
        bplCard: req.body.belowPovertyLineCard,
        weight: req.body.weight,
        growthCurve: req.body.growthCurve,
        pastIllness: req.body.pastIllness,
        //natureOfIllness: req.body.
        inabilityToFeed: req.body.inabilityToFeed,
        fever: req.body.fever,
        looseStools: req.body.looseStools,
        vomiting: req.body.vomiting,
        fastBreathing: req.body.fastBreathing,
        convulsions: req.body.convulsions,
        appearanceOfSkinRashes: req.body.skinRashes,
        injury: req.body.injury,
        otherSymptom: req.body.otherSymptoms,

        // Details of treatment

        treatmentTaken: req.body.treatmentTaken,
        treatmentLocation: req.body.whereWasTheChildTreated,

        // probable cause of death
        disease: req.body.probableCauseOfDeath,

        // According to the respondent, cause of death
        causeOfDeath: req.body.causeOfDeath,

        // Occurence of delay
        delay: req.body.delayOccurred,

        // Advice according to analysis
        advice: req.body.avertDeath,
        
        });


        fbiForm.save((err) => {
        if(!err){
            return
        }
        return res.status(400).send();
        });
});



function isANMLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        if(req.user.role === 'anm') {
            return next();
        }
    }
    res.render('unauthorizedError');
}

/////////////////////////////////////////////////////////////////////////////////////////


// Verbal Autopsy Form_1 save code // neonate 

app.post('/neonate', isMOLoggedIn , function(req,res){
    var neonate  = new Neonate({

        district: req.body.district,
        block: req.body.block,
        village: req.body.village,
        phc: req.body.phc,
        subCenter: req.body.subCenter,
        rch: req.body.rhc,
        year: req.body.year,
        head: req.body.headOfHousehold,
        name: req.body.deceasedName,
        mother: req.body.motherNameDeceased,

        // Details of respondent
        respondent: req.body.respondentName,
        relationship: req.body.relationshipOfRespondentWithDeceased,
        liveWith: req.body.didTheRespondentLiveWithTheDeceased,
        respondentEducation: req.body.highestStandardOfEducationTheRespondentHasCompleted,
        category: req.body.category,
        religion: req.body.religionOfTheHeadOfTheHousehold,

        // Details of deceased
        sex: req.body.deceasedSex,
        ageInDays: req.body.ageInCompletedDays,
        dob: req.body.deathOfBirth,
        dod: req.body.dateOfDeath,
        address: req.body.houseAddress,
        //pin: req.body.,
        placeOfDeath: req.body.placeOfDeath,
        probableCause: req.body.respondentThink,


        // Neonatal
        injury: req.body.injuryOrAccident,
        kindOfInjury: req.body.kindOfInjuryOrAccident,
        mothersAge: req.body.motherAge,
        pregnancyDuration: req.body.monthsOfPregnancy,
        td: req.body.didTheMotherReceive2DosesOfTdDuringPregnancy,
        complications: req.body.anyComplicationsDuringThePregnancyOrDuringLabour,
        complicationsType: req.body.complication,
        singleOrMultiple: req.body.wasTheChildASingleOrMultipleBirth,
        birthPlace: req.body.whereWasTheBabyBorn,
        attendedDelivery: req.body.whoAttendedTheDelivery,
        umbilicalCord: req.body.wasADisinfectedOrNewUsedToCutTheUmbilicalCord,

        // After Birth
        moveCryBreath: req.body.didTheBabyEverCry,
        bruises: req.body.wereThereAnyBruisesOrSignsOfInjuryOnChild,
        malformations: req.body.malformationsAtBirth,
        size: req.body.sizeAtBirth,
        weight: req.body.birthWeight,
        stopCry: req.body.didBabyStopBeingAbleToCry,
        daysAfterStoppedCrying: req.body.stopCrying,
        firstBreastfed: req.body.firstBreastfed,
        otherThanBreastMilk: req.body.wasTheBabyEverGivenAnythingToDrinkOtherThanBreastMilk,
        suckleNormally: req.body.heAbleToSuckleNormallyDuringTheFirstDayOfLife,
        StopSuckingInNormalWay: req.body.heStopBeingAbleToSuckInANormalWay,
        CompletedDays: req.body.howManyCompletedDaysAfterBirthDids,

        // Details of sickness at death
        fever: req.body.heHaveFever,
        feverDays: req.body.howManyCompletedDaysDidTheFeverLast,
        difficultyBreathing: req.body.heHaveAnyDifficultyWithBreathing,
        difficultyBreathingDays: req.body.howManyCompletedDaysDidTheDifficultyWithBreathingLast,
        fastBreathing: req.body.heHaveFastBreathing,
        fastBreathingDays: req.body.forHowManyCompletedDaysDidTheFastBreathingLast,
        inDrawingChest: req.body.heHaveInDrawingOfTheChest,
        cough: req.body.heHaveACough,
        grunting: req.body.heHaveGrunting,
        nostrilsFlare: req.body.HerNostrilsFlareWithBreathing,
        diarrhoea: req.body.heHaveDiarrhoea,
        diarrhoeaDays: req.body.forHowManyCompletedDaysWereTheStoolsFrequentOrLiquid,
        vomit: req.body.heVomit,
        vomitDays: req.body.forHowManyCompletedDaysDids,
        rednessAroundUnbilicalCord: req.body.heHaveRednessAroundOrDischargeFromTheUmbilicalCordStump,
        pustulesRashes: req.body.Rashes,
        yellowEyesOrSkin: req.body.heHaveYellowEyesOrSkin,
        spasmsOrFits: req.body.heHaveSpasmsOrFits,
        unresponsiveOrUnconscious: req.body.heBecomeUnresponsiveOrUnconscious,
        bulgingFontanelle: req.body.heHaveABulgingFontanelle,
        cold: req.body.didTheChildBodyFeelColdWhenTouched,
        legsDiscoloured: req.body.LegsOrLipsDiscoloured,
        yellow: req.body.yellowPalms,
        blood: req.body.wasThereBloodInTheStools,
        narrativeLanguageCode: req.body.narrativeLanguageCode,
    });
        
        neonate.save((err) => {
            if(!err){
                return
            }
            return res.status(400).send();
        });
});

/////////////////////////////////////////////////////////////////////////////




// Post Neonate form save code 

app.post('/postNeonate', isMOLoggedIn , function(req,res){
    var postNeonate = new postNeonate({

        district: req.body.district,
        block: req.body.block,
        village: req.body.village,
        phc: req.body.phc,
        subCenter: req.body.subCenter,
        rch: req.body.rhcNumberOfMother,
        year: req.body.year,
        head: req.body.household,
        name: req.body.deceasedName,
        mother: req.body.motherNameDeceased,
        //firstHys: req.body.,
        //secondHys: { type: Boolean },
        respondent: req.body.respondentName,
        relationship: req.body.relationshipOfRespondentWithDeceased,
        liveWith: req.body.didTheRespondentLiveWithTheDeceasedDuringTheEventsThatLedToDeath,
        respondentEducation: req.body.whatIsTheHighestStandardOfEducationTheRespondentHasCompleted,
        category: req.body.category,
        religionHead: req.body.religionOfTheHeadOfTheHousehold,
        sex: req.body.deceasedSex,
        ageDays: req.body.ageInCompletedMonths,
        dob: req.body.deathOfBirth,
        dod: req.body.dateOfDeath,
        address: { 
            district : req.body.district,
            block: req.body.block,
            village: req.body.village
        },
        pin: req.body.pincode,
        placeDeath: req.body.placeOfDeath,
        respondent: req.body.respondentThink,

        // Section 2.0 Child Death


        injury: req.body.heDieFromAnInjuryOrAccident,
        kindOfInjury: req.body.whatKindOfInjuryOrAccident,
        firstBreastfed: req.body.heFirstBreastfed,
        otherThanBreastMilk: req.body.OtherThanBreastMilk,
        breastMilkDuringIllness: req.body.wasTheChildBreastfeeding,
        fever: req.body.heHaveFever,
        daysFeverLast: req.body.howManyCompletedDaysDidTheFeverLast,
        chillsOrRigorsDuringFever: req.body.Rigors,
        convulstionsOrFits: req.body.heHaveConvulsionsOrFits,
        unconscious: req.body.heUnconsciousDuringTheIllnessThatLedToDeath,
        stiffness: req.body.stiffness,
        stiffneck: req.body.stiffNeck,
        diarrhoea: req.body.diarrhoea,
        daysDiarrhoea: req.body.howManyCompletedDays,
        bloodInStools: req.body.wasThereBloodInTheStools,
        cough: req.body.heHaveACough,
        daysCough: req.body.howManyCompletedDays,
        bloodInCough: req.body.wasThereBlood,
        difficultyBreathing: req.body.Breathing,
        daysDifficultyBreathing: req.body.howManyCompletedDays,
        fastBreathing: req.body.heHaveFastBreathing,
        inDrawingChest: req.body.heHaveInDrawingOfTheChest,
        wheezing: req.body.heHaveWheezing,
        abdominalPainDuringIllness: req.body.abdominalPain,
        abdominalDistention: req.body.abdominalDistention,
        vomit: req.body.heVomit,
        daysVomit: req.body.howManyCompletedDays,
        yellowEyesOrSkin: req.body.yellow,
        rashAllOverBody: req.body.rash,
        redEyes: req.body.heHaveRedEyes,
        measles: req.body.wasThisMeasles,
        thinWeekPreceedingDeath: req.body.heBecomeVeryThin,
        swellingOfHandsFeetOrAbdomenWeekPreceedingDeath: req.body.heHaveAnySwellingOfHands,
        lackOfBloodWeekPreceedingDeath: req.body.lackOfBlood,
        growingNormally: req.body.growingNormally,
        multipleIllness: req.body.multipleIllnesses,
        symptomsOfIllness: req.body.symptoms,
        bcgInjection: req.body.bCGInjection,
        dpt3Doses: req.body.numberOfDozesReceivedOfDPT,
        polioDrops: req.body.heHaveMultipleIllnesses,
        injectionForMeasles: req.body.injectionForMeasles,
        symptomstype: req.body.narrativeLanguageCode,

    });


        postNeonate.save((err) => {
            if(!err){
                return
            }
            return res.status(400).send();
        });
});










///////////////////////////////////////////////////////
function isMOLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        if(req.user.role === 'mo') {
            return next();
        }
    }
    res.render('unauthorizedError');
}

////////////////////////////////////////////////////////////////////////////////////////////





function isAshaLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        if(req.user.role === 'asha') {
            return next();
        }
    }
    res.render('unauthorizedError');
}




function isBMOLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        if(req.user.role === 'bmo') {
            return next();
        }
    }
    res.render('unauthorizedError');
}



var port = 5000 || process.env.PORT;
app.listen(port, function () {
    console.log("Serving on port", port);
});