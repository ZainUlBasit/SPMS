import { createTransport } from "nodemailer";

export const transporter = createTransport({
    service: "gmail",
    port: 456,
    auth: {
      user: "hobab.leo99@gmail.com",
      pass: "gtjcogxpkvbhyhkd",
    },
  });