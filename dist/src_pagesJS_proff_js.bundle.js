"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_proff_js"],{

/***/ "./src/pagesJS/professeurs.js":
/*!************************************!*\
  !*** ./src/pagesJS/professeurs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ajouterProfesseur: () => (/* binding */ ajouterProfesseur),\n/* harmony export */   gestionProfesseurs: () => (/* binding */ gestionProfesseurs),\n/* harmony export */   getProfesseurs: () => (/* binding */ getProfesseurs),\n/* harmony export */   modifierProfesseur: () => (/* binding */ modifierProfesseur),\n/* harmony export */   proff: () => (/* binding */ proff),\n/* harmony export */   rechercheProff: () => (/* binding */ rechercheProff),\n/* harmony export */   supprimerProfesseur: () => (/* binding */ supprimerProfesseur)\n/* harmony export */ });\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\r\n\r\nlet proff;\r\n\r\nfunction getProfesseurs(personnel) {\r\n  const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();\r\n  const collectionProff = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, \"professeurs\");\r\n\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot)(collectionProff, (snapshot) => {\r\n    let professeurs = [];\r\n    snapshot.docs.forEach((doc) => {\r\n      professeurs.push({ ...doc.data(), id: doc.id });\r\n    });\r\n    professeurs.sort((a, b) => b.dateDajout - a.dateDajout);\r\n    proff = professeurs;\r\n    personnel(professeurs);\r\n    gestionProfesseurs(professeurs);\r\n  });\r\n}\r\n\r\nfunction gestionProfesseurs(utilisateurs) {\r\n  const container = document.getElementById(\"container\");\r\n  container.innerHTML = \"\";\r\n\r\n  utilisateurs.forEach((utilisateur) => {\r\n    let ligne = document.createElement(\"tr\");\r\n    ligne.innerHTML = `\r\n                <td class=\"mx-auto text-center d-none d-lg-block m-0\">${utilisateur.nom}</td>\r\n                <td class=\"mx-auto text-center m-0\">${utilisateur.prenom}</td>\r\n                <td class=\"mx-auto text-center m-0 d-none d-lg-block\">${utilisateur.matiere}</td>\r\n                <td class=\"mx-auto text-center m-0\">${utilisateur.coordonnee}</td>\r\n                <td class=\"mx-auto text-center m-0 d-none d-lg-block\">${utilisateur.classe}</td>\r\n                <td class=\"mx-auto text-center m-0 py-auto \">\r\n                    <button class=\"btn bouton me-1 my-1 supprimer text-white rounded-circle\" data-id=${utilisateur.id}>\r\n                        <i class=\"fa-solid fa-trash-can supprimer\" data-id=${utilisateur.id}></i>\r\n                    </button>\r\n                    <button data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" \r\n                        class=\"btn bouton modifier me-1 my-1 rounded-circle text-white\" data-id=${utilisateur.id}>\r\n                        <i class=\"fa-solid fa-pencil modifier\" data-id=${utilisateur.id}></i>\r\n                    </button>\r\n                </td>\r\n            `;\r\n\r\n    container.appendChild(ligne);\r\n    let loaderContainer = document.querySelector(\".loader6\");\r\n    loaderContainer.style.display = \"none\";\r\n  });\r\n}\r\n\r\nfunction ajouterProfesseur(form) {\r\n  const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();\r\n  const professeurs = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, \"professeurs\");\r\n  const erreurProf = document.getElementById(\"erreurProf\");\r\n  if (\r\n    form.nom.value &&\r\n    form.prenom.value &&\r\n    form.matiere.value &&\r\n    form.classe.value &&\r\n    form.coordonnee.value \r\n  ) {\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(professeurs, {\r\n      nom: form.nom.value,\r\n      prenom: form.prenom.value,\r\n      matiere: form.matiere.value,\r\n      classe: form.classe.value,\r\n      coordonnee: form.coordonnee.value,\r\n      dateDajout: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp)(),\r\n    }).then(() => {\r\n      form.reset();\r\n      erreurProf.style.display = \"none\";\r\n    });\r\n  } else {\r\n    erreurProf.style.display = \"block\";\r\n    erreurProf.innerHTML = \"Merci de remplir les champs \";\r\n    alert(\"Merci de remplir le champs\");\r\n    console.log(\"Merci de remplir le champs\");\r\n  }\r\n}\r\n\r\nfunction rechercheProff(rechercheInput, emplo) {\r\n  rechercheInput.addEventListener(\"input\", (e) => {\r\n    const elementSaisie = e.target.value;\r\n    document.getElementById(\"container\").innerHTML = \"\";\r\n    const collectionFilter = emplo.filter(\r\n      (element) =>\r\n        element.nom.toLowerCase().includes(elementSaisie.toLowerCase()) ||\r\n        element.prenom.toLowerCase().includes(elementSaisie.toLowerCase())\r\n    );\r\n\r\n    if (collectionFilter.length) {\r\n      document.getElementById(\"erreurRefProff\").innerHTML = \"\";\r\n      gestionProfesseurs(collectionFilter);\r\n    } else {\r\n      document.getElementById(\"erreurRefProff\").innerHTML =\r\n        \"Aucun resultat trouver\";\r\n    }\r\n  });\r\n}\r\n\r\nfunction modifierProfesseur(id, nouveauProfesseur) {\r\n  const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();\r\n  const professeurs = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, \"professeurs\");\r\n  const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(professeurs, id);\r\n  const form = document.querySelector(\".addToFirebase\");\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(docRef, nouveauProfesseur).then(() => {\r\n    form.reset();\r\n    console.log(\"Document modifié avec succès !\");\r\n  });\r\n}\r\n\r\nfunction supprimerProfesseur(id) {\r\n  const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)();\r\n  const professeurs = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(db, \"professeurs\");\r\n  const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(professeurs, id);\r\n\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc)(docRef).then(() => {\r\n    console.log(\"Document supprimé avec succès !\");\r\n  });\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9wcm9mZXNzZXVycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL3Byb2Zlc3NldXJzLmpzP2I5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjb2xsZWN0aW9uLFxyXG4gIGRvYyxcclxuICBvblNuYXBzaG90LFxyXG4gIGdldEZpcmVzdG9yZSxcclxuICBhZGREb2MsXHJcbiAgdXBkYXRlRG9jLFxyXG4gIGRlbGV0ZURvYyxcclxuICBzZXJ2ZXJUaW1lc3RhbXAsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxubGV0IHByb2ZmO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Zlc3NldXJzKHBlcnNvbm5lbCkge1xyXG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvblByb2ZmID0gY29sbGVjdGlvbihkYiwgXCJwcm9mZXNzZXVyc1wiKTtcclxuXHJcbiAgb25TbmFwc2hvdChjb2xsZWN0aW9uUHJvZmYsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgbGV0IHByb2Zlc3NldXJzID0gW107XHJcbiAgICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICBwcm9mZXNzZXVycy5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICAgIH0pO1xyXG4gICAgcHJvZmVzc2V1cnMuc29ydCgoYSwgYikgPT4gYi5kYXRlRGFqb3V0IC0gYS5kYXRlRGFqb3V0KTtcclxuICAgIHByb2ZmID0gcHJvZmVzc2V1cnM7XHJcbiAgICBwZXJzb25uZWwocHJvZmVzc2V1cnMpO1xyXG4gICAgZ2VzdGlvblByb2Zlc3NldXJzKHByb2Zlc3NldXJzKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlc3Rpb25Qcm9mZXNzZXVycyh1dGlsaXNhdGV1cnMpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgdXRpbGlzYXRldXJzLmZvckVhY2goKHV0aWxpc2F0ZXVyKSA9PiB7XHJcbiAgICBsZXQgbGlnbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBsaWduZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJteC1hdXRvIHRleHQtY2VudGVyIGQtbm9uZSBkLWxnLWJsb2NrIG0tMFwiPiR7dXRpbGlzYXRldXIubm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJteC1hdXRvIHRleHQtY2VudGVyIG0tMFwiPiR7dXRpbGlzYXRldXIucHJlbm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJteC1hdXRvIHRleHQtY2VudGVyIG0tMCBkLW5vbmUgZC1sZy1ibG9ja1wiPiR7dXRpbGlzYXRldXIubWF0aWVyZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibXgtYXV0byB0ZXh0LWNlbnRlciBtLTBcIj4ke3V0aWxpc2F0ZXVyLmNvb3Jkb25uZWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm14LWF1dG8gdGV4dC1jZW50ZXIgbS0wIGQtbm9uZSBkLWxnLWJsb2NrXCI+JHt1dGlsaXNhdGV1ci5jbGFzc2V9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm14LWF1dG8gdGV4dC1jZW50ZXIgbS0wIHB5LWF1dG8gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBib3V0b24gbWUtMSBteS0xIHN1cHByaW1lciB0ZXh0LXdoaXRlIHJvdW5kZWQtY2lyY2xlXCIgZGF0YS1pZD0ke3V0aWxpc2F0ZXVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gc3VwcHJpbWVyXCIgZGF0YS1pZD0ke3V0aWxpc2F0ZXVyLmlkfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJvdXRvbiBtb2RpZmllciBtZS0xIG15LTEgcm91bmRlZC1jaXJjbGUgdGV4dC13aGl0ZVwiIGRhdGEtaWQ9JHt1dGlsaXNhdGV1ci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuY2lsIG1vZGlmaWVyXCIgZGF0YS1pZD0ke3V0aWxpc2F0ZXVyLmlkfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaWduZSk7XHJcbiAgICBsZXQgbG9hZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXI2XCIpO1xyXG4gICAgbG9hZGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFqb3V0ZXJQcm9mZXNzZXVyKGZvcm0pIHtcclxuICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG4gIGNvbnN0IHByb2Zlc3NldXJzID0gY29sbGVjdGlvbihkYiwgXCJwcm9mZXNzZXVyc1wiKTtcclxuICBjb25zdCBlcnJldXJQcm9mID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJldXJQcm9mXCIpO1xyXG4gIGlmIChcclxuICAgIGZvcm0ubm9tLnZhbHVlICYmXHJcbiAgICBmb3JtLnByZW5vbS52YWx1ZSAmJlxyXG4gICAgZm9ybS5tYXRpZXJlLnZhbHVlICYmXHJcbiAgICBmb3JtLmNsYXNzZS52YWx1ZSAmJlxyXG4gICAgZm9ybS5jb29yZG9ubmVlLnZhbHVlIFxyXG4gICkge1xyXG4gICAgYWRkRG9jKHByb2Zlc3NldXJzLCB7XHJcbiAgICAgIG5vbTogZm9ybS5ub20udmFsdWUsXHJcbiAgICAgIHByZW5vbTogZm9ybS5wcmVub20udmFsdWUsXHJcbiAgICAgIG1hdGllcmU6IGZvcm0ubWF0aWVyZS52YWx1ZSxcclxuICAgICAgY2xhc3NlOiBmb3JtLmNsYXNzZS52YWx1ZSxcclxuICAgICAgY29vcmRvbm5lZTogZm9ybS5jb29yZG9ubmVlLnZhbHVlLFxyXG4gICAgICBkYXRlRGFqb3V0OiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIGVycmV1clByb2Yuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycmV1clByb2Yuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGVycmV1clByb2YuaW5uZXJIVE1MID0gXCJNZXJjaSBkZSByZW1wbGlyIGxlcyBjaGFtcHMgXCI7XHJcbiAgICBhbGVydChcIk1lcmNpIGRlIHJlbXBsaXIgbGUgY2hhbXBzXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJNZXJjaSBkZSByZW1wbGlyIGxlIGNoYW1wc1wiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWNoZXJjaGVQcm9mZihyZWNoZXJjaGVJbnB1dCwgZW1wbG8pIHtcclxuICByZWNoZXJjaGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnRTYWlzaWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uRmlsdGVyID0gZW1wbG8uZmlsdGVyKFxyXG4gICAgICAoZWxlbWVudCkgPT5cclxuICAgICAgICBlbGVtZW50Lm5vbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGVsZW1lbnRTYWlzaWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICBlbGVtZW50LnByZW5vbS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGVsZW1lbnRTYWlzaWUudG9Mb3dlckNhc2UoKSlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGNvbGxlY3Rpb25GaWx0ZXIubGVuZ3RoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyZXVyUmVmUHJvZmZcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgZ2VzdGlvblByb2Zlc3NldXJzKGNvbGxlY3Rpb25GaWx0ZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJldXJSZWZQcm9mZlwiKS5pbm5lckhUTUwgPVxyXG4gICAgICAgIFwiQXVjdW4gcmVzdWx0YXQgdHJvdXZlclwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZXJQcm9mZXNzZXVyKGlkLCBub3V2ZWF1UHJvZmVzc2V1cikge1xyXG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XHJcbiAgY29uc3QgcHJvZmVzc2V1cnMgPSBjb2xsZWN0aW9uKGRiLCBcInByb2Zlc3NldXJzXCIpO1xyXG4gIGNvbnN0IGRvY1JlZiA9IGRvYyhwcm9mZXNzZXVycywgaWQpO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvRmlyZWJhc2VcIik7XHJcbiAgdXBkYXRlRG9jKGRvY1JlZiwgbm91dmVhdVByb2Zlc3NldXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgZm9ybS5yZXNldCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBtb2RpZmnDqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHByaW1lclByb2Zlc3NldXIoaWQpIHtcclxuICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG4gIGNvbnN0IHByb2Zlc3NldXJzID0gY29sbGVjdGlvbihkYiwgXCJwcm9mZXNzZXVyc1wiKTtcclxuICBjb25zdCBkb2NSZWYgPSBkb2MocHJvZmVzc2V1cnMsIGlkKTtcclxuXHJcbiAgZGVsZXRlRG9jKGRvY1JlZikudGhlbigoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHN1cHByaW3DqSBhdmVjIHN1Y2PDqHMgIVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcHJvZmYgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pagesJS/professeurs.js\n");

/***/ }),

/***/ "./src/pagesJS/proff.js":
/*!******************************!*\
  !*** ./src/pagesJS/proff.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var _professeurs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professeurs.js */ \"./src/pagesJS/professeurs.js\");\nconsole.log(\"proff\");\r\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\nlet id;\r\n\r\n(0,_professeurs_js__WEBPACK_IMPORTED_MODULE_1__.getProfesseurs)(function (professeurs) {\r\n  console.log(professeurs);\r\n  const rechercheInput = document.getElementById(\"formProff\");\r\n  console.log(rechercheInput);\r\n  (0,_professeurs_js__WEBPACK_IMPORTED_MODULE_1__.rechercheProff)(rechercheInput, professeurs);\r\n});\r\n\r\nconst form = document.querySelector(\".addToFirebase\");\r\nconst btnAjouter = document.getElementById(\"ajouter\");\r\n// // console.log(btnAjouter);\r\nconst btnModifier = document.getElementById(\"modifier\");\r\nconst nom = document.getElementById(\"nom\");\r\nconst prenom = document.getElementById(\"prenom\");\r\nconst matiere = document.getElementById(\"matiere\");\r\nconst coordonnee = document.getElementById(\"coordonnee\");\r\nconst classe = document.getElementById(\"classe\");\r\nconst container = document.getElementById(\"container\");\r\n\r\n\r\n\r\nbtnAjouter.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  (0,_professeurs_js__WEBPACK_IMPORTED_MODULE_1__.ajouterProfesseur)(form);\r\n});\r\n\r\nbtnModifier.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n\r\n  btnModifier.style.display = \"none\";\r\n  btnAjouter.style.display = \"block\";\r\n\r\n  const nouveauProfesseur = {\r\n    nom: nom.value,\r\n    prenom: prenom.value,\r\n    matiere: matiere.value,\r\n    coordonnee: coordonnee.value,\r\n    classe: classe.value,\r\n  };\r\n\r\n  console.log(nouveauProfesseur);\r\n  (0,_professeurs_js__WEBPACK_IMPORTED_MODULE_1__.modifierProfesseur)(id, nouveauProfesseur);\r\n\r\n  container.innerHTML = \"\";\r\n  console.log(container);\r\n  //   gestionProfesseurs();\r\n});\r\n\r\n// supprimer et modifier un professeur\r\ndocument.addEventListener(\"click\", function (e) {\r\n//   e.preventDefault();\r\n  if (e.target.classList.contains(\"modifier\")) {\r\n    id = e.target.getAttribute(\"data-id\");\r\n    const professeurModifier = _professeurs_js__WEBPACK_IMPORTED_MODULE_1__.proff.find((u) => u.id === id);\r\n    console.log(professeurModifier);\r\n\r\n    nom.value = professeurModifier.nom;\r\n    prenom.value = professeurModifier.prenom;\r\n    matiere.value = professeurModifier.matiere;\r\n    coordonnee.value = professeurModifier.coordonnee;\r\n    classe.value = professeurModifier.classe;\r\n\r\n    btnModifier.style.display = \"block\";\r\n    btnAjouter.style.display = \"none\";\r\n  } else if (e.target.classList.contains(\"supprimer\")) {\r\n    const id = e.target.getAttribute(\"data-id\");\r\n    (0,_professeurs_js__WEBPACK_IMPORTED_MODULE_1__.supprimerProfesseur)(id);\r\n  }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9wcm9mZi5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL3Byb2ZmLmpzPzNmN2IiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJwcm9mZlwiKTtcclxuXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFByb2Zlc3NldXJzLFxyXG4gIGFqb3V0ZXJQcm9mZXNzZXVyLFxyXG4gIHByb2ZmLFxyXG4gIG1vZGlmaWVyUHJvZmVzc2V1cixcclxuICBzdXBwcmltZXJQcm9mZXNzZXVyLFxyXG4gIHJlY2hlcmNoZVByb2ZmLFxyXG59IGZyb20gXCIuL3Byb2Zlc3NldXJzLmpzXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly92YWxpZGF0aW9uLWF0ZWxpZXItanMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDY2MzMyMDYyMDkwXCIsXHJcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIixcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5sZXQgaWQ7XHJcblxyXG5nZXRQcm9mZXNzZXVycyhmdW5jdGlvbiAocHJvZmVzc2V1cnMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9mZXNzZXVycyk7XHJcbiAgY29uc3QgcmVjaGVyY2hlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1Qcm9mZlwiKTtcclxuICBjb25zb2xlLmxvZyhyZWNoZXJjaGVJbnB1dCk7XHJcbiAgcmVjaGVyY2hlUHJvZmYocmVjaGVyY2hlSW5wdXQsIHByb2Zlc3NldXJzKTtcclxufSk7XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb0ZpcmViYXNlXCIpO1xyXG5jb25zdCBidG5Bam91dGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJham91dGVyXCIpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhidG5Bam91dGVyKTtcclxuY29uc3QgYnRuTW9kaWZpZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGlmaWVyXCIpO1xyXG5jb25zdCBub20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbVwiKTtcclxuY29uc3QgcHJlbm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVub21cIik7XHJcbmNvbnN0IG1hdGllcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGllcmVcIik7XHJcbmNvbnN0IGNvb3Jkb25uZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb3Jkb25uZWVcIik7XHJcbmNvbnN0IGNsYXNzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xhc3NlXCIpO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcclxuXHJcblxyXG5cclxuYnRuQWpvdXRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYWpvdXRlclByb2Zlc3NldXIoZm9ybSk7XHJcbn0pO1xyXG5cclxuYnRuTW9kaWZpZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBidG5Nb2RpZmllci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgYnRuQWpvdXRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICBjb25zdCBub3V2ZWF1UHJvZmVzc2V1ciA9IHtcclxuICAgIG5vbTogbm9tLnZhbHVlLFxyXG4gICAgcHJlbm9tOiBwcmVub20udmFsdWUsXHJcbiAgICBtYXRpZXJlOiBtYXRpZXJlLnZhbHVlLFxyXG4gICAgY29vcmRvbm5lZTogY29vcmRvbm5lZS52YWx1ZSxcclxuICAgIGNsYXNzZTogY2xhc3NlLnZhbHVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKG5vdXZlYXVQcm9mZXNzZXVyKTtcclxuICBtb2RpZmllclByb2Zlc3NldXIoaWQsIG5vdXZlYXVQcm9mZXNzZXVyKTtcclxuXHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICAvLyAgIGdlc3Rpb25Qcm9mZXNzZXVycygpO1xyXG59KTtcclxuXHJcbi8vIHN1cHByaW1lciBldCBtb2RpZmllciB1biBwcm9mZXNzZXVyXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kaWZpZXJcIikpIHtcclxuICAgIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuICAgIGNvbnN0IHByb2Zlc3NldXJNb2RpZmllciA9IHByb2ZmLmZpbmQoKHUpID0+IHUuaWQgPT09IGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2Zlc3NldXJNb2RpZmllcik7XHJcblxyXG4gICAgbm9tLnZhbHVlID0gcHJvZmVzc2V1ck1vZGlmaWVyLm5vbTtcclxuICAgIHByZW5vbS52YWx1ZSA9IHByb2Zlc3NldXJNb2RpZmllci5wcmVub207XHJcbiAgICBtYXRpZXJlLnZhbHVlID0gcHJvZmVzc2V1ck1vZGlmaWVyLm1hdGllcmU7XHJcbiAgICBjb29yZG9ubmVlLnZhbHVlID0gcHJvZmVzc2V1ck1vZGlmaWVyLmNvb3Jkb25uZWU7XHJcbiAgICBjbGFzc2UudmFsdWUgPSBwcm9mZXNzZXVyTW9kaWZpZXIuY2xhc3NlO1xyXG5cclxuICAgIGJ0bk1vZGlmaWVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBidG5Bam91dGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1cHByaW1lclwiKSkge1xyXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xyXG4gICAgc3VwcHJpbWVyUHJvZmVzc2V1cihpZCk7XHJcbiAgfVxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pagesJS/proff.js\n");

/***/ })

}]);