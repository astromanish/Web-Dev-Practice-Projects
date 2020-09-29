
axios({
    method : "get",
    url : "https://api.quarantine.country/api/v1/summary/latest"
})

.then(res => showGraph(res))
.catch(err => console.error(err))


const showGraph = (res) => {
    const grph = document.querySelector("#grab");

    const data = Object.entries(res.data.data.regions);
    

    const lbl = data.map((cntry) => {
        return cntry[0];
    });

    const dt = data.map((cntry) => {
        return cntry[1].deaths
    });

    for(let i=0;i<170;i++)
    {
        lbl.pop();
        dt.pop();
    }

    console.log(dt);

    const man = new Chart(grph, {
        type : "bar",
        data : {
            labels : lbl,
            datasets : [
                {
                label : "Death",
                data : dt,
                backgroundColor : "rgba(255,0,0,0.5)"
                }
            ]

        },
        options : {

        }

        

    });
}