const mongoose = require('mongoose');
const databaseConfig = async (uri) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Database Connected at ${mongoose.connection.port}`);
    } catch (error) {
        console.log(error);
    }
};
module.exports = databaseConfig;