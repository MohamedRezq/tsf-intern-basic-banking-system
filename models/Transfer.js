import mongoose from "mongoose";
import User from "./User";

const TransferSchema = new mongoose.Schema({
  transactionNumber: {
    /* A unique id for each transaction based on its time, the sender name, the reciever name */
    type: String,
  },
  sender: {
    /* The user who sent the money */
    type: User,
  },
  receiver: {
    /* The user who recieved the money */
    type: User,
  },
  status: {
    /* Whether successful transaction or not */
    type: Boolean,
  },
  amount: {
    /* The amount of money transfered */
    type: Number,
  },
  time: {
    /* The exact time of transaction in seconds */
    type: Date,
  },
});

export default mongoose.models.Transfer ||
  mongoose.model("Transfer", TransferSchema);
