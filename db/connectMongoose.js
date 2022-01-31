'use strict';
const mongoose = require('mongoose');

mongoose.connection('error', () => {
    console.log('error');
});

mongoose.connection.once
mongoose.connect('mongodb://lcoalhost/contact-list');