const Sequelize = require("sequelize");

class Freeboard extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            bno: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            }, title: {
                type: Sequelize.STRING(200),
                allowNull: false,
            }, content: {
                type: Sequelize.STRING(5000),
                allowNull: false
            },
            writer: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            views_point: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            modelName: "Freeboard",
            tableName: "freeboards",
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        })
    }
}

module.exports = Freeboard