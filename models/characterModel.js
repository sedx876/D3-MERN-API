import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const characterSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    image: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    title: {
      type: String,
      required: true,
    },
    characterKlass: {
      type: String,
      required: false,
    },
    helm: {
      type: String,
      required: false,
    },
    shoulders: {
      type: String,
      required: false,
    },
    gloves: {
      type: String,
      required: false,
    },
    chestArmor: {
      type: String,
      required: false,
    },
    belt: {
      type: String,
      required: false,
    },
    pants: {
      type: String,
      required: false,
    },
    boots: {
      type: String,
      required: false,
    },
    bracers: {
      type: String,
      required: false,
    },
    amulet: {
      type: String,
      required: false,
    },
    ring1: {
      type: String,
      required: false,
    },
    ring2: {
      type: String,
      required: false,
    },
    weapon: {
      type: String,
      required: false,
    },
    offhand: {
      type: String,
      required: false,
    },
    gemNotes: {
      type: String,
      required: false,
    },
    kanaisCube: {
      type: String,
      required: false,
    },
    activeSkills: {
      type: String,
      required: false,
    },
    passiveSkills: {
      type: String,
      required: false,
    },
    generalBuildNotes: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Character = mongoose.model('Character', characterSchema)
export default Character