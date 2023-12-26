const connection = require("../configs/mysql.config");
const UserService = {
  checkEmailService: async (email, password) => {
    try {
      const [user] = await connection
        .promise()
        .query("select * from users where email = ?", [email]);
      return user[0];
    } catch (error) {
      console.log(error);
    }
  },
  createUserService: (user_name, email, password) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO users SET ?",
        {
          user_name: user_name,
          email,
          pass_word: password,
        },
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },

  getAllUserService: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
};

module.exports = UserService;
