// const table1 = {
//     "key1":"okello",
//     "key2":"Jean de Dieu"
// }

// const table2 = new Map()
// table2.set("name","Jean de Dieu");
// table2.set("age","25");

// console.log(table1["key1"]);
// console.log(table2.get("age"));

// Using Object
const table1 = {
    "key1": "gahuzamiryango",
    "key2": "value2"
  };
  console.log(table1["key1"]); // value1
  
  // Using Map
  const table2 = new Map();
  table2.set("okello", "60");
  table2.set("age", 30);
  //console.log(table2.get("name"),("age")); // John
  
  for (const [name, age] of table2) {
    console.log("name:", name, "age:", age);
  }
