"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_login_js"],{

/***/ "./src/pagesJS/login.js":
/*!******************************!*\
  !*** ./src/pagesJS/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"../../node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"../../node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\n  projectId: \"validation-atelier-js\",\n  storageBucket: \"validation-atelier-js.appspot.com\",\n  messagingSenderId: \"466332062090\",\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\n};\n\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); \nconst handleLogin = async (event) => {\n    event.preventDefault();\n  \n    const email = document.getElementById(\"email\").value;\n    const password = document.getElementById(\"password\").value;\n  \n    try {\n      const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(\n        auth,\n        email,\n        password\n      );\n      const user = userCredential.user;\n      console.log(\"Utilisateur connecté\");\n      window.location.href = \"../../accueil/acceuil.html\";\n    } catch (error) {\n      const errorCode = error.code;\n      const errorMessage = error.message;\n      alert(`Erreur lors de la connexion :\nidentifiants incorrects`);\n    }\n  };\n  \n  const loginForm = document.getElementById(\"signup\");\n  console.log(\"page connexion\");\n  loginForm.addEventListener(\"submit\", handleLogin);\n\n/*******************************CHARGEMENT DE LA PAGE ***********************/ \ngsap.fromTo(\n  \".loading-page\",\n  { opacity: 1 },\n  {\n      opacity: 0,\n      display: \"none\",\n      duration: 1.5,\n      delay: 3.5,\n  }\n);\n\ngsap.fromTo(\n  \".logo-name\",\n  {\n      y: 50,\n      opacity: 0,\n  },\n  {\n      y: 0,\n      opacity: 1,\n      duration: 2,\n      delay: 1,\n  }\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFNQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL2xvZ2luLmpzP2VhZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7XG4gIGdldEF1dGgsXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7XG4gIGdldEZpcmVzdG9yZSxcbiAgY29sbGVjdGlvbixcbiAgYWRkRG9jLFxuICBkb2MsXG4gIGdldERvYyxcbiAgb25TbmFwc2hvdCxcbiAgZnJvbVRvXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDU1JvMkVad281TFFJTzc1RmV2SUJ2RUtiREQ2MUhOdVlcIixcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdmFsaWRhdGlvbi1hdGVsaWVyLWpzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ2NjMzMjA2MjA5MFwiLFxuICBhcHBJZDogXCIxOjQ2NjMzMjA2MjA5MDp3ZWI6ZmZiZTQ1ZWY0YTczNzFhN2I1Yjg3M1wiLFxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTsgXG5jb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWU7XG4gIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxuICAgICAgICBhdXRoLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgICk7XG4gICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXRpbGlzYXRldXIgY29ubmVjdMOpXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4uLy4uL2FjY3VlaWwvYWNjZXVpbC5odG1sXCI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgYWxlcnQoYEVycmV1ciBsb3JzIGRlIGxhIGNvbm5leGlvbiA6XG5pZGVudGlmaWFudHMgaW5jb3JyZWN0c2ApO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbnVwXCIpO1xuICBjb25zb2xlLmxvZyhcInBhZ2UgY29ubmV4aW9uXCIpO1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVMb2dpbik7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqQ0hBUkdFTUVOVCBERSBMQSBQQUdFICoqKioqKioqKioqKioqKioqKioqKioqLyBcbmdzYXAuZnJvbVRvKFxuICBcIi5sb2FkaW5nLXBhZ2VcIixcbiAgeyBvcGFjaXR5OiAxIH0sXG4gIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICBkZWxheTogMy41LFxuICB9XG4pO1xuXG5nc2FwLmZyb21UbyhcbiAgXCIubG9nby1uYW1lXCIsXG4gIHtcbiAgICAgIHk6IDUwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgfSxcbiAge1xuICAgICAgeTogMCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBkdXJhdGlvbjogMixcbiAgICAgIGRlbGF5OiAxLFxuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pagesJS/login.js\n");

/***/ })

}]);