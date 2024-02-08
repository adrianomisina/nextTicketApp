// models/Ticket.js

import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const tricketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', tricketSchema);

export default Ticket;
