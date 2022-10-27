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
            user_email: {
                unique: true,
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            user_pw: {
                allowNull: false,
                type: Sequelize.STRING(80)
            },
            user_phone: {
                allowNull: false,
                defaultValue: "",
                type: Sequelize.STRING(44)
            },
            user_nickname: {
                allowNull: false,
                defaultValue: "",
                type: Sequelize.STRING(40)
            },
            user_ticket: {
                allowNull: false,
                defaultValue: 0,
                type: Sequelize.INTEGER
            },
            user_refresh: {
                allowNull: false,
                defaultValue: "",
                type: Sequelize.STRING(1000)
            }
        }, {
            sequelize,
            underscored: true,
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