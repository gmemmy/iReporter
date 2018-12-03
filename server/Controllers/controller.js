import faker from "faker";
import app from "../App";
import User from "../model/User";
import Incidents from "../model/flagRecords";
import bodyParser from "body-parser";
import express from "express";

export default class Controller {



/***
*	@description  GET all red-flag records.
*	@param {object} req - HTTP Request
* @param {object} res - HTTP Response
* @memberof Controller
* @returns {object} Class instance
***/

allredflagRecords(req, res) {
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
	if (specificRecord = false) {
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
*	@description  EDIT a specific red flag record.
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
}

//Edit record's location
changeLocation (req, res){
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


}