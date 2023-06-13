module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        name: {
            type: Sequelize.STRING,
        },
        birthDate: {
            type: Sequelize.DATE,
        },
        email: {
            type: Sequelize.STRING,
        },
        cpf: {
            type: Sequelize.STRING,
        },
    })
    return  user
}