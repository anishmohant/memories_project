import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoute from './routes/posts.js'

const app = express();
app.use('/posts', postsRoute)
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

/////     AxVTn5mtCVXYmmBnAxVTn5mtCVXYmmBn        javascriptmasteruser  Te34gCdoVfBEwALETe34gCdoVfBEwALE

const CONNECTION_URL = 'mongodb+srv://javascriptmasteruser:Te34gCdoVfBEwALETe34gCdoVfBEwALE@cluster0.uivpoyw.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on ${PORT}`)))
    .catch((error) => console.log(error.message));
// mongoose.set('useFindAndModify',false)   