"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_droit_js"],{

/***/ "./src/pagesJS/droit.js":
/*!******************************!*\
  !*** ./src/pagesJS/droit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ \"./node_modules/quill/dist/quill.js\");\n/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ \"./node_modules/quill/dist/quill.snow.css\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n  const one = document.querySelector(\".one\");\r\n  one.classList.add(\"transition-left\");\r\n\r\n  setTimeout(() => {\r\n      one.style.display = \"none\";\r\n      one.classList.remove(\"transition-left\");\r\n  }, 500);\r\n\r\n  document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n// Import the necessary functions from the required SDKs\r\nconst { initializeApp } = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\r\nconst {\r\n  getFirestore,\r\n  doc,\r\n  setDoc,\r\n  getDoc,\r\n  onSnapshot,\r\n  serverTimestamp,\r\n} = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.cjs.js\");\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\"\r\n};\r\n\r\nconst app = initializeApp(firebaseConfig);\r\nconst db = getFirestore(app);\r\nconst contenuRef = doc(db, 'droit', 'JJ2zFC28qWbzd27KY5rY');\r\n\r\n\r\n// Créez une promesse pour récupérer le document Firestore\r\nfunction loadContentFromFirestore() { \r\n  return new Promise((resolve, reject) => {\r\n   getDoc(contenuRef)\r\n    .then((docSnapshot) => {\r\n      if (docSnapshot.exists()) {\r\n        // Parsez les données dans un format utilisable par Quill\r\n        const data = docSnapshot.data().contenu;\r\n\r\n        // Chargez les données dans l'éditeur Quill\r\n        try {\r\n          const parsedData = JSON.parse(data);\r\n          quill.setContents(parsedData.ops);\r\n          resolve();\r\n        } catch (error) {\r\n          console.error(\"Erreur lors de l'analyse du contenu JSON:\", error);\r\n          reject();\r\n        }\r\n      } else {\r\n        console.log(\"Aucun document trouvé!\");\r\n        reject();\r\n      }\r\n    })\r\n    .catch((error) => {\r\n      console.log(\"Erreur lors de la récupération du document:\", error);\r\n      reject();\r\n    });\r\n})\r\n};\r\n\r\n// Attendez que la promesse soit résolue avant d'exécuter le reste du code\r\nloadContentFromFirestore()\r\n  .then(() => {\r\n\r\n    // Mettez en place l'événement text-change pour détecter les modifications dans l'éditeur Quill\r\n    var change = new (quill__WEBPACK_IMPORTED_MODULE_0___default()[\"import\"])('delta');\r\n    quill.on('text-change', function (delta, oldDelta, source) {\r\n  if (source === 'user') {\r\n    change = change.compose(delta);\r\n\r\n    sauvegarderContenuDansFirestore();\r\n  }\r\nvar data = quill.getContents();\r\nvar deltaString = JSON.stringify(data);\r\nlocalStorage.setItem('editor-content', deltaString);\r\n\r\n\r\n});\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  loadContentFromFirestore();\r\n});\r\n\r\ndocument.getElementById(\"modif\").addEventListener(\"click\", () => {\r\n  sauvegarderContenuDansFirestore();\r\n});\r\n\r\n})\r\n  .catch(() => {\r\n    // Ce bloc sera exécuté en cas d'échec du chargement du contenu depuis Firestore\r\n    console.log(\"Le chargement du contenu depuis Firestore a échoué.\");\r\n});\r\n\r\n\r\nfunction sauvegarderContenuDansFirestore() {\r\n\r\n  const contenu = quill.getContents();\r\n\r\n    // Convertir le contenu en JSON\r\n    const contenuJSON = JSON.stringify(contenu);\r\n\r\n  // Save the content to Firestore\r\n  setDoc(contenuRef, {\r\n    contenu: contenuJSON,\r\n    timestamp: serverTimestamp(),\r\n  })\r\n    .then(() => {\r\n      console.log('Content saved successfully in Firestore!');\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"Error saving content:\", error);\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9kcm9pdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL2Ryb2l0LmpzPzBlNGIiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3V0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgY29uc3Qgb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVcIik7XHJcbiAgb25lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLWxlZnRcIik7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBvbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb24tbGVmdFwiKTtcclxuICB9LCA1MDApO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlcjJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufSk7XHJcblxyXG4vLyBJbXBvcnQgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbnMgZnJvbSB0aGUgcmVxdWlyZWQgU0RLc1xyXG5jb25zdCB7IGluaXRpYWxpemVBcHAgfSA9IHJlcXVpcmUoJ2ZpcmViYXNlL2FwcCcpO1xyXG5jb25zdCB7XHJcbiAgZ2V0RmlyZXN0b3JlLFxyXG4gIGRvYyxcclxuICBzZXREb2MsXHJcbiAgZ2V0RG9jLFxyXG4gIG9uU25hcHNob3QsXHJcbiAgc2VydmVyVGltZXN0YW1wLFxyXG59ID0gcmVxdWlyZSgnZmlyZWJhc2UvZmlyZXN0b3JlJyk7XHJcbmltcG9ydCBRdWlsbCBmcm9tICdxdWlsbCc7XHJcbmltcG9ydCAncXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly92YWxpZGF0aW9uLWF0ZWxpZXItanMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDY2MzMyMDYyMDkwXCIsXHJcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmNvbnN0IGNvbnRlbnVSZWYgPSBkb2MoZGIsICdkcm9pdCcsICdKSjJ6RkMyOHFXYnpkMjdLWTVyWScpO1xyXG5cclxuXHJcbi8vIENyw6lleiB1bmUgcHJvbWVzc2UgcG91ciByw6ljdXDDqXJlciBsZSBkb2N1bWVudCBGaXJlc3RvcmVcclxuZnVuY3Rpb24gbG9hZENvbnRlbnRGcm9tRmlyZXN0b3JlKCkgeyBcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICBnZXREb2MoY29udGVudVJlZilcclxuICAgIC50aGVuKChkb2NTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgICAgICAvLyBQYXJzZXogbGVzIGRvbm7DqWVzIGRhbnMgdW4gZm9ybWF0IHV0aWxpc2FibGUgcGFyIFF1aWxsXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGRvY1NuYXBzaG90LmRhdGEoKS5jb250ZW51O1xyXG5cclxuICAgICAgICAvLyBDaGFyZ2V6IGxlcyBkb25uw6llcyBkYW5zIGwnw6lkaXRldXIgUXVpbGxcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICBxdWlsbC5zZXRDb250ZW50cyhwYXJzZWREYXRhLm9wcyk7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2FuYWx5c2UgZHUgY29udGVudSBKU09OOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBdWN1biBkb2N1bWVudCB0cm91dsOpIVwiKTtcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkdSBkb2N1bWVudDpcIiwgZXJyb3IpO1xyXG4gICAgICByZWplY3QoKTtcclxuICAgIH0pO1xyXG59KVxyXG59O1xyXG5cclxuLy8gQXR0ZW5kZXogcXVlIGxhIHByb21lc3NlIHNvaXQgcsOpc29sdWUgYXZhbnQgZCdleMOpY3V0ZXIgbGUgcmVzdGUgZHUgY29kZVxyXG5sb2FkQ29udGVudEZyb21GaXJlc3RvcmUoKVxyXG4gIC50aGVuKCgpID0+IHtcclxuXHJcbiAgICAvLyBNZXR0ZXogZW4gcGxhY2UgbCfDqXbDqW5lbWVudCB0ZXh0LWNoYW5nZSBwb3VyIGTDqXRlY3RlciBsZXMgbW9kaWZpY2F0aW9ucyBkYW5zIGwnw6lkaXRldXIgUXVpbGxcclxuICAgIHZhciBjaGFuZ2UgPSBuZXcgUXVpbGwuaW1wb3J0KCdkZWx0YScpO1xyXG4gICAgcXVpbGwub24oJ3RleHQtY2hhbmdlJywgZnVuY3Rpb24gKGRlbHRhLCBvbGREZWx0YSwgc291cmNlKSB7XHJcbiAgaWYgKHNvdXJjZSA9PT0gJ3VzZXInKSB7XHJcbiAgICBjaGFuZ2UgPSBjaGFuZ2UuY29tcG9zZShkZWx0YSk7XHJcblxyXG4gICAgc2F1dmVnYXJkZXJDb250ZW51RGFuc0ZpcmVzdG9yZSgpO1xyXG4gIH1cclxudmFyIGRhdGEgPSBxdWlsbC5nZXRDb250ZW50cygpO1xyXG52YXIgZGVsdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VkaXRvci1jb250ZW50JywgZGVsdGFTdHJpbmcpO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGxvYWRDb250ZW50RnJvbUZpcmVzdG9yZSgpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kaWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzYXV2ZWdhcmRlckNvbnRlbnVEYW5zRmlyZXN0b3JlKCk7XHJcbn0pO1xyXG5cclxufSlcclxuICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgLy8gQ2UgYmxvYyBzZXJhIGV4w6ljdXTDqSBlbiBjYXMgZCfDqWNoZWMgZHUgY2hhcmdlbWVudCBkdSBjb250ZW51IGRlcHVpcyBGaXJlc3RvcmVcclxuICAgIGNvbnNvbGUubG9nKFwiTGUgY2hhcmdlbWVudCBkdSBjb250ZW51IGRlcHVpcyBGaXJlc3RvcmUgYSDDqWNob3XDqS5cIik7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNhdXZlZ2FyZGVyQ29udGVudURhbnNGaXJlc3RvcmUoKSB7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnUgPSBxdWlsbC5nZXRDb250ZW50cygpO1xyXG5cclxuICAgIC8vIENvbnZlcnRpciBsZSBjb250ZW51IGVuIEpTT05cclxuICAgIGNvbnN0IGNvbnRlbnVKU09OID0gSlNPTi5zdHJpbmdpZnkoY29udGVudSk7XHJcblxyXG4gIC8vIFNhdmUgdGhlIGNvbnRlbnQgdG8gRmlyZXN0b3JlXHJcbiAgc2V0RG9jKGNvbnRlbnVSZWYsIHtcclxuICAgIGNvbnRlbnU6IGNvbnRlbnVKU09OLFxyXG4gICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ29udGVudCBzYXZlZCBzdWNjZXNzZnVsbHkgaW4gRmlyZXN0b3JlIScpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBjb250ZW50OlwiLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pagesJS/droit.js\n");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n    \r\n    const one = document.querySelector(\".one\");\r\n    one.classList.add(\"transition-left\");\r\n    \r\n    \r\n    setTimeout(() => {\r\n        one.style.display = \"none\";\r\n        one.classList.remove(\"transition-left\");\r\n    }, 500); \r\n\r\n   \r\n    document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n\r\n// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Configuration de votre application web Firebase\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\"\r\n};\r\n\r\n// Initialiser Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\r\n\r\n/******************  affiche photo profil Nav bar  **********************/\r\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (user) => {\r\n  if (user) {\r\n    console.log('Utilisateur connecté');\r\n    var userEmail = user.email;\r\n    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, 'utilisateurs');\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(userRef, (snapshot) => {\r\n      let userRef = [];\r\n      snapshot.docs.forEach((doc) => {\r\n        userRef.push({ ...doc.data(), id: doc.id });\r\n      });\r\n      userRef.forEach((utilisateur) => {\r\n        // Créez une référence au document de l'utilisateur dans Firestore\r\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, 'utilisateurs', utilisateur.id);\r\n\r\n        if (utilisateur.email == userEmail) {\r\n          const ProfilNav = document.querySelector('.ProfilNav');\r\n          const profilVoir = document.querySelector('.profilVoir');\r\n          const nomUser = document.querySelector('.nomUser');\r\n          const statusUser = document.querySelector('.statusUser');\r\n          ProfilNav.src = utilisateur.url;\r\n          profilVoir.src = utilisateur.url;\r\n          nomUser.innerText = utilisateur.prenom + ' ' + utilisateur.nom;\r\n          statusUser.innerText = utilisateur.status;\r\n        }\r\n      });\r\n    });\r\n  } else {\r\n    console.log('Aucun utilisateur connecté');\r\n    window.location.href = '../../pages/auth/login/login.html';\r\n  }\r\n});\r\n\r\n\r\n/************     DECONNEXION       ***********/ \r\nconst btnDeconnexion = document.getElementById('btnDeconnexion');\r\nconst signOutButtonPressed = async (e) => {\r\n  e.preventDefault();\r\n  try {\r\n    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n    console.log(\"Deconnecté\");\r\n    window.location.href = '../../pages/auth/login/login.html';\r\n  } catch (error) {\r\n    console.log(error.code);\r\n  }\r\n}\r\nbtnDeconnexion.addEventListener(\"click\", signOutButtonPressed);\r\n\r\n\r\n// Référence Firestore\r\nconst contenuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, 'droit', 'zPxEvR7D72SaaZVQa5Wb');\r\n\r\nfunction enregistrerModifications() {\r\n  // Récupérer le contenu de la div\r\n  const contenuDiv = document.getElementById('editor-container').textContent;\r\n\r\n\r\n  // Enregistrer le contenu dans Firestore\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(contenuRef, {\r\n    contenu: contenuDiv,\r\n    timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)(),\r\n  })\r\n  .then(() => {\r\n    console.log('Contenu enregistré avec succès dans Firestore!');\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Erreur lors de l'enregistrement du contenu:\", error);\r\n  });\r\n}\r\n\r\ndocument.getElementById(\"modif\").addEventListener(\"click\", enregistrerModifications);\r\n\r\n\r\ngetDoc(contenuRef).then((docSnapshot) => {\r\n  if (docSnapshot.exists()) {\r\n      const contenu = docSnapshot.data().contenu;\r\n      quill.root.innerHTML = contenu;\r\n  }\r\n});\r\n\r\n// Mettre à jour le contenu en temps réel\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(contenuRef, (docSnapshot) => {\r\n  if (docSnapshot.exists()) {\r\n      const contenu = docSnapshot.data().contenu;\r\n      quill.root.innerHTML = contenu;\r\n  }\r\n});\r\n\r\nquill.on('text-change', function() {\r\n    var delta = quill.getContents();\r\n    var deltaString = JSON.stringify(delta);\r\n    localStorage.setItem('editor-content', deltaString);\r\n\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(contenuRef, {\r\n      contenu: quill.root.innerHTML,\r\n      timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)(),\r\n  });\r\n\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9kcm9pdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL2Ryb2l0LmpzPzBlNGIiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3V0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub25lXCIpO1xyXG4gICAgb25lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLWxlZnRcIik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb25lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBvbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb24tbGVmdFwiKTtcclxuICAgIH0sIDUwMCk7IFxyXG5cclxuICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlcjJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufSk7XHJcblxyXG5cclxuLy8gSW1wb3J0ZXIgbGVzIGZvbmN0aW9ucyBkb250IHZvdXMgYXZleiBiZXNvaW4gw6AgcGFydGlyIGRlcyBTREtzIGRvbnQgdm91cyBhdmV6IGJlc29pblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduT3V0LFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgdXBkYXRlUHJvZmlsZSxcclxufSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgb25TbmFwc2hvdCwgZG9jLCBzZXREb2MsIHNlcnZlclRpbWVzdGFtcCB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBDb25maWd1cmF0aW9uIGRlIHZvdHJlIGFwcGxpY2F0aW9uIHdlYiBGaXJlYmFzZVxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly92YWxpZGF0aW9uLWF0ZWxpZXItanMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDY2MzMyMDYyMDkwXCIsXHJcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGlzZXIgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqICBhZmZpY2hlIHBob3RvIHByb2ZpbCBOYXYgYmFyICAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICBpZiAodXNlcikge1xyXG4gICAgY29uc29sZS5sb2coJ1V0aWxpc2F0ZXVyIGNvbm5lY3TDqScpO1xyXG4gICAgdmFyIHVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgJ3V0aWxpc2F0ZXVycycpO1xyXG4gICAgb25TbmFwc2hvdCh1c2VyUmVmLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgbGV0IHVzZXJSZWYgPSBbXTtcclxuICAgICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICB1c2VyUmVmLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgdXNlclJlZi5mb3JFYWNoKCh1dGlsaXNhdGV1cikgPT4ge1xyXG4gICAgICAgIC8vIENyw6lleiB1bmUgcsOpZsOpcmVuY2UgYXUgZG9jdW1lbnQgZGUgbCd1dGlsaXNhdGV1ciBkYW5zIEZpcmVzdG9yZVxyXG4gICAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoZGIsICd1dGlsaXNhdGV1cnMnLCB1dGlsaXNhdGV1ci5pZCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlsaXNhdGV1ci5lbWFpbCA9PSB1c2VyRW1haWwpIHtcclxuICAgICAgICAgIGNvbnN0IFByb2ZpbE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Qcm9maWxOYXYnKTtcclxuICAgICAgICAgIGNvbnN0IHByb2ZpbFZvaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsVm9pcicpO1xyXG4gICAgICAgICAgY29uc3Qgbm9tVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub21Vc2VyJyk7XHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1c1VzZXInKTtcclxuICAgICAgICAgIFByb2ZpbE5hdi5zcmMgPSB1dGlsaXNhdGV1ci51cmw7XHJcbiAgICAgICAgICBwcm9maWxWb2lyLnNyYyA9IHV0aWxpc2F0ZXVyLnVybDtcclxuICAgICAgICAgIG5vbVVzZXIuaW5uZXJUZXh0ID0gdXRpbGlzYXRldXIucHJlbm9tICsgJyAnICsgdXRpbGlzYXRldXIubm9tO1xyXG4gICAgICAgICAgc3RhdHVzVXNlci5pbm5lclRleHQgPSB1dGlsaXNhdGV1ci5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnQXVjdW4gdXRpbGlzYXRldXIgY29ubmVjdMOpJyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi8uLi9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmh0bWwnO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKiAgICAgREVDT05ORVhJT04gICAgICAgKioqKioqKioqKiovIFxyXG5jb25zdCBidG5EZWNvbm5leGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5EZWNvbm5leGlvbicpO1xyXG5jb25zdCBzaWduT3V0QnV0dG9uUHJlc3NlZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xyXG4gICAgY29uc29sZS5sb2coXCJEZWNvbm5lY3TDqVwiKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4uLy4uL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4uaHRtbCc7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLmNvZGUpO1xyXG4gIH1cclxufVxyXG5idG5EZWNvbm5leGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2lnbk91dEJ1dHRvblByZXNzZWQpO1xyXG5cclxuXHJcbi8vIFLDqWbDqXJlbmNlIEZpcmVzdG9yZVxyXG5jb25zdCBjb250ZW51UmVmID0gZG9jKGRiLCAnZHJvaXQnLCAnelB4RXZSN0Q3MlNhYVpWUWE1V2InKTtcclxuXHJcbmZ1bmN0aW9uIGVucmVnaXN0cmVyTW9kaWZpY2F0aW9ucygpIHtcclxuICAvLyBSw6ljdXDDqXJlciBsZSBjb250ZW51IGRlIGxhIGRpdlxyXG4gIGNvbnN0IGNvbnRlbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWNvbnRhaW5lcicpLnRleHRDb250ZW50O1xyXG5cclxuXHJcbiAgLy8gRW5yZWdpc3RyZXIgbGUgY29udGVudSBkYW5zIEZpcmVzdG9yZVxyXG4gIHNldERvYyhjb250ZW51UmVmLCB7XHJcbiAgICBjb250ZW51OiBjb250ZW51RGl2LFxyXG4gICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICB9KVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdDb250ZW51IGVucmVnaXN0csOpIGF2ZWMgc3VjY8OocyBkYW5zIEZpcmVzdG9yZSEnKTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2VucmVnaXN0cmVtZW50IGR1IGNvbnRlbnU6XCIsIGVycm9yKTtcclxuICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RpZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZW5yZWdpc3RyZXJNb2RpZmljYXRpb25zKTtcclxuXHJcblxyXG5nZXREb2MoY29udGVudVJlZikudGhlbigoZG9jU25hcHNob3QpID0+IHtcclxuICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgICAgY29uc3QgY29udGVudSA9IGRvY1NuYXBzaG90LmRhdGEoKS5jb250ZW51O1xyXG4gICAgICBxdWlsbC5yb290LmlubmVySFRNTCA9IGNvbnRlbnU7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIE1ldHRyZSDDoCBqb3VyIGxlIGNvbnRlbnUgZW4gdGVtcHMgcsOpZWxcclxub25TbmFwc2hvdChjb250ZW51UmVmLCAoZG9jU25hcHNob3QpID0+IHtcclxuICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgICAgY29uc3QgY29udGVudSA9IGRvY1NuYXBzaG90LmRhdGEoKS5jb250ZW51O1xyXG4gICAgICBxdWlsbC5yb290LmlubmVySFRNTCA9IGNvbnRlbnU7XHJcbiAgfVxyXG59KTtcclxuXHJcbnF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGRlbHRhID0gcXVpbGwuZ2V0Q29udGVudHMoKTtcclxuICAgIHZhciBkZWx0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRlbHRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlZGl0b3ItY29udGVudCcsIGRlbHRhU3RyaW5nKTtcclxuXHJcbiAgICBzZXREb2MoY29udGVudVJlZiwge1xyXG4gICAgICBjb250ZW51OiBxdWlsbC5yb290LmlubmVySFRNTCxcclxuICAgICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICB9KTtcclxuXHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/droit.js\n");
>>>>>>> 05995200ed87726eeff12768b723905ca456d6f4

/***/ })

}]);