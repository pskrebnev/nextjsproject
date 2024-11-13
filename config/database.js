import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // in case DB is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    throw new Error('MongoDB connection failed');
  }
};

export default connectDB;
