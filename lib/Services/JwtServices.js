import { sign, verify } from "jsonwebtoken";
import { Refresh } from "../models/Refresh";

const access = process.env.ACCESS_SECRET_KEY;
const refresh = process.env.REFRESH_SECRET_KEY;

const JwtService = {
  generateToken: (payload) => {
    const accessToken = sign(payload, access, {
      expiresIn: "1h",
    });
    const refreshToken = sign(payload, refresh, {
      expiresIn: "24h",
    });

    return { accessToken, refreshToken };
  },

  storeRefreshToken: async (token, userId) => {
    try {
      const newRefresh = new Refresh({
        token: token,
        user_id: userId,
      });

      const result = await newRefresh.save();
      return { result };
    } catch (error) {
      console.error(error);
    }
  },

  verifyAccessToken: async (token) => {
    return verify(token, access);
  },

  verifyRefreshToken: async (token) => {
    return verify(token, refresh);
  },

  findRefreshToken: async (userId, refreshtoken) => {
    return await Refresh.findOne({
      userId: userId,
      token: refreshtoken,
    });
  },

  updateRefreshToken: async (userId, refreshToken) => {
    return await Refresh.updateOne(
      { userId: userId },
      { token: refreshToken }
    );
  },
};

export default JwtService;
