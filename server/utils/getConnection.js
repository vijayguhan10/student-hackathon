const mongoose = require('mongoose');

const connections = {};
const getConnection = async (dbName) => {
  if (connections[dbName]) {
    const conn = connections[dbName];
    if (conn.readyState === 0) {
      console.log(`Reconnecting to ${dbName}...`);
      await conn.openUri(process.env.DATABASE.replace('<DATABASE>', dbName));
    } else {
      console.log(`Reusing the db connection...`);
    }
    return conn;
  }

  const uri = process.env.DATABASE.replace('<DATABASE>', dbName);
  const newConnection = mongoose.createConnection(uri);

  newConnection.on('disconnected', async () => {
    console.log(`Connection to ${dbName} lost. Attempting to reconnect...`);
    try {
      await newConnection.openUri(uri);
      console.log(`Reconnected to ${dbName}.`);
    } catch (err) {
      console.error(`Failed to reconnect to ${dbName}:`, err);
    }
  });

  newConnection.on('error', (err) => {
    console.error(`Error with connection to ${dbName}:`, err);
  });

  connections[dbName] = newConnection;
  return newConnection;
};

module.exports = getConnection;
