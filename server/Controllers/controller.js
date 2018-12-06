import Incidents from "../model/flagRecords";

export default class Controller {
	/***
*	@description ADD a new red flag record.
*	@param {object} req - HTTP Request
* @param {object} res - HTTP Response
* @memberof Controller
* @returns {object} Class instance
***/

addRedFlagRecord(req, res) {
	const { Record } = req.body;

	const previousRecord = Incidents.reverse()[0];
 Record.createdBy = 1;
	Record.createdOn = faker.date.recent();
 Record.id = previousRecord.id + 1;
	Incidents.push(req.body);

	res.send({
		"status:": 200,
		"data": [{
			"id": Record.id,
			"message": "Red Flag record created!",
		}]
	})
}

/***
*	@description  GET all red-flag records.
*	@param {object} req - HTTP Request
* @param {object} res - HTTP Response
* @memberof Controller
* @returns {object} Class instance
***/

allRedFlagRecords(req, res,) {
	let redFlags =  Incidents.filter(Incident => Incident.type === "Red Flag");
	if (redFlags.length >= 1) {
			res.send({
				"status": 200,
				"data": redFlags,
			});
	} else {
			res.send({
					"status": 404,
					"error": "No Red Flag Records Found!",
			});
	}
};

/***
*	@description  GET a specific red flag record.
*	@param {object} req - HTTP Request
* @param {object} res - HTTP Response
* @memberof Controller
* @returns {object} Class instance
***/

singleRedFlagRecord(req, res) {
	const specificRecord = Incidents.find(Incident => Incident.id === Number(req.params.id));
	if (!specificRecord) {
 res.send({
		"status": 404,
		"error":	"Oops! No record found with this id!",
	});
	} else {
		res.send({
			"status": 200,
			"data":	[specificRecord],
		});
	}
};


/***
*	@description  EDIT comment of a specific red flag record.
*	@param {object} req - HTTP Request
* @param {object} res - HTTP Response
* @memberof Controller
* @returns {object} Class instance
***/

changeComment(req, res)  {
	const specificRecord = Incidents.find(Incident => Incident.id === Number(req.params.id));
	//Edit record's comment
	if (specificRecord) {
		const { recordComment } = req.body;
		if (specificRecord.comment = recordComment) {
		res.send({
			"status":	200,
			"data":	[{
				"id": specificRecord.id,
				"message":	"Updated red-flag record's comment",
			}]
		})
	} else {
		res.send({
			"status": 404,
			"message": "Record not found!",
		});
	}}
};

/***
*	@description  EDIT location of a specific red flag record.
*	@param {object} req - HTTP Request
* @param {object} res - HTTP Response
* @memberof Controller
* @returns {object} Class instance
***/

//Edit record's location
editRecordlocation (req, res){
	const specificRecord = Incidents.find(Incident => Incident.id === Number(req.params.id));
	
	if (specificRecord) {
		const { recordLocation } = req.body;
		if(specificRecord.location = recordLocation) {
			res.send({
				"status":	200,
				"data":	[{
					"id":	specificRecord.id,
					"message":	"Updated red-flag record’s location",
				}]
			})
		}
	} else {
		res.send({
			"status":	404,
			"message":	"Record not found",
		});
	}
};


/***
*	@description  DELETE a specific red flag record.
*	@param {object} req - HTTP Request
* @param {object} res - HTTP Response
***/

deleteRecord(req, res) {
	const recordIndex = Number(req.params.id);

	Incidents.forEach((Incident, incidentIndex) => {
		if (recordIndex = Incidents.id) {
			const deletedRecord = Incidents.splice(incidentIndex, 1);

			if(deletedRecord) {
				res.send({
					"status": 200,
					"data": [{
						"id": req.params.id,
						"message": "Red Flag record succesfully deleted!",
					}]
				})
			}
		} else {
			res.send({
				"status": 404,
				"error": "No Red Flag record found with this id!",
			})
		}
	})
}

}