const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userRegistr", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('====================================');
    console.log(`Connection sucessful`);
    console.log('====================================');
}).catch((e) => {
    console.log('====================================');
    console.log(`Connection Failed`);
    console.log('====================================');
})