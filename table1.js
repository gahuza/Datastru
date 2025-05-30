const table1 = {
    "key1":"okello",
    "key2":"Jean de Dieu"
}

const table2 = new Map()
table2.set("name","Jean de Dieu");
table2.set("age","25");

console.log(table1["key1"]);
console.log(table2.get("age"));
