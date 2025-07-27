import mongoose from 'mongoose';

const usageSchema = new mongoose.Schema({
  website: { type: String, required: true },
  timeSpent: { type: Number, required: true }, // in milliseconds
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Usage', usageSchema);
