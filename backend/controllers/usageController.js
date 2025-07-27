import Usage from '../models/Usage.js';

export const addUsage = async (req, res) => {
  try {
    const { website, timeSpent } = req.body;
    const newUsage = new Usage({ website, timeSpent });
    await newUsage.save();
    res.status(201).json(newUsage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsage = async (req, res) => {
  try {
    const data = await Usage.find().sort({ timestamp: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
