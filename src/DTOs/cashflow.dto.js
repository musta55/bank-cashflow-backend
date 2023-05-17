class cashflowDTO {
    constructor(cashflow) {
      this.id = cashflow.id;
      this.inflow = cashflow.inflow;
      this.outflow = cashflow.outflow;
      this.date = cashflow.date;
    }
  }
  
  module.exports = cashflowDTO;