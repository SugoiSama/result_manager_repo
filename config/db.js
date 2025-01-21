//const mongoose = require('mongoose');

import mongoose from 'mongoose';

function connectDB() {
    const MONGO_URL = process.env.MONGO_URL;
    mongoose.connect(MONGO_URL);
    const db = mongoose.connection;

    db.on('error',(err) => {
        console.log('error connecting database',err);
    });

    db.once('connected',() => {
        console.log('Databse connected');
    });
}
export{connectDB};