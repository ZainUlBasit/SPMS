const { user, password } = process.env;
// const encodedUser = encodeURIComponent(user);
// const encodedPassword = encodeURIComponent(password);
export const connectionSrt =
  "mongodb+srv://" +
  user +
  ":" +
  password +
  "@spms.rlzeira.mongodb.net/spms?retryWrites=true&w=majority";
