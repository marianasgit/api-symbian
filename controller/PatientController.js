const express = require('express');

const router = express.Router();

const patientModel = require('../model/PatientModel')

router.get('/listPatients', (req, res) => {

    patientModel.findAll()
    .then(
        (patients) => {
            res.status(200).send(patients);
        }
    )

    .catch(
        (error) => {
            res.status(500).json({"MSG": "Não foi possível listar os patientes"})
        }
    );
});

router.get('/listOatient/:id_patient', (req, res) => {

    let {patient_id} = req.params;

    patientModel.findAll({
        where: {patient_id}
    })

    .then(
        (patient) => {
            res.status(200).send(patient);
        }
    )

    .catch(
        (error) => {
            res.status(500).json({"MSG": error});
        }
    );
});

router.post('/registerPatient', (req, res) => {

    let {name, picture, telephone_number, cellphone_number, email, responsible_name, responsible_telephone} = req.body;

    patientModel.create({
        name: 
        picture,
        telephone_number, 
        cellphone_number, 
        email, 
        responsible_name, 
        responsible_telephone

    }).then(
        () => {
            res.status(201).json({"MSG": "Paciente cadastrado com sucesso"})
        }
    ).catch(
        (error) => {
            res.status(500).json({"MSG": "Não foi possível concluir o cadastro"})
        }
    );
});

router.put('/editPatient', (req, res) => {

    let {name, picture, telephone_number, cellphone_number, email, responsible_name, responsible_telephone} = req.body;

    patientModel.update(
        {
            name,
            picture,
            telephone_number, 
            cellphone_number, 
            email, 
            responsible_name, 
            responsible_telephone
        },
        {where: {patient_id}}
    )
    .then(
        () => {
            res.status(200).send({"MSG": "Informações editadas com sucesso"});
        }
    )
    .catch(
        () => {
            res.status(500).json({"MSG": error})
        }
    );
});

router.delete('/deletePatient/:patient_id', (req, res) => {

    let {patient_id} = req.params;

    patientModel.destroy(
        {
            where:{patient_id}
        }
    )
    .then(
        () => {
            res.status(200).send({"MSG": "Registro excluído com sucesso"})
        }
    )
    .catch(
        (error) => {
            res.status(500).json({"MSG": error})
        }
    );
});

module.exports = router;