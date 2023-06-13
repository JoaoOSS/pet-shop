module.exports = (sequelize, Sequelize) => {
    const service = sequelize.define('service', {
        name: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.FLOAT,
        },
        duration: {
            type: Sequelize.STRING,
        },
    })
    return  service
}