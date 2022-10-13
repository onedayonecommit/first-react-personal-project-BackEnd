const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                unique: true,
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            user_pw: {
                allowNull: false,
                type: Sequelize.STRING(80)
            }
        }, {
            sequelize,
            underscored: true, // 대문자를 언더바로 카멜을 스네이크로
            timestamps: true,
            modelName: "User",
            tableName: "users",
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        })
    }
}

module.exports = User;