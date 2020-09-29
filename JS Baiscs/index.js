const Course = [
    {
        code : "ME-102",
        name : "Engineering Mechanics",
        prof : "P.C Mani"
    },
    {
        code : "CSO-204N",
        name : "Discrete Mathematics",
        prof : "Abhash Kumar Jha"
    },
    {
        code : "CSO-211",
        name : "Computer System and Organization",
        prof : "S.K Singh"
    }
];

const table = document.createElement("table");

table.id = "table";

document.body.appendChild(table);
console.log(document.body);


let Output = "";

Course.forEach((course) => {
    let row = document.createElement("tr");
    document.getElementById("table").appendChild(row);
    Output += "<td>" +course.code +"</td>";
    Output += "<td>" +course.name +"</td>";
    Output += "<td>" +course.prof +"</td>";
    document.querySelector("tr").appendChild(Output);
})