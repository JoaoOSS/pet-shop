const { DataTypes } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("animals", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            breed: {
                type: DataTypes.STRING
            },
            age: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            weight: {
                allowNull: false,
                type: DataTypes.FLOAT
            },
            owner_name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            is_vacinated: {
                allowNull: false,
                type: DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("animals");
    }
};
