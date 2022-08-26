"use strict";
exports.__esModule = true;
var cron_1 = require("cron");
new cron_1.CronJob("* * * * * *", function () {
    console.log("running");
}, null, true);
