export const users = {
  admin: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  ess: {
    username: process.env.ESS_USERNAME,
    password: process.env.ESS_PASSWORD,
    name: "Peter Mac Anderson",
  },
  invalidUser: {
    username: 'invalidUser',
    password: 'invalidPass',
  },
};
