import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAward extends Document {
  title: string;
  slug: string;
  category?: string;
  year?: number;

  shortDescription?: string;
  content: string;

  awardImage?: string;
  awardIcon?: string;
  recognitionCriteria?: string;

  publicationDate?: Date;

  tags: mongoose.Types.ObjectId[];

  status: "draft" | "published";
  featuredOnHomepage: boolean;
  displayOrder: number;

  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;

  createdAt: Date;
  updatedAt: Date;
}

const AwardSchema = new Schema<IAward>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    year: {
      type: Number,
    },

    shortDescription: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    awardImage: {
      type: String,
    },

    awardIcon: {
      type: String,
    },

    recognitionCriteria: {
      type: String,
    },

    publicationDate: {
      type: Date,
    },

    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    featuredOnHomepage: {
      type: Boolean,
      default: false,
    },

    displayOrder: {
      type: Number,
      default: 0,
    },

    seoTitle: {
      type: String,
      trim: true,
    },

    seoDescription: {
      type: String,
      trim: true,
    },

    socialImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Award: Model<IAward> =
  mongoose.models.Award || mongoose.model<IAward>("Award", AwardSchema);

export default Award;