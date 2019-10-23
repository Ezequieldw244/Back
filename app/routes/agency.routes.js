const express = require('express');
const router = express.Router();
const agency = require ('../controllers/agency.controller');


router.get('/', agency.getAgencys);
router.get('/:id', agency.getAgency);
router.post('/', agency.createAgency);
router.put('/:id', agency.editAgency);
router.delete('/:id', agency.deleteAgency);

module.exports = router;