const { DataTypes } = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("services", {
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
            price: {
                type: DataTypes.FLOAT
            },
            duration: {
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
        await queryInterface.dropTable("services");
    }
};
