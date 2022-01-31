'use strict';
const mongoose = require('mongoose');

// Create schema 
const contacSchema = mongoose.Schema({
    name: String,
    lastname: String,
    personalNumber: Number,
    homeNumber: Number,
    favorite: Boolean,
    tags: {type: {String}, index: true}
});

// Create model
const Contact = mongoose.model('Contact', contacSchema);