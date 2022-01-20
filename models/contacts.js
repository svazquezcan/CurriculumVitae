const mongoose = require('mongoose');

const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });

 const contactModel = mongoose.model('Contacts', contactSchema);
