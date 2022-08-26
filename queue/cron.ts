import { CronJob } from "cron";

new CronJob(
  "* * * * * *",
  () => {
    console.log("running");
  },
  null,
  true
);
