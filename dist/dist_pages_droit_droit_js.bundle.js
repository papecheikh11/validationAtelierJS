"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["dist_pages_droit_droit_js"],{

/***/ "./dist/pages/droit/droit.js":
/*!***********************************!*\
  !*** ./dist/pages/droit/droit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n    \r\n    const one = document.querySelector(\".one\");\r\n    one.classList.add(\"transition-left\");\r\n\r\n    \r\n    setTimeout(() => {\r\n        one.style.display = \"none\";\r\n        one.classList.remove(\"transition-left\");\r\n    }, 500); \r\n\r\n   \r\n    document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n\r\n// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin\r\n\r\n\r\n\r\n// Configuration de votre application web Firebase\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48\",\r\n  authDomain: \"mixte-feewi.firebaseapp.com\",\r\n  projectId: \"mixte-feewi\",\r\n  storageBucket: \"mixte-feewi.appspot.com\",\r\n  messagingSenderId: \"1083213454329\",\r\n  appId: \"1:1083213454329:web:df3deafe22a82ad34e3b28\"\r\n};\r\n\r\n// Initialiser Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\n\r\n// Référence Firestore\r\nconst contenuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'droit', 'sZDG74DM390mi6mkW5Zg');\r\n\r\nfunction enregistrerModifications() {\r\n  // Récupérer le contenu de la div\r\n  const contenuDiv = document.getElementById('editor-container').textContent;\r\n\r\n\r\n  // Enregistrer le contenu dans Firestore\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(contenuRef, {\r\n    contenu: contenuDiv,\r\n    timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\r\n  })\r\n  .then(() => {\r\n    console.log('Contenu enregistré avec succès dans Firestore!');\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Erreur lors de l'enregistrement du contenu:\", error);\r\n  });\r\n}\r\n\r\ndocument.getElementById(\"modif\").addEventListener(\"click\", enregistrerModifications);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kaXN0L3BhZ2VzL2Ryb2l0L2Ryb2l0LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9kaXN0L3BhZ2VzL2Ryb2l0L2Ryb2l0LmpzPzRiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3V0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lXCIpO1xyXG4gICAgb25lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLWxlZnRcIik7XHJcblxyXG4gICAgXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvbmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvbi1sZWZ0XCIpO1xyXG4gICAgfSwgNTAwKTsgXHJcblxyXG4gICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyMlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuXHJcblxyXG4vLyBJbXBvcnRlciBsZXMgZm9uY3Rpb25zIGRvbnQgdm91cyBhdmV6IGJlc29pbiDDoCBwYXJ0aXIgZGVzIFNES3MgZG9udCB2b3VzIGF2ZXogYmVzb2luXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgc2V0RG9jLCBzZXJ2ZXJUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBkZSB2b3RyZSBhcHBsaWNhdGlvbiB3ZWIgRmlyZWJhc2VcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUJRM1NyZkVpbUVQdHpDRnl4UjB2V0JLOEJKX0s0TWE0OFwiLFxyXG4gIGF1dGhEb21haW46IFwibWl4dGUtZmVld2kuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIm1peHRlLWZlZXdpXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJtaXh0ZS1mZWV3aS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwODMyMTM0NTQzMjlcIixcclxuICBhcHBJZDogXCIxOjEwODMyMTM0NTQzMjk6d2ViOmRmM2RlYWZlMjJhODJhZDM0ZTNiMjhcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGlzZXIgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5cclxuLy8gUsOpZsOpcmVuY2UgRmlyZXN0b3JlXHJcbmNvbnN0IGNvbnRlbnVSZWYgPSBkb2MoZGIsICdkcm9pdCcsICdzWkRHNzRETTM5MG1pNm1rVzVaZycpO1xyXG5cclxuZnVuY3Rpb24gZW5yZWdpc3RyZXJNb2RpZmljYXRpb25zKCkge1xyXG4gIC8vIFLDqWN1cMOpcmVyIGxlIGNvbnRlbnUgZGUgbGEgZGl2XHJcbiAgY29uc3QgY29udGVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGFpbmVyJykudGV4dENvbnRlbnQ7XHJcblxyXG5cclxuICAvLyBFbnJlZ2lzdHJlciBsZSBjb250ZW51IGRhbnMgRmlyZXN0b3JlXHJcbiAgc2V0RG9jKGNvbnRlbnVSZWYsIHtcclxuICAgIGNvbnRlbnU6IGNvbnRlbnVEaXYsXHJcbiAgICB0aW1lc3RhbXA6IHNlcnZlclRpbWVzdGFtcCgpLFxyXG4gIH0pXHJcbiAgLnRoZW4oKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0NvbnRlbnUgZW5yZWdpc3Ryw6kgYXZlYyBzdWNjw6hzIGRhbnMgRmlyZXN0b3JlIScpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnZW5yZWdpc3RyZW1lbnQgZHUgY29udGVudTpcIiwgZXJyb3IpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGlmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbnJlZ2lzdHJlck1vZGlmaWNhdGlvbnMpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dist/pages/droit/droit.js\n");

/***/ })

}]);