import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICoverStory extends Document {
  title: string;
  slug: string;
  subtitle?: string;
  content: string;

  authorName?: string;
  authorDesignation?: string;
  readingTime?: string;
  edition?: string;

  coverImage?: string;
  additionalImages: string[];
  pullQuote?: string;

  category?: mongoose.Types.ObjectId;
  tags: mongoose.Types.ObjectId[];

  publicationDate?: Date;

  status: "draft" | "published";
  featuredOnHomepage: boolean;
  displayOrder: number;

  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;

  createdAt: Date;
  updatedAt: Date;
}

const CoverStorySchema = new Schema<ICoverStory>(
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

    subtitle: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    authorName: {
      type: String,
      trim: true,
    },

    authorDesignation: {
      type: String,
      trim: true,
    },

    readingTime: {
      type: String,
      trim: true,
    },

    edition: {
      type: String,
      trim: true,
    },

    coverImage: {
      type: String,
    },

    additionalImages: {
      type: [String],
      default: [],
    },

    pullQuote: {
      type: String,
      trim: true,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },

    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],

    publicationDate: {
      type: Date,
    },

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

const CoverStory: Model<ICoverStory> =
  mongoose.models.CoverStory ||
  mongoose.model<ICoverStory>("CoverStory", CoverStorySchema);

export default CoverStory;