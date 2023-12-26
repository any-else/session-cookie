const connection = require("../configs/mysql.config");
const UserService = {
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
};

module.exports = UserService;
