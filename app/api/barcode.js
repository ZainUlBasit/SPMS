// pages/api/barcode.js
import connectDB from "@/lib/db";
import { Items } from "@/lib/models/items";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { barcode } = req.body;

    try {
      const newBarcode = new Items({ code: barcode });
      await newBarcode.save();
      res
        .status(201)
        .json({ success: true, message: "Barcode saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
