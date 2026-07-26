const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const password = encodeURIComponent("pAVAN@2%");

const MONGO_URL = `mongodb+srv://pavankumar_db_user:${password}@completecoding.etzcvrz.mongodb.net/airbnb?retryWrites=true&w=majority&appName=CompleteCoding`;

let _db;

const mongoConnect = (callBack) => {
    MongoClient.connect(MONGO_URL).then((client) => {
        callBack();
        _db = client.db('airbnb');
    }).catch((err) => {
        console.log('Error while connecting to MongoDB:', err);
    })
}

const getDb = () => {
    if (!_db) {
        throw new Error('Database not initialized');
    }
    return _db;
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
