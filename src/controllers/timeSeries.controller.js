'use strict';
const TimeSeries = require('../models/timeSeries.model');
exports.findAll = function(req, res) {
TimeSeries.findAll(function(err, timeSeries) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', timeSeries);
  res.send(timeSeries);
});
};


exports.create = function(req, res) {
const new_timeSeries = new TimeSeries(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
TimeSeries.create(new_timeSeries, function(err, timeSeries) {
  if (err)
  res.send(err);
  res.json({error:false,message:"TimeSeries added successfully!",data:timeSeries});
});
}
};


exports.findById = function(req, res) {
TimeSeries.findById(req.params.id, function(err, timeSeries) {
  if (err)
  res.send(err);
  res.json(timeSeries);
});
};


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    TimeSeries.update(req.params.id, new TimeSeries(req.body), function(err, timeSeries) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'TimeSeries successfully updated' });
});
}
};



exports.delete = function(req, res) {
TimeSeries.delete( req.params.id, function(err, timeSeries) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'TimeSeries successfully deleted' });
});
};