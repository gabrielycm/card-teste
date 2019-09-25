
    const lugar = document.querySelector('#main');
    let text ="";
    const lista = data;

    lista.forEach(pessoa => {
        text += `
        <div class="box">
            <div class="cards">
            <img class="marg" src="${pessoa.avatar}">
            <h1 class="marg">${pessoa.first_name +" "+ pessoa.last_name}</h1>
            <h2 class="marg">${pessoa.email}</h2>
            </div>
        </div>
        `
    });

    lugar.innerHTML= text;