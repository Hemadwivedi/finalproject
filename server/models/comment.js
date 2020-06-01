module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
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
    return Comment;
};
