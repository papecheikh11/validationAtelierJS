"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_inscription_js"],{

/***/ "./src/pagesJS/inscription.js":
/*!************************************!*\
  !*** ./src/pagesJS/inscription.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"../../node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"../../node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\n  projectId: \"validation-atelier-js\",\n  storageBucket: \"validation-atelier-js.appspot.com\",\n  messagingSenderId: \"466332062090\",\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\n};\n\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); \n\n\n\nconst handleRegistration = async (event) => {\n  event.preventDefault();\n  \n  const emailInput = document.getElementById(\"email\");\n  const passwordInput = document.getElementById(\"password\");\n  const nomInput = document.getElementById(\"nom\");\n  const prenomInput = document.getElementById(\"prenom\");\n  const statusInput = document.getElementById(\"status\");\n  const adresseInput = document.getElementById(\"adresse\");\n  const telInput = document.getElementById(\"tel\");\n  const adresseecoleInput = document.getElementById(\"adresseecole\");\n  const emailecoleInput = document.getElementById(\"emailecole\");\n  const secteurInput = document.getElementById(\"secteur\");\n  const nomecoleInput = document.getElementById(\"nomecole\");\n  \n    const email = emailInput.value;\n    const password = passwordInput.value;\n    const nom = nomInput.value;\n    const prenom = prenomInput.value;\n    const status = statusInput.value;\n    const adresse = adresseInput.value;\n    const tel = telInput.value;\n    const adresseecole = adresseecoleInput.value;\n    const emailecole = emailecoleInput.value;\n    const secteur = secteurInput.value;\n    const nomecole = nomInput.value;\n    const srcProfil = \"../../../src/assets/images/profil.jpeg\";\n    \n    try {\n      const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(\n        auth,\n        email,\n        password\n        );\n        const user = userCredential.user;\n        \n        const userData = {\n          nom: nom,\n          prenom: prenom,\n          status: status,\n          adresse: adresse,\n          tel: tel,\n          adresseecole: adresseecole,\n          emailecole: emailecole,\n          secteur: secteur,\n          nomecole: nomecole,\n          email: email,\n          password: password,\n          url: srcProfil,\n      };\n      \n      const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"utilisateurs\");\n      console.log(userRef);\n      await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(userRef, userData);\n      \n      alert(\"Utilisateur enregistré avec succès\");\n      \n      // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire\n    } catch (error) {\n      const errorCode = error.code;\n      const errorMessage = error.message;\n      console.error(\"Erreur lors de l'inscription :\", errorCode, errorMessage);\n    }\n    emailInput.value = \"\"\n    passwordInput.value = \"\"\n    nomInput.value = \"\"\n    prenomInput.value = \"\"\n    statusInput.value = \"\"\n    adresseInput.value = \"\"\n    telInput.value = \"\"\n    adresseecoleInput.value = \"\"\n    emailecoleInput.value = \"\"\n    secteurInput.value = \"\"\n    nomecoleInput.value = \"\"\n\n  };\n\nconsole.log('page inscription')\nconst registrationForm = document.getElementById(\"registration-form\");\nregistrationForm.addEventListener(\"submit\", handleRegistration);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9pbnNjcmlwdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFNQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxpZGF0aW9uYXRlbGllcmpzLy4vc3JjL3BhZ2VzSlMvaW5zY3JpcHRpb24uanM/MzFlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHtcbiAgZ2V0RmlyZXN0b3JlLFxuICBjb2xsZWN0aW9uLFxuICBhZGREb2MsXG4gIGRvYyxcbiAgZ2V0RG9jLFxuICBvblNuYXBzaG90LFxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXG4gIGF1dGhEb21haW46IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3ZhbGlkYXRpb24tYXRlbGllci1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxuICBzdG9yYWdlQnVja2V0OiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjYzMzIwNjIwOTBcIixcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIixcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7IFxuXG5cblxuY29uc3QgaGFuZGxlUmVnaXN0cmF0aW9uID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XG4gIGNvbnN0IG5vbUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21cIik7XG4gIGNvbnN0IHByZW5vbUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVub21cIik7XG4gIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XG4gIGNvbnN0IGFkcmVzc2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRyZXNzZVwiKTtcbiAgY29uc3QgdGVsSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbFwiKTtcbiAgY29uc3QgYWRyZXNzZWVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkcmVzc2VlY29sZVwiKTtcbiAgY29uc3QgZW1haWxlY29sZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbGVjb2xlXCIpO1xuICBjb25zdCBzZWN0ZXVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3RldXJcIik7XG4gIGNvbnN0IG5vbWVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWVjb2xlXCIpO1xuICBcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xuICAgIGNvbnN0IG5vbSA9IG5vbUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHByZW5vbSA9IHByZW5vbUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHN0YXR1cyA9IHN0YXR1c0lucHV0LnZhbHVlO1xuICAgIGNvbnN0IGFkcmVzc2UgPSBhZHJlc3NlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgdGVsID0gdGVsSW5wdXQudmFsdWU7XG4gICAgY29uc3QgYWRyZXNzZWVjb2xlID0gYWRyZXNzZWVjb2xlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZW1haWxlY29sZSA9IGVtYWlsZWNvbGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBzZWN0ZXVyID0gc2VjdGV1cklucHV0LnZhbHVlO1xuICAgIGNvbnN0IG5vbWVjb2xlID0gbm9tSW5wdXQudmFsdWU7XG4gICAgY29uc3Qgc3JjUHJvZmlsID0gXCIuLi8uLi8uLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9maWwuanBlZ1wiO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcbiAgICAgICAgYXV0aCxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICAgICAgbm9tOiBub20sXG4gICAgICAgICAgcHJlbm9tOiBwcmVub20sXG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgYWRyZXNzZTogYWRyZXNzZSxcbiAgICAgICAgICB0ZWw6IHRlbCxcbiAgICAgICAgICBhZHJlc3NlZWNvbGU6IGFkcmVzc2VlY29sZSxcbiAgICAgICAgICBlbWFpbGVjb2xlOiBlbWFpbGVjb2xlLFxuICAgICAgICAgIHNlY3RldXI6IHNlY3RldXIsXG4gICAgICAgICAgbm9tZWNvbGU6IG5vbWVjb2xlLFxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgdXJsOiBzcmNQcm9maWwsXG4gICAgICB9O1xuICAgICAgXG4gICAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1dGlsaXNhdGV1cnNcIik7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyUmVmKTtcbiAgICAgIGF3YWl0IGFkZERvYyh1c2VyUmVmLCB1c2VyRGF0YSk7XG4gICAgICBcbiAgICAgIGFsZXJ0KFwiVXRpbGlzYXRldXIgZW5yZWdpc3Ryw6kgYXZlYyBzdWNjw6hzXCIpO1xuICAgICAgXG4gICAgICAvLyBWb3VzIHBvdXZleiByZWRpcmlnZXIgbCd1dGlsaXNhdGV1ciB2ZXJzIHVuZSBhdXRyZSBwYWdlIGljaSBzaSBuw6ljZXNzYWlyZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2luc2NyaXB0aW9uIDpcIiwgZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgICBlbWFpbElucHV0LnZhbHVlID0gXCJcIlxuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgbm9tSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgcHJlbm9tSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgc3RhdHVzSW5wdXQudmFsdWUgPSBcIlwiXG4gICAgYWRyZXNzZUlucHV0LnZhbHVlID0gXCJcIlxuICAgIHRlbElucHV0LnZhbHVlID0gXCJcIlxuICAgIGFkcmVzc2VlY29sZUlucHV0LnZhbHVlID0gXCJcIlxuICAgIGVtYWlsZWNvbGVJbnB1dC52YWx1ZSA9IFwiXCJcbiAgICBzZWN0ZXVySW5wdXQudmFsdWUgPSBcIlwiXG4gICAgbm9tZWNvbGVJbnB1dC52YWx1ZSA9IFwiXCJcblxuICB9O1xuXG5jb25zb2xlLmxvZygncGFnZSBpbnNjcmlwdGlvbicpXG5jb25zdCByZWdpc3RyYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3RyYXRpb24tZm9ybVwiKTtcbnJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVSZWdpc3RyYXRpb24pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/inscription.js\n");

/***/ })

}]);