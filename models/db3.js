const mongodb = require('mongodb');

const client = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'database';

const options = { useUnifiedTopology: true };

const database = {

	createDatabase: function() {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            console.log('Database created!');
            db.close();
        });
    },

    createCollection: function(collection) {
        client.connect(url, options, function(err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.createCollection(collection, function (err, res) {
                if(err) throw err;
                console.log('Collection ' + collection + ' created');
                db.close();
            });
        });
    },

        insertOne: function(collection, doc) {
        client.connect(url, options, function (err, db) {
            if(err) throw err;
            var database = db.db(dbName);
            database.collection(collection).insertOne(doc, function (err, res) {
                if(err) throw err;
                console.log('1 document inserted');
                db.close();
            });
        });
    }



}

module.export = database;