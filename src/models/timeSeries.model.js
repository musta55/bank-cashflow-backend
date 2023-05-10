'use strict';
var dbConn = require('./../../config/db.config');
//TimeSeries object create
var TimeSeries = function(timeSeries){
  this.inflow     = timeSeries.inflow;
  this.outflow      = timeSeries.outflow;
  this.date     = new Date();

};
TimeSeries.create = function (newSer, result) {
dbConn.query("INSERT INTO timeSeries set ?", newSer, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
TimeSeries.findById = function (flowID, result) {
dbConn.query("Select * from timeSeries where flowID = ? ", flowID, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
}; 

TimeSeries.findAll = function (result) {
dbConn.query("Select * from timeSeries", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('timeSeries : ', res);
  result(null, res);
}
});
};
TimeSeries.update = function(flowID, timeSeries, result){
dbConn.query("UPDATE timeSeries SET inflow=?,outflow=?,date=? WHERE flowID = ?", [timeSeries.inflow,timeSeries.outflow,timeSeries.date,flowID], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
TimeSeries.delete = function(flowID, result){
dbConn.query("DELETE FROM timeSeries WHERE flowID = ?", [flowID], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= TimeSeries;