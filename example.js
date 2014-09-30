var logger = require('./index');

logger.log("It's a log msg");
logger.info("It's an information msg");
logger.warn("It's a warn msg");
logger.error("It's an error msg");
logger.success("It's a success msg");
logger.enjoy("It's an enjoy msg");

//time msg
logger.time("f");
setTimeout(function() {
  logger.timeEnd("f");
},200);