import faker from "faker";
import app from "../App";
import User from "../model/User";
import Incidents from "../model/flagRecords";
import bodyParser from "body-parser";
import express from "express";



//This point creates a red flag record
app.post("/newRecord", (req, res) => {

})


//This endpoint grabs all red flag records
app.get("/", (req, res) => {
	let redFlags =  Incidents.filter(Incident => Incident.type === "Red Flag");
	if (redFlags.length >= 1) {
			res.json({
				status: 200,
				data: redFlags,
			});
	} else {
			res.json({
					status: 404,
					error: "No Red Flag Records Found!",
			});
	}
})

//This endpoint grabs a specific red flag record
app.get("/flagRecord", (req, res) => {
	const specificRecord = Incidents.find(Incident => Incident.id === Number(req.params.id));
	if (specificRecord = false) {
 res.json({
		status: 404,
		message:	"Oops! No record found with this id",
	});
	} else {
		res.json({
			status: 200,
			data:	[specificRecord],
		});
	}
})