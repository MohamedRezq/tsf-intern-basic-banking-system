import mongoose from 'mongoose'

/* UserSchamea will correspond to the "users" collection in my MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    /* The name of this user */
    type: String,
  },
  balance: {
    /* User's current balance */
    type: Number,
  },
  Country: {
    /* The user's nation */
    type: String,
  },
  email: {
    /* The user's email address */
    type: String,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)