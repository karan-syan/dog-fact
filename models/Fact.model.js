import mongoose from "mongoose";

const factSchema = new mongoose.Schema({
  fact: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

const FactModel = mongoose.model("fact", factSchema);
export default FactModel;
