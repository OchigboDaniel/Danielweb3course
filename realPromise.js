function activityTable(day) {
    return textFile("camera_logs.txt")
      .then(function(files) {
        return Promise.all(files.split("\n").map(function(name) {
          return textFile(name).then(function(log) {
            // analyze the log file here...
            // Example: increment count or process log
          });
        }));
      })
      .then(function() {
        // Return table after analysis
        return table;
      })
      .catch(function(error) {
        // Handle errors, such as file not found
        console.error(error);
      });
  }
  
  activityTable(6)
    .then(function(table) {
      console.log(activityGraph(table));
    })
    .catch(function(error) {
      console.error("Error in activity table:", error);
    });