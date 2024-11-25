async function activityTable(day) {
    let logFileList = await textFile("camera_logs.txt");
    // Your code here
    const hours = Array(24).fill(0);

    const logListContent = await textFile('camera_log.txt');
    const logFiles = logListContent.trim().split('\n');

    for (let file of logFiles) {
        const logContent = await textFile(file);
        const timestampStrings = logContent.trim().split('\n')

        const timestamps = timestampStrings.map(Number);

        for (let timestamp of timestamps) {
            const date = new Date(timestamp);
            const logDay = date.getDay();
            
            const logHour = date.getHours();

            if (logDay == day) {
                hoursCount[logHour]++;
            }
        }
    }
    return hoursCount;
  }
   activityTable(1)
    .then(table => console.log(activityGraph(table)));