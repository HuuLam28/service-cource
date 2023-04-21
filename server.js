const dotenv = require('dotenv');
dotenv.config({path: './.env'})

const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // createIndexes: true,
    // findOneAndUpdate: true
}).then(() => console.log('Course DB connection successful!')
)
const PORT = process.env.PORT || 3000

const app = require('./App');


const server = app.listen(PORT, (res, req) => {
    console.log('Listening on port ' + PORT);
});