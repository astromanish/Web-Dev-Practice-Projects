class spiClass{
    constructor(name,spi){
        this.name = name;
        this.spi = spi;
    }
}

class UI{
    static displayBook(){
        const storedSpi = [
            {
                name : "First",
                spi : 7.07
            },
            {
                name : "Second",
                spi : 7.59
            }
        ];

        storedSpi.forEach((abc) => UI.addSpi(abc));
    }

    static addSpi(abc){

      //  console.log(abc.spi);
        const list = document.querySelector("#spi-list");
        const row = document.createElement("tr");
      //  console.log(document.body);

      if(abc.name == "" || abc.spi == ""){
        
        UI.showAlert("Please fill all the field!","danger");

      }
      else{
        row.innerHTML = 
        `
        <td>${abc.name}</td>
        <td>${abc.spi}</td>
        <button class="btn text-danger bg-white btn-md delete">x</button>

        `;

        UI.showAlert("Spi added!","success");
      }
        

      //  console.log(list);

        list.appendChild(row);
    }

    static showAlert(msg,cls){
        const div = document.createElement("div");
        div.className = `alert alert-${cls} text-center`;
        div.appendChild(document.createTextNode(msg));
        
        const container = document.querySelector(".container");
        const form = document.querySelector("#form");
        container.insertBefore(div,form);

        setTimeout(() => document.querySelector(".alert").remove(),1500);
    }

    static clearField(){
        document.querySelector("#name").value = "";
        document.querySelector("#spi").value = "";
    }
}

document.addEventListener("DOMContentLoaded", UI.displayBook());
document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const spi = document.querySelector("#spi").value;

    const spiObject = new spiClass(name,spi);
  //  console.log(spiObject);

    UI.addSpi(spiObject);
    UI.clearField();
});

document.querySelector("#spi-list").addEventListener("click", (e) =>{
    if(e.target.classList.contains="delete"){
        e.target.parentElement.remove();
    }
});
