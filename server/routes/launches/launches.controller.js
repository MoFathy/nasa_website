const {getAllLaunches, addNewLaunches} = require('../../models/launches.model')

function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches());
}

function httpPostNewLaunch(req, res){
    const launch = req.body;

    launch.launchDate = new Date(launch.launchDate);
    return res.status(201).json(addNewLaunches(launch));
}

module.exports = {
    httpGetAllLaunches,
    httpPostNewLaunch
}