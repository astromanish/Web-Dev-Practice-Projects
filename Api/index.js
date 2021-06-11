axios({
        method: 'post',
        url: 'https://api.vimeo.com/videos/553625259/comments/',
        headers: { 
            'Authorization': 'Bearer 4795eb8e611bb1efe4cbfa990356cce8', 
            'Content-Type': 'text/plain'
            },
        data : {
            'text':"HEllo"
        }
    })
    
    .then(res => console.log(res))

    .catch(err => console.error(err))




document.getElementById("btn").addEventListener("click", ()=>{

    
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