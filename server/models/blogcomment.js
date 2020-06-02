module.exports = function (sequelize, DataTypes) {
    const BlogComment = sequelize.define('BlogComment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.STRING,
        },
    });
    return BlogComment;
};