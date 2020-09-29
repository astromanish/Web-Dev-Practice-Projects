
document.getElementById("btn").addEventListener("click", ()=>{

    axios({
        method : "get",
        url : "https://api.quarantine.country/api/v1/summary/latest"
    })
    
    .then(res => showOutput(res))

    .catch(err => console.error(err))
});


function showOutput(res){
    console.log(res.data.data);

    const data = Object.entries(res.data.data.regions);

    data.forEach(country => {
        const tbody = document.querySelector("#tbd");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td class="text-capitalize text-info">${country[0]}</td>
        <td>${country[1].total_cases}</td>
        <td class="text-primary">${country[1].active_cases}</td>
        <td class="text-success">${country[1].recovered}</td>
        <td class="text-danger">${country[1].deaths}</td>
        `;
        tbody.appendChild(row);

        
    });

    
}