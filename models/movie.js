const Sequelize = require("sequelize");

class Movie extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            mno: {
                autoIncrement: true,
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            movie_name: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true
            },
            movie_info: {
                type: Sequelize.STRING(1000),
                allowNull: false,
                defaultValue: ""
            },
            movie_url: {
                type: Sequelize.STRING(2000),
                allowNull: false,
                defaultValue: ""
            },
            movie_genre: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: ""
            },
            movie_actors: {
                type: Sequelize.STRING(400),
                allowNull: false,
                defaultValue: ""
            },
            movie_director: {
                type: Sequelize.STRING(30),
                allowNull: false,
                defaultValue: ""
            },
            movie_poster: {
                type: Sequelize.STRING(2000),
                allowNull: false,
                defaultValue: ""
            }
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            modelName: "Movie",
            tableName: "movies",
            paranoid: true,
            charset: "utf8",
            collate: "utf8_general_ci",
        })
    }
}
module.exports = Movie