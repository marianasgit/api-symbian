const Sequelize = require('Sequelize');

const conection = require('../database/database');

const PatientModel = conection.define(
    'tbl_patient',
    {
        patient_id: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        
        email: {
            type: Sequelize.STRING(50),
            allowNull: false
        },

        picture: {
            type: Sequelize.STRING(100),
            allowNull: true
        },

        telephone: {
            type: Sequelize.STRING(15),
            allowNull: true
        },

        phone: {
            type: Sequelize.STRING(15),
            allowNull: false
        },

        emergencyContactName: {
            type: Sequelize.STRING(100),
            allowNull: true
        },

        emergencyContactNumber: {
            type: Sequelize.STRING(15),
            allowNull: true
        },

        password: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
    }
);

// PatientModel.sync({force:true});

module.exports = PatientModel;