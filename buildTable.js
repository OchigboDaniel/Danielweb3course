const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  
  // Create the table
  const table = document.createElement("table");
  
  // header row
  const headerRow = document.createElement("tr");
  const keys = Object.keys(MOUNTAINS[0]);  
  
  keys.forEach(key => {
    const th = document.createElement("th");
    th.textContent = key;  
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  
  MOUNTAINS.forEach(mountain => {
    const row = document.createElement("tr");
    
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = mountain[key];  // Set the cell's text to the value of the property
      
      if (typeof mountain[key] === "number") {
        td.style.textAlign = "right";
      }
      
      row.appendChild(td);
    });
    
    table.appendChild(row);
  });
  
  document.getElementById("mountains").appendChild(table);