import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const placeSchema = new Schema(
  {
    placeId: { type: String, required: true, unique: true },
    placeName: { type: String, required: true },
    userId: { type: String, required: true }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const commentSchema = new Schema(
  {
    commentId: { type: String, required: true, unique: true },
    comment: String,
    userId: String,
    placeId: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

const likeSchema = new Schema(
  {
    likeId: { type: String, required: true, unique: true },
    likes: Number,
    userId: String,
    placeId: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

userSchema.virtual('places', {
  ref: 'Place',
  localField: 'userId',
  foreignField: 'userId',
})
userSchema.virtual('liked', {
  ref: 'Like',
  localField: 'userId',
  foreignField: 'userId',
})
userSchema.virtual('commented', {
  ref: 'Comment',
  localField: 'userId',
  foreignField: 'userId',
})

placeSchema.virtual('likes', {
  ref: 'Like',
  localField: 'placeId',
  foreignField: 'placeId',
})
placeSchema.virtual('comments', {
  ref: 'Comment',
  localField: 'placeId',
  foreignField: 'placeId',
})

const model = {
  User: mongoose.models.User || mongoose.model('User', userSchema),
  Place: mongoose.models.Place || mongoose.model('Place', placeSchema,'Place'),
  Comment: mongoose.models.Comment || mongoose.model('Comment', commentSchema,'Comment'),
  Like: mongoose.models.Like || mongoose.model('Like', likeSchema,'Like'),
}

export default model

// export default mongoose.models.User || mongoose.model('User', userSchema)
