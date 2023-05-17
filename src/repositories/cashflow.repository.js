const cashflow = require("../models/cashflow.model");
const { SequelizeValidationError } = require("../utils/errorHandler");

exports.getTimeSeries = async (branch) => {
  const result = await cashflow
    .findAll({
      where: {
        branch: branch, // assuming `branch` is a parameter passed to the function
      },
    });
    
  return result;
};


// exports.getBlogById = async (blogId) => {
//     const result = await Blog.findOne({include : ["author"], where: { id: blogId } });
//     return result;
// };
// // Get all the records from the table
// cashflow.findAll({
//     where: {
//     branch: 'dhaka', // assuming `branch` is a parameter passed to the function
//   }},
//   ).then(res => {

//     console.log(res)
// }).catch((error) => {
//     console.error('Failed to retrieve data : ', error);
// });

exports.getTimeSeriesById = async (blogId) => {
  const result = await Blog.findOne({ where: { id: blogId } });
  return result;
};

// exports.createBlog = async (blog) => {
//   try {
//       const result = await Blog.create(blog);
//       console.log("Blog created successfully");
//       return result;
//     } catch (err) {
//       throw new SequelizeValidationError(err, 400);
//     }
// }
