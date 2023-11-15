"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_accueil_js"],{

/***/ "./src/pagesJS/accueil.js":
/*!********************************!*\
  !*** ./src/pagesJS/accueil.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\r\n\r\n// Importation des  services\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48\",\r\n  authDomain: \"mixte-feewi.firebaseapp.com\",\r\n  projectId: \"mixte-feewi\",\r\n  storageBucket: \"mixte-feewi.appspot.com\",\r\n  messagingSenderId: \"1083213454329\",\r\n  appId: \"1:1083213454329:web:df3deafe22a82ad34e3b28\",\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);\r\n\r\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user) => {\r\n  if (user) {\r\n    // console.log(\"Utilisateur connecté\");\r\n    var userEmail = user.email;\r\n    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"utilisateurs\");\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(userRef, (snapshot) => {\r\n      let userRef = [];\r\n      snapshot.docs.forEach((doc) => {\r\n        userRef.push({ ...doc.data(), id: doc.id });\r\n      });\r\n      userRef.forEach((utilisateur) => {\r\n        // Créez une référence au document de l'utilisateur dans Firestore\r\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, \"utilisateurs\", utilisateur.id);\r\n\r\n        if (utilisateur.email == userEmail) {\r\n          const ProfilNav = document.querySelector(\".ProfilNav\");\r\n          const profilVoir = document.querySelector(\".profilVoir\");\r\n          const nomUser = document.querySelector(\".nomUser\");\r\n          const statusUser = document.querySelector(\".statusUser\");\r\n          ProfilNav.src = utilisateur.url;\r\n          profilVoir.src = utilisateur.url;\r\n          nomUser.innerText = utilisateur.prenom + \" \" + utilisateur.nom;\r\n          statusUser.innerText = utilisateur.status;\r\n        }\r\n      });\r\n    });\r\n  } else {\r\n    console.log(\"Aucun utilisateur connecté\");\r\n  }\r\n});\r\n\r\n// Récupérer la collection\r\nconst eleve = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"inscScolarite\");\r\nconst certiesRef2 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"mensualites\");\r\nlet sum = 0;\r\n\r\nlet effectifClass6;\r\nlet effectifClass5;\r\nlet effectifClass4;\r\nlet effectifClass3;\r\n\r\nconst effectif6 = document.getElementById(\"effectif6\");\r\nconst effectif5 = document.getElementById(\"effectif5\");\r\nconst effectif4 = document.getElementById(\"effectif4\");\r\nconst effectif3 = document.getElementById(\"effectif3\");\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(eleve, (snapshot) => {\r\n  let eleves = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleves.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  eleves.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n  // console.log(eleves);\r\n  effectifClass6 = eleves.filter((utili) => utili.classe === \"6ème\").length;\r\n  effectifClass5 = eleves.filter((utili) => utili.classe === \"5ème\").length;\r\n  effectifClass4 = eleves.filter((utili) => utili.classe === \"4ème\").length;\r\n  effectifClass3 = eleves.filter((utili) => utili.classe === \"3ème\").length;\r\n\r\n  effectif6.innerHTML = effectifClass6 + \" élèves\";\r\n  effectif5.innerHTML = effectifClass5 + \" élèves\";\r\n  effectif4.innerHTML = effectifClass4 + \" élèves\";\r\n  effectif3.innerHTML = effectifClass3 + \" élèves\";\r\n});\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(certiesRef2, (snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n  // console.log(certiesRef2);\r\n  let PaiementsEffec6 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"6ème\" && utili.mois === \"novembre\"\r\n  );\r\n  let PaiementsEffec5 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"5ème\" && utili.mois === \"novembre\"\r\n  );\r\n  let PaiementsEffec4 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"4ème\" && utili.mois === \"novembre\"\r\n  );\r\n  let PaiementsEffec3 = certiesRef2.filter(\r\n    (utili) => utili.classe === \"3ème\" && utili.mois === \"novembre\"\r\n  );\r\n\r\n  paiement6.innerHTML =\r\n    Math.round((PaiementsEffec6.length / effectifClass6) * 100) + \"%\";\r\n  paiement5.innerHTML =\r\n    Math.round((PaiementsEffec5.length / effectifClass5) * 100) + \"%\";\r\n  paiement4.innerHTML =\r\n    Math.round((PaiementsEffec4.length / effectifClass4) * 100) + \"%\";\r\n  paiement3.innerHTML =\r\n    Math.round((PaiementsEffec3.length / effectifClass3) * 100) + \"%\";\r\n  // console.log(paiement3.innerHTML);\r\n  sum =\r\n    parseFloat(paiement6.innerHTML) +\r\n    parseFloat(paiement5.innerHTML) +\r\n    parseFloat(paiement4.innerHTML) +\r\n    parseFloat(paiement3.innerHTML);\r\n\r\n  sum = sum / 4;\r\n  sum = toFixed(sum);\r\n  // console.log(sum);\r\n\r\n  /*****PARTIE PROGRESS BAR****/\r\n  let circularProgress = document.querySelector(\".circular-progress\");\r\n  let progressValue = document.querySelector(\".progress-value\");\r\n\r\n  let progressStartValue = 0;\r\n  let progressEndValue = sum;\r\n  let speed = 70;\r\n\r\n  let progress = setInterval(() => {\r\n    progressStartValue++;\r\n\r\n    progressValue.textContent = `${progressStartValue}%`;\r\n    circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n      progressStartValue * 3.6\r\n    }deg, #ededed 0deg)`;\r\n\r\n    if (progressStartValue == progressEndValue) {\r\n      clearInterval(progress);\r\n    }\r\n  }, speed);\r\n});\r\n\r\nconst btnAfficherPaiements = document.getElementById(\"btnAfficherPaiements\");\r\nconst selectMois = document.getElementById(\"selectMois\");\r\n\r\n// const dateDuJour = new Date();\r\n// const moisActuel = dateDuJour.getMonth() + 1;\r\n\r\n// console.log(dateDuJour, moisActuel);\r\n// selectMois.value = moisActuel.toString();\r\n\r\nselectMois.addEventListener(\"click\", (e) => {\r\n  const moisSelectionne = selectMois.value;\r\n  const mois = e.target.value;\r\n  // console.log(mois);\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(certiesRef2, (snapshot) => {\r\n    let certiesRef2 = [];\r\n    snapshot.docs.forEach((doc) => {\r\n      certiesRef2.push({ ...doc.data(), id: doc.id });\r\n    });\r\n    certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n    let PaiementsEffec6 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"6ème\" && utili.mois === mois\r\n    );\r\n    let PaiementsEffec5 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"5ème\" && utili.mois === mois\r\n    );\r\n    let PaiementsEffec4 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"4ème\" && utili.mois === mois\r\n    );\r\n    let PaiementsEffec3 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"3ème\" && utili.mois === mois\r\n    );\r\n\r\n    paiement6.innerHTML =\r\n      Math.round((PaiementsEffec6.length / effectifClass6) * 100) + \"%\";\r\n    paiement5.innerHTML =\r\n      Math.round((PaiementsEffec5.length / effectifClass5) * 100) + \"%\";\r\n    paiement4.innerHTML =\r\n      Math.round((PaiementsEffec4.length / effectifClass4) * 100) + \"%\";\r\n    paiement3.innerHTML =\r\n      Math.round((PaiementsEffec3.length / effectifClass3) * 100) + \"%\";\r\n  });\r\n  sum =\r\n    parseFloat(paiement6.innerHTML) +\r\n    parseFloat(paiement5.innerHTML) +\r\n    parseFloat(paiement4.innerHTML) +\r\n    parseFloat(paiement3.innerHTML);\r\n\r\n  sum = sum / 4;\r\n  sum = toFixed(sum);\r\n  // console.log(sum);\r\n\r\n   /*****PARTIE PROGRESS BAR****/\r\n   let circularProgress = document.querySelector(\".circular-progress\");\r\n   let progressValue = document.querySelector(\".progress-value\");\r\n \r\n   let progressStartValue = 0;\r\n   let progressEndValue = sum;\r\n   let speed = 70;\r\n \r\n   let progress = setInterval(() => {\r\n     progressStartValue++;\r\n \r\n     progressValue.textContent = `${progressStartValue}%`;\r\n     circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n       progressStartValue * 3.6\r\n     }deg, #ededed 0deg)`;\r\n \r\n     if (progressStartValue == progressEndValue) {\r\n       clearInterval(progress);\r\n     }\r\n   }, speed);\r\n});\r\n\r\n// partie ladji HISTORIQUE\r\nlet date = new Date();\r\nlet year = date.getFullYear();\r\nlet month = date.getMonth() + 1;\r\nlet day = date.getDate();\r\n\r\nconst myTbody1 = document.querySelector(\".myTd1\");\r\nconst myTbody2 = document.querySelector(\".myTd2\");\r\nconst totalIns = document.querySelector(\".totalIns\");\r\nconst totalMens = document.querySelector(\".totalMens\");\r\n\r\nmyTbody1.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;\r\nmyTbody2.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(eleve).then((snapshot) => {\r\n  let eleve = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleve.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalInscription = 0;\r\n  eleve.forEach((utili) => {\r\n    totalInscription += parseInt(utili.montantInsc);\r\n  });\r\n\r\n  totalIns.innerHTML = `<b>${totalInscription}</b>`;\r\n});\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(certiesRef2).then((snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalMensualiter = 0;\r\n  certiesRef2.forEach((utili) => {\r\n    totalMensualiter += parseInt(utili.montantpay);\r\n  });\r\n\r\n  // console.log(certiesRef2);\r\n  totalMens.innerHTML = `<b>${totalMensualiter}</b>`;\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9hY2N1ZWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL2FjY3VlaWwuanM/MzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIEltcG9ydGF0aW9uIGRlcyAgc2VydmljZXNcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCB1cGxvYWRCeXRlcywgZ2V0RG93bmxvYWRVUkwgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmIGFzIHJlZkRhdGFiYXNlLCBzZXQsIGdldCB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuICB1cGRhdGVQcm9maWxlLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGRvYyxcclxuICB1cGRhdGVEb2MsXHJcbiAgYWRkRG9jLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgZG9jdW1lbnRJZCxcclxuICBnZXREb2NzLFxyXG4gIGdldEZpcmVzdG9yZSxcclxuICBvblNuYXBzaG90LFxyXG4gIHNlcnZlclRpbWVzdGFtcCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lCUTNTcmZFaW1FUHR6Q0Z5eFIwdldCSzhCSl9LNE1hNDhcIixcclxuICBhdXRoRG9tYWluOiBcIm1peHRlLWZlZXdpLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJtaXh0ZS1mZWV3aVwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibWl4dGUtZmVld2kuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDgzMjEzNDU0MzI5XCIsXHJcbiAgYXBwSWQ6IFwiMToxMDgzMjEzNDU0MzI5OndlYjpkZjNkZWFmZTIyYTgyYWQzNGUzYjI4XCIsXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxub25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgaWYgKHVzZXIpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiVXRpbGlzYXRldXIgY29ubmVjdMOpXCIpO1xyXG4gICAgdmFyIHVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1dGlsaXNhdGV1cnNcIik7XHJcbiAgICBvblNuYXBzaG90KHVzZXJSZWYsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICBsZXQgdXNlclJlZiA9IFtdO1xyXG4gICAgICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgIHVzZXJSZWYucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB1c2VyUmVmLmZvckVhY2goKHV0aWxpc2F0ZXVyKSA9PiB7XHJcbiAgICAgICAgLy8gQ3LDqWV6IHVuZSByw6lmw6lyZW5jZSBhdSBkb2N1bWVudCBkZSBsJ3V0aWxpc2F0ZXVyIGRhbnMgRmlyZXN0b3JlXHJcbiAgICAgICAgY29uc3QgdXNlckRvY1JlZiA9IGRvYyhkYiwgXCJ1dGlsaXNhdGV1cnNcIiwgdXRpbGlzYXRldXIuaWQpO1xyXG5cclxuICAgICAgICBpZiAodXRpbGlzYXRldXIuZW1haWwgPT0gdXNlckVtYWlsKSB7XHJcbiAgICAgICAgICBjb25zdCBQcm9maWxOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbE5hdlwiKTtcclxuICAgICAgICAgIGNvbnN0IHByb2ZpbFZvaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbFZvaXJcIik7XHJcbiAgICAgICAgICBjb25zdCBub21Vc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub21Vc2VyXCIpO1xyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzVXNlclwiKTtcclxuICAgICAgICAgIFByb2ZpbE5hdi5zcmMgPSB1dGlsaXNhdGV1ci51cmw7XHJcbiAgICAgICAgICBwcm9maWxWb2lyLnNyYyA9IHV0aWxpc2F0ZXVyLnVybDtcclxuICAgICAgICAgIG5vbVVzZXIuaW5uZXJUZXh0ID0gdXRpbGlzYXRldXIucHJlbm9tICsgXCIgXCIgKyB1dGlsaXNhdGV1ci5ub207XHJcbiAgICAgICAgICBzdGF0dXNVc2VyLmlubmVyVGV4dCA9IHV0aWxpc2F0ZXVyLnN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXVjdW4gdXRpbGlzYXRldXIgY29ubmVjdMOpXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBSw6ljdXDDqXJlciBsYSBjb2xsZWN0aW9uXHJcbmNvbnN0IGVsZXZlID0gY29sbGVjdGlvbihkYiwgXCJpbnNjU2NvbGFyaXRlXCIpO1xyXG5jb25zdCBjZXJ0aWVzUmVmMiA9IGNvbGxlY3Rpb24oZGIsIFwibWVuc3VhbGl0ZXNcIik7XHJcbmxldCBzdW0gPSAwO1xyXG5cclxubGV0IGVmZmVjdGlmQ2xhc3M2O1xyXG5sZXQgZWZmZWN0aWZDbGFzczU7XHJcbmxldCBlZmZlY3RpZkNsYXNzNDtcclxubGV0IGVmZmVjdGlmQ2xhc3MzO1xyXG5cclxuY29uc3QgZWZmZWN0aWY2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZlY3RpZjZcIik7XHJcbmNvbnN0IGVmZmVjdGlmNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWZmZWN0aWY1XCIpO1xyXG5jb25zdCBlZmZlY3RpZjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVmZmVjdGlmNFwiKTtcclxuY29uc3QgZWZmZWN0aWYzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZlY3RpZjNcIik7XHJcblxyXG5vblNuYXBzaG90KGVsZXZlLCAoc25hcHNob3QpID0+IHtcclxuICBsZXQgZWxldmVzID0gW107XHJcbiAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGVsZXZlcy5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICB9KTtcclxuICBlbGV2ZXMuc29ydCgoYSwgYikgPT4gYi5kYXRlRGFqb3V0IC0gYS5kYXRlRGFqb3V0KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZWxldmVzKTtcclxuICBlZmZlY3RpZkNsYXNzNiA9IGVsZXZlcy5maWx0ZXIoKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiNsOobWVcIikubGVuZ3RoO1xyXG4gIGVmZmVjdGlmQ2xhc3M1ID0gZWxldmVzLmZpbHRlcigodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI1w6htZVwiKS5sZW5ndGg7XHJcbiAgZWZmZWN0aWZDbGFzczQgPSBlbGV2ZXMuZmlsdGVyKCh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjTDqG1lXCIpLmxlbmd0aDtcclxuICBlZmZlY3RpZkNsYXNzMyA9IGVsZXZlcy5maWx0ZXIoKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiM8OobWVcIikubGVuZ3RoO1xyXG5cclxuICBlZmZlY3RpZjYuaW5uZXJIVE1MID0gZWZmZWN0aWZDbGFzczYgKyBcIiDDqWzDqHZlc1wiO1xyXG4gIGVmZmVjdGlmNS5pbm5lckhUTUwgPSBlZmZlY3RpZkNsYXNzNSArIFwiIMOpbMOodmVzXCI7XHJcbiAgZWZmZWN0aWY0LmlubmVySFRNTCA9IGVmZmVjdGlmQ2xhc3M0ICsgXCIgw6lsw6h2ZXNcIjtcclxuICBlZmZlY3RpZjMuaW5uZXJIVE1MID0gZWZmZWN0aWZDbGFzczMgKyBcIiDDqWzDqHZlc1wiO1xyXG59KTtcclxuXHJcbm9uU25hcHNob3QoY2VydGllc1JlZjIsIChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBjZXJ0aWVzUmVmMiA9IFtdO1xyXG4gIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBjZXJ0aWVzUmVmMi5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICB9KTtcclxuICBjZXJ0aWVzUmVmMi5zb3J0KChhLCBiKSA9PiBiLmRhdGVEYWpvdXQgLSBhLmRhdGVEYWpvdXQpO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhjZXJ0aWVzUmVmMik7XHJcbiAgbGV0IFBhaWVtZW50c0VmZmVjNiA9IGNlcnRpZXNSZWYyLmZpbHRlcihcclxuICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjbDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gXCJub3ZlbWJyZVwiXHJcbiAgKTtcclxuICBsZXQgUGFpZW1lbnRzRWZmZWM1ID0gY2VydGllc1JlZjIuZmlsdGVyKFxyXG4gICAgKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiNcOobWVcIiAmJiB1dGlsaS5tb2lzID09PSBcIm5vdmVtYnJlXCJcclxuICApO1xyXG4gIGxldCBQYWllbWVudHNFZmZlYzQgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI0w6htZVwiICYmIHV0aWxpLm1vaXMgPT09IFwibm92ZW1icmVcIlxyXG4gICk7XHJcbiAgbGV0IFBhaWVtZW50c0VmZmVjMyA9IGNlcnRpZXNSZWYyLmZpbHRlcihcclxuICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjPDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gXCJub3ZlbWJyZVwiXHJcbiAgKTtcclxuXHJcbiAgcGFpZW1lbnQ2LmlubmVySFRNTCA9XHJcbiAgICBNYXRoLnJvdW5kKChQYWllbWVudHNFZmZlYzYubGVuZ3RoIC8gZWZmZWN0aWZDbGFzczYpICogMTAwKSArIFwiJVwiO1xyXG4gIHBhaWVtZW50NS5pbm5lckhUTUwgPVxyXG4gICAgTWF0aC5yb3VuZCgoUGFpZW1lbnRzRWZmZWM1Lmxlbmd0aCAvIGVmZmVjdGlmQ2xhc3M1KSAqIDEwMCkgKyBcIiVcIjtcclxuICBwYWllbWVudDQuaW5uZXJIVE1MID1cclxuICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmVjNC5sZW5ndGggLyBlZmZlY3RpZkNsYXNzNCkgKiAxMDApICsgXCIlXCI7XHJcbiAgcGFpZW1lbnQzLmlubmVySFRNTCA9XHJcbiAgICBNYXRoLnJvdW5kKChQYWllbWVudHNFZmZlYzMubGVuZ3RoIC8gZWZmZWN0aWZDbGFzczMpICogMTAwKSArIFwiJVwiO1xyXG4gIC8vIGNvbnNvbGUubG9nKHBhaWVtZW50My5pbm5lckhUTUwpO1xyXG4gIHN1bSA9XHJcbiAgICBwYXJzZUZsb2F0KHBhaWVtZW50Ni5pbm5lckhUTUwpICtcclxuICAgIHBhcnNlRmxvYXQocGFpZW1lbnQ1LmlubmVySFRNTCkgK1xyXG4gICAgcGFyc2VGbG9hdChwYWllbWVudDQuaW5uZXJIVE1MKSArXHJcbiAgICBwYXJzZUZsb2F0KHBhaWVtZW50My5pbm5lckhUTUwpO1xyXG5cclxuICBzdW0gPSBzdW0gLyA0O1xyXG4gIHN1bSA9IHRvRml4ZWQoc3VtKTtcclxuICAvLyBjb25zb2xlLmxvZyhzdW0pO1xyXG5cclxuICAvKioqKipQQVJUSUUgUFJPR1JFU1MgQkFSKioqKi9cclxuICBsZXQgY2lyY3VsYXJQcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY3VsYXItcHJvZ3Jlc3NcIik7XHJcbiAgbGV0IHByb2dyZXNzVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXZhbHVlXCIpO1xyXG5cclxuICBsZXQgcHJvZ3Jlc3NTdGFydFZhbHVlID0gMDtcclxuICBsZXQgcHJvZ3Jlc3NFbmRWYWx1ZSA9IHN1bTtcclxuICBsZXQgc3BlZWQgPSA3MDtcclxuXHJcbiAgbGV0IHByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgcHJvZ3Jlc3NTdGFydFZhbHVlKys7XHJcblxyXG4gICAgcHJvZ3Jlc3NWYWx1ZS50ZXh0Q29udGVudCA9IGAke3Byb2dyZXNzU3RhcnRWYWx1ZX0lYDtcclxuICAgIGNpcmN1bGFyUHJvZ3Jlc3Muc3R5bGUuYmFja2dyb3VuZCA9IGBjb25pYy1ncmFkaWVudChyZ2IoMzIsIDIxNSwgMzIpICR7XHJcbiAgICAgIHByb2dyZXNzU3RhcnRWYWx1ZSAqIDMuNlxyXG4gICAgfWRlZywgI2VkZWRlZCAwZGVnKWA7XHJcblxyXG4gICAgaWYgKHByb2dyZXNzU3RhcnRWYWx1ZSA9PSBwcm9ncmVzc0VuZFZhbHVlKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG4gIH0sIHNwZWVkKTtcclxufSk7XHJcblxyXG5jb25zdCBidG5BZmZpY2hlclBhaWVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQWZmaWNoZXJQYWllbWVudHNcIik7XHJcbmNvbnN0IHNlbGVjdE1vaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdE1vaXNcIik7XHJcblxyXG4vLyBjb25zdCBkYXRlRHVKb3VyID0gbmV3IERhdGUoKTtcclxuLy8gY29uc3QgbW9pc0FjdHVlbCA9IGRhdGVEdUpvdXIuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhkYXRlRHVKb3VyLCBtb2lzQWN0dWVsKTtcclxuLy8gc2VsZWN0TW9pcy52YWx1ZSA9IG1vaXNBY3R1ZWwudG9TdHJpbmcoKTtcclxuXHJcbnNlbGVjdE1vaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgY29uc3QgbW9pc1NlbGVjdGlvbm5lID0gc2VsZWN0TW9pcy52YWx1ZTtcclxuICBjb25zdCBtb2lzID0gZS50YXJnZXQudmFsdWU7XHJcbiAgLy8gY29uc29sZS5sb2cobW9pcyk7XHJcbiAgb25TbmFwc2hvdChjZXJ0aWVzUmVmMiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICBsZXQgY2VydGllc1JlZjIgPSBbXTtcclxuICAgIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgIGNlcnRpZXNSZWYyLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjZXJ0aWVzUmVmMi5zb3J0KChhLCBiKSA9PiBiLmRhdGVEYWpvdXQgLSBhLmRhdGVEYWpvdXQpO1xyXG5cclxuICAgIGxldCBQYWllbWVudHNFZmZlYzYgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjbDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gbW9pc1xyXG4gICAgKTtcclxuICAgIGxldCBQYWllbWVudHNFZmZlYzUgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjXDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gbW9pc1xyXG4gICAgKTtcclxuICAgIGxldCBQYWllbWVudHNFZmZlYzQgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjTDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gbW9pc1xyXG4gICAgKTtcclxuICAgIGxldCBQYWllbWVudHNFZmZlYzMgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjPDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gbW9pc1xyXG4gICAgKTtcclxuXHJcbiAgICBwYWllbWVudDYuaW5uZXJIVE1MID1cclxuICAgICAgTWF0aC5yb3VuZCgoUGFpZW1lbnRzRWZmZWM2Lmxlbmd0aCAvIGVmZmVjdGlmQ2xhc3M2KSAqIDEwMCkgKyBcIiVcIjtcclxuICAgIHBhaWVtZW50NS5pbm5lckhUTUwgPVxyXG4gICAgICBNYXRoLnJvdW5kKChQYWllbWVudHNFZmZlYzUubGVuZ3RoIC8gZWZmZWN0aWZDbGFzczUpICogMTAwKSArIFwiJVwiO1xyXG4gICAgcGFpZW1lbnQ0LmlubmVySFRNTCA9XHJcbiAgICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmVjNC5sZW5ndGggLyBlZmZlY3RpZkNsYXNzNCkgKiAxMDApICsgXCIlXCI7XHJcbiAgICBwYWllbWVudDMuaW5uZXJIVE1MID1cclxuICAgICAgTWF0aC5yb3VuZCgoUGFpZW1lbnRzRWZmZWMzLmxlbmd0aCAvIGVmZmVjdGlmQ2xhc3MzKSAqIDEwMCkgKyBcIiVcIjtcclxuICB9KTtcclxuICBzdW0gPVxyXG4gICAgcGFyc2VGbG9hdChwYWllbWVudDYuaW5uZXJIVE1MKSArXHJcbiAgICBwYXJzZUZsb2F0KHBhaWVtZW50NS5pbm5lckhUTUwpICtcclxuICAgIHBhcnNlRmxvYXQocGFpZW1lbnQ0LmlubmVySFRNTCkgK1xyXG4gICAgcGFyc2VGbG9hdChwYWllbWVudDMuaW5uZXJIVE1MKTtcclxuXHJcbiAgc3VtID0gc3VtIC8gNDtcclxuICBzdW0gPSB0b0ZpeGVkKHN1bSk7XHJcbiAgLy8gY29uc29sZS5sb2coc3VtKTtcclxuXHJcbiAgIC8qKioqKlBBUlRJRSBQUk9HUkVTUyBCQVIqKioqL1xyXG4gICBsZXQgY2lyY3VsYXJQcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY3VsYXItcHJvZ3Jlc3NcIik7XHJcbiAgIGxldCBwcm9ncmVzc1ZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy12YWx1ZVwiKTtcclxuIFxyXG4gICBsZXQgcHJvZ3Jlc3NTdGFydFZhbHVlID0gMDtcclxuICAgbGV0IHByb2dyZXNzRW5kVmFsdWUgPSBzdW07XHJcbiAgIGxldCBzcGVlZCA9IDcwO1xyXG4gXHJcbiAgIGxldCBwcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICBwcm9ncmVzc1N0YXJ0VmFsdWUrKztcclxuIFxyXG4gICAgIHByb2dyZXNzVmFsdWUudGV4dENvbnRlbnQgPSBgJHtwcm9ncmVzc1N0YXJ0VmFsdWV9JWA7XHJcbiAgICAgY2lyY3VsYXJQcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kID0gYGNvbmljLWdyYWRpZW50KHJnYigzMiwgMjE1LCAzMikgJHtcclxuICAgICAgIHByb2dyZXNzU3RhcnRWYWx1ZSAqIDMuNlxyXG4gICAgIH1kZWcsICNlZGVkZWQgMGRlZylgO1xyXG4gXHJcbiAgICAgaWYgKHByb2dyZXNzU3RhcnRWYWx1ZSA9PSBwcm9ncmVzc0VuZFZhbHVlKSB7XHJcbiAgICAgICBjbGVhckludGVydmFsKHByb2dyZXNzKTtcclxuICAgICB9XHJcbiAgIH0sIHNwZWVkKTtcclxufSk7XHJcblxyXG4vLyBwYXJ0aWUgbGFkamkgSElTVE9SSVFVRVxyXG5sZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5sZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5sZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblxyXG5jb25zdCBteVRib2R5MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlUZDFcIik7XHJcbmNvbnN0IG15VGJvZHkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teVRkMlwiKTtcclxuY29uc3QgdG90YWxJbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsSW5zXCIpO1xyXG5jb25zdCB0b3RhbE1lbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsTWVuc1wiKTtcclxuXHJcbm15VGJvZHkxLmlubmVySFRNTCA9IGA8c3Bhbj4ke2RheX08L3NwYW4+PHNwYW4+LyR7bW9udGh9PHNhcG4+LyR7eWVhcn08L3NwYW4+YDtcclxubXlUYm9keTIuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGF5fTwvc3Bhbj48c3Bhbj4vJHttb250aH08c2Fwbj4vJHt5ZWFyfTwvc3Bhbj5gO1xyXG5cclxuZ2V0RG9jcyhlbGV2ZSkudGhlbigoc25hcHNob3QpID0+IHtcclxuICBsZXQgZWxldmUgPSBbXTtcclxuICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgZWxldmUucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgfSk7XHJcbiAgbGV0IHRvdGFsSW5zY3JpcHRpb24gPSAwO1xyXG4gIGVsZXZlLmZvckVhY2goKHV0aWxpKSA9PiB7XHJcbiAgICB0b3RhbEluc2NyaXB0aW9uICs9IHBhcnNlSW50KHV0aWxpLm1vbnRhbnRJbnNjKTtcclxuICB9KTtcclxuXHJcbiAgdG90YWxJbnMuaW5uZXJIVE1MID0gYDxiPiR7dG90YWxJbnNjcmlwdGlvbn08L2I+YDtcclxufSk7XHJcblxyXG5nZXREb2NzKGNlcnRpZXNSZWYyKS50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBjZXJ0aWVzUmVmMiA9IFtdO1xyXG4gIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBjZXJ0aWVzUmVmMi5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICB9KTtcclxuICBsZXQgdG90YWxNZW5zdWFsaXRlciA9IDA7XHJcbiAgY2VydGllc1JlZjIuZm9yRWFjaCgodXRpbGkpID0+IHtcclxuICAgIHRvdGFsTWVuc3VhbGl0ZXIgKz0gcGFyc2VJbnQodXRpbGkubW9udGFudHBheSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNlcnRpZXNSZWYyKTtcclxuICB0b3RhbE1lbnMuaW5uZXJIVE1MID0gYDxiPiR7dG90YWxNZW5zdWFsaXRlcn08L2I+YDtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/accueil.js\n");

/***/ })

}]);