const databaseServer =
  process.env.MONGODB_DATABASE_LINK || "mongodb:localhost:27017/pigeon";

module.exports = {
  databaseServer
};
