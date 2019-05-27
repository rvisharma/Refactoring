const invoices = require("./invoices");
const plays = require("./plays");

const createStatementData = require("./createStatementData");

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    result += ` ${perf.play.name}: USD ${perf.amount / 100} (${
      perf.audience
    })\n`;
  }

  result += `Amount owed is USD ${data.totalAmount / 100}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

console.log(statement(invoices, plays));
