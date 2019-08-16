    
    async function getUser() {
        const temp = document.getElementById("docs")
        const profileResponse = await fetch(
          `https://dadosabertos.camara.leg.br/api/v2/deputados/`
        );
        const docs = await profileResponse.json();
        
        for (let index = 0; index < docs.dados.length; index++) {
          temp.innerHTML += `
            <div class="container">
            <div style="display: flex; flex-direction: row; background-color:#FFFFFF; border-radius:8px;">
            <img class="card-img-top" style="width: 40px; heigh: 40px" src="${docs.dados[index].urlFoto}" alt="Card image cap">
            <div style="display: flex; flex-direction: column;">
            
              <h3>Deputado: ${docs.dados[index].nome}</h3>
              <h3>Partido: ${docs.dados[index].siglaPartido} - ${docs.dados[index].siglaUf} </h3>
              <h3>Email:<a href="#"> ${docs.dados[index].email}</a></h3>
             
            </div>
          </div>  
            </div>
          `;
          
        }
     }