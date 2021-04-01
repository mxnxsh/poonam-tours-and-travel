import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log(`MongoDB is connected Successfully`);
}).catch((error) => {
  console.log(error.message);
});

