// Import the functions you need from the SDKs you need
import { initializeApp, onLog } from 'firebase/app';
// Importation des  services
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY',
  authDomain: 'validation-atelier-js.firebaseapp.com',
  projectId: 'validation-atelier-js',
  storageBucket: 'validation-atelier-js.appspot.com',
  messagingSenderId: '466332062090',
  appId: '1:466332062090:web:ffbe45ef4a7371a7b5b873',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Récupérer la collection
const eleve = collection(db, 'inscScolarite');
const certiesRef2 = collection(db, 'mensualites');
let tabInsc = [];
let tabMens = [];

onSnapshot(eleve, (snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
    tabInsc.push({ ...doc.data(), id: doc.id });
  });
  eleve.sort((a, b) => b.dateDajout - a.dateDajout);

  const list = document.querySelector('#list');
  list.innerHTML = '';

  eleve.forEach((utili) => {
    const list = document.querySelector('#list');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td class="text-start ps-2 py-2 border border-1">${utili.prenom}</td>
    <td class="text-start ps-2 py-2 border border-1">${utili.nom}</td>
    <td class="text-center py-2 border border-1">${utili.montantInsc.toLocaleString(
      'en-US'
    )} Fcfa</td>`;
    list.appendChild(tr);
    let loaderContainer = document.querySelector('.chargement-page');
    loaderContainer.style.display = 'none';
  });
});

// Enregistrer des données dans le Firebase

const form = document.querySelector('.addToFirebase');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //Ajouter un nouveau document avec un id généré
  addDoc(eleve, {
    nom: form.nom.value,
    prenom: form.prenom.value,
    type: form.type.value,
    classe: form.classeSelect.value,
    montantInsc: parseInt(form.montantPaye.value),
    dateDajout: serverTimestamp(),
  }).then(() => form.reset());
});
// Montant à inscrire
let selectElement = document.getElementById('classeSelect');
selectElement.addEventListener('change', function () {
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectedValue = selectedOption.value;
  console.log(selectedValue);

  document.getElementById('montantPaye').value = montant(selectedValue);
  console.log(document.getElementById('montantPaye').value);
});

function montant(classe) {
  const montantMapping = {
    '6ème': 25000,
    '5ème': 25000,
    '4ème': 30000,
    '3ème': 35000,
  };

  return montantMapping[classe] || 0;
}

// Alert Après ajout
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Linscription est effectué avec succès', 'success');
  });
}
// _________________________
// Parti Mensualité

// Mensualite
onSnapshot(certiesRef2, (snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
    tabMens.push({ ...doc.data(), id: doc.id });
  });
  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);
  const list = document.querySelector('.mytbodyIns');
  list.innerHTML = '';

  // console.log(certiesRef2);
  certiesRef2.forEach((utili) => {
    const list = document.querySelector('.mytbodyIns');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td class="text-start ps-2 py-2 border border-1">${
      utili.prenom
    }</td> <td class="text-start ps-2 py-2 border border-1">${utili.nom}
    </td> <td class="text-start ps-2 py-2 d-none d-sm-block border border-1">${
      utili.mois
    }
    </td> <td class="text-center py-2 border border-1">${utili.montantpay.toLocaleString(
      'en-US'
    )} Fcfa</td>`;
    list.appendChild(tr);
    let loaderContainer = document.querySelector('.loader2');
    loaderContainer.style.display = 'none';
  });
});

// ajout d'une mensualite

const myForm = document.querySelector('.myForm');
const alertMens = document.querySelector('.alertMens');
getDocs(eleve).then((snapshot) => {
  let myTabeleve = [];
  snapshot.docs.forEach((doc) => {
    myTabeleve.push({ ...doc.data(), id: doc.id });
  });

  myForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let conditionRempli = false;

    for (const utili of myTabeleve) {
      // Ajouter un nouveau document avec un id généré
      if (
        utili.nom.includes(myForm.nom.value) &&
        utili.prenom.includes(myForm.prenom.value) &&
        utili.classe.includes(myForm.classeSelect2.value)
      ) {
        await addDoc(certiesRef2, {
          nom: myForm.nom.value,
          prenom: myForm.prenom.value,
          type: myForm.type.value,
          classe: myForm.classeSelect2.value,
          mois: myForm.mois.value,
          montantpay: parseInt(myForm.montantAPaye.value),
          dateDajout: serverTimestamp(),
        });

        myForm.reset();
        conditionRempli = true;
        break;
      }
    }

    if (conditionRempli) {
      return;
    } else {
      alertMens.classList.remove('d-none');
      alertMens.innerHTML =
        'Elève inexiste ou ne fait pas parti de cette classe...';
    }
  });
});

// Montant à inscrire
let selectElement2 = document.getElementById('classeSelect2');
selectElement2.addEventListener('change', function () {
  let selectedOption = selectElement2.options[selectElement2.selectedIndex];
  let selectedValue = selectedOption.value;
  console.log(selectedValue);
  document.getElementById('montantAPaye').value = montant2(selectedValue);
});

function montant2(classe) {
  const montantMapping = {
    '6ème': 10000,
    '5ème': 15000,
    '4ème': 20000,
    '3ème': 25000,
  };

  return montantMapping[classe] || 0;
}
// Recherche
const rechercheInput = document.querySelector('#chercheInsc');
const rechercheInput2 = document.querySelector('#chercheMens');
const valeurInscInput1 = document.getElementById('classe');
const valeurInscInput2 = document.getElementById('nomPren');
const valeurMensInput1 = document.getElementById('classe2');
const valeurMensInput2 = document.getElementById('nomPren2');
// // Fonction Rechercher

// Pour inscription
rechercheInput.addEventListener('input', (e) => {
  let valeurInput1 = '';
  let valeurInput2 = '';
  let collectionFilter;
  if (e.target === valeurInscInput1) {
    valeurInput1 = e.target.value;
    // console.log('Input 1:', valeurInput1);
    collectionFilter = tabInsc.filter((element) =>
      element.classe.toLowerCase().includes(valeurInput1.toLowerCase())
    );
  } else if (e.target === valeurInscInput2) {
    valeurInput2 = e.target.value;
    // console.log('Input 2:', valeurInput2);
    collectionFilter = tabInsc.filter(
      (element) =>
        element.nom.toLowerCase().includes(valeurInput2.toLowerCase()) ||
        element.prenom.toLowerCase().includes(valeurInput2.toLowerCase())
    );
  }

  const list = document.querySelector('#list');
  list.innerHTML = '';
  if (collectionFilter.length) {
    document.getElementById('erreurRefProff').innerHTML = '';
    collectionFilter.forEach((utili) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
    <td class="text-start ps-2 py-2 border border-1">${utili.prenom}</td>
    <td class="text-start ps-2 py-2 border border-1">${utili.nom}</td>
    <td class="text-center py-2 border border-1">${utili.montantInsc.toLocaleString(
      'en-US'
    )} Fcfa</td>`;
      list.appendChild(tr);
      let loaderContainer = document.querySelector('.chargement-page');
      loaderContainer.style.display = 'none';
    });
  } else {
    document.getElementById('erreurRefProff').innerHTML =
      'Aucun resultat trouver';
  }
});
rechercheInput2.addEventListener('input', (e) => {
  let valeurInput1 = '';
  let valeurInput2 = '';
  let collectionFilter;
  if (e.target === valeurMensInput1) {
    valeurInput1 = e.target.value;
    // console.log('Input 1:', valeurInput1);
    collectionFilter = tabMens.filter((element) =>
      element.classe.toLowerCase().includes(valeurInput1.toLowerCase())
    );
  } else if (e.target === valeurMensInput2) {
    valeurInput2 = e.target.value;
    // console.log('Input 2:', valeurInput2);
    collectionFilter = tabMens.filter(
      (element) =>
        element.nom.toLowerCase().includes(valeurInput2.toLowerCase()) ||
        element.prenom.toLowerCase().includes(valeurInput2.toLowerCase())
    );
  }

  const list = document.querySelector('#list3');
  list.innerHTML = '';
  if (collectionFilter.length) {
    document.getElementById('erreurRefProff2').innerHTML = '';
    collectionFilter.forEach((utili) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <td class="text-start ps-2 py-2 border border-1">${
        utili.prenom
      }</td> <td class="text-start ps-2 py-2 border border-1">${utili.nom}
      </td> <td class="text-start ps-2 py-2 d-none d-sm-block border border-1">${
        utili.mois
      }
      </td> <td class="text-center py-2 border border-1">${utili.montantpay.toLocaleString(
        'en-US'
      )} Fcfa</td>`;
      list.appendChild(tr);
      let loaderContainer = document.querySelector('.chargement-page');
      loaderContainer.style.display = 'none';
    });
  } else {
    document.getElementById('erreurRefProff2').innerHTML =
      'Aucun resultat trouver';
  }
});

//___________________________________________________
// //partie pape cheikh

onSnapshot(eleve, (snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  const revenue = document.getElementById('revenue');
  revenue.innerHTML = '';
  eleve.forEach((utili) => {
    let trbody = document.createElement('tr');
    trbody.innerHTML = `
      <td class="border border-1">${utili.dateDajout
        .toDate()
        .toLocaleDateString()}</td>
        <td class="text-center">${utili.type}</td>
        <td class="text-center border border-1">${utili.prenom} ${
      utili.nom
    }</td>
        <td class="border border-1">${utili.montantInsc.toLocaleString(
          'en-US'
        )} Fcfa</td>
        `;
    revenue.appendChild(trbody);
    let loaderContainer = document.querySelector('.loader3');
    loaderContainer.style.display = 'none';
  });
});
onSnapshot(certiesRef2, (snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  const mens = document.getElementById('mens');
  mens.innerHTML = '';
  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

  certiesRef2.forEach((utili) => {
    let trbody = document.createElement('tr');
    trbody.innerHTML = `
      <td class="border border-1">${utili.dateDajout
        .toDate()
        .toLocaleDateString()}</td>
        <td class="text-center">${utili.type}</td>
        <td class="text-center border border-1">${utili.prenom} ${
      utili.nom
    }</td>
        <td class="border border-1">${utili.montantpay}Fcfa</td>
        `;
    mens.appendChild(trbody);

    // console.log(utili.type);
  });
});

getDocs(eleve).then((snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  let totalInscription = 0;
  eleve.forEach((utili) => {
    totalInscription += parseInt(utili.montantInsc);
  });
  console.log(totalInscription);
});

getDocs(certiesRef2).then((snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  let totalCertieRef2 = 0;
  certiesRef2.forEach((utili) => {
    totalCertieRef2 += parseInt(utili.montantpay);
  });
  console.log(totalCertieRef2);
});

// console.log(total);

function totalGlobal(data) {
  return getDocs(data).then((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
    return items;
  });
}

Promise.all([totalGlobal(eleve), totalGlobal(certiesRef2)])
  .then(([eleveData, certiesRef2Data]) => {
    let totalInscription = eleveData.reduce(
      (total, utili) => total + parseInt(utili.montantInsc),
      0
    );
    let totalCertieRef2 = certiesRef2Data.reduce(
      (total, utili) => total + parseInt(utili.montantpay),
      0
    );

    let totaleDuRevenu = totalInscription + totalCertieRef2;

    //Calcule du revenue total
    function CalculDeLaSommeTotale() {
      const total = document.getElementById('total');
      total.innerHTML = '';
      let trfoot = document.createElement('tr');
      trfoot.innerHTML = `
    <td colspan="3"><b>Total</b></td>
    <td><b>${totaleDuRevenu.toLocaleString('en-US')} Fcfa </b></td>
    `;
      total.appendChild(trfoot);
      const revTotal = document.getElementById('revenuTotal');
      revTotal.innerHTML = `${totaleDuRevenu.toLocaleString(
        'en-US'
      )} <span class="fw-bold">FCFA</span>`;
      console.log('Total global:', totaleDuRevenu);
    }
    CalculDeLaSommeTotale();
  })
  .catch((error) => {
    console.error("Une erreur s'est produite :", error);
  });
