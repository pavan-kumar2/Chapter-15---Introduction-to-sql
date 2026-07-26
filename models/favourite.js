const { getDb } = require("../utils/databaseUtil");

module.exports = class Favourite {


  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = getDb();
    return db.collection('favorites').findOne({ houseId: this.houseId })
      .then(existFav => {
        if (!existFav) {
          return db.collection('favorites').insertOne(this);
        }

        return Promise.resolve();
      });
  }



  static getFavourites() {
    const db = getDb();
    return db.collection('favorites').find().toArray();
  }

  static deleteById(delHomeId) {
    const db = getDb();
    return db.collection('favorites').deleteOne({ houseId: String(delHomeId) })
  }
};
