import mongoose, { Document, Schema } from 'mongoose';


interface WalletDocument extends Document {
  from: string;
  to: string;
  status: string;
  gasUsed: number;
}

const walletSchema = new Schema<WalletDocument>({
  from: String,
  to: String,
  status: String,
  gasUsed: Number
});

module.exports = {
  walletSchema: walletSchema
};
