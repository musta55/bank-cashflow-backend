const cashflowRepository = require("../repositories/cashflow.repository");
const { AppError } = require("../utils/errorHandler");
const cashflowDTO = require("../DTOs/cashflow.dto");

("use strict");

async function getTimeSeries(branch) {
  const data = await cashflowRepository.getTimeSeries(branch);
  //console.log(data);

  const allCashflow = { count: data.count, rows: [] };
  data.forEach((element) => {
    console.log('ele ' + element)
    allCashflow.rows.push( new cashflowDTO(element));
  });
  return data;

}

module.exports = {
  getTimeSeries,
};
