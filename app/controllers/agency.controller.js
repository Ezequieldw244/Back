const Agency = require('../models/agency');
const agencyCtrl = {};

agencyCtrl.getAgencys = async (req, res) => {
	const algos = await Agency.find();
	res.json(algos)
};

agencyCtrl.createAgency = async (req, res) => {
	const algo = new Agency(req.body);
	await algo.save();
	console.log(algo);
	res.json({
		'status': 'algo guardado'
	});
};

agencyCtrl.getAgency = async (req, res) => {
	console.log(req.params.id);
	const algo = await Agency.findById(req.params.id);
	res.json(algo);
};

agencyCtrl.editAgency = async (req, res) => {
	const agency = {
		Name: req.body.Name,
		heroes: req.body.heroes
	};
	await Agency.findByIdAndUpdate(req.params.id, {$set: agency });
	res.json({
		'status': 'algo actualizado'
	});
};

agencyCtrl.deleteAgency = async (req, res) => {
	await Agency.findByIdAndRemove(req.params.id);
	res.json({
		'status': 'algo eliminado'
	});
}
module.exports = agencyCtrl;