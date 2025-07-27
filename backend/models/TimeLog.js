import mongoose from 'mongoose';

const TimeLogSchema = new mongoose.Schema({
  website: String,
  timeSpent: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const TimeLog = mongoose.model('TimeLog', TimeLogSchema);

export default TimeLog;
