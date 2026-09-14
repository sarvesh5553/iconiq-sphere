import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAwardRecipient extends Document {
  award: mongoose.Types.ObjectId;

  name: string;
  designation?: string;
  organization?: string;
  photo?: string;
  profile?: string;
  slug?: string;

  recipientType: "individual" | "organization";

  displayOrder: number;

  createdAt: Date;
  updatedAt: Date;
}

const AwardRecipientSchema = new Schema<IAwardRecipient>(
  {
    award: {
      type: Schema.Types.ObjectId,
      ref: "Award",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      trim: true,
    },

    organization: {
      type: String,
      trim: true,
    },

    photo: {
      type: String,
    },

    profile: {
      type: String,
    },

    slug: {
      type: String,
      trim: true,
      lowercase: true,
    },

    recipientType: {
      type: String,
      enum: ["individual", "organization"],
      default: "individual",
    },

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const AwardRecipient: Model<IAwardRecipient> =
  mongoose.models.AwardRecipient ||
  mongoose.model<IAwardRecipient>(
    "AwardRecipient",
    AwardRecipientSchema
  );

export default AwardRecipient;