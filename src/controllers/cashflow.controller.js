const { sequelize } = require("../../config/db.config");
const { DataTypes } = require("sequelize");
const cashflowService = require("../services/cashflow.service.js");
const { sendResponse } = require("../utils/contentNegotiation");
const { AppError } = require("../utils/errorHandler");
const { cashflow } = require("../models/cashflow.model");
("use strict");

// Add records to table
sequelize.sync().then(() => {
   console.log('Cashflow table created successfully!');
//    cashflow.create({
//     inflow:34556,
//     outflow:24500,
//     date: "2021-12-14"
// }).then(res => {
//     console.log(res)
// }).catch((error) => {
//     console.error('Failed to create a new record : ', error);
// });


// Delete Records from the table

// cashflow.destroy({
//     where: {
//       id: 2
//     }
// }).then(() => {
//     console.log("Successfully deleted record.")
// }).catch((error) => {
//     console.error('Failed to delete record : ', error);
// });

}).catch((error) => {
   console.error('Unable to create cashflow table : ', error);
});



exports.getTimeSeries = async (req, res, next) => {
  try {
    const cashflows = await cashflowService.getTimeSeries(req.params.branch);
    console.log("req.params diye ki asche?: "+ req.params.branch)
    return sendResponse(req, res, 200, cashflows);
  } catch (err) {
    next(err);
  }
};

// exports.createBlog = async (req, res, next) => {
//   try {
//     const {title, description } = req.body;
//     if (!title || !description) {
//       throw new AppError("Title and description are needed", 400, false);
//     }
//     const createdBlog = await blogService.createBlog(req.body, req.username);
//     return sendResponse(req, res, 201, createdBlog);
//   } catch (err) {
//     next(err);
//   }
// };

exports.getTimeSeriesById = async (req, res, next) => {
  try {
    const cashflow = await cashflowService.getBlogById(req.params.flowID);
    return sendResponse(req, res, 200, blog);
  } catch (err) {
    next(err);
  }
};

// exports.getBlogsByAuthorId = async (req, res, next) => {
//   try {
//     let pageSize = req.query.pagesize;
//     let pageNumber = req.query.pagenumber;

//     const blog = await blogService.getBlogsByAuthorId(req.params.authorId, pageSize, pageNumber);
//     return sendResponse(req, res, 200, blog);
//   } catch (err) {
//     next(err);
//   }
// };

