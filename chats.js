// Je sélectionne mon formulaire d'inscription grâce à son id =>  variable letInscription
let letInscription = document.querySelector('#form_inscription');
// console.log(letInscription);

letInscription.addEventListener('submit', adoption);

function adoption(event){
    event.preventDefault(); // ça permet d'empêcher l'envoi de formulaire

    // let choix = document.getElementById('choix');
    // console.log(choix.value);
    let choix = event.target.choix.value;
    // console.log(choix);
    let raison = event.target.raison.value;
    // console.log(raison);
    let divSelect = document.querySelector('.bgSelect');
    // console.log(divSelect);

    let divTextArea = document.querySelector('.bgTextArea');
    // console.log(divTextArea);

    let info = document.querySelector('#info');    

    let erreur = false;
    
    // Merci pour votre bonté ! Votre demande va être étudiée dans les plus brefs délais. 

    if (choix == 0) {
        divSelect.classList.add('bg-danger', 'bg-opacity-25', 'p-4');
        erreur = true;
    }else{
        divSelect.classList.add('bg-success', 'bg-opacity-25', 'p-4');
        divSelect.classList.remove('bg-danger');
    }

    if(raison.length < 10 || raison.length > 20){
        divTextArea.classList.add('bg-danger', 'bg-opacity-25', 'p-4');
        erreur = true;
    }else{
        divTextArea.classList.add('bg-success', 'bg-opacity-25', 'p-4');
        divTextArea.classList.remove('bg-danger');
    }
    
    if(erreur == false){
        info.innerHTML = `<p class="alert alert-success">Merci pour votre bonté ! Votre demande va être étudiée dans les plus brefs délais.</p>`;
        letInscription.classList.add('d-none');
    }
}

