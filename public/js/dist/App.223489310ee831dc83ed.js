/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _pages_DataPage_DataPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/DataPage/DataPage */ "./src/pages/DataPage/DataPage.js");
/* harmony import */ var _pages_AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/AdminPage/AdminPage */ "./src/pages/AdminPage/AdminPage.js");
/* harmony import */ var _pages_TeacherPage_TeacherPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/TeacherPage/TeacherPage */ "./src/pages/TeacherPage/TeacherPage.js");
/* harmony import */ var _pages_StudentPage_StudentPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/StudentPage/StudentPage */ "./src/pages/StudentPage/StudentPage.js");
/* harmony import */ var _pages_ParentPage_ParentPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/ParentPage/ParentPage */ "./src/pages/ParentPage/ParentPage.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");












function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_10__.getUser)());
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const updateUser = async userData => {
    const userId = user._id; // Assuming you have the user's ID in your state
    const token = localStorage.getItem('token'); // Retrieve the token from local storage or your state management
    try {
      const response = await fetch("/api/users/".concat(userId), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(token) // Include the authorization token in the request
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Profile update failed');
      }
      const updatedUser = await response.json();
      setUser(updatedUser); // Update user state with the updated data
      return updatedUser;
    } catch (error) {
      console.error('Update failed:', error);
      return null;
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_10__.getUser)();
        setUser(fetchedUser);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      }
    };
    fetchUser();
  }, []); // Removed 'user' from the dependency array because it was running an endless loop which was breaking the page

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setUser: setUser,
    user: user,
    users: users
  }), /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].App
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      setUser: setUser,
      users: users,
      setUsers: setUsers
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/auth",
    element: /*#__PURE__*/React.createElement(_pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/data",
    element: /*#__PURE__*/React.createElement(_pages_DataPage_DataPage__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/admin",
    element: /*#__PURE__*/React.createElement(_pages_AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      user: user
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/teacher",
    element: /*#__PURE__*/React.createElement(_pages_TeacherPage_TeacherPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      user: user
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/student",
    element: /*#__PURE__*/React.createElement(_pages_StudentPage_StudentPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      user: user
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/parent",
    element: /*#__PURE__*/React.createElement(_pages_ParentPage_ParentPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      user: user
    })
  }))));
}

/***/ }),

/***/ "./src/components/AdminCreateForm/AdminCreateForm.js":
/*!***********************************************************!*\
  !*** ./src/components/AdminCreateForm/AdminCreateForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminCreateForm.module.scss */ "./src/components/AdminCreateForm/AdminCreateForm.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



 // Import your CSS module

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/users';
const AdminCreateForm = _ref => {
  let {
    user,
    setShowAdminCreateForm
  } = _ref;
  const token = (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.getToken)();
  const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const confirmPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const campusNumRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const roleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Ref for role input
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [campusNum, setCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("".concat(user.campusNum));
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('admin'); // State for role

  const [validFirstName, setValidFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validLastName, setValidLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validEmail, setValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validPassword, setValidPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validConfirmPassword, setValidConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validCampusNum, setValidCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validRole, setValidRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // Always valid for hard-coded role

  const [firstNameFocus, setFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastNameFocus, setLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [emailFocus, setEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [passwordFocus, setPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    firstNameRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidFirstName(firstName.trim() !== '');
  }, [firstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidLastName(lastName.trim() !== '');
  }, [lastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidConfirmPassword(confirmPassword === password);
  }, [confirmPassword, password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [firstName, lastName, email, password, confirmPassword]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(token)
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          campusNum,
          role // Include role in the request body
        })
      });
      if (!response.ok) {
        throw new Error('Registration Failed');
      }
      const responseData = await response.json();
      setSuccess(true);

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Role is hard-coded, no need to reset
    } catch (err) {
      console.error(err); // Log the error to the console
      setErrMsg(err.message || 'Registration Failed');
      errRef.current.focus();
    }
  };
  const handleExit = async e => {
    e.preventDefault();
    setShowAdminCreateForm(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, success ? /*#__PURE__*/React.createElement("section", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "Success!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].a,
    href: "#"
  }, "Sign In"))) : /*#__PURE__*/React.createElement("section", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errmsg : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Register"), /*#__PURE__*/React.createElement("form", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstName",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "First Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validFirstName ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validFirstName || !firstName ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    ref: firstNameRef,
    autoComplete: "off",
    onChange: e => setFirstName(e.target.value),
    value: firstName,
    required: true,
    "aria-invalid": validFirstName ? "false" : "true",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setFirstNameFocus(true),
    onBlur: () => setFirstNameFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastName",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Last Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validLastName ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validLastName || !lastName ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    ref: lastNameRef,
    autoComplete: "off",
    onChange: e => setLastName(e.target.value),
    value: lastName,
    required: true,
    "aria-invalid": validLastName ? "false" : "true",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setLastNameFocus(true),
    onBlur: () => setLastNameFocus(false)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "firstNameNote",
    className: firstNameFocus && !validFirstName ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your first name."), /*#__PURE__*/React.createElement("p", {
    id: "lastNameNote",
    className: lastNameFocus && !validLastName ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your last name.")), /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].emailAndCampusContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].email
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Email:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validEmail ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validEmail || !email ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    "aria-invalid": validEmail ? "false" : "true",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setEmailFocus(true),
    onBlur: () => setEmailFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "emailNote",
    className: emailFocus && !validEmail ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter a valid email address."), /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].passwordContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].pwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validPassword ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validPassword || !password ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    autoComplete: "off",
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    "aria-invalid": validPassword ? "false" : "true",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setPasswordFocus(true),
    onBlur: () => setPasswordFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirmPwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Confirm Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: confirmPassword && validConfirmPassword ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validConfirmPassword || !confirmPassword ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "confirmPassword",
    ref: confirmPasswordRef,
    autoComplete: "off",
    onChange: e => setConfirmPassword(e.target.value),
    value: confirmPassword,
    required: true,
    "aria-invalid": validConfirmPassword ? "false" : "true",
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setConfirmPasswordFocus(true),
    onBlur: () => setConfirmPasswordFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "passwordNote",
    className: passwordFocus && !validPassword ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Password must be 8 to 24 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."), /*#__PURE__*/React.createElement("p", {
    id: "confirmPasswordNote",
    className: confirmPasswordFocus && !validConfirmPassword ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please confirm your password."), /*#__PURE__*/React.createElement("button", {
    disabled: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword,
    className: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword ? _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].disabledButton : _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button
  }, "Create Admin User")), /*#__PURE__*/React.createElement("img", {
    onClick: handleExit,
    className: _AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].closeBtn,
    src: "/img/window-close.png",
    alt: "window-close"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminCreateForm);

/***/ }),

/***/ "./src/components/AdminReadingTracker/AdminReadingTracker.js":
/*!*******************************************************************!*\
  !*** ./src/components/AdminReadingTracker/AdminReadingTracker.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminReadingTracker.module.scss */ "./src/components/AdminReadingTracker/AdminReadingTracker.module.scss");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function AdminReadingTracker() {
  const gradeOptions = [{
    value: 'KG',
    label: 'KG'
  }, {
    value: '1st',
    label: '1st'
  }, {
    value: '2nd',
    label: '2nd'
  }, {
    value: '3rd',
    label: '3rd'
  }, {
    value: '4th',
    label: '4th'
  }, {
    value: '5th',
    label: '5th'
  }, {
    value: '6th',
    label: '6th'
  }, {
    value: '7th',
    label: '7th'
  }, {
    value: '8th',
    label: '8th'
  }, {
    value: '9th',
    label: '9th'
  }, {
    value: '10th',
    label: '10th'
  }, {
    value: '11th',
    label: '11th'
  }, {
    value: '12th',
    label: '12th'
  }];
  const scaleOptions = [{
    value: 'AR',
    label: 'AR'
  }, {
    value: 'Fountas & Pinnell',
    label: 'Fountas & Pinnell'
  }, {
    value: 'Lexile',
    label: 'Lexile'
  }, {
    value: 'DRA',
    label: 'DRA'
  }, {
    value: 'Reading Recovery',
    label: 'Reading Recovery'
  }, {
    value: 'Rigby',
    label: 'Rigby'
  }, {
    value: 'Basal',
    label: 'Basal'
  }];
  const [scoreOptions, setScoreOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const generateScoreOptions = value => {
    let options = [];
    switch (value) {
      case 'AR':
        options = [{
          value: 'K',
          label: 'K'
        }, {
          value: 'K.5',
          label: 'K.5'
        }, {
          value: '1.0',
          label: '1.0'
        }, {
          value: '1.1',
          label: '1.1'
        }, {
          value: '1.2',
          label: '1.2'
        }, {
          value: '1.4',
          label: '1.4'
        }, {
          value: '1.5',
          label: '1.5'
        }, {
          value: '1.7',
          label: '1.7'
        }, {
          value: '1.8',
          label: '1.8'
        }, {
          value: '2.0',
          label: '2.0'
        }, {
          value: '2.3',
          label: '2.3'
        }, {
          value: '2.6',
          label: '2.6'
        }, {
          value: '2.9',
          label: '2.9'
        }, {
          value: '3.0',
          label: '3.0'
        }, {
          value: '3.3',
          label: '3.3'
        }, {
          value: '3.6',
          label: '3.6'
        }, {
          value: '4.0',
          label: '4.0'
        }, {
          value: '4.3',
          label: '4.3'
        }, {
          value: '4.6',
          label: '4.6'
        }, {
          value: '4.8',
          label: '4.8'
        }, {
          value: '5.0',
          label: '5.0'
        }, {
          value: '5.3',
          label: '5.3'
        }, {
          value: '5.6',
          label: '5.6'
        }, {
          value: '6.0',
          label: '6.0'
        }, {
          value: '6.5',
          label: '6.5'
        }, {
          value: '7.0',
          label: '7.0'
        }, {
          value: '7.3',
          label: '7.3'
        }, {
          value: '7.6',
          label: '7.6'
        }, {
          value: '8+',
          label: '8+'
        }];
        break;
      case 'Fountas & Pinnell':
        options = [{
          value: 'A',
          label: 'A'
        }, {
          value: 'B',
          label: 'B'
        }, {
          value: 'C',
          label: 'C'
        }, {
          value: 'D',
          label: 'D'
        }, {
          value: 'E',
          label: 'E'
        }, {
          value: 'F',
          label: 'F'
        }, {
          value: 'G',
          label: 'G'
        }, {
          value: 'H',
          label: 'H'
        }, {
          value: 'I',
          label: 'I'
        }, {
          value: 'J',
          label: 'J'
        }, {
          value: 'K',
          label: 'K'
        }, {
          value: 'L',
          label: 'L'
        }, {
          value: 'M',
          label: 'M'
        }, {
          value: 'N',
          label: 'N'
        }, {
          value: 'O',
          label: 'O'
        }, {
          value: 'P',
          label: 'P'
        }, {
          value: 'Q',
          label: 'Q'
        }, {
          value: 'R',
          label: 'R'
        }, {
          value: 'S',
          label: 'S'
        }, {
          value: 'T',
          label: 'T'
        }, {
          value: 'U',
          label: 'U'
        }, {
          value: 'V',
          label: 'V'
        }, {
          value: 'W',
          label: 'W'
        }, {
          value: 'X',
          label: 'X'
        }, {
          value: 'Y',
          label: 'Y'
        }, {
          value: 'Z',
          label: 'Z'
        }, {
          value: 'Z+',
          label: 'Z+'
        }];
        break;
      case 'Lexile':
        options = [{
          value: '<100',
          label: '<100'
        }, {
          value: '100-199',
          label: '100-199'
        }, {
          value: '200-299',
          label: '200-299'
        }, {
          value: '300',
          label: '300'
        }, {
          value: '400',
          label: '400'
        }, {
          value: '500',
          label: '500'
        }, {
          value: '600',
          label: '600'
        }, {
          value: '700',
          label: '700'
        }, {
          value: '800',
          label: '800'
        }, {
          value: '900',
          label: '900'
        }, {
          value: '1000',
          label: '1000'
        }, {
          value: '1100',
          label: '1100'
        }, {
          value: '1200',
          label: '1200'
        }, {
          value: '1200+',
          label: '1200+'
        }];
        break;
      case 'DRA':
        options = [{
          value: 'A.1',
          label: 'A.1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '6-8',
          label: '6-8'
        }, {
          value: '10',
          label: '10'
        }, {
          value: '12',
          label: '12'
        }, {
          value: '14',
          label: '14'
        }, {
          value: '16',
          label: '16'
        }, {
          value: '18',
          label: '18'
        }, {
          value: '20',
          label: '20'
        }, {
          value: '24',
          label: '24'
        }, {
          value: '28',
          label: '28'
        }, {
          value: '30',
          label: '30'
        }, {
          value: '34',
          label: '34'
        }, {
          value: '38',
          label: '38'
        }, {
          value: '38-40',
          label: '38-40'
        }, {
          value: '40',
          label: '40'
        }, {
          value: '40-44',
          label: '40-44'
        }, {
          value: '44',
          label: '44'
        }, {
          value: '44-60',
          label: '44-60'
        }, {
          value: '50',
          label: '50'
        }, {
          value: '50-60',
          label: '50-60'
        }, {
          value: '60',
          label: '60'
        }, {
          value: '60-70',
          label: '60-70'
        }, {
          value: '70',
          label: '70'
        }, {
          value: '70-80',
          label: '70-80'
        }, {
          value: '70-120',
          label: '70-120'
        }, {
          value: '80',
          label: '80'
        }, {
          value: '80+',
          label: '80+'
        }];
        break;
      case 'Reading Recovery':
        options = [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        }, {
          value: '6',
          label: '6'
        }, {
          value: '7',
          label: '7'
        }, {
          value: '8',
          label: '8'
        }, {
          value: '9',
          label: '9'
        }, {
          value: '10',
          label: '10'
        }, {
          value: '11',
          label: '11'
        }, {
          value: '12',
          label: '12'
        }, {
          value: '13',
          label: '13'
        }, {
          value: '14',
          label: '14'
        }, {
          value: '15',
          label: '15'
        }, {
          value: '16',
          label: '16'
        }, {
          value: '17',
          label: '17'
        }, {
          value: '18',
          label: '18'
        }, {
          value: '19',
          label: '19'
        }, {
          value: '20',
          label: '20'
        }];
        break;
      case 'Rigby':
        options = [{
          value: '1-2',
          label: '1-2'
        }, {
          value: '3-4',
          label: '3-4'
        }, {
          value: '5',
          label: '5'
        }, {
          value: '6',
          label: '6'
        }, {
          value: '7',
          label: '7'
        }, {
          value: '8',
          label: '8'
        }, {
          value: '9',
          label: '9'
        }, {
          value: '10',
          label: '10'
        }, {
          value: '11',
          label: '11'
        }, {
          value: '12',
          label: '12'
        }, {
          value: '13',
          label: '13'
        }, {
          value: '14-15',
          label: '14-15'
        }, {
          value: '16-17',
          label: '16-17'
        }, {
          value: '18',
          label: '18'
        }, {
          value: '19',
          label: '19'
        }, {
          value: '20+',
          label: '20+'
        }];
        break;
      case 'Basal':
        options = [{
          value: 'Readiness',
          label: 'Readiness'
        }, {
          value: 'Preprim. 1',
          label: 'Preprim. 1'
        }, {
          value: 'Preprim. 2',
          label: 'Preprim. 2'
        }, {
          value: 'Preprim. 3',
          label: 'Preprim. 3'
        }, {
          value: 'Primer',
          label: 'Primer'
        }, {
          value: 'Primer+',
          label: 'Primer+'
        }, {
          value: 'Grade 1',
          label: 'Grade 1'
        }, {
          value: 'Grade 1 (late)',
          label: 'Grade 1 (late)'
        }, {
          value: 'Grade 2',
          label: 'Grade 2'
        }, {
          value: 'Grade 3',
          label: 'Grade 3'
        }, {
          value: 'Grade 4',
          label: 'Grade 4'
        }, {
          value: 'Grade 5',
          label: 'Grade 5'
        }, {
          value: 'Grade 6',
          label: 'Grade 6'
        }];
        break;
      default:
        options = [];
        break;
    }
    setScoreOptions(options);
  };
  const optionStyles = {
    option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      color: 'black',
      // Change the text color here
      maxHeight: '15rem',
      overflow: 'scroll'
    }),
    control: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      border: '2px solid var(--text-light)',
      // Remove the border
      outline: 'none' // Remove the outline
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ReadingTracker
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, "Reading Levels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selectorContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selector,
    options: gradeOptions,
    styles: optionStyles,
    placeholder: "Grade"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selector,
    options: scaleOptions,
    styles: optionStyles,
    placeholder: "Type",
    onChange: selectedOption => generateScoreOptions(selectedOption.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scoringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].goalContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].goalLabel
  }, "Goal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selector,
    options: scoreOptions,
    styles: optionStyles,
    placeholder: "Scale"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].targetContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Target %: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].targetInnerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "80"), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "5"), " Students"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "On Level: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].onLevelSpan
  }, "75%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Next Check-In: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkInSpan
  }, "April 30, 2024"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].teacherSelector
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 4")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminReadingTracker);

/***/ }),

/***/ "./src/components/AssignmentCollapsible/AssignmentCollapsible.js":
/*!***********************************************************************!*\
  !*** ./src/components/AssignmentCollapsible/AssignmentCollapsible.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignmentCollapsible.module.scss */ "./src/components/AssignmentCollapsible/AssignmentCollapsible.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function AssignmentCollapsible() {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const data = [{
    type: 'In Progress',
    assignments: [{
      title: 'Fractions Assignment #1',
      subject: 'Math',
      createdAt: '12/22/2023'
    }, {
      title: 'History Essay',
      subject: 'Social Studies',
      createdAt: '12/1/2023'
    }]
  }, {
    type: 'Completed',
    assignments: [{
      title: 'Weather Patterns',
      subject: 'Science',
      createdAt: '11/12/2023'
    }, {
      title: 'Harry Potter ch.6',
      subject: 'Reading',
      createdAt: '8/17/2023'
    }]
  }];
  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].accordion
  }, /*#__PURE__*/React.createElement("h2", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, "Assignments"), data.map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: "".concat(_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item, " ").concat(i === 0 ? _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstItem : '', " ").concat(i === data.length - 1 ? _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastItem : ''),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title, " ").concat(i === 0 ? _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstTitle : '', " ").concat(i === data.length - 1 ? _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastTitle : ''),
    onClick: () => toggle(i)
  }, /*#__PURE__*/React.createElement("h3", null, item.type), /*#__PURE__*/React.createElement("span", null, selected === i ? '-' : '+')), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content, " ").concat(selected === i ? _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].show : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contentContainer
  }, item.type === 'In Progress' && item.assignments.map((assignment, index) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].innerContent,
    key: index
  }, /*#__PURE__*/React.createElement("div", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].text
  }, /*#__PURE__*/React.createElement("p", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].assignmentTitle
  }, assignment.title), /*#__PURE__*/React.createElement("p", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subject
  }, assignment.subject)), /*#__PURE__*/React.createElement("p", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].date
  }, assignment.createdAt)))), item.type !== 'In Progress' && item.assignments.map((assignment, index) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].innerContent,
    key: index
  }, /*#__PURE__*/React.createElement("div", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].text
  }, /*#__PURE__*/React.createElement("p", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].assignmentTitle
  }, assignment.title), /*#__PURE__*/React.createElement("p", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subject
  }, assignment.subject)), /*#__PURE__*/React.createElement("p", {
    className: _AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].date
  }, assignment.createdAt))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssignmentCollapsible);

/***/ }),

/***/ "./src/components/BarGraph/BarGraph.js":
/*!*********************************************!*\
  !*** ./src/components/BarGraph/BarGraph.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BarGraph)
/* harmony export */ });
/* harmony import */ var _BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarGraph.module.scss */ "./src/components/BarGraph/BarGraph.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/BarChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Legend.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Bar.js");



const data = [{
  name: "KG",
  Goal: 20,
  Current: 80,
  amt: 2400
}, {
  name: "1st",
  Goal: 40,
  Current: 60,
  amt: 2210
}, {
  name: "2nd",
  Goal: 25,
  Current: 75,
  amt: 2290
}, {
  name: "3rd",
  Goal: 18,
  Current: 82,
  amt: 2000
}, {
  name: "4th",
  Goal: 8,
  Current: 92,
  amt: 2181
}, {
  name: "5th",
  Goal: 27,
  Current: 73,
  amt: 2500
}, {
  name: "6th",
  Goal: 0,
  Current: 0,
  amt: 2100
}, {
  name: "7th",
  Goal: 0,
  Current: 0,
  amt: 2100
}, {
  name: "8th",
  Goal: 0,
  Current: 0,
  amt: 2100
}, {
  name: "9th",
  Goal: 0,
  Current: 0,
  amt: 2100
}, {
  name: "10th",
  Goal: 0,
  Current: 0,
  amt: 2100
}, {
  name: "11th",
  Goal: 0,
  Current: 0,
  amt: 2100
}, {
  name: "12th",
  Goal: 0,
  Current: 0,
  amt: 2100
}];
function BarGraph(_ref) {
  let {
    user
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_2__.BarChart, {
    width: 550,
    height: 300,
    data: data,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_7__.Legend, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_8__.Bar, {
    dataKey: "Current",
    stackId: "a",
    fill: "var(--text-dark)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_8__.Bar, {
    dataKey: "Goal",
    stackId: "a",
    fill: "var(--text-light)"
  }));
}

/***/ }),

/***/ "./src/components/ClassCollapsible/ClassCollapsible.js":
/*!*************************************************************!*\
  !*** ./src/components/ClassCollapsible/ClassCollapsible.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassCollapsible.module.scss */ "./src/components/ClassCollapsible/ClassCollapsible.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ClassCollapsible() {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const data = [{
    classTitle: 'Homeroom',
    students: [{
      name: 'Johnny'
    }, {
      name: 'Sally'
    }]
  }, {
    classTitle: 'Johnson\'s Homeroom (Switch Class)',
    students: [{
      name: 'Jimmy'
    }, {
      name: 'Susie'
    }]
  }];
  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].accordion
  }, /*#__PURE__*/React.createElement("h2", {
    className: _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, "Classes"), data.map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: "".concat(_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item, " ").concat(i === 0 ? _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstItem : '', " ").concat(i === data.length - 1 ? _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastItem : ''),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title, " ").concat(i === 0 ? _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstTitle : '', " ").concat(i === data.length - 1 ? _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastTitle : ''),
    onClick: () => toggle(i)
  }, /*#__PURE__*/React.createElement("h3", null, item.classTitle), /*#__PURE__*/React.createElement("span", null, selected === i ? '-' : '+')), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content, " ").concat(selected === i ? _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].show : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contentContainer
  }, item.students.map((student, index) => /*#__PURE__*/React.createElement("div", {
    key: index
  }, /*#__PURE__*/React.createElement("p", {
    className: _ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].studentName
  }, student.name)))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassCollapsible);

/***/ }),

/***/ "./src/components/Collapsible/Collapsible.js":
/*!***************************************************!*\
  !*** ./src/components/Collapsible/Collapsible.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collapsible.module.scss */ "./src/components/Collapsible/Collapsible.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Collapsible(_ref) {
  let {
    user
  } = _ref;
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const data = [{
    gradeLevel: 'Kindergarten',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '1st Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '2nd Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '3rd Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '4th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '5th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '6th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '7th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '8th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '9th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '10th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '11th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }, {
    gradeLevel: '12th Grade',
    teachers: 'Teacher 1',
    students: 'Student 1'
  }];
  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].accordion
  }, data.map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: "".concat(_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item, " ").concat(i === 0 ? _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstItem : '', " ").concat(i === data.length - 1 ? _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastItem : ''),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title, " ").concat(i === 0 ? _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstTitle : '', " ").concat(i === data.length - 1 ? _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastTitle : ''),
    onClick: () => toggle(i)
  }, /*#__PURE__*/React.createElement("h3", null, item.gradeLevel), /*#__PURE__*/React.createElement("span", null, selected === i ? '-' : '+')), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content, " ").concat(selected === i ? _Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].show : '')
  }, /*#__PURE__*/React.createElement("p", null, item.teachers), /*#__PURE__*/React.createElement("p", null, item.students))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapsible);

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.module.scss */ "./src/components/Login/Login.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const LOGIN_URL = '/api/users/login';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Login = _ref => {
  let {
    toggleLoginForm,
    setUser,
    user
  } = _ref;
  const navigateTo = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    emailRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [email, password]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setErrMsg('Please enter a valid email address.');
      return;
    }
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        }),
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Login Failed');
      }
      const responseData = await response.json();
      const accessToken = responseData === null || responseData === void 0 ? void 0 : responseData.token;

      // Save the token in localStorage
      localStorage.setItem('token', accessToken);

      // Fetch user data based on email
      const userResponse = await fetch("/api/users?email=".concat(email), {
        method: 'GET',
        headers: {
          'Authorization': "Bearer ".concat(accessToken)
        }
      });
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }
      const user = await userResponse.json();

      // Set user data
      setUser(user);

      // Check if the user has admin role
      if (user.role === 'admin') {
        // Navigate to the admin page
        navigateTo('/admin');
      } else {
        // Navigate to the home page
        navigateTo('/');
      }

      // Handle authentication logic here
      setSuccess(true);
    } catch (err) {
      setErrMsg(err.message || 'Login Failed');
      errRef.current.focus();
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, success ? /*#__PURE__*/React.createElement("section", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "You are logged in!"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].a,
    href: "#"
  }, "Go to Home"))) : /*#__PURE__*/React.createElement("section", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errmsg : _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Sign In"), /*#__PURE__*/React.createElement("form", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input
  }), /*#__PURE__*/React.createElement("label", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    autoComplete: "off",
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input
  }), /*#__PURE__*/React.createElement("button", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Sign In")), /*#__PURE__*/React.createElement("p", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].togglePara
  }, "Need an Account?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].line,
    onClick: toggleLoginForm
  }, /*#__PURE__*/React.createElement("a", {
    className: _Login_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].a,
    href: "#"
  }, "Sign Up")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");




function NavBar(_ref) {
  let {
    user,
    setUser
  } = _ref;
  // Combine all props into a single object
  const navigateTo = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const navbar = document.querySelector(".".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBar));
    let lastScrollTop = 0;
    const handleScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.classList.add(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scrollDown);
      } else {
        navbar.classList.remove(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scrollDown);
      }
      lastScrollTop = scrollTop < 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  function handleLogOut() {
    _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.logOut();
    setUser(null);
    navigateTo('/');
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].innerNav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Search", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].search,
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LogoLink,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LogoContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LogoInnerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Logo,
    src: "/img/logo.jpg",
    alt: "Dean's Logo"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/home-logo-navy.png",
    alt: "Home Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))), user && user.role === 'admin' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/profile-logo-navy.png",
    alt: "Profile Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))) : user && user.role === 'teacher' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/teacher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/profile-logo-navy.png",
    alt: "Profile Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))) : user && user.role === 'parent' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/profile-logo-navy.png",
    alt: "Profile Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))) : user && user.role === 'student' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/student"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/profile-logo-navy.png",
    alt: "Profile Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))) : '', !user ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/data-logo-navy.png",
    alt: "Data Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))), !user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/auth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/login-navy.png",
    alt: "Login Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/",
    onClick: handleLogOut
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].iconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeIcon,
    src: "/img/logout-navy.png",
    alt: "Login Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].outerIcon,
    src: "/img/outer-circle.png",
    alt: "Outer Circle"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].name
  }, user.firstName, " ", user.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].email
  }, user.role))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/ParentCreateForm/ParentCreateForm.js":
/*!*************************************************************!*\
  !*** ./src/components/ParentCreateForm/ParentCreateForm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ParentCreateForm.module.scss */ "./src/components/ParentCreateForm/ParentCreateForm.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



 // Import your CSS module

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/users';
const ParentCreateForm = _ref => {
  let {
    user,
    setShowParentCreateForm
  } = _ref;
  const token = (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.getToken)();
  const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const confirmPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const campusNumRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const roleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Ref for role input
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [campusNum, setCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("".concat(user.campusNum));
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('parent'); // State for role

  const [validFirstName, setValidFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validLastName, setValidLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validEmail, setValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validPassword, setValidPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validConfirmPassword, setValidConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validCampusNum, setValidCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validRole, setValidRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // Always valid for hard-coded role

  const [firstNameFocus, setFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastNameFocus, setLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [emailFocus, setEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [passwordFocus, setPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    firstNameRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidFirstName(firstName.trim() !== '');
  }, [firstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidLastName(lastName.trim() !== '');
  }, [lastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidConfirmPassword(confirmPassword === password);
  }, [confirmPassword, password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [firstName, lastName, email, password, confirmPassword]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(token)
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          campusNum,
          role // Include role in the request body
        })
      });
      if (!response.ok) {
        throw new Error('Registration Failed');
      }
      const responseData = await response.json();
      setSuccess(true);

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Role is hard-coded, no need to reset
    } catch (err) {
      console.error(err); // Log the error to the console
      setErrMsg(err.message || 'Registration Failed');
      errRef.current.focus();
    }
  };
  const handleExit = async e => {
    e.preventDefault();
    setShowParentCreateForm(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, success ? /*#__PURE__*/React.createElement("section", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "Success!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].a,
    href: "#"
  }, "Sign In"))) : /*#__PURE__*/React.createElement("section", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errmsg : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Register"), /*#__PURE__*/React.createElement("form", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstName",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "First Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validFirstName ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validFirstName || !firstName ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    ref: firstNameRef,
    autoComplete: "off",
    onChange: e => setFirstName(e.target.value),
    value: firstName,
    required: true,
    "aria-invalid": validFirstName ? "false" : "true",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setFirstNameFocus(true),
    onBlur: () => setFirstNameFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastName",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Last Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validLastName ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validLastName || !lastName ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    ref: lastNameRef,
    autoComplete: "off",
    onChange: e => setLastName(e.target.value),
    value: lastName,
    required: true,
    "aria-invalid": validLastName ? "false" : "true",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setLastNameFocus(true),
    onBlur: () => setLastNameFocus(false)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "firstNameNote",
    className: firstNameFocus && !validFirstName ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your first name."), /*#__PURE__*/React.createElement("p", {
    id: "lastNameNote",
    className: lastNameFocus && !validLastName ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your last name.")), /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].emailAndCampusContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].email
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Email:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validEmail ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validEmail || !email ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    "aria-invalid": validEmail ? "false" : "true",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setEmailFocus(true),
    onBlur: () => setEmailFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "emailNote",
    className: emailFocus && !validEmail ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter a valid email address."), /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].passwordContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].pwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validPassword ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validPassword || !password ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    autoComplete: "off",
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    "aria-invalid": validPassword ? "false" : "true",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setPasswordFocus(true),
    onBlur: () => setPasswordFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirmPwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Confirm Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: confirmPassword && validConfirmPassword ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validConfirmPassword || !confirmPassword ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "confirmPassword",
    ref: confirmPasswordRef,
    autoComplete: "off",
    onChange: e => setConfirmPassword(e.target.value),
    value: confirmPassword,
    required: true,
    "aria-invalid": validConfirmPassword ? "false" : "true",
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setConfirmPasswordFocus(true),
    onBlur: () => setConfirmPasswordFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "passwordNote",
    className: passwordFocus && !validPassword ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Password must be 8 to 24 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."), /*#__PURE__*/React.createElement("p", {
    id: "confirmPasswordNote",
    className: confirmPasswordFocus && !validConfirmPassword ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please confirm your password."), /*#__PURE__*/React.createElement("button", {
    disabled: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword,
    className: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword ? _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].disabledButton : _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button
  }, "Create Parent User")), /*#__PURE__*/React.createElement("img", {
    onClick: handleExit,
    className: _ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].closeBtn,
    src: "/img/window-close.png",
    alt: "window-close"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParentCreateForm);

/***/ }),

/***/ "./src/components/Register/Register.js":
/*!*********************************************!*\
  !*** ./src/components/Register/Register.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.module.scss */ "./src/components/Register/Register.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



 // Import your CSS module

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/users/admin';
const Register = _ref => {
  let {
    toggleLoginForm,
    setUser
  } = _ref;
  const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const confirmPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const campusNumRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const roleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Ref for role input
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [campusNum, setCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('admin'); // State for role

  const [validFirstName, setValidFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validLastName, setValidLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validEmail, setValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validPassword, setValidPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validConfirmPassword, setValidConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validCampusNum, setValidCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validRole, setValidRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // Always valid for hard-coded role

  const [firstNameFocus, setFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastNameFocus, setLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [emailFocus, setEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [passwordFocus, setPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [campusNumFocus, setCampusNumFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [roleFocus, setRoleFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // State for role focus

  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    firstNameRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidFirstName(firstName.trim() !== '');
  }, [firstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidLastName(lastName.trim() !== '');
  }, [lastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidConfirmPassword(confirmPassword === password);
  }, [confirmPassword, password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidCampusNum(campusNum.trim() !== '');
  }, [campusNum]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [firstName, lastName, email, password, confirmPassword, campusNum]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword || !validCampusNum) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          campusNum,
          role // Include role in the request body
        })
      });
      if (!response.ok) {
        throw new Error('Registration Failed');
      }
      const responseData = await response.json();

      // Save the token in localStorage
      localStorage.setItem('token', responseData.token);

      // Set user data
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        campusNum: campusNum,
        role: role
      };
      setUser(userData);
      setSuccess(true);

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setCampusNum('');
      // Role is hard-coded, no need to reset
    } catch (err) {
      setErrMsg(err.message || 'Registration Failed');
      errRef.current.focus();
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, success ? /*#__PURE__*/React.createElement("section", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "Success!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].a,
    href: "#"
  }, "Sign In"))) : /*#__PURE__*/React.createElement("section", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errmsg : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Register"), /*#__PURE__*/React.createElement("form", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "First Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck,
    className: validFirstName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,
    className: validFirstName || !firstName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    ref: firstNameRef,
    autoComplete: "off",
    onChange: e => setFirstName(e.target.value),
    value: firstName,
    required: true,
    "aria-invalid": validFirstName ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setFirstNameFocus(true),
    onBlur: () => setFirstNameFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastName",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Last Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck,
    className: validLastName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,
    className: validLastName || !lastName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    ref: lastNameRef,
    autoComplete: "off",
    onChange: e => setLastName(e.target.value),
    value: lastName,
    required: true,
    "aria-invalid": validLastName ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setLastNameFocus(true),
    onBlur: () => setLastNameFocus(false)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "firstNameNote",
    className: firstNameFocus && !validFirstName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInfoCircle
  }), "Please enter your first name."), /*#__PURE__*/React.createElement("p", {
    id: "lastNameNote",
    className: lastNameFocus && !validLastName ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInfoCircle
  }), "Please enter your last name.")), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].emailAndCampusContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].email
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Email:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck,
    className: validEmail ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,
    className: validEmail || !email ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    "aria-invalid": validEmail ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setEmailFocus(true),
    onBlur: () => setEmailFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].campusNum
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "campusNum",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Campus Number:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck,
    className: validCampusNum ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,
    className: validCampusNum || !campusNum ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "campusNum",
    ref: campusNumRef,
    autoComplete: "off",
    onChange: e => setCampusNum(e.target.value),
    value: campusNum,
    required: true,
    "aria-invalid": validCampusNum ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setCampusNumFocus(true),
    onBlur: () => setCampusNumFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "emailNote",
    className: emailFocus && !validEmail ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInfoCircle
  }), "Please enter a valid email address."), /*#__PURE__*/React.createElement("p", {
    id: "campusNumNote",
    className: campusNumFocus && !validCampusNum ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInfoCircle
  }), "Please enter your campus number."), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].passwordContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].pwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck,
    className: validPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,
    className: validPassword || !password ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    autoComplete: "off",
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    "aria-invalid": validPassword ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setPasswordFocus(true),
    onBlur: () => setPasswordFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirmPwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Confirm Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck,
    className: confirmPassword && validConfirmPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes,
    className: validConfirmPassword || !confirmPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "confirmPassword",
    ref: confirmPasswordRef,
    autoComplete: "off",
    onChange: e => setConfirmPassword(e.target.value),
    value: confirmPassword,
    required: true,
    "aria-invalid": validConfirmPassword ? "false" : "true",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setConfirmPasswordFocus(true),
    onBlur: () => setConfirmPasswordFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "passwordNote",
    className: passwordFocus && !validPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInfoCircle
  }), "Password must be 8 to 24 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."), /*#__PURE__*/React.createElement("p", {
    id: "confirmPasswordNote",
    className: confirmPasswordFocus && !validConfirmPassword ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInfoCircle
  }), "Please confirm your password."), /*#__PURE__*/React.createElement("div", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].roleContainer
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "role",
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Role:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheck,
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid
  }), " ", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "role",
    ref: roleRef,
    autoComplete: "off",
    value: role,
    readOnly: true,
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setRoleFocus(true),
    onBlur: () => setRoleFocus(false)
  })), /*#__PURE__*/React.createElement("p", {
    id: "roleNote",
    className: roleFocus ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInfoCircle
  }), "Role is set to 'admin'.")), /*#__PURE__*/React.createElement("button", {
    disabled: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword || !validCampusNum,
    className: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword || !validCampusNum ? _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].disabledButton : _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button
  }, "Sign Up")), /*#__PURE__*/React.createElement("p", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].togglePara
  }, "Already registered?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].line,
    onClick: toggleLoginForm
  }, /*#__PURE__*/React.createElement("a", {
    className: _Register_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].a,
    href: "#"
  }, "Sign In")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./src/components/StudentCreateForm/StudentCreateForm.js":
/*!***************************************************************!*\
  !*** ./src/components/StudentCreateForm/StudentCreateForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentCreateForm.module.scss */ "./src/components/StudentCreateForm/StudentCreateForm.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



 // Import your CSS module

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/users';
const StudentCreateForm = _ref => {
  let {
    user,
    setShowStudentCreateForm
  } = _ref;
  const token = (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.getToken)();
  const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const confirmPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const campusNumRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const roleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Ref for role input
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [campusNum, setCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("".concat(user.campusNum));
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('student'); // State for role
  const [selectedTeachers, setSelectedTeachers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // State for selected teachers

  const [validFirstName, setValidFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validLastName, setValidLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validEmail, setValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validPassword, setValidPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validConfirmPassword, setValidConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validCampusNum, setValidCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validRole, setValidRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [firstNameFocus, setFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastNameFocus, setLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [emailFocus, setEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [passwordFocus, setPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    firstNameRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidFirstName(firstName.trim() !== '');
  }, [firstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidLastName(lastName.trim() !== '');
  }, [lastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidConfirmPassword(confirmPassword === password);
  }, [confirmPassword, password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [firstName, lastName, email, password, confirmPassword]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(token)
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          campusNum,
          role,
          // Include role in the request body
          teachers: selectedTeachers // Include selected teachers in the request body
        })
      });
      if (!response.ok) {
        throw new Error('Registration Failed');
      }
      const responseData = await response.json();
      setSuccess(true);

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Role is hard-coded, no need to reset
    } catch (err) {
      console.error(err); // Log the error to the console
      setErrMsg(err.message || 'Registration Failed');
      errRef.current.focus();
    }
  };
  const handleExit = async e => {
    e.preventDefault();
    console.log(user.teachers[0]._id);
    setShowStudentCreateForm(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, success ? /*#__PURE__*/React.createElement("section", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "Success!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].a,
    href: "#"
  }, "Sign In"))) : /*#__PURE__*/React.createElement("section", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errmsg : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Register"), /*#__PURE__*/React.createElement("form", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstName",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "First Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validFirstName ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validFirstName || !firstName ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    ref: firstNameRef,
    autoComplete: "off",
    onChange: e => setFirstName(e.target.value),
    value: firstName,
    required: true,
    "aria-invalid": validFirstName ? "false" : "true",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setFirstNameFocus(true),
    onBlur: () => setFirstNameFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastName",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Last Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validLastName ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validLastName || !lastName ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    ref: lastNameRef,
    autoComplete: "off",
    onChange: e => setLastName(e.target.value),
    value: lastName,
    required: true,
    "aria-invalid": validLastName ? "false" : "true",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setLastNameFocus(true),
    onBlur: () => setLastNameFocus(false)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "firstNameNote",
    className: firstNameFocus && !validFirstName ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your first name."), /*#__PURE__*/React.createElement("p", {
    id: "lastNameNote",
    className: lastNameFocus && !validLastName ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your last name.")), /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].emailAndCampusContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].email
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Email:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validEmail ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validEmail || !email ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    "aria-invalid": validEmail ? "false" : "true",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setEmailFocus(true),
    onBlur: () => setEmailFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "emailNote",
    className: emailFocus && !validEmail ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter a valid email address."), /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].passwordContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].pwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validPassword ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validPassword || !password ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    autoComplete: "off",
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    "aria-invalid": validPassword ? "false" : "true",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setPasswordFocus(true),
    onBlur: () => setPasswordFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirmPwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Confirm Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: confirmPassword && validConfirmPassword ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validConfirmPassword || !confirmPassword ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "confirmPassword",
    ref: confirmPasswordRef,
    autoComplete: "off",
    onChange: e => setConfirmPassword(e.target.value),
    value: confirmPassword,
    required: true,
    "aria-invalid": validConfirmPassword ? "false" : "true",
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setConfirmPasswordFocus(true),
    onBlur: () => setConfirmPasswordFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "passwordNote",
    className: passwordFocus && !validPassword ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Password must be 8 to 24 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."), /*#__PURE__*/React.createElement("p", {
    id: "confirmPasswordNote",
    className: confirmPasswordFocus && !validConfirmPassword ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please confirm your password."), /*#__PURE__*/React.createElement("div", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].teacherContainer
  }, /*#__PURE__*/React.createElement("label", {
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Select Teachers:"), user.teachers.map((teacher, index) => /*#__PURE__*/React.createElement("div", {
    key: index
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "teacher_".concat(index),
    value: teacher._id,
    onChange: e => {
      const teacherId = e.target.value;
      setSelectedTeachers(prevTeachers => {
        if (e.target.checked) {
          return [...prevTeachers, teacherId];
        } else {
          return prevTeachers.filter(id => id !== teacherId);
        }
      });
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "teacher_".concat(index)
  }, teacher.firstName)))), /*#__PURE__*/React.createElement("button", {
    disabled: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword,
    className: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword ? _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].disabledButton : _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button
  }, "Create Student User")), /*#__PURE__*/React.createElement("img", {
    onClick: handleExit,
    className: _StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].closeBtn,
    src: "/img/window-close.png",
    alt: "window-close"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentCreateForm);

/***/ }),

/***/ "./src/components/SubjectCollapsible/SubjectCollapsible.js":
/*!*****************************************************************!*\
  !*** ./src/components/SubjectCollapsible/SubjectCollapsible.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubjectCollapsible.module.scss */ "./src/components/SubjectCollapsible/SubjectCollapsible.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function SubjectCollapsible() {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const data = [{
    type: 'Math',
    currentAssignments: [{
      title: 'Fractions Assignment #1',
      subject: 'Math',
      createdAt: '12/22/2023'
    }, {
      title: 'History Essay',
      subject: 'Social Studies',
      createdAt: '12/1/2023'
    }],
    completedAssignments: [{
      title: 'Math thing',
      subject: 'Math',
      createdAt: '12/1/2023'
    }]
  }, {
    type: 'Science',
    currentAssignments: [{
      title: 'Weather Patterns',
      subject: 'Science',
      createdAt: '11/12/2023'
    }, {
      title: 'Harry Potter ch.6',
      subject: 'Reading',
      createdAt: '8/17/2023'
    }],
    completedAssignments: [{
      title: 'Science Lab Report',
      subject: 'Science',
      createdAt: '10/5/2023'
    }]
  }, {
    type: 'Reading',
    currentAssignments: [{
      title: 'To Kill a Mockingbird',
      subject: 'Reading',
      createdAt: '9/30/2023'
    }, {
      title: 'Great Expectations',
      subject: 'Reading',
      createdAt: '11/15/2023'
    }],
    completedAssignments: [{
      title: 'Harry Potter and the Philosopher\'s Stone',
      subject: 'Reading',
      createdAt: '8/3/2023'
    }]
  }
  // Add other subjects similarly
  ];
  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].accordion
  }, /*#__PURE__*/React.createElement("h2", {
    className: _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, "Assignments"), data.map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: "".concat(_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item, " ").concat(i === 0 ? _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstItem : '', " ").concat(i === data.length - 1 ? _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastItem : ''),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title, " ").concat(i === 0 ? _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstTitle : '', " ").concat(i === data.length - 1 ? _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastTitle : ''),
    onClick: () => toggle(i)
  }, /*#__PURE__*/React.createElement("h3", null, item.type), /*#__PURE__*/React.createElement("span", null, selected === i ? '-' : '+')), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content, " ").concat(selected === i ? _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].show : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contentContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/React.createElement("h4", null, "Current Assignments"), /*#__PURE__*/React.createElement("ul", null, item.currentAssignments.map((assignment, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("p", null, assignment.title), /*#__PURE__*/React.createElement("p", null, assignment.subject), /*#__PURE__*/React.createElement("p", null, assignment.createdAt))))), /*#__PURE__*/React.createElement("div", {
    className: _SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].section
  }, /*#__PURE__*/React.createElement("h4", null, "Completed Assignments"), /*#__PURE__*/React.createElement("ul", null, item.completedAssignments.map((assignment, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement("p", null, assignment.title), /*#__PURE__*/React.createElement("p", null, assignment.subject), /*#__PURE__*/React.createElement("p", null, assignment.createdAt)))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubjectCollapsible);

/***/ }),

/***/ "./src/components/TeacherCreateForm/TeacherCreateForm.js":
/*!***************************************************************!*\
  !*** ./src/components/TeacherCreateForm/TeacherCreateForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeacherCreateForm.module.scss */ "./src/components/TeacherCreateForm/TeacherCreateForm.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



 // Import your CSS module

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/users';
const TeacherCreateForm = _ref => {
  let {
    user,
    setShowTeacherCreateForm
  } = _ref;
  const token = (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.getToken)();
  const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const confirmPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const campusNumRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const roleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Ref for role input
  const errRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [campusNum, setCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("".concat(user.campusNum));
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('teacher'); // State for role

  const [validFirstName, setValidFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validLastName, setValidLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validEmail, setValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validPassword, setValidPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validConfirmPassword, setValidConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [validCampusNum, setValidCampusNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [validRole, setValidRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // Always valid for hard-coded role

  const [firstNameFocus, setFirstNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastNameFocus, setLastNameFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [emailFocus, setEmailFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [passwordFocus, setPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    firstNameRef.current.focus();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidFirstName(firstName.trim() !== '');
  }, [firstName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidLastName(lastName.trim() !== '');
  }, [lastName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setValidConfirmPassword(confirmPassword === password);
  }, [confirmPassword, password]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setErrMsg('');
  }, [firstName, lastName, email, password, confirmPassword]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(token)
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          campusNum,
          role // Include role in the request body
        })
      });
      if (!response.ok) {
        throw new Error('Registration Failed');
      }
      const responseData = await response.json();
      setSuccess(true);

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Role is hard-coded, no need to reset
    } catch (err) {
      console.error(err); // Log the error to the console
      setErrMsg(err.message || 'Registration Failed');
      errRef.current.focus();
    }
  };
  const handleExit = async e => {
    e.preventDefault();
    setShowTeacherCreateForm(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, success ? /*#__PURE__*/React.createElement("section", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("h1", null, "Success!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].a,
    href: "#"
  }, "Sign In"))) : /*#__PURE__*/React.createElement("section", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].section
  }, /*#__PURE__*/React.createElement("p", {
    ref: errRef,
    className: errMsg ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].errmsg : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen,
    "aria-live": "assertive"
  }, errMsg), /*#__PURE__*/React.createElement("h1", null, "Register"), /*#__PURE__*/React.createElement("form", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].nameContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstName",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "First Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validFirstName ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validFirstName || !firstName ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    ref: firstNameRef,
    autoComplete: "off",
    onChange: e => setFirstName(e.target.value),
    value: firstName,
    required: true,
    "aria-invalid": validFirstName ? "false" : "true",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setFirstNameFocus(true),
    onBlur: () => setFirstNameFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lName
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastName",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Last Name:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validLastName ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validLastName || !lastName ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    ref: lastNameRef,
    autoComplete: "off",
    onChange: e => setLastName(e.target.value),
    value: lastName,
    required: true,
    "aria-invalid": validLastName ? "false" : "true",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setLastNameFocus(true),
    onBlur: () => setLastNameFocus(false)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "firstNameNote",
    className: firstNameFocus && !validFirstName ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your first name."), /*#__PURE__*/React.createElement("p", {
    id: "lastNameNote",
    className: lastNameFocus && !validLastName ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter your last name.")), /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].emailAndCampusContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].email
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Email:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validEmail ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validEmail || !email ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    ref: emailRef,
    autoComplete: "off",
    onChange: e => setEmail(e.target.value),
    value: email,
    required: true,
    "aria-invalid": validEmail ? "false" : "true",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setEmailFocus(true),
    onBlur: () => setEmailFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "emailNote",
    className: emailFocus && !validEmail ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please enter a valid email address."), /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].passwordContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].pwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "password",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: validPassword ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validPassword || !password ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: passwordRef,
    autoComplete: "off",
    onChange: e => setPassword(e.target.value),
    value: password,
    required: true,
    "aria-invalid": validPassword ? "false" : "true",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setPasswordFocus(true),
    onBlur: () => setPasswordFocus(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].confirmPwd
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, "Confirm Password:", /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheck,
    className: confirmPassword && validConfirmPassword ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].valid : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide
  }), /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes,
    className: validConfirmPassword || !confirmPassword ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hide : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].invalid
  })), /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "confirmPassword",
    ref: confirmPasswordRef,
    autoComplete: "off",
    onChange: e => setConfirmPassword(e.target.value),
    value: confirmPassword,
    required: true,
    "aria-invalid": validConfirmPassword ? "false" : "true",
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input,
    onFocus: () => setConfirmPasswordFocus(true),
    onBlur: () => setConfirmPasswordFocus(false)
  }))), /*#__PURE__*/React.createElement("p", {
    id: "passwordNote",
    className: passwordFocus && !validPassword ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Password must be 8 to 24 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."), /*#__PURE__*/React.createElement("p", {
    id: "confirmPasswordNote",
    className: confirmPasswordFocus && !validConfirmPassword ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].instructions : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].offscreen
  }, /*#__PURE__*/React.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faInfoCircle
  }), "Please confirm your password."), /*#__PURE__*/React.createElement("button", {
    disabled: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword,
    className: !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword ? _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].disabledButton : _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].button
  }, "Create Teacher User")), /*#__PURE__*/React.createElement("img", {
    onClick: handleExit,
    className: _TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].closeBtn,
    src: "/img/window-close.png",
    alt: "window-close"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherCreateForm);

/***/ }),

/***/ "./src/components/TeacherReadingTracker/TeacherReadingTracker.js":
/*!***********************************************************************!*\
  !*** ./src/components/TeacherReadingTracker/TeacherReadingTracker.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherReadingTracker.module.scss */ "./src/components/TeacherReadingTracker/TeacherReadingTracker.module.scss");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function TeacherReadingTracker() {
  const gradeOptions = [{
    value: 'Student1',
    label: 'Student1'
  }, {
    value: 'Student2',
    label: 'Student2'
  }, {
    value: 'Student3',
    label: 'Student3'
  }, {
    value: 'Student4',
    label: 'Student4'
  }, {
    value: 'Student5',
    label: 'Student5'
  }, {
    value: 'Student6',
    label: 'Student6'
  }];
  const scaleOptions = [{
    value: 'AR',
    label: 'AR'
  }, {
    value: 'Fountas & Pinnell',
    label: 'Fountas & Pinnell'
  }, {
    value: 'Lexile',
    label: 'Lexile'
  }, {
    value: 'DRA',
    label: 'DRA'
  }, {
    value: 'Reading Recovery',
    label: 'Reading Recovery'
  }, {
    value: 'Rigby',
    label: 'Rigby'
  }, {
    value: 'Basal',
    label: 'Basal'
  }];
  const [scoreOptions, setScoreOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const generateScoreOptions = value => {
    let options = [];
    switch (value) {
      case 'AR':
        options = [{
          value: 'K',
          label: 'K'
        }, {
          value: 'K.5',
          label: 'K.5'
        }, {
          value: '1.0',
          label: '1.0'
        }, {
          value: '1.1',
          label: '1.1'
        }, {
          value: '1.2',
          label: '1.2'
        }, {
          value: '1.4',
          label: '1.4'
        }, {
          value: '1.5',
          label: '1.5'
        }, {
          value: '1.7',
          label: '1.7'
        }, {
          value: '1.8',
          label: '1.8'
        }, {
          value: '2.0',
          label: '2.0'
        }, {
          value: '2.3',
          label: '2.3'
        }, {
          value: '2.6',
          label: '2.6'
        }, {
          value: '2.9',
          label: '2.9'
        }, {
          value: '3.0',
          label: '3.0'
        }, {
          value: '3.3',
          label: '3.3'
        }, {
          value: '3.6',
          label: '3.6'
        }, {
          value: '4.0',
          label: '4.0'
        }, {
          value: '4.3',
          label: '4.3'
        }, {
          value: '4.6',
          label: '4.6'
        }, {
          value: '4.8',
          label: '4.8'
        }, {
          value: '5.0',
          label: '5.0'
        }, {
          value: '5.3',
          label: '5.3'
        }, {
          value: '5.6',
          label: '5.6'
        }, {
          value: '6.0',
          label: '6.0'
        }, {
          value: '6.5',
          label: '6.5'
        }, {
          value: '7.0',
          label: '7.0'
        }, {
          value: '7.3',
          label: '7.3'
        }, {
          value: '7.6',
          label: '7.6'
        }, {
          value: '8+',
          label: '8+'
        }];
        break;
      case 'Fountas & Pinnell':
        options = [{
          value: 'A',
          label: 'A'
        }, {
          value: 'B',
          label: 'B'
        }, {
          value: 'C',
          label: 'C'
        }, {
          value: 'D',
          label: 'D'
        }, {
          value: 'E',
          label: 'E'
        }, {
          value: 'F',
          label: 'F'
        }, {
          value: 'G',
          label: 'G'
        }, {
          value: 'H',
          label: 'H'
        }, {
          value: 'I',
          label: 'I'
        }, {
          value: 'J',
          label: 'J'
        }, {
          value: 'K',
          label: 'K'
        }, {
          value: 'L',
          label: 'L'
        }, {
          value: 'M',
          label: 'M'
        }, {
          value: 'N',
          label: 'N'
        }, {
          value: 'O',
          label: 'O'
        }, {
          value: 'P',
          label: 'P'
        }, {
          value: 'Q',
          label: 'Q'
        }, {
          value: 'R',
          label: 'R'
        }, {
          value: 'S',
          label: 'S'
        }, {
          value: 'T',
          label: 'T'
        }, {
          value: 'U',
          label: 'U'
        }, {
          value: 'V',
          label: 'V'
        }, {
          value: 'W',
          label: 'W'
        }, {
          value: 'X',
          label: 'X'
        }, {
          value: 'Y',
          label: 'Y'
        }, {
          value: 'Z',
          label: 'Z'
        }, {
          value: 'Z+',
          label: 'Z+'
        }];
        break;
      case 'Lexile':
        options = [{
          value: '<100',
          label: '<100'
        }, {
          value: '100-199',
          label: '100-199'
        }, {
          value: '200-299',
          label: '200-299'
        }, {
          value: '300',
          label: '300'
        }, {
          value: '400',
          label: '400'
        }, {
          value: '500',
          label: '500'
        }, {
          value: '600',
          label: '600'
        }, {
          value: '700',
          label: '700'
        }, {
          value: '800',
          label: '800'
        }, {
          value: '900',
          label: '900'
        }, {
          value: '1000',
          label: '1000'
        }, {
          value: '1100',
          label: '1100'
        }, {
          value: '1200',
          label: '1200'
        }, {
          value: '1200+',
          label: '1200+'
        }];
        break;
      case 'DRA':
        options = [{
          value: 'A.1',
          label: 'A.1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '6-8',
          label: '6-8'
        }, {
          value: '10',
          label: '10'
        }, {
          value: '12',
          label: '12'
        }, {
          value: '14',
          label: '14'
        }, {
          value: '16',
          label: '16'
        }, {
          value: '18',
          label: '18'
        }, {
          value: '20',
          label: '20'
        }, {
          value: '24',
          label: '24'
        }, {
          value: '28',
          label: '28'
        }, {
          value: '30',
          label: '30'
        }, {
          value: '34',
          label: '34'
        }, {
          value: '38',
          label: '38'
        }, {
          value: '38-40',
          label: '38-40'
        }, {
          value: '40',
          label: '40'
        }, {
          value: '40-44',
          label: '40-44'
        }, {
          value: '44',
          label: '44'
        }, {
          value: '44-60',
          label: '44-60'
        }, {
          value: '50',
          label: '50'
        }, {
          value: '50-60',
          label: '50-60'
        }, {
          value: '60',
          label: '60'
        }, {
          value: '60-70',
          label: '60-70'
        }, {
          value: '70',
          label: '70'
        }, {
          value: '70-80',
          label: '70-80'
        }, {
          value: '70-120',
          label: '70-120'
        }, {
          value: '80',
          label: '80'
        }, {
          value: '80+',
          label: '80+'
        }];
        break;
      case 'Reading Recovery':
        options = [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        }, {
          value: '6',
          label: '6'
        }, {
          value: '7',
          label: '7'
        }, {
          value: '8',
          label: '8'
        }, {
          value: '9',
          label: '9'
        }, {
          value: '10',
          label: '10'
        }, {
          value: '11',
          label: '11'
        }, {
          value: '12',
          label: '12'
        }, {
          value: '13',
          label: '13'
        }, {
          value: '14',
          label: '14'
        }, {
          value: '15',
          label: '15'
        }, {
          value: '16',
          label: '16'
        }, {
          value: '17',
          label: '17'
        }, {
          value: '18',
          label: '18'
        }, {
          value: '19',
          label: '19'
        }, {
          value: '20',
          label: '20'
        }];
        break;
      case 'Rigby':
        options = [{
          value: '1-2',
          label: '1-2'
        }, {
          value: '3-4',
          label: '3-4'
        }, {
          value: '5',
          label: '5'
        }, {
          value: '6',
          label: '6'
        }, {
          value: '7',
          label: '7'
        }, {
          value: '8',
          label: '8'
        }, {
          value: '9',
          label: '9'
        }, {
          value: '10',
          label: '10'
        }, {
          value: '11',
          label: '11'
        }, {
          value: '12',
          label: '12'
        }, {
          value: '13',
          label: '13'
        }, {
          value: '14-15',
          label: '14-15'
        }, {
          value: '16-17',
          label: '16-17'
        }, {
          value: '18',
          label: '18'
        }, {
          value: '19',
          label: '19'
        }, {
          value: '20+',
          label: '20+'
        }];
        break;
      case 'Basal':
        options = [{
          value: 'Readiness',
          label: 'Readiness'
        }, {
          value: 'Preprim. 1',
          label: 'Preprim. 1'
        }, {
          value: 'Preprim. 2',
          label: 'Preprim. 2'
        }, {
          value: 'Preprim. 3',
          label: 'Preprim. 3'
        }, {
          value: 'Primer',
          label: 'Primer'
        }, {
          value: 'Primer+',
          label: 'Primer+'
        }, {
          value: 'Grade 1',
          label: 'Grade 1'
        }, {
          value: 'Grade 1 (late)',
          label: 'Grade 1 (late)'
        }, {
          value: 'Grade 2',
          label: 'Grade 2'
        }, {
          value: 'Grade 3',
          label: 'Grade 3'
        }, {
          value: 'Grade 4',
          label: 'Grade 4'
        }, {
          value: 'Grade 5',
          label: 'Grade 5'
        }, {
          value: 'Grade 6',
          label: 'Grade 6'
        }];
        break;
      default:
        options = [];
        break;
    }
    setScoreOptions(options);
  };
  const optionStyles = {
    option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      color: 'black',
      // Change the text color here
      maxHeight: '15rem',
      overflow: 'scroll'
    }),
    control: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      border: '2px solid var(--text-light)',
      // Remove the border
      outline: 'none' // Remove the outline
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ReadingTracker
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].headerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, "Reading Levels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selectorContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selector,
    options: gradeOptions,
    styles: optionStyles,
    placeholder: "Student"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selector,
    options: scaleOptions,
    styles: optionStyles,
    placeholder: "Type",
    onChange: selectedOption => generateScoreOptions(selectedOption.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scoringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].goalContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].goalLabel
  }, "Goal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].selector,
    options: scoreOptions,
    styles: optionStyles,
    placeholder: "Scale"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].targetContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].targetLabel
  }, "Target %: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].targetInnerContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "80"), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "5"), " Students"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].onLevelLabel
  }, "On Level: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].onLevelSpan
  }, "75%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Next Check-In: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkInSpan
  }, "April 30, 2024"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].teacherSelector
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Teacher 4")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherReadingTracker);

/***/ }),

/***/ "./src/components/TeamCollapsible/TeamCollapsible.js":
/*!***********************************************************!*\
  !*** ./src/components/TeamCollapsible/TeamCollapsible.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamCollapsible.module.scss */ "./src/components/TeamCollapsible/TeamCollapsible.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TeamCollapsible() {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const data = [{
    classTitle: 'Mr. Johnson',
    students: [{
      name: 'Johnny'
    }, {
      name: 'Sally'
    }]
  }, {
    classTitle: 'Mrs. Horn',
    students: [{
      name: 'Jimmy'
    }, {
      name: 'Susie'
    }]
  }, {
    classTitle: 'Mrs. Wade',
    students: [{
      name: 'Dylan'
    }, {
      name: 'Marie'
    }]
  }, {
    classTitle: 'Mr. Pierson',
    students: [{
      name: 'Reese'
    }, {
      name: 'Dean'
    }]
  }];
  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].accordion
  }, /*#__PURE__*/React.createElement("h2", {
    className: _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header
  }, "Team"), data.map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: "".concat(_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item, " ").concat(i === 0 ? _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstItem : '', " ").concat(i === data.length - 1 ? _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastItem : ''),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title, " ").concat(i === 0 ? _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].firstTitle : '', " ").concat(i === data.length - 1 ? _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lastTitle : ''),
    onClick: () => toggle(i)
  }, /*#__PURE__*/React.createElement("h3", null, item.classTitle), /*#__PURE__*/React.createElement("span", null, selected === i ? '-' : '+')), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].content, " ").concat(selected === i ? _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].show : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contentContainer
  }, item.students.map((student, index) => /*#__PURE__*/React.createElement("div", {
    key: index
  }, /*#__PURE__*/React.createElement("p", {
    className: _TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].studentName
  }, student.name)))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamCollapsible);

/***/ }),

/***/ "./src/context/AuthProvider.js":
/*!*************************************!*\
  !*** ./src/context/AuthProvider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const AuthProvider = _ref => {
  let {
    children
  } = _ref;
  const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: {
      auth,
      setAuth
    }
  }, children);
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/index.module.scss");
/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/AuthProvider */ "./src/context/AuthProvider.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));

root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/React.createElement(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));

/***/ }),

/***/ "./src/pages/AdminPage/AdminPage.js":
/*!******************************************!*\
  !*** ./src/pages/AdminPage/AdminPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPage.module.scss */ "./src/pages/AdminPage/AdminPage.module.scss");
/* harmony import */ var _components_BarGraph_BarGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BarGraph/BarGraph */ "./src/components/BarGraph/BarGraph.js");
/* harmony import */ var _components_AdminReadingTracker_AdminReadingTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AdminReadingTracker/AdminReadingTracker */ "./src/components/AdminReadingTracker/AdminReadingTracker.js");
/* harmony import */ var _components_Collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Collapsible/Collapsible */ "./src/components/Collapsible/Collapsible.js");
/* harmony import */ var _components_AdminCreateForm_AdminCreateForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AdminCreateForm/AdminCreateForm */ "./src/components/AdminCreateForm/AdminCreateForm.js");
/* harmony import */ var _components_TeacherCreateForm_TeacherCreateForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TeacherCreateForm/TeacherCreateForm */ "./src/components/TeacherCreateForm/TeacherCreateForm.js");
/* harmony import */ var _components_ParentCreateForm_ParentCreateForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ParentCreateForm/ParentCreateForm */ "./src/components/ParentCreateForm/ParentCreateForm.js");
/* harmony import */ var _components_StudentCreateForm_StudentCreateForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/StudentCreateForm/StudentCreateForm */ "./src/components/StudentCreateForm/StudentCreateForm.js");









function AdminPage(_ref) {
  let {
    user
  } = _ref;
  const [showAdminCreateForm, setShowAdminCreateForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showTeacherCreateForm, setShowTeacherCreateForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showParentCreateForm, setShowParentCreateForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showStudentCreateForm, setShowStudentCreateForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleAdminCreateForm = () => {
    setShowAdminCreateForm(prevState => !prevState);
    setShowTeacherCreateForm(false);
    setShowParentCreateForm(false);
    setShowStudentCreateForm(false);
  };
  const toggleTeacherCreateForm = () => {
    setShowTeacherCreateForm(prevState => !prevState);
    setShowAdminCreateForm(false);
    setShowParentCreateForm(false);
    setShowStudentCreateForm(false);
  };
  const toggleParentCreateForm = () => {
    setShowParentCreateForm(prevState => !prevState);
    setShowTeacherCreateForm(false);
    setShowAdminCreateForm(false);
    setShowStudentCreateForm(false);
  };
  const toggleStudentCreateForm = () => {
    setShowStudentCreateForm(prevState => !prevState);
    setShowTeacherCreateForm(false);
    setShowParentCreateForm(false);
    setShowAdminCreateForm(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AdminPage
  }, showAdminCreateForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].createForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AdminCreateForm_AdminCreateForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user,
    setShowAdminCreateForm: setShowAdminCreateForm
  })), showTeacherCreateForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].createForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TeacherCreateForm_TeacherCreateForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user,
    setShowTeacherCreateForm: setShowTeacherCreateForm
  })), showParentCreateForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].createForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ParentCreateForm_ParentCreateForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: user,
    setShowParentCreateForm: setShowParentCreateForm
  })), showStudentCreateForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].createForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_StudentCreateForm_StudentCreateForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: user,
    setShowStudentCreateForm: setShowStudentCreateForm
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Header
  }, "Welcome, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].span
  }, user.firstName), "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtnContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtn,
    onClick: toggleAdminCreateForm
  }, "Add Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtn,
    onClick: toggleTeacherCreateForm
  }, "Add Teacher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtn,
    onClick: toggleParentCreateForm
  }, "Add Parent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtn,
    onClick: toggleStudentCreateForm
  }, "Add Student")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mainContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].leftContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BarGraph_BarGraph__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AdminReadingTracker_AdminReadingTracker__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rightContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: user
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPage);

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPage.module.scss */ "./src/pages/AuthPage/AuthPage.module.scss");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _components_Register_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Register/Register */ "./src/components/Register/Register.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };
  return /*#__PURE__*/React.createElement("main", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AuthPage
  }, showLogin ? /*#__PURE__*/React.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setUser: setUser,
    toggleLoginForm: toggleLoginForm
  }) : /*#__PURE__*/React.createElement(_components_Register_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUser: setUser,
    toggleLoginForm: toggleLoginForm
  }));
}

/***/ }),

/***/ "./src/pages/DataPage/DataPage.js":
/*!****************************************!*\
  !*** ./src/pages/DataPage/DataPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function DataPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "DataPage");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataPage);

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");


function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].HomePage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].introContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].heading
  }, "The next step forward in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].span
  }, "RTI")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].introAndImgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].intro
  }, "Welcome to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].titleSpan
  }, "Dean's List"), "! We are a dedicated team passionate about transforming Response to Intervention (RTI) and improving educational outcomes for all students. At Dean's List, we believe in the power of data-driven decision-making and personalized interventions to support students who are struggling academically or behaviorally. Our mission is to provide educators, administrators, and parents with an intuitive platform that simplifies the RTI process and empowers them to make informed choices. By centralizing student data, tracking progress, and generating actionable insights, we aim to revolutionize RTI implementation. Our platform streamlines data collection, facilitates easy monitoring of student performance, and promotes collaboration among stakeholders for effective intervention planning and implementation. We understand the challenges faced by educators and the importance of timely, targeted interventions. With Dean's List, you can access a comprehensive toolkit to identify at-risk students, monitor their progress, and implement evidence-based strategies to unlock their full potential. Join us on this journey as we work together to create a supportive and inclusive learning environment where every student can thrive. Together, we can make a lasting impact in education through the power of RTI."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].owlImage,
    src: "/img/owl-image-prime.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Request Access TODAY!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].contentContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textImageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].p
  }, "Response to Intervention (RTI) is a multi-tiered approach to identify and support students who are struggling academically or behaviorally. It focuses on early intervention, data-driven decision-making, and targeted support to improve student outcomes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image,
    src: "/img/class.jpg",
    alt: "class image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textImageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].p
  }, "At Dean's List, we leverage the power of data collection and analysis to enhance RTI implementation. By centralizing student data, tracking progress, and generating actionable insights, we empower educators, administrators, and parents to make informed decisions and provide personalized interventions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image,
    src: "/img/student_one.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textImageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].p
  }, "Our platform simplifies the process of data collection, allows for easy monitoring of student performance, and enables collaboration among stakeholders for effective intervention planning and implementation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image,
    src: "/img/student_two.jpg"
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/pages/ParentPage/ParentPage.js":
/*!********************************************!*\
  !*** ./src/pages/ParentPage/ParentPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ParentPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "ParentPage");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParentPage);

/***/ }),

/***/ "./src/pages/StudentPage/StudentPage.js":
/*!**********************************************!*\
  !*** ./src/pages/StudentPage/StudentPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentPage.module.scss */ "./src/pages/StudentPage/StudentPage.module.scss");
/* harmony import */ var _components_SubjectCollapsible_SubjectCollapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SubjectCollapsible/SubjectCollapsible */ "./src/components/SubjectCollapsible/SubjectCollapsible.js");



function StudentPage(_ref) {
  let {
    user
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].StudentPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Header
  }, "Welcome, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].span
  }, user.firstName), "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mainContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].leftContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SubjectCollapsible_SubjectCollapsible__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rightContainer
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentPage);

/***/ }),

/***/ "./src/pages/TeacherPage/TeacherPage.js":
/*!**********************************************!*\
  !*** ./src/pages/TeacherPage/TeacherPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherPage.module.scss */ "./src/pages/TeacherPage/TeacherPage.module.scss");
/* harmony import */ var _components_BarGraph_BarGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BarGraph/BarGraph */ "./src/components/BarGraph/BarGraph.js");
/* harmony import */ var _components_TeacherReadingTracker_TeacherReadingTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TeacherReadingTracker/TeacherReadingTracker */ "./src/components/TeacherReadingTracker/TeacherReadingTracker.js");
/* harmony import */ var _components_AssignmentCollapsible_AssignmentCollapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AssignmentCollapsible/AssignmentCollapsible */ "./src/components/AssignmentCollapsible/AssignmentCollapsible.js");
/* harmony import */ var _components_ClassCollapsible_ClassCollapsible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ClassCollapsible/ClassCollapsible */ "./src/components/ClassCollapsible/ClassCollapsible.js");
/* harmony import */ var _components_TeamCollapsible_TeamCollapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/TeamCollapsible/TeamCollapsible */ "./src/components/TeamCollapsible/TeamCollapsible.js");
/* harmony import */ var _components_ParentCreateForm_ParentCreateForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ParentCreateForm/ParentCreateForm */ "./src/components/ParentCreateForm/ParentCreateForm.js");
/* harmony import */ var _components_StudentCreateForm_StudentCreateForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/StudentCreateForm/StudentCreateForm */ "./src/components/StudentCreateForm/StudentCreateForm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");









function TeacherPage(_ref) {
  let {
    user
  } = _ref;
  const [showParentCreateForm, setShowParentCreateForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showStudentCreateForm, setShowStudentCreateForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleParentCreateForm = () => {
    setShowParentCreateForm(prevState => !prevState);
    setShowStudentCreateForm(false);
  };
  const toggleStudentCreateForm = () => {
    setShowStudentCreateForm(prevState => !prevState);
    setShowParentCreateForm(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].TeacherPage
  }, showParentCreateForm && /*#__PURE__*/React.createElement("div", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].createForm
  }, /*#__PURE__*/React.createElement(_components_ParentCreateForm_ParentCreateForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: user,
    setShowParentCreateForm: setShowParentCreateForm
  })), showStudentCreateForm && /*#__PURE__*/React.createElement("div", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].createForm
  }, /*#__PURE__*/React.createElement(_components_StudentCreateForm_StudentCreateForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: user,
    setShowStudentCreateForm: setShowStudentCreateForm
  })), /*#__PURE__*/React.createElement("h1", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Header
  }, "Welcome, ", /*#__PURE__*/React.createElement("span", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].span
  }, user.firstName), "!"), /*#__PURE__*/React.createElement("div", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtnContainer
  }, /*#__PURE__*/React.createElement("button", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtn,
    onClick: toggleParentCreateForm
  }, "Add Parent"), /*#__PURE__*/React.createElement("button", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].addBtn,
    onClick: toggleStudentCreateForm
  }, "Add Student")), /*#__PURE__*/React.createElement("div", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mainContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].leftContainer
  }, /*#__PURE__*/React.createElement(_components_BarGraph_BarGraph__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement(_components_TeacherReadingTracker_TeacherReadingTracker__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: _TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rightContainer
  }, /*#__PURE__*/React.createElement(_components_AssignmentCollapsible_AssignmentCollapsible__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_components_ClassCollapsible_ClassCollapsible__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(_components_TeamCollapsible_TeamCollapsible__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherPage);

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-service */ "./src/utilities/users-service.js");

async function sendRequest(url) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const options = {
    method
  };
  if (payload) {
    options.headers = {
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(payload);
  }
  const token = (0,_users_service__WEBPACK_IMPORTED_MODULE_0__.getToken)();
  if (token) {
    // Ensure options.headers is initialized if it doesn't exist
    options.headers = options.headers || {};
    options.headers.Authorization = "Bearer ".concat(token);
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

/***/ }),

/***/ "./src/utilities/users-api.js":
/*!************************************!*\
  !*** ./src/utilities/users-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findUser: () => (/* binding */ findUser),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   initialSignUp: () => (/* binding */ initialSignUp),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/users';
function initialSignUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/admin"), 'POST', userData);
}
function signUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', userData);
}
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function resetPassword(emailData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/reset-password"), 'POST', emailData);
}
function findUser(userId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(userId));
}
function index() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/"));
}

// export async function customerSupportRequest(name, email, message, attachment) {
//   return sendRequest(`${BASE_URL}/support`, 'POST', { name, email, message, attachment });
// }

/***/ }),

/***/ "./src/utilities/users-service.js":
/*!****************************************!*\
  !*** ./src/utilities/users-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   logOut: () => (/* binding */ logOut)
/* harmony export */ });
/* unused harmony exports initialSignUp, signUp, login, getProfileUser, indexUsers, resetPassword, updatePasswordWithToken, customerSupportRequest */
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const BASE_URL = '/api/users';
async function initialSignUp(userData) {
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.initialSignUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}
async function signUp(userData) {
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.signUp(userData);
  return getUser();
}
async function login(credentials, rememberMe, navigate) {
  try {
    // Pass credentials and rememberMe option to the API call
    const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.login(_objectSpread(_objectSpread({}, credentials), {}, {
      rememberMe
    }));
    localStorage.setItem('token', token);
    const user = getUser();
    console.log("User:", user);

    // Redirect to homepage upon successful login
    navigate('/'); // Replace '/' with the path of your homepage

    return user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}
function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const user = _users_api__WEBPACK_IMPORTED_MODULE_0__.findUser(payload.user._id); // Return user object from token payload
    return user;
  } catch (error) {
    console.error("Error parsing user from token:", error);
    return null; // Return null if there's an error parsing the token
  }
}
async function getProfileUser(userId) {
  try {
    const foundUser = await _users_api__WEBPACK_IMPORTED_MODULE_0__.findUser(userId);
    return foundUser;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
async function indexUsers() {
  console.log('indexing users');
  try {
    const foundUsers = await _users_api__WEBPACK_IMPORTED_MODULE_0__.index();
    return foundUsers;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
function logOut() {
  localStorage.removeItem('token');
}

// Password reset functions
async function resetPassword(emailData) {
  try {
    await _users_api__WEBPACK_IMPORTED_MODULE_0__.resetPassword(emailData);
    return true;
  } catch (error) {
    console.error("Password Reset Error:", error);
    throw new Error("Failed to reset password.");
  }
}
async function updatePasswordWithToken(token, passwordData) {
  try {
    const response = await fetch("/api/users/reset-password/".concat(token), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(passwordData)
    });
    if (!response.ok) {
      throw new Error('Failed to update password');
    }
    return true; // Password update successful
  } catch (error) {
    console.error('Password Update Error:', error);
    throw new Error('Failed to update password.');
  }
}

// New function for support ticket request
async function customerSupportRequest(formData) {
  try {
    // Log FormData entries
    for (const entry of formData.entries()) {
      console.log(entry);
    }

    // Make POST request for support ticket using FormData
    const response = await fetch("".concat(BASE_URL, "/support"), {
      method: 'POST',
      body: formData // Pass formData directly as the body
    });
    if (response.ok) {
      return true; // Support ticket request successful
    } else {
      throw new Error('Failed to submit support ticket');
    }
  } catch (error) {
    console.error('Support Ticket Request Error:', error);
    throw new Error('Failed to submit support ticket.');
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/img/star-bg.png */ "./public/img/star-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  width: 100%;
  height: 100vh;
  font-family: "Dekko", cursive;
  color: var(--text-dark);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 25%;
}
body .IMqMrT2eGOGeFiLbCAGg {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 7vh;
  background-color: white;
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,WAAA;EACA,aAAA;EACA,6BAAA;EACA,uBAAA;EACA,yDAAA;EACA,oBAAA;AACJ;AAAI;EACI,UAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;AAER","sourcesContent":["body {\n    margin: 0;\n    width: 100%;\n    height: 100vh;\n    font-family: \"Dekko\", cursive;\n    color: var(--text-dark);\n    background-image: url('../public/img/star-bg.png');\n    background-size: 25%;\n    .App {\n        width: 80%;\n        height: 100%;\n        margin: 0 auto;\n        padding: 7vh;\n        background-color: white;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `IMqMrT2eGOGeFiLbCAGg`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AdminCreateForm/AdminCreateForm.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AdminCreateForm/AdminCreateForm.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cNmbeFKj5iw69EBHL52G {
  width: 100%;
  min-height: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 3rem;
  border: 0.3rem solid var(--text-dark);
  background-color: var(--text-light);
  position: fixed;
  z-index: 1000;
}

.XMgtGK3QwjlklvHzLZw4, .GshDBiltRtB4h0fOVt_z, .tWF2XzdHqWamkldkuHMY {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.XMgtGK3QwjlklvHzLZw4 .qpOiymCdVPdckGSzSYpK, .XMgtGK3QwjlklvHzLZw4 .BERo_ReF1iKL57OAzWze, .XMgtGK3QwjlklvHzLZw4 .dbze4ZPSkU07uBdCo7wd, .XMgtGK3QwjlklvHzLZw4 .bdIsGQOYaotCY0uLVOi4, .XMgtGK3QwjlklvHzLZw4 .daCOeUtJGYVioxrPr2mz, .XMgtGK3QwjlklvHzLZw4 .E280JlKdPfWlumfC9faV, .GshDBiltRtB4h0fOVt_z .qpOiymCdVPdckGSzSYpK, .GshDBiltRtB4h0fOVt_z .BERo_ReF1iKL57OAzWze, .GshDBiltRtB4h0fOVt_z .dbze4ZPSkU07uBdCo7wd, .GshDBiltRtB4h0fOVt_z .bdIsGQOYaotCY0uLVOi4, .GshDBiltRtB4h0fOVt_z .daCOeUtJGYVioxrPr2mz, .GshDBiltRtB4h0fOVt_z .E280JlKdPfWlumfC9faV, .tWF2XzdHqWamkldkuHMY .qpOiymCdVPdckGSzSYpK, .tWF2XzdHqWamkldkuHMY .BERo_ReF1iKL57OAzWze, .tWF2XzdHqWamkldkuHMY .dbze4ZPSkU07uBdCo7wd, .tWF2XzdHqWamkldkuHMY .bdIsGQOYaotCY0uLVOi4, .tWF2XzdHqWamkldkuHMY .daCOeUtJGYVioxrPr2mz, .tWF2XzdHqWamkldkuHMY .E280JlKdPfWlumfC9faV {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0.5rem;
}

.FHKEB46Gs1_UNgHsKrq4 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.c0Sfbdj2Ptlv0bc6BNO4, .c0Sfbdj2Ptlv0bc6BNO4:visited {
  color: #fff;
}

.MmCTBX71mdwnpPOSfn5A,
.p4sr6NedYvv2_Ki7vtWZ, .MGNxGISs4YQzqY96dnxL {
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.cKcOzEnCaUuijWKPUUSB,
.p4sr6NedYvv2_Ki7vtWZ, .MGNxGISs4YQzqY96dnxL {
  margin-top: 1rem;
  margin: 0;
}

.p4sr6NedYvv2_Ki7vtWZ, .MGNxGISs4YQzqY96dnxL {
  padding: 0.5rem;
}

.p4sr6NedYvv2_Ki7vtWZ {
  border: none;
  background-color: var(--text-dark);
  color: white;
  transition: 0.3s ease;
}
.p4sr6NedYvv2_Ki7vtWZ:hover {
  cursor: pointer;
  padding: 0.7rem;
  font-size: 20px;
  background-color: #1a1c2a;
  transition: 0.3s ease;
}

.sThNsSmEN1XWbedsq9nG {
  text-align: center;
}

.g2dAqFdOhSotCf2GYT6l {
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
}

.g2dAqFdOhSotCf2GYT6l > svg {
  margin-right: 0.25rem;
}

.U6kfr9LAEjOrkos5qYjR {
  position: absolute;
  left: -9999px;
}

.brFiKbtyH054C9eltzI4 {
  display: none;
}

.jVYOIfzLQWZyVQG8wqj0 {
  color: limegreen;
  margin-left: 0.25rem;
}

.m3RMD9E8MNeJLH4DTpGe {
  color: red;
  margin-left: 0.25rem;
}

.qm5LEcJuAQ4uU4h3n86o {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.oqBlA0t7YCt2WGQGEGzw {
  display: inline-block;
}

.GlVcv_kqOyJc7CExOwKG {
  visibility: hidden;
}

.EjthADHz9RgbGpjMOlX3 {
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 100%;
  border: none;
  background-color: var(--text-dark);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.2s ease;
}
.EjthADHz9RgbGpjMOlX3:hover {
  cursor: pointer;
  transform: scale(1.1);
  border: 0.2rem solid white;
  transition: 0.2s ease;
}`, "",{"version":3,"sources":["webpack://./src/components/AdminCreateForm/AdminCreateForm.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;EACA,eAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,cAAA;AACJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AAER;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;;EAEE,eAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACI,YAAA;EACA,kCAAA;EACA,YAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;AAER;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,UAAA;EACA,oBAAA;AACJ;;AAEA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kCAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,qBAAA;AAER","sourcesContent":[".section {\n    width: 100%;\n    min-height: 400px;\n    max-width: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 3rem;\n    border: .3rem solid var(--text-dark);\n    background-color: var(--text-light);\n    position: fixed;\n    z-index: 1000;\n}\n\n.nameContainer, .emailAndCampusContainer, .passwordContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem 0;\n    .fName, .lName, .email, .campusNum, .pwd, .confirmPwd {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 0 .5rem;\n    }\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex-grow: 1;\n    padding-bottom: 1rem;\n}\n\n.a, .a:visited {\n    color: #fff;\n}\n\n.input,\n.button, .disabledButton {\n  font-size: 22px;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n}\n\n.label,\n.button, .disabledButton {\n  margin-top: 1rem;\n  margin: 0;\n}\n\n.button, .disabledButton {\n  padding: 0.5rem;\n}\n\n.button {\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    transition: .3s ease;\n    &:hover {\n        cursor: pointer;\n        padding: 0.7rem;\n        font-size: 20px;\n        background-color: #1a1c2a;\n        transition: .3s ease;\n    }\n}\n\n.togglePara {\n    text-align: center;\n}\n\n.instructions {\n    font-size: 0.75rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.25rem;\n    position: relative;\n    bottom: -10px;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.line {\n    display: inline-block;\n}\n\n.roleContainer {\n    visibility: hidden;\n}\n\n.closeBtn {\n    width: 2rem;\n    height: 2rem;\n    position: absolute;\n    top: 1.5rem;\n    right: 1.5rem;\n    border-radius: 100%;\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    font-size: 1.5rem;\n    text-align: center;\n    transition: .2s ease;\n    &:hover {\n        cursor: pointer;\n        transform: scale(1.1);\n        border: .2rem solid white;\n        transition: .2s ease;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": `cNmbeFKj5iw69EBHL52G`,
	"nameContainer": `XMgtGK3QwjlklvHzLZw4`,
	"emailAndCampusContainer": `GshDBiltRtB4h0fOVt_z`,
	"passwordContainer": `tWF2XzdHqWamkldkuHMY`,
	"fName": `qpOiymCdVPdckGSzSYpK`,
	"lName": `BERo_ReF1iKL57OAzWze`,
	"email": `dbze4ZPSkU07uBdCo7wd`,
	"campusNum": `bdIsGQOYaotCY0uLVOi4`,
	"pwd": `daCOeUtJGYVioxrPr2mz`,
	"confirmPwd": `E280JlKdPfWlumfC9faV`,
	"form": `FHKEB46Gs1_UNgHsKrq4`,
	"a": `c0Sfbdj2Ptlv0bc6BNO4`,
	"input": `MmCTBX71mdwnpPOSfn5A`,
	"button": `p4sr6NedYvv2_Ki7vtWZ`,
	"disabledButton": `MGNxGISs4YQzqY96dnxL`,
	"label": `cKcOzEnCaUuijWKPUUSB`,
	"togglePara": `sThNsSmEN1XWbedsq9nG`,
	"instructions": `g2dAqFdOhSotCf2GYT6l`,
	"offscreen": `U6kfr9LAEjOrkos5qYjR`,
	"hide": `brFiKbtyH054C9eltzI4`,
	"valid": `jVYOIfzLQWZyVQG8wqj0`,
	"invalid": `m3RMD9E8MNeJLH4DTpGe`,
	"errmsg": `qm5LEcJuAQ4uU4h3n86o`,
	"line": `oqBlA0t7YCt2WGQGEGzw`,
	"roleContainer": `GlVcv_kqOyJc7CExOwKG`,
	"closeBtn": `EjthADHz9RgbGpjMOlX3`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AdminReadingTracker/AdminReadingTracker.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AdminReadingTracker/AdminReadingTracker.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lmrKupmV4cAPSL6wwRvc {
  width: 90%;
  height: 15rem;
  border-radius: 0.5rem;
  margin: 1rem 0 10rem 0;
}
.lmrKupmV4cAPSL6wwRvc .u69Ta0uc8YJFz1nvSlZs {
  background-color: var(--text-dark);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  color: white;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lmrKupmV4cAPSL6wwRvc .u69Ta0uc8YJFz1nvSlZs ._ugh8_RG0GCe6YAI_ODS {
  margin: 0;
}
.lmrKupmV4cAPSL6wwRvc .Ttbje6EhigrMSFRAbUSA {
  border: 0.3rem solid var(--text-light);
  background-color: aliceblue;
  padding-left: 1rem;
}
.lmrKupmV4cAPSL6wwRvc .Ttbje6EhigrMSFRAbUSA .kJF2WRCfRr7H_Z3r1Qkc {
  display: flex;
  align-items: center;
}
.lmrKupmV4cAPSL6wwRvc .Ttbje6EhigrMSFRAbUSA .kJF2WRCfRr7H_Z3r1Qkc .Y_DWZVlYhJmFJguun48w {
  margin-right: 1rem;
}
.lmrKupmV4cAPSL6wwRvc .Ttbje6EhigrMSFRAbUSA .UMdk48Cjh0qBtkJ21NvI {
  display: flex;
}
.lmrKupmV4cAPSL6wwRvc .Ttbje6EhigrMSFRAbUSA .UMdk48Cjh0qBtkJ21NvI .h3fUnhAQXGeF8WWRgU5o {
  margin-left: 1rem;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.lmrKupmV4cAPSL6wwRvc .Ttbje6EhigrMSFRAbUSA .AzVNoOacQVewtsA1RQXQ, .lmrKupmV4cAPSL6wwRvc .Ttbje6EhigrMSFRAbUSA .A7buPJZRmt6a4qgOf_Pz {
  margin-left: 1rem;
}
.lmrKupmV4cAPSL6wwRvc .IcgarP6SUymiS_RSCmXf {
  background-color: var(--text-light);
  height: 20%;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.uAoANfNhLzLYrcsPA8ta {
  display: flex;
  justify-content: flex-end;
  width: 70%;
}
.uAoANfNhLzLYrcsPA8ta .KXGBhjVYquYuz_r1e8dv:focus {
  outline: none;
}`, "",{"version":3,"sources":["webpack://./src/components/AdminReadingTracker/AdminReadingTracker.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,aAAA;EACA,qBAAA;EACA,sBAAA;AACJ;AAAI;EACI,kCAAA;EACA,8BAAA;EACA,+BAAA;EACA,YAAA;EACA,oBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAER;AADQ;EACI,SAAA;AAGZ;AAAI;EACI,sCAAA;EACA,2BAAA;EACA,kBAAA;AAER;AADQ;EACI,aAAA;EACA,mBAAA;AAGZ;AAFY;EACI,kBAAA;AAIhB;AADQ;EACI,aAAA;AAGZ;AAFY;EACI,iBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;AAIhB;AADQ;EACI,iBAAA;AAGZ;AAAI;EACI,mCAAA;EACA,WAAA;EACA,iCAAA;EACA,kCAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;EACA,mBAAA;AAER;;AACA;EACI,aAAA;EACA,yBAAA;EACA,UAAA;AAEJ;AAAQ;EACI,aAAA;AAEZ","sourcesContent":[".ReadingTracker {\n    width: 90%;\n    height: 15rem;\n    border-radius: .5rem;\n    margin: 1rem 0 10rem 0;\n    .headerContainer {\n        background-color: var(--text-dark);\n        border-top-left-radius: .5rem;\n        border-top-right-radius: .5rem;\n        color: white;\n        padding: .3rem 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        .header {\n            margin: 0;\n        }\n    }\n    .scoringContainer {\n        border: .3rem solid var(--text-light);\n        background-color: aliceblue;\n        padding-left: 1rem;\n        .goalContainer {\n            display: flex;\n            align-items: center;\n            .goalLabel {\n                margin-right: 1rem;\n            }\n        }\n        .targetContainer {\n            display: flex;\n            .targetInnerContainer {\n                margin-left: 1rem;\n                width: 40%;\n                display: flex;\n                justify-content: space-between;\n            }\n        }\n        .onLevelSpan, .checkInSpan {\n            margin-left: 1rem;\n        }\n    }\n    .teacherSelector {\n        background-color: var(--text-light);\n        height: 20%;\n        border-bottom-left-radius: .5rem;\n        border-bottom-right-radius: .5rem;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n}\n.selectorContainer {\n    display: flex;\n    justify-content: flex-end;\n    width: 70%;\n    .selector {\n        &:focus {\n            outline: none;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ReadingTracker": `lmrKupmV4cAPSL6wwRvc`,
	"headerContainer": `u69Ta0uc8YJFz1nvSlZs`,
	"header": `_ugh8_RG0GCe6YAI_ODS`,
	"scoringContainer": `Ttbje6EhigrMSFRAbUSA`,
	"goalContainer": `kJF2WRCfRr7H_Z3r1Qkc`,
	"goalLabel": `Y_DWZVlYhJmFJguun48w`,
	"targetContainer": `UMdk48Cjh0qBtkJ21NvI`,
	"targetInnerContainer": `h3fUnhAQXGeF8WWRgU5o`,
	"onLevelSpan": `AzVNoOacQVewtsA1RQXQ`,
	"checkInSpan": `A7buPJZRmt6a4qgOf_Pz`,
	"teacherSelector": `IcgarP6SUymiS_RSCmXf`,
	"selectorContainer": `uAoANfNhLzLYrcsPA8ta`,
	"selector": `KXGBhjVYquYuz_r1e8dv`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AssignmentCollapsible/AssignmentCollapsible.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AssignmentCollapsible/AssignmentCollapsible.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.KfVSaU_BUHxF7mN12lp0 {
  display: flex;
}

.ibQnINSSf0V0QOkhneyh {
  width: 500px;
}

.JYm80CtluJAaW56FEyut {
  margin-bottom: 0;
}

._3thx8n7OsqLUUTla1IT {
  background: var(--text-light);
  margin-bottom: 5px;
}

.TeK8gqmEWSHfvDkWf7HR {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.nJ_j66VQ2N_H9qhqmN6X {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.WBqk_4sx2FYl5kUVGqes, .AEYem361n3xHJRwP2LSD.Vmg6MW3oWk6rl4qBLEIy {
  padding: 0 20px;
}

.WBqk_4sx2FYl5kUVGqes {
  background-color: var(--text-dark);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 47.5px;
}

.W473GJ0e7gA1ZFJPElkP {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.UGlOMyXCNP80V9m4GJxy {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.AEYem361n3xHJRwP2LSD {
  background-color: var(--text-light);
  padding: 0 20px;
  color: var(--text-dark);
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
}

.BuyVgCJ88vj4PjuFJ1Ci {
  margin-bottom: 0.5rem;
}

.d7jyR2gVK8IpuUCkdMNs {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
}

.K2Etzu1uM6iIGvflDSpn {
  margin: 0;
}

._uerHlkU0zKdobV1dFwi {
  margin: 0;
  font-size: 0.8rem;
  color: grey;
}

.AEYem361n3xHJRwP2LSD.Vmg6MW3oWk6rl4qBLEIy {
  height: auto;
  max-height: 9999px;
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
}`, "",{"version":3,"sources":["webpack://./src/components/AssignmentCollapsible/AssignmentCollapsible.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,YAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,6BAAA;EACA,kBAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,kCAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAGA;EACI,mCAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,6CAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGA;EACI,SAAA;AAAJ;;AAEA;EACI,SAAA;EACA,iBAAA;EACA,WAAA;AACJ;;AAEA;EACI,YAAA;EACA,kBAAA;EACA,6CAAA;AACJ","sourcesContent":[".wrapper {\n    display: flex;\n}\n\n.accordion {\n    width: 500px;\n}\n\n.header {\n    margin-bottom: 0;\n}\n\n.item {\n    background: var(--text-light);\n    margin-bottom: 5px;\n}\n\n.firstItem {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastItem {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.title, .content.show {\n    padding: 0 20px;\n}\n\n.title {\n    background-color: var(--text-dark);\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    height: 47.5px;\n}\n\n.firstTitle {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastTitle {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n\n.content {\n    background-color: var(--text-light);\n    padding: 0 20px;\n    color: var(--text-dark);\n    max-height: 0;\n    overflow: hidden;\n    transition: all .5s cubic-bezier(0,1,0,1);\n}\n\n.contentContainer {\n    margin-bottom: .5rem;\n}\n\n.innerContent {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: .5rem;\n}\n\n.assignmentTitle {\n    margin: 0;\n}\n.subject {\n    margin: 0;\n    font-size: .8rem;\n    color: grey;\n}\n\n.content.show {\n    height: auto;\n    max-height: 9999px;\n    transition: all .5s cubic-bezier(1,0,1,0);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `KfVSaU_BUHxF7mN12lp0`,
	"accordion": `ibQnINSSf0V0QOkhneyh`,
	"header": `JYm80CtluJAaW56FEyut`,
	"item": `_3thx8n7OsqLUUTla1IT`,
	"firstItem": `TeK8gqmEWSHfvDkWf7HR`,
	"lastItem": `nJ_j66VQ2N_H9qhqmN6X`,
	"title": `WBqk_4sx2FYl5kUVGqes`,
	"content": `AEYem361n3xHJRwP2LSD`,
	"show": `Vmg6MW3oWk6rl4qBLEIy`,
	"firstTitle": `W473GJ0e7gA1ZFJPElkP`,
	"lastTitle": `UGlOMyXCNP80V9m4GJxy`,
	"contentContainer": `BuyVgCJ88vj4PjuFJ1Ci`,
	"innerContent": `d7jyR2gVK8IpuUCkdMNs`,
	"assignmentTitle": `K2Etzu1uM6iIGvflDSpn`,
	"subject": `_uerHlkU0zKdobV1dFwi`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/BarGraph/BarGraph.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/BarGraph/BarGraph.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ClassCollapsible/ClassCollapsible.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ClassCollapsible/ClassCollapsible.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.FgxKRPDTm02gawyX5PlF {
  display: flex;
}

.FjpRP3q0NXD4V4KYkwGU {
  width: 500px;
}

.HWwjr4E_oLVp5al6fv8n {
  margin-bottom: 0;
}

.XOBOBuCIi6dV95tqKe_Z {
  background: var(--text-light);
  margin-bottom: 5px;
}

.flE3l1IbVmR1KPFi8ZOF {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.C3gV1WYtaNfXTXXM4yxg {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.lozKYTMwtaZaWTjxhpjE, .FYrGhrHiDo7MtBqru2e_.tGMUu3W5clPbYkGQf_zl {
  padding: 0 20px;
}

.lozKYTMwtaZaWTjxhpjE {
  background-color: var(--text-dark);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 47.5px;
}

.Gj8VBMp4LRX5_mpoBbSq {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.PCC0eznMQMnQORrZGwdY {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.FYrGhrHiDo7MtBqru2e_ {
  background-color: var(--text-light);
  padding: 0 20px;
  color: var(--text-dark);
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
}

.rbFuD0RCA9As2mNI0TP4 {
  margin-bottom: 0.5rem;
}

.VFOqzC2BsDQZhE4XSJdk {
  margin: 0;
}

.FYrGhrHiDo7MtBqru2e_.tGMUu3W5clPbYkGQf_zl {
  height: auto;
  max-height: 9999px;
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
}`, "",{"version":3,"sources":["webpack://./src/components/ClassCollapsible/ClassCollapsible.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,YAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,6BAAA;EACA,kBAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,kCAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,6CAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,SAAA;AACJ;;AAEA;EACI,YAAA;EACA,kBAAA;EACA,6CAAA;AACJ","sourcesContent":[".wrapper {\n    display: flex;\n}\n\n.accordion {\n    width: 500px;\n}\n\n.header {\n    margin-bottom: 0;\n}\n\n.item {\n    background: var(--text-light);\n    margin-bottom: 5px;\n}\n\n.firstItem {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastItem {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.title, .content.show {\n    padding: 0 20px;\n}\n\n.title {\n    background-color: var(--text-dark);\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    height: 47.5px;\n}\n\n.firstTitle {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastTitle {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.content {\n    background-color: var(--text-light);\n    padding: 0 20px;\n    color: var(--text-dark);\n    max-height: 0;\n    overflow: hidden;\n    transition: all .5s cubic-bezier(0,1,0,1);\n}\n\n.contentContainer {\n    margin-bottom: .5rem;\n}\n\n.studentName {\n    margin: 0;\n}\n\n.content.show {\n    height: auto;\n    max-height: 9999px;\n    transition: all .5s cubic-bezier(1,0,1,0);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `FgxKRPDTm02gawyX5PlF`,
	"accordion": `FjpRP3q0NXD4V4KYkwGU`,
	"header": `HWwjr4E_oLVp5al6fv8n`,
	"item": `XOBOBuCIi6dV95tqKe_Z`,
	"firstItem": `flE3l1IbVmR1KPFi8ZOF`,
	"lastItem": `C3gV1WYtaNfXTXXM4yxg`,
	"title": `lozKYTMwtaZaWTjxhpjE`,
	"content": `FYrGhrHiDo7MtBqru2e_`,
	"show": `tGMUu3W5clPbYkGQf_zl`,
	"firstTitle": `Gj8VBMp4LRX5_mpoBbSq`,
	"lastTitle": `PCC0eznMQMnQORrZGwdY`,
	"contentContainer": `rbFuD0RCA9As2mNI0TP4`,
	"studentName": `VFOqzC2BsDQZhE4XSJdk`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Collapsible/Collapsible.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Collapsible/Collapsible.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.qLeTEK42IWJSyTrQGMjG {
  display: flex;
}

.jHHT_GqSIjxoPHfzZ6MT {
  width: 500px;
}

.gcLvqs2ygkSZGCrmmnAJ {
  background: var(--text-light);
  margin-bottom: 5px;
}

.j4Mq73JJ8_NUyPHxcMqi {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.bYvOLYDlVKRhF0wavlpJ {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.lKsyGBX2_eV0D_zGqSJI, .R86Grw9mMNRgoH8YwguV.zLZw6FhmP7rZz31cDK1a {
  padding: 0 20px;
}

.lKsyGBX2_eV0D_zGqSJI {
  background-color: var(--text-dark);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 47.5px;
}

.Ql4wXzPsEPDHQB1GNoj0 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.xx9tEdxsFBlvYwV33fXF {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.R86Grw9mMNRgoH8YwguV {
  background-color: var(--text-light);
  padding: 0 20px;
  color: var(--text-dark);
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
}

.R86Grw9mMNRgoH8YwguV.zLZw6FhmP7rZz31cDK1a {
  height: auto;
  max-height: 9999px;
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
}`, "",{"version":3,"sources":["webpack://./src/components/Collapsible/Collapsible.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,YAAA;AACJ;;AAEA;EACI,6BAAA;EACA,kBAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,kCAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAGA;EACI,mCAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,6CAAA;AAAJ;;AAGA;EACI,YAAA;EACA,kBAAA;EACA,6CAAA;AAAJ","sourcesContent":[".wrapper {\n    display: flex;\n}\n\n.accordion {\n    width: 500px;\n}\n\n.item {\n    background: var(--text-light);\n    margin-bottom: 5px;\n}\n\n.firstItem {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastItem {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.title, .content.show {\n    padding: 0 20px;\n}\n\n.title {\n    background-color: var(--text-dark);\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    height: 47.5px;\n}\n\n.firstTitle {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastTitle {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n\n.content {\n    background-color: var(--text-light);\n    padding: 0 20px;\n    color: var(--text-dark);\n    max-height: 0;\n    overflow: hidden;\n    transition: all .5s cubic-bezier(0,1,0,1);\n}\n\n.content.show {\n    height: auto;\n    max-height: 9999px;\n    transition: all .5s cubic-bezier(1,0,1,0);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `qLeTEK42IWJSyTrQGMjG`,
	"accordion": `jHHT_GqSIjxoPHfzZ6MT`,
	"item": `gcLvqs2ygkSZGCrmmnAJ`,
	"firstItem": `j4Mq73JJ8_NUyPHxcMqi`,
	"lastItem": `bYvOLYDlVKRhF0wavlpJ`,
	"title": `lKsyGBX2_eV0D_zGqSJI`,
	"content": `R86Grw9mMNRgoH8YwguV`,
	"show": `zLZw6FhmP7rZz31cDK1a`,
	"firstTitle": `Ql4wXzPsEPDHQB1GNoj0`,
	"lastTitle": `xx9tEdxsFBlvYwV33fXF`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Login/Login.module.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Login/Login.module.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ezzqWhyjafzLobjTxKvN {
  width: 100%;
  max-width: 420px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 3rem;
  border: 0.3rem solid var(--text-dark);
  background-color: var(--text-light);
}

.Q7lalbpQ0P96QaVlILom {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.aINFe_lpRHBUc8CvPw5B, .aINFe_lpRHBUc8CvPw5B:visited {
  color: #fff;
}

.NPmqIZEoOZvOJwwkCWoP,
.UT8Z2N1fiZTOLkSvByyt {
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.ReMmHGnawzd9hmr1fwVA,
.UT8Z2N1fiZTOLkSvByyt {
  margin-top: 1rem;
}

.UT8Z2N1fiZTOLkSvByyt {
  padding: 0.5rem;
  border: none;
  background-color: var(--text-dark);
  color: white;
}
.UT8Z2N1fiZTOLkSvByyt:hover {
  cursor: pointer;
}

.qw2ThsCNur9t1Nr4VQFB {
  text-align: center;
}

.VhPfie1lquL3ClqLcdBf {
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
}

.VhPfie1lquL3ClqLcdBf > svg {
  margin-right: 0.25rem;
}

.TtMUi1H2qf1QXivbUlCO {
  position: absolute;
  left: -9999px;
}

.bzmmQobqr_mvKKGmdTub {
  display: none;
}

.VYkdqm295yp3kMQAt608 {
  color: limegreen;
  margin-left: 0.25rem;
}

.zs9EUPz_kutjYPnjcr0Q {
  color: red;
  margin-left: 0.25rem;
}

.Iis1HDlhi8z1QEliSCTH {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.M_68A33V2MtFkAHRM_td {
  display: inline-block;
}`, "",{"version":3,"sources":["webpack://./src/components/Login/Login.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;;EAEE,eAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAGA;;EAEE,gBAAA;AAAF;;AAGA;EACE,eAAA;EACA,YAAA;EACA,kCAAA;EACA,YAAA;AAAF;AACE;EACE,eAAA;AACJ;;AAGA;EACI,kBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,aAAA;AAAJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,gBAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,UAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ","sourcesContent":[".section {\n    width: 100%;\n    max-width: 420px;\n    min-height: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 3rem;\n    border: .3rem solid var(--text-dark);\n    background-color: var(--text-light);\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex-grow: 1;\n    padding-bottom: 1rem;\n}\n\n.a, .a:visited {\n    color: #fff;\n}\n\n.input,\n.button {\n  font-size: 22px;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n}\n  \n\n.label,\n.button {\n  margin-top: 1rem;\n}\n\n.button {\n  padding: 0.5rem;\n  border: none;\n  background-color: var(--text-dark);\n  color: white;\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.togglePara {\n    text-align: center;\n}\n\n.instructions {\n    font-size: 0.75rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.25rem;\n    position: relative;\n    bottom: -10px;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.line {\n    display: inline-block;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": `ezzqWhyjafzLobjTxKvN`,
	"form": `Q7lalbpQ0P96QaVlILom`,
	"a": `aINFe_lpRHBUc8CvPw5B`,
	"input": `NPmqIZEoOZvOJwwkCWoP`,
	"button": `UT8Z2N1fiZTOLkSvByyt`,
	"label": `ReMmHGnawzd9hmr1fwVA`,
	"togglePara": `qw2ThsCNur9t1Nr4VQFB`,
	"instructions": `VhPfie1lquL3ClqLcdBf`,
	"offscreen": `TtMUi1H2qf1QXivbUlCO`,
	"hide": `bzmmQobqr_mvKKGmdTub`,
	"valid": `VYkdqm295yp3kMQAt608`,
	"invalid": `zs9EUPz_kutjYPnjcr0Q`,
	"errmsg": `Iis1HDlhi8z1QEliSCTH`,
	"line": `M_68A33V2MtFkAHRM_td`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.QpVD3qAS0nYBtoQqAYoe {
  width: 100%;
  height: 8vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px darkgray;
  opacity: 1; /* Initial opacity */
  transition: opacity 0.3s ease; /* Add transition for opacity */
  z-index: 1000; /* Ensure it's above other content */
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB {
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .RXRqtG9CqZA7GZzpQhW7 {
  color: #232946;
  text-transform: uppercase;
  font-weight: bold;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .gvnfbHH0c_3EMBSt3szj {
  border: 1px solid lightgrey;
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 0.3rem;
  height: 1.7rem;
  width: 15rem;
  transition: 0.2s ease;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .gvnfbHH0c_3EMBSt3szj:focus {
  outline: none;
  border: 0.1rem solid #232946;
  box-shadow: 0 0 5px #232946;
  transition: 0.2s ease;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .TZrOea9psPFromsQ4Itw {
  text-decoration: none;
  color: #232946;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .ptYl4qiA2uJxCNIiNhmp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .ptYl4qiA2uJxCNIiNhmp .VfnirYnsq2Y_yeiRPo2U {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 40px;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .ptYl4qiA2uJxCNIiNhmp .eRf97gfbsMtLCn3UHWXE {
  margin: 0 0.5rem;
  width: 15vw;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D {
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  height: 100%;
  margin: 0;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .vdLcfAWwu7EJ_DwEISFz {
  text-decoration: none;
  color: #232946;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Add position relative */
  transition: 1s ease;
  margin: 0 2rem;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .vdLcfAWwu7EJ_DwEISFz:hover .ai30QR49p4EdcdnoKw0m {
  animation: YcxuCAlSHlcDjncnqx2w 1s ease-out;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .vdLcfAWwu7EJ_DwEISFz:hover .ai30QR49p4EdcdnoKw0m, .QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .vdLcfAWwu7EJ_DwEISFz:hover .yDVXG9hfMpn86dnxe0SG {
  filter: invert(100%);
  transition: 1s ease;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .vdLcfAWwu7EJ_DwEISFz:hover .v6PjNb4PGtuGvzHIU_ty {
  background-color: #232946;
  transition: 1s ease;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .v6PjNb4PGtuGvzHIU_ty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  position: relative;
  transition: 1s ease;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .ai30QR49p4EdcdnoKw0m, .QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .yDVXG9hfMpn86dnxe0SG {
  transition: 1s ease;
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .ai30QR49p4EdcdnoKw0m {
  width: 35px;
  color: black; /* Initial color */
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .yDVXG9hfMpn86dnxe0SG {
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.QpVD3qAS0nYBtoQqAYoe .Yzgk56lCq7Zq2IQkbBwB .VpziURjVmNZneeuBgj0D .XzvV08AY_k7fSADJCZ5g {
  display: flex;
  justify-content: center;
  align-items: center;
}
.QpVD3qAS0nYBtoQqAYoe .Ka_kuJxU2amEo3dhYkNz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: 1rem;
}

/* Use interpolation to reference the local class */
.liy9XL89GoQRXss4enyt {
  opacity: 0; /* Set opacity to 0 when scrolled down */
}

@keyframes YcxuCAlSHlcDjncnqx2w {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes QmwfkIbRCzKk7YE6JPVX {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.vdLcfAWwu7EJ_DwEISFz:not(:hover) .ai30QR49p4EdcdnoKw0m {
  animation: QmwfkIbRCzKk7YE6JPVX 1s ease-out;
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,6BAAA;EACA,UAAA,EAAA,oBAAA;EACA,6BAAA,EAAA,+BAAA;EACA,aAAA,EAAA,oCAAA;AACJ;AAAI;EACI,YAAA;EACA,WAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAER;AADQ;EACI,cAAA;EACA,yBAAA;EACA,iBAAA;AAGZ;AADQ;EACI,2BAAA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;EACA,cAAA;EACA,YAAA;EACA,qBAAA;AAGZ;AAFY;EACI,aAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;AAIhB;AADQ;EACI,qBAAA;EACA,cAAA;AAGZ;AADQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAGZ;AAFY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;AAIhB;AAFY;EACI,gBAAA;EACA,WAAA;AAIhB;AADQ;EACI,aAAA;EACA,yBAAA;EACA,qBAAA;EACA,YAAA;EACA,SAAA;AAGZ;AAFY;EACI,qBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA,EAAA,0BAAA;EACA,mBAAA;EACA,cAAA;AAIhB;AAFY;EACI,2CAAA;AAIhB;AADY;EACI,oBAAA;EACA,mBAAA;AAGhB;AAAY;EACI,yBAAA;EACA,mBAAA;AAEhB;AAAY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AAEhB;AAAY;EACI,mBAAA;AAEhB;AAAY;EACI,WAAA;EACA,YAAA,EAAA,kBAAA;AAEhB;AACY;EACI,WAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAChB;AACY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAChB;AAGI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;EACA,iBAAA;AADR;;AAKA,mDAAA;AACA;EACI,UAAA,EAAA,wCAAA;AAFJ;;AAMA;EACI;IAAO,uBAAA;EAFT;EAGE;IAAK,yBAAA;EAAP;AACF;AAEA;EACI;IAAO,yBAAA;EACT;EAAE;IAAK,uBAAA;EAGP;AACF;AADA;EACI,2CAAA;AAGJ","sourcesContent":[".NavBar {\n    width: 100%;\n    height: 8vh;\n    background-color: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    box-shadow: 0 0 10px darkgray;\n    opacity: 1; /* Initial opacity */\n    transition: opacity 0.3s ease; /* Add transition for opacity */\n    z-index: 1000; /* Ensure it's above other content */\n    .innerNav {\n        height: 100%;\n        width: 100%;\n        padding: 0 2rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        .label {\n            color: #232946;\n            text-transform: uppercase;\n            font-weight: bold;\n        }\n        .search {\n            border: 1px solid lightgrey;\n            margin-left: .5rem;\n            padding-left: .5rem;\n            border-radius: .3rem;\n            height: 1.7rem;\n            width: 15rem;\n            transition: .2s ease;\n            &:focus {\n                outline: none;\n                border: .1rem solid #232946;\n                box-shadow: 0 0 5px #232946;\n                transition: .2s ease;\n            }\n        }\n        .LogoLink {\n            text-decoration: none;\n            color: #232946;\n        }\n        .LogoContainer {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            text-transform: uppercase;\n            .LogoInnerContainer {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                width: 100%;\n                max-height: 40px;\n            }\n            .Logo {\n                margin: 0 .5rem;\n                width: 15vw;\n            }\n        }\n        .navList {\n            display: flex;\n            justify-content: flex-end;\n            text-decoration: none;\n            height: 100%;\n            margin: 0;\n            .Link {\n                text-decoration: none;\n                color: #232946;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                position: relative; /* Add position relative */\n                transition: 1s ease;\n                margin: 0 2rem;\n            }\n            .Link:hover .outerIcon {\n                animation: spin 1s ease-out;\n            }\n            \n            .Link:hover .outerIcon, .Link:hover .homeIcon {\n                filter: invert(100%);\n                transition: 1s ease;\n            }\n            \n            .Link:hover .iconContainer {\n                background-color: #232946;\n                transition: 1s ease;\n            }\n            .iconContainer {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                height: 40px;\n                width: 40px;\n                border-radius: 100%;\n                position: relative;\n                transition: 1s ease;\n            }\n            .outerIcon, .homeIcon {\n                transition: 1s ease;\n            }\n            .outerIcon {\n                width: 35px;\n                color: black; /* Initial color */\n            }\n            \n            .homeIcon {\n                width: 30px;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n            }\n            .UserLogOut {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n        }\n    }\n    .userInfo {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-end;\n        margin-left: 1rem;\n    }\n}\n\n/* Use interpolation to reference the local class */\n.scrollDown {\n    opacity: 0; /* Set opacity to 0 when scrolled down */\n}\n\n\n@keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n}\n\n@keyframes spinReverse {\n    from { transform: rotate(360deg); }\n    to { transform: rotate(0deg); }\n}\n\n.Link:not(:hover) .outerIcon {\n    animation: spinReverse 1s ease-out;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavBar": `QpVD3qAS0nYBtoQqAYoe`,
	"innerNav": `Yzgk56lCq7Zq2IQkbBwB`,
	"label": `RXRqtG9CqZA7GZzpQhW7`,
	"search": `gvnfbHH0c_3EMBSt3szj`,
	"LogoLink": `TZrOea9psPFromsQ4Itw`,
	"LogoContainer": `ptYl4qiA2uJxCNIiNhmp`,
	"LogoInnerContainer": `VfnirYnsq2Y_yeiRPo2U`,
	"Logo": `eRf97gfbsMtLCn3UHWXE`,
	"navList": `VpziURjVmNZneeuBgj0D`,
	"Link": `vdLcfAWwu7EJ_DwEISFz`,
	"outerIcon": `ai30QR49p4EdcdnoKw0m`,
	"spin": `YcxuCAlSHlcDjncnqx2w`,
	"homeIcon": `yDVXG9hfMpn86dnxe0SG`,
	"iconContainer": `v6PjNb4PGtuGvzHIU_ty`,
	"UserLogOut": `XzvV08AY_k7fSADJCZ5g`,
	"userInfo": `Ka_kuJxU2amEo3dhYkNz`,
	"scrollDown": `liy9XL89GoQRXss4enyt`,
	"spinReverse": `QmwfkIbRCzKk7YE6JPVX`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ParentCreateForm/ParentCreateForm.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ParentCreateForm/ParentCreateForm.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `._9_evQjc25FldnQMZwTR {
  width: 100%;
  min-height: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 3rem;
  border: 0.3rem solid var(--text-dark);
  background-color: var(--text-light);
  position: fixed;
  z-index: 1000;
}

.lpxiSwNmQz4BHrCGBP6m, .biInEsxhlW5lB9g5emtm, .ElUSc_YiJrwV0Avlfoet {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.lpxiSwNmQz4BHrCGBP6m .xNsAFmga1dS2_ZaVYjoV, .lpxiSwNmQz4BHrCGBP6m .HXvFuNcAtsUEIURfWxjJ, .lpxiSwNmQz4BHrCGBP6m .RHlYiqhQdyicB6Q_q4kw, .lpxiSwNmQz4BHrCGBP6m .cnkff0WIUFT5Ucb9wnKg, .lpxiSwNmQz4BHrCGBP6m .KgWOFij81EjQxOg06FG8, .lpxiSwNmQz4BHrCGBP6m .mGrzBlsJe_QpnrDKifIo, .biInEsxhlW5lB9g5emtm .xNsAFmga1dS2_ZaVYjoV, .biInEsxhlW5lB9g5emtm .HXvFuNcAtsUEIURfWxjJ, .biInEsxhlW5lB9g5emtm .RHlYiqhQdyicB6Q_q4kw, .biInEsxhlW5lB9g5emtm .cnkff0WIUFT5Ucb9wnKg, .biInEsxhlW5lB9g5emtm .KgWOFij81EjQxOg06FG8, .biInEsxhlW5lB9g5emtm .mGrzBlsJe_QpnrDKifIo, .ElUSc_YiJrwV0Avlfoet .xNsAFmga1dS2_ZaVYjoV, .ElUSc_YiJrwV0Avlfoet .HXvFuNcAtsUEIURfWxjJ, .ElUSc_YiJrwV0Avlfoet .RHlYiqhQdyicB6Q_q4kw, .ElUSc_YiJrwV0Avlfoet .cnkff0WIUFT5Ucb9wnKg, .ElUSc_YiJrwV0Avlfoet .KgWOFij81EjQxOg06FG8, .ElUSc_YiJrwV0Avlfoet .mGrzBlsJe_QpnrDKifIo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0.5rem;
}

.AgOBTeU_LY0SSLHZ2a1B {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.ME7OWIlMIr3vuTBjG2Gt, .ME7OWIlMIr3vuTBjG2Gt:visited {
  color: #fff;
}

.F4Pzfny5YoUE9Pd28sI2,
.mtSDoPxszY8LYLMO0HKq, .yEIfovjUZko1IZ9EGzBw {
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.f179vOYsD17Zb59_dycT,
.mtSDoPxszY8LYLMO0HKq, .yEIfovjUZko1IZ9EGzBw {
  margin-top: 1rem;
  margin: 0;
}

.mtSDoPxszY8LYLMO0HKq, .yEIfovjUZko1IZ9EGzBw {
  padding: 0.5rem;
}

.mtSDoPxszY8LYLMO0HKq {
  border: none;
  background-color: var(--text-dark);
  color: white;
  transition: 0.3s ease;
}
.mtSDoPxszY8LYLMO0HKq:hover {
  cursor: pointer;
  padding: 0.7rem;
  font-size: 20px;
  background-color: #1a1c2a;
  transition: 0.3s ease;
}

.yfbfz1veI3O0VB4u52IO {
  text-align: center;
}

.hzsP9adc82p3lbGPYIft {
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
}

.hzsP9adc82p3lbGPYIft > svg {
  margin-right: 0.25rem;
}

.itzNz1xMpSvBdKk4BNqi {
  position: absolute;
  left: -9999px;
}

.WDBOcXD05d_lQJHfrkUC {
  display: none;
}

.RQW7tOd5PMuutRQCeBja {
  color: limegreen;
  margin-left: 0.25rem;
}

.yuEhASl3XwS2k2Qj0vAU {
  color: red;
  margin-left: 0.25rem;
}

.FknVgE9X0ZV7x9YLhNed {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.YLKyC1uGtUEaS_cit3u1 {
  display: inline-block;
}

.vPc6BPRQgjxIMBRNgG_t {
  visibility: hidden;
}

.TTCelfCVFS7B5EasEyl2 {
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 100%;
  border: none;
  background-color: var(--text-dark);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.2s ease;
}
.TTCelfCVFS7B5EasEyl2:hover {
  cursor: pointer;
  transform: scale(1.1);
  border: 0.2rem solid white;
  transition: 0.2s ease;
}`, "",{"version":3,"sources":["webpack://./src/components/ParentCreateForm/ParentCreateForm.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;EACA,eAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,cAAA;AACJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AAER;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;;EAEE,eAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACI,YAAA;EACA,kCAAA;EACA,YAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;AAER;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,UAAA;EACA,oBAAA;AACJ;;AAEA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kCAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,qBAAA;AAER","sourcesContent":[".section {\n    width: 100%;\n    min-height: 400px;\n    max-width: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 3rem;\n    border: .3rem solid var(--text-dark);\n    background-color: var(--text-light);\n    position: fixed;\n    z-index: 1000;\n}\n\n.nameContainer, .emailAndCampusContainer, .passwordContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem 0;\n    .fName, .lName, .email, .campusNum, .pwd, .confirmPwd {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 0 .5rem;\n    }\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex-grow: 1;\n    padding-bottom: 1rem;\n}\n\n.a, .a:visited {\n    color: #fff;\n}\n\n.input,\n.button, .disabledButton {\n  font-size: 22px;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n}\n\n.label,\n.button, .disabledButton {\n  margin-top: 1rem;\n  margin: 0;\n}\n\n.button, .disabledButton {\n  padding: 0.5rem;\n}\n\n.button {\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    transition: .3s ease;\n    &:hover {\n        cursor: pointer;\n        padding: 0.7rem;\n        font-size: 20px;\n        background-color: #1a1c2a;\n        transition: .3s ease;\n    }\n}\n\n.togglePara {\n    text-align: center;\n}\n\n.instructions {\n    font-size: 0.75rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.25rem;\n    position: relative;\n    bottom: -10px;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.line {\n    display: inline-block;\n}\n\n.roleContainer {\n    visibility: hidden;\n}\n\n.closeBtn {\n    width: 2rem;\n    height: 2rem;\n    position: absolute;\n    top: 1.5rem;\n    right: 1.5rem;\n    border-radius: 100%;\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    font-size: 1.5rem;\n    text-align: center;\n    transition: .2s ease;\n    &:hover {\n        cursor: pointer;\n        transform: scale(1.1);\n        border: .2rem solid white;\n        transition: .2s ease;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": `_9_evQjc25FldnQMZwTR`,
	"nameContainer": `lpxiSwNmQz4BHrCGBP6m`,
	"emailAndCampusContainer": `biInEsxhlW5lB9g5emtm`,
	"passwordContainer": `ElUSc_YiJrwV0Avlfoet`,
	"fName": `xNsAFmga1dS2_ZaVYjoV`,
	"lName": `HXvFuNcAtsUEIURfWxjJ`,
	"email": `RHlYiqhQdyicB6Q_q4kw`,
	"campusNum": `cnkff0WIUFT5Ucb9wnKg`,
	"pwd": `KgWOFij81EjQxOg06FG8`,
	"confirmPwd": `mGrzBlsJe_QpnrDKifIo`,
	"form": `AgOBTeU_LY0SSLHZ2a1B`,
	"a": `ME7OWIlMIr3vuTBjG2Gt`,
	"input": `F4Pzfny5YoUE9Pd28sI2`,
	"button": `mtSDoPxszY8LYLMO0HKq`,
	"disabledButton": `yEIfovjUZko1IZ9EGzBw`,
	"label": `f179vOYsD17Zb59_dycT`,
	"togglePara": `yfbfz1veI3O0VB4u52IO`,
	"instructions": `hzsP9adc82p3lbGPYIft`,
	"offscreen": `itzNz1xMpSvBdKk4BNqi`,
	"hide": `WDBOcXD05d_lQJHfrkUC`,
	"valid": `RQW7tOd5PMuutRQCeBja`,
	"invalid": `yuEhASl3XwS2k2Qj0vAU`,
	"errmsg": `FknVgE9X0ZV7x9YLhNed`,
	"line": `YLKyC1uGtUEaS_cit3u1`,
	"roleContainer": `vPc6BPRQgjxIMBRNgG_t`,
	"closeBtn": `TTCelfCVFS7B5EasEyl2`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Register/Register.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Register/Register.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Idu7boV5emT3tpI63EsN {
  width: 100%;
  min-height: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 3rem;
  border: 0.3rem solid var(--text-dark);
  background-color: var(--text-light);
}

.XokUkjbAB13UudNelspL, ._VTjxJAcByR5MCln33Zs, .XgxRt1_ViXHNSccWAUFj {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.XokUkjbAB13UudNelspL .RetK5OOXX270zhvIW6V2, .XokUkjbAB13UudNelspL .bAEoNFIygNlfquMD7N_K, .XokUkjbAB13UudNelspL .UH9TUnzqPKVSuaK3Z9AR, .XokUkjbAB13UudNelspL .Fmnt2VkAZ46eJwNyGadb, .XokUkjbAB13UudNelspL .pCXj_WHoS1qTAOSyNREA, .XokUkjbAB13UudNelspL .JJ4P5xbGbfsAihDey0Am, ._VTjxJAcByR5MCln33Zs .RetK5OOXX270zhvIW6V2, ._VTjxJAcByR5MCln33Zs .bAEoNFIygNlfquMD7N_K, ._VTjxJAcByR5MCln33Zs .UH9TUnzqPKVSuaK3Z9AR, ._VTjxJAcByR5MCln33Zs .Fmnt2VkAZ46eJwNyGadb, ._VTjxJAcByR5MCln33Zs .pCXj_WHoS1qTAOSyNREA, ._VTjxJAcByR5MCln33Zs .JJ4P5xbGbfsAihDey0Am, .XgxRt1_ViXHNSccWAUFj .RetK5OOXX270zhvIW6V2, .XgxRt1_ViXHNSccWAUFj .bAEoNFIygNlfquMD7N_K, .XgxRt1_ViXHNSccWAUFj .UH9TUnzqPKVSuaK3Z9AR, .XgxRt1_ViXHNSccWAUFj .Fmnt2VkAZ46eJwNyGadb, .XgxRt1_ViXHNSccWAUFj .pCXj_WHoS1qTAOSyNREA, .XgxRt1_ViXHNSccWAUFj .JJ4P5xbGbfsAihDey0Am {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0.5rem;
}

.AnppXxQ0e4kYTK9oHecP {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.eVorpnz1Bkyc_o2MqVzs, .eVorpnz1Bkyc_o2MqVzs:visited {
  color: #fff;
}

.rMo8qUvx6E5jcjWTHxQm,
.K9R5yzZjO1mUAvrEywog, .Lb_3qXz_D_RV0UGUhFI0 {
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.xHCDL1OAZQMxJs0mIYBj,
.K9R5yzZjO1mUAvrEywog, .Lb_3qXz_D_RV0UGUhFI0 {
  margin-top: 1rem;
  margin: 0;
}

.K9R5yzZjO1mUAvrEywog, .Lb_3qXz_D_RV0UGUhFI0 {
  padding: 0.5rem;
}

.K9R5yzZjO1mUAvrEywog {
  border: none;
  background-color: var(--text-dark);
  color: white;
  transition: 0.3s ease;
}
.K9R5yzZjO1mUAvrEywog:hover {
  cursor: pointer;
  padding: 0.7rem;
  font-size: 20px;
  background-color: #1a1c2a;
  transition: 0.3s ease;
}

.uAohF3j0eT3FN8a_dzcI {
  text-align: center;
}

.SIGWuEXn8kcv7IJ_0fUU {
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
}

.SIGWuEXn8kcv7IJ_0fUU > svg {
  margin-right: 0.25rem;
}

.X107B9JCKaXeJJSBfgO4 {
  position: absolute;
  left: -9999px;
}

.A88SY1Hdz_nrnYJa4fh1 {
  display: none;
}

.X7aN1ereRnEeP7e8IUn_ {
  color: limegreen;
  margin-left: 0.25rem;
}

.y_SivBDR7ZEi57d2CZYF {
  color: red;
  margin-left: 0.25rem;
}

.gdSVM8yEV8IG4ZAbo_NT {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.PwGfkZn5LtYOVvDEODfW {
  display: inline-block;
}

.oRRzNa5fzjPNydmeE0TQ {
  visibility: hidden;
}`, "",{"version":3,"sources":["webpack://./src/components/Register/Register.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,cAAA;AACJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AAER;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;;EAEE,eAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACI,YAAA;EACA,kCAAA;EACA,YAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;AAER;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,UAAA;EACA,oBAAA;AACJ;;AAEA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ","sourcesContent":[".section {\n    width: 100%;\n    min-height: 400px;\n    max-width: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 3rem;\n    border: .3rem solid var(--text-dark);\n    background-color: var(--text-light);\n}\n\n.nameContainer, .emailAndCampusContainer, .passwordContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem 0;\n    .fName, .lName, .email, .campusNum, .pwd, .confirmPwd {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 0 .5rem;\n    }\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex-grow: 1;\n    padding-bottom: 1rem;\n}\n\n.a, .a:visited {\n    color: #fff;\n}\n\n.input,\n.button, .disabledButton {\n  font-size: 22px;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n}\n\n.label,\n.button, .disabledButton {\n  margin-top: 1rem;\n  margin: 0;\n}\n\n.button, .disabledButton {\n  padding: 0.5rem;\n}\n\n.button {\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    transition: .3s ease;\n    &:hover {\n        cursor: pointer;\n        padding: 0.7rem;\n        font-size: 20px;\n        background-color: #1a1c2a;\n        transition: .3s ease;\n    }\n}\n\n.togglePara {\n    text-align: center;\n}\n\n.instructions {\n    font-size: 0.75rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.25rem;\n    position: relative;\n    bottom: -10px;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.line {\n    display: inline-block;\n}\n\n.roleContainer {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": `Idu7boV5emT3tpI63EsN`,
	"nameContainer": `XokUkjbAB13UudNelspL`,
	"emailAndCampusContainer": `_VTjxJAcByR5MCln33Zs`,
	"passwordContainer": `XgxRt1_ViXHNSccWAUFj`,
	"fName": `RetK5OOXX270zhvIW6V2`,
	"lName": `bAEoNFIygNlfquMD7N_K`,
	"email": `UH9TUnzqPKVSuaK3Z9AR`,
	"campusNum": `Fmnt2VkAZ46eJwNyGadb`,
	"pwd": `pCXj_WHoS1qTAOSyNREA`,
	"confirmPwd": `JJ4P5xbGbfsAihDey0Am`,
	"form": `AnppXxQ0e4kYTK9oHecP`,
	"a": `eVorpnz1Bkyc_o2MqVzs`,
	"input": `rMo8qUvx6E5jcjWTHxQm`,
	"button": `K9R5yzZjO1mUAvrEywog`,
	"disabledButton": `Lb_3qXz_D_RV0UGUhFI0`,
	"label": `xHCDL1OAZQMxJs0mIYBj`,
	"togglePara": `uAohF3j0eT3FN8a_dzcI`,
	"instructions": `SIGWuEXn8kcv7IJ_0fUU`,
	"offscreen": `X107B9JCKaXeJJSBfgO4`,
	"hide": `A88SY1Hdz_nrnYJa4fh1`,
	"valid": `X7aN1ereRnEeP7e8IUn_`,
	"invalid": `y_SivBDR7ZEi57d2CZYF`,
	"errmsg": `gdSVM8yEV8IG4ZAbo_NT`,
	"line": `PwGfkZn5LtYOVvDEODfW`,
	"roleContainer": `oRRzNa5fzjPNydmeE0TQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/StudentCreateForm/StudentCreateForm.module.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/StudentCreateForm/StudentCreateForm.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.brsfA739F_ynNbix4uKv {
  width: 100%;
  min-height: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 3rem;
  border: 0.3rem solid var(--text-dark);
  background-color: var(--text-light);
  position: fixed;
  z-index: 1000;
}

.ECPV7XmPEyR8VBSBvUj3, .vWVffLIgm6SoabAdUKGn, .qN9p1pSMLp0QitoH8NF3 {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.ECPV7XmPEyR8VBSBvUj3 .l0v6oHOvxXnOseoap3X6, .ECPV7XmPEyR8VBSBvUj3 .eX2nsi051G6DWiiyPEcV, .ECPV7XmPEyR8VBSBvUj3 .gxrdVq5dYtVqJ6QXSQNE, .ECPV7XmPEyR8VBSBvUj3 .vgr0iNQ9uOxYGk8rN5WU, .ECPV7XmPEyR8VBSBvUj3 .VrcR2XvZ4IZOefpszoVp, .ECPV7XmPEyR8VBSBvUj3 .Ae5JkO69uzL3HZZSBt7o, .vWVffLIgm6SoabAdUKGn .l0v6oHOvxXnOseoap3X6, .vWVffLIgm6SoabAdUKGn .eX2nsi051G6DWiiyPEcV, .vWVffLIgm6SoabAdUKGn .gxrdVq5dYtVqJ6QXSQNE, .vWVffLIgm6SoabAdUKGn .vgr0iNQ9uOxYGk8rN5WU, .vWVffLIgm6SoabAdUKGn .VrcR2XvZ4IZOefpszoVp, .vWVffLIgm6SoabAdUKGn .Ae5JkO69uzL3HZZSBt7o, .qN9p1pSMLp0QitoH8NF3 .l0v6oHOvxXnOseoap3X6, .qN9p1pSMLp0QitoH8NF3 .eX2nsi051G6DWiiyPEcV, .qN9p1pSMLp0QitoH8NF3 .gxrdVq5dYtVqJ6QXSQNE, .qN9p1pSMLp0QitoH8NF3 .vgr0iNQ9uOxYGk8rN5WU, .qN9p1pSMLp0QitoH8NF3 .VrcR2XvZ4IZOefpszoVp, .qN9p1pSMLp0QitoH8NF3 .Ae5JkO69uzL3HZZSBt7o {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0.5rem;
}

.NJC47pCevYMDbBzPctlq {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.zHcn7pH8IL5imwpJOGhM, .zHcn7pH8IL5imwpJOGhM:visited {
  color: #fff;
}

.FeAdVI74l1stDOXLZK2t,
.nD_pkMIVy9tc55XWQty5, .Ah042_o8Ffr4JR_GNVzH {
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.kIhMAlhWz3yz5Q9O8r00,
.nD_pkMIVy9tc55XWQty5, .Ah042_o8Ffr4JR_GNVzH {
  margin-top: 1rem;
  margin: 0;
}

.nD_pkMIVy9tc55XWQty5, .Ah042_o8Ffr4JR_GNVzH {
  padding: 0.5rem;
}

.nD_pkMIVy9tc55XWQty5 {
  border: none;
  background-color: var(--text-dark);
  color: white;
  transition: 0.3s ease;
}
.nD_pkMIVy9tc55XWQty5:hover {
  cursor: pointer;
  padding: 0.7rem;
  font-size: 20px;
  background-color: #1a1c2a;
  transition: 0.3s ease;
}

.ywNMiBufhjeuxhWc7I6h {
  text-align: center;
}

.VqUXL8mtjUKts9XeNAJF {
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
}

.VqUXL8mtjUKts9XeNAJF > svg {
  margin-right: 0.25rem;
}

.xLQo3qhzD5pJbDId7BEE {
  position: absolute;
  left: -9999px;
}

.c1L4byIdd_bmF97913gs {
  display: none;
}

.b3btPA0rDqZJliFWaEjM {
  color: limegreen;
  margin-left: 0.25rem;
}

.TDEgTQfWdbK4msCuszVi {
  color: red;
  margin-left: 0.25rem;
}

.j3q9FTwQQ7ssEkTcsmMG {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.SFa2NIcskfr84De3JJ1c {
  display: inline-block;
}

.yPBclw8bufyNibMeODnd {
  visibility: hidden;
}

.QttGHCtLSo7U286Pipb8 {
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 100%;
  border: none;
  background-color: var(--text-dark);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.2s ease;
}
.QttGHCtLSo7U286Pipb8:hover {
  cursor: pointer;
  transform: scale(1.1);
  border: 0.2rem solid white;
  transition: 0.2s ease;
}`, "",{"version":3,"sources":["webpack://./src/components/StudentCreateForm/StudentCreateForm.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;EACA,eAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,cAAA;AACJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AAER;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;;EAEE,eAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACI,YAAA;EACA,kCAAA;EACA,YAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;AAER;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,UAAA;EACA,oBAAA;AACJ;;AAEA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kCAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,qBAAA;AAER","sourcesContent":[".section {\n    width: 100%;\n    min-height: 400px;\n    max-width: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 3rem;\n    border: .3rem solid var(--text-dark);\n    background-color: var(--text-light);\n    position: fixed;\n    z-index: 1000;\n}\n\n.nameContainer, .emailAndCampusContainer, .passwordContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem 0;\n    .fName, .lName, .email, .campusNum, .pwd, .confirmPwd {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 0 .5rem;\n    }\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex-grow: 1;\n    padding-bottom: 1rem;\n}\n\n.a, .a:visited {\n    color: #fff;\n}\n\n.input,\n.button, .disabledButton {\n  font-size: 22px;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n}\n\n.label,\n.button, .disabledButton {\n  margin-top: 1rem;\n  margin: 0;\n}\n\n.button, .disabledButton {\n  padding: 0.5rem;\n}\n\n.button {\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    transition: .3s ease;\n    &:hover {\n        cursor: pointer;\n        padding: 0.7rem;\n        font-size: 20px;\n        background-color: #1a1c2a;\n        transition: .3s ease;\n    }\n}\n\n.togglePara {\n    text-align: center;\n}\n\n.instructions {\n    font-size: 0.75rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.25rem;\n    position: relative;\n    bottom: -10px;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.line {\n    display: inline-block;\n}\n\n.roleContainer {\n    visibility: hidden;\n}\n\n.closeBtn {\n    width: 2rem;\n    height: 2rem;\n    position: absolute;\n    top: 1.5rem;\n    right: 1.5rem;\n    border-radius: 100%;\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    font-size: 1.5rem;\n    text-align: center;\n    transition: .2s ease;\n    &:hover {\n        cursor: pointer;\n        transform: scale(1.1);\n        border: .2rem solid white;\n        transition: .2s ease;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": `brsfA739F_ynNbix4uKv`,
	"nameContainer": `ECPV7XmPEyR8VBSBvUj3`,
	"emailAndCampusContainer": `vWVffLIgm6SoabAdUKGn`,
	"passwordContainer": `qN9p1pSMLp0QitoH8NF3`,
	"fName": `l0v6oHOvxXnOseoap3X6`,
	"lName": `eX2nsi051G6DWiiyPEcV`,
	"email": `gxrdVq5dYtVqJ6QXSQNE`,
	"campusNum": `vgr0iNQ9uOxYGk8rN5WU`,
	"pwd": `VrcR2XvZ4IZOefpszoVp`,
	"confirmPwd": `Ae5JkO69uzL3HZZSBt7o`,
	"form": `NJC47pCevYMDbBzPctlq`,
	"a": `zHcn7pH8IL5imwpJOGhM`,
	"input": `FeAdVI74l1stDOXLZK2t`,
	"button": `nD_pkMIVy9tc55XWQty5`,
	"disabledButton": `Ah042_o8Ffr4JR_GNVzH`,
	"label": `kIhMAlhWz3yz5Q9O8r00`,
	"togglePara": `ywNMiBufhjeuxhWc7I6h`,
	"instructions": `VqUXL8mtjUKts9XeNAJF`,
	"offscreen": `xLQo3qhzD5pJbDId7BEE`,
	"hide": `c1L4byIdd_bmF97913gs`,
	"valid": `b3btPA0rDqZJliFWaEjM`,
	"invalid": `TDEgTQfWdbK4msCuszVi`,
	"errmsg": `j3q9FTwQQ7ssEkTcsmMG`,
	"line": `SFa2NIcskfr84De3JJ1c`,
	"roleContainer": `yPBclw8bufyNibMeODnd`,
	"closeBtn": `QttGHCtLSo7U286Pipb8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SubjectCollapsible/SubjectCollapsible.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SubjectCollapsible/SubjectCollapsible.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.s1hDBvUBhloxBSASuGGY {
  display: flex;
}

.w0rROBZ6vHxgNBldJ43g {
  width: 500px;
}

.lfQhgTmpaz9JOGiL_F9A {
  margin-bottom: 0;
}

.YN5cSWILAQavC619Inz_ {
  background: var(--text-light);
  margin-bottom: 5px;
}

.zbPkoGbQaSbPo30xGPwa {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.rPH2PbKGp9ZDFHfd1A3A {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.E8TyL4HiFAes_TM4lKYL, .T3c6pXBCTv_bBgtUId9y.xiPNHjF24Wny7s3ALCVi {
  padding: 0 20px;
}

.E8TyL4HiFAes_TM4lKYL {
  background-color: var(--text-dark);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 47.5px;
}

.H1N7KI4EBJqG6E7uCcjP {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.RN8aT5LrlSPWeddGIU0X {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.T3c6pXBCTv_bBgtUId9y {
  background-color: var(--text-light);
  padding: 0 20px;
  color: var(--text-dark);
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
}

.E1MyqdPyU24TqV0Wd8Oa {
  margin-bottom: 0.5rem;
}

.ZcFHGsmEy5WSIjFholvY {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
}

.aZYSwhSlNlflT_Jb_C2y {
  margin: 0;
}

.NG5S2NYP0lXF11CECMrk {
  margin: 0;
  font-size: 0.8rem;
  color: grey;
}

.T3c6pXBCTv_bBgtUId9y.xiPNHjF24Wny7s3ALCVi {
  height: auto;
  max-height: 9999px;
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
}`, "",{"version":3,"sources":["webpack://./src/components/SubjectCollapsible/SubjectCollapsible.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,YAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,6BAAA;EACA,kBAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,kCAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAGA;EACI,mCAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,6CAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGA;EACI,SAAA;AAAJ;;AAEA;EACI,SAAA;EACA,iBAAA;EACA,WAAA;AACJ;;AAEA;EACI,YAAA;EACA,kBAAA;EACA,6CAAA;AACJ","sourcesContent":[".wrapper {\n    display: flex;\n}\n\n.accordion {\n    width: 500px;\n}\n\n.header {\n    margin-bottom: 0;\n}\n\n.item {\n    background: var(--text-light);\n    margin-bottom: 5px;\n}\n\n.firstItem {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastItem {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.title, .content.show {\n    padding: 0 20px;\n}\n\n.title {\n    background-color: var(--text-dark);\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    height: 47.5px;\n}\n\n.firstTitle {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastTitle {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n\n.content {\n    background-color: var(--text-light);\n    padding: 0 20px;\n    color: var(--text-dark);\n    max-height: 0;\n    overflow: hidden;\n    transition: all .5s cubic-bezier(0,1,0,1);\n}\n\n.contentContainer {\n    margin-bottom: .5rem;\n}\n\n.innerContent {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: .5rem;\n}\n\n.assignmentTitle {\n    margin: 0;\n}\n.subject {\n    margin: 0;\n    font-size: .8rem;\n    color: grey;\n}\n\n.content.show {\n    height: auto;\n    max-height: 9999px;\n    transition: all .5s cubic-bezier(1,0,1,0);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `s1hDBvUBhloxBSASuGGY`,
	"accordion": `w0rROBZ6vHxgNBldJ43g`,
	"header": `lfQhgTmpaz9JOGiL_F9A`,
	"item": `YN5cSWILAQavC619Inz_`,
	"firstItem": `zbPkoGbQaSbPo30xGPwa`,
	"lastItem": `rPH2PbKGp9ZDFHfd1A3A`,
	"title": `E8TyL4HiFAes_TM4lKYL`,
	"content": `T3c6pXBCTv_bBgtUId9y`,
	"show": `xiPNHjF24Wny7s3ALCVi`,
	"firstTitle": `H1N7KI4EBJqG6E7uCcjP`,
	"lastTitle": `RN8aT5LrlSPWeddGIU0X`,
	"contentContainer": `E1MyqdPyU24TqV0Wd8Oa`,
	"innerContent": `ZcFHGsmEy5WSIjFholvY`,
	"assignmentTitle": `aZYSwhSlNlflT_Jb_C2y`,
	"subject": `NG5S2NYP0lXF11CECMrk`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeacherCreateForm/TeacherCreateForm.module.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeacherCreateForm/TeacherCreateForm.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Okeg9GYyrjOtFQ_EVEP_ {
  width: 100%;
  min-height: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 3rem;
  border: 0.3rem solid var(--text-dark);
  background-color: var(--text-light);
  position: fixed;
  z-index: 1000;
}

.eKhc3kc6nzvUuc8oIyN6, .e8k_VnMu4bnHVGf4n8hq, .OQTMbFb7JCUGLNrjjurX {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.eKhc3kc6nzvUuc8oIyN6 .DE2D06ruLAN4yZrE94Wf, .eKhc3kc6nzvUuc8oIyN6 .xHZQnrQWkiOdMceg4ssN, .eKhc3kc6nzvUuc8oIyN6 .MPBFNjMqJFuG93qA6zxg, .eKhc3kc6nzvUuc8oIyN6 .CJp8CbZt27U_aQK14rfl, .eKhc3kc6nzvUuc8oIyN6 .k6LsVoVZbprHgxkdGB3A, .eKhc3kc6nzvUuc8oIyN6 .k8SrRS1khPFHGxEr3wL1, .e8k_VnMu4bnHVGf4n8hq .DE2D06ruLAN4yZrE94Wf, .e8k_VnMu4bnHVGf4n8hq .xHZQnrQWkiOdMceg4ssN, .e8k_VnMu4bnHVGf4n8hq .MPBFNjMqJFuG93qA6zxg, .e8k_VnMu4bnHVGf4n8hq .CJp8CbZt27U_aQK14rfl, .e8k_VnMu4bnHVGf4n8hq .k6LsVoVZbprHgxkdGB3A, .e8k_VnMu4bnHVGf4n8hq .k8SrRS1khPFHGxEr3wL1, .OQTMbFb7JCUGLNrjjurX .DE2D06ruLAN4yZrE94Wf, .OQTMbFb7JCUGLNrjjurX .xHZQnrQWkiOdMceg4ssN, .OQTMbFb7JCUGLNrjjurX .MPBFNjMqJFuG93qA6zxg, .OQTMbFb7JCUGLNrjjurX .CJp8CbZt27U_aQK14rfl, .OQTMbFb7JCUGLNrjjurX .k6LsVoVZbprHgxkdGB3A, .OQTMbFb7JCUGLNrjjurX .k8SrRS1khPFHGxEr3wL1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0.5rem;
}

.O7Ir3xQsZ_p9AtHLWxHg {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  padding-bottom: 1rem;
}

.pLIq6JF6urGLbyaCYVO1, .pLIq6JF6urGLbyaCYVO1:visited {
  color: #fff;
}

.AvAr22UIcwBpNVrQwqaF,
.J0TqLrSoWsv8pS0zMf_8, .nbNIAOawaLfRwP37fb89 {
  font-size: 22px;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.R1vIW7pOdJDAx7CpocGP,
.J0TqLrSoWsv8pS0zMf_8, .nbNIAOawaLfRwP37fb89 {
  margin-top: 1rem;
  margin: 0;
}

.J0TqLrSoWsv8pS0zMf_8, .nbNIAOawaLfRwP37fb89 {
  padding: 0.5rem;
}

.J0TqLrSoWsv8pS0zMf_8 {
  border: none;
  background-color: var(--text-dark);
  color: white;
  transition: 0.3s ease;
}
.J0TqLrSoWsv8pS0zMf_8:hover {
  cursor: pointer;
  padding: 0.7rem;
  font-size: 20px;
  background-color: #1a1c2a;
  transition: 0.3s ease;
}

.jQzlWvccGjJVQ7Zst2z2 {
  text-align: center;
}

.sEsWrs_2hT6SDLJpXjYp {
  font-size: 0.75rem;
  border-radius: 0.5rem;
  background: #000;
  color: #fff;
  padding: 0.25rem;
  position: relative;
  bottom: -10px;
}

.sEsWrs_2hT6SDLJpXjYp > svg {
  margin-right: 0.25rem;
}

.i6BrsMtQaBiq7aB_iHRr {
  position: absolute;
  left: -9999px;
}

.Gn2atSoyYKUTbFWTmd9L {
  display: none;
}

.iC41RiJyYOAeOffRm8l2 {
  color: limegreen;
  margin-left: 0.25rem;
}

.PQeFcEiePJyRIN4ecpTU {
  color: red;
  margin-left: 0.25rem;
}

.EI7T2f428F6RyXhiOfgQ {
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.nc5LdhWeQTZ5N02xQZth {
  display: inline-block;
}

.SYXZ4LjY4pzR14_iHcrg {
  visibility: hidden;
}

.JMbwUm9Xx6c3xfHJEWNv {
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 100%;
  border: none;
  background-color: var(--text-dark);
  color: white;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.2s ease;
}
.JMbwUm9Xx6c3xfHJEWNv:hover {
  cursor: pointer;
  transform: scale(1.1);
  border: 0.2rem solid white;
  transition: 0.2s ease;
}`, "",{"version":3,"sources":["webpack://./src/components/TeacherCreateForm/TeacherCreateForm.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;EACA,eAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,cAAA;AACJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AAER;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,YAAA;EACA,oBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;;EAEE,eAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACI,YAAA;EACA,kCAAA;EACA,YAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;AAER;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,UAAA;EACA,oBAAA;AACJ;;AAEA;EACI,2BAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,kCAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,qBAAA;AAER","sourcesContent":[".section {\n    width: 100%;\n    min-height: 400px;\n    max-width: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 3rem;\n    border: .3rem solid var(--text-dark);\n    background-color: var(--text-light);\n    position: fixed;\n    z-index: 1000;\n}\n\n.nameContainer, .emailAndCampusContainer, .passwordContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 1rem 0;\n    .fName, .lName, .email, .campusNum, .pwd, .confirmPwd {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        margin: 0 .5rem;\n    }\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex-grow: 1;\n    padding-bottom: 1rem;\n}\n\n.a, .a:visited {\n    color: #fff;\n}\n\n.input,\n.button, .disabledButton {\n  font-size: 22px;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n}\n\n.label,\n.button, .disabledButton {\n  margin-top: 1rem;\n  margin: 0;\n}\n\n.button, .disabledButton {\n  padding: 0.5rem;\n}\n\n.button {\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    transition: .3s ease;\n    &:hover {\n        cursor: pointer;\n        padding: 0.7rem;\n        font-size: 20px;\n        background-color: #1a1c2a;\n        transition: .3s ease;\n    }\n}\n\n.togglePara {\n    text-align: center;\n}\n\n.instructions {\n    font-size: 0.75rem;\n    border-radius: 0.5rem;\n    background: #000;\n    color: #fff;\n    padding: 0.25rem;\n    position: relative;\n    bottom: -10px;\n}\n\n.instructions > svg {\n    margin-right: 0.25rem;\n}\n\n.offscreen {\n    position: absolute;\n    left: -9999px;\n}\n\n.hide {\n    display: none;\n}\n\n.valid {\n    color: limegreen;\n    margin-left: 0.25rem;\n}\n\n.invalid {\n    color: red;\n    margin-left: 0.25rem;\n}\n\n.errmsg {\n    background-color: lightpink;\n    color: firebrick;\n    font-weight: bold;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.line {\n    display: inline-block;\n}\n\n.roleContainer {\n    visibility: hidden;\n}\n\n.closeBtn {\n    width: 2rem;\n    height: 2rem;\n    position: absolute;\n    top: 1.5rem;\n    right: 1.5rem;\n    border-radius: 100%;\n    border: none;\n    background-color: var(--text-dark);\n    color: white;\n    font-size: 1.5rem;\n    text-align: center;\n    transition: .2s ease;\n    &:hover {\n        cursor: pointer;\n        transform: scale(1.1);\n        border: .2rem solid white;\n        transition: .2s ease;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": `Okeg9GYyrjOtFQ_EVEP_`,
	"nameContainer": `eKhc3kc6nzvUuc8oIyN6`,
	"emailAndCampusContainer": `e8k_VnMu4bnHVGf4n8hq`,
	"passwordContainer": `OQTMbFb7JCUGLNrjjurX`,
	"fName": `DE2D06ruLAN4yZrE94Wf`,
	"lName": `xHZQnrQWkiOdMceg4ssN`,
	"email": `MPBFNjMqJFuG93qA6zxg`,
	"campusNum": `CJp8CbZt27U_aQK14rfl`,
	"pwd": `k6LsVoVZbprHgxkdGB3A`,
	"confirmPwd": `k8SrRS1khPFHGxEr3wL1`,
	"form": `O7Ir3xQsZ_p9AtHLWxHg`,
	"a": `pLIq6JF6urGLbyaCYVO1`,
	"input": `AvAr22UIcwBpNVrQwqaF`,
	"button": `J0TqLrSoWsv8pS0zMf_8`,
	"disabledButton": `nbNIAOawaLfRwP37fb89`,
	"label": `R1vIW7pOdJDAx7CpocGP`,
	"togglePara": `jQzlWvccGjJVQ7Zst2z2`,
	"instructions": `sEsWrs_2hT6SDLJpXjYp`,
	"offscreen": `i6BrsMtQaBiq7aB_iHRr`,
	"hide": `Gn2atSoyYKUTbFWTmd9L`,
	"valid": `iC41RiJyYOAeOffRm8l2`,
	"invalid": `PQeFcEiePJyRIN4ecpTU`,
	"errmsg": `EI7T2f428F6RyXhiOfgQ`,
	"line": `nc5LdhWeQTZ5N02xQZth`,
	"roleContainer": `SYXZ4LjY4pzR14_iHcrg`,
	"closeBtn": `JMbwUm9Xx6c3xfHJEWNv`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeacherReadingTracker/TeacherReadingTracker.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeacherReadingTracker/TeacherReadingTracker.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dpQGpbiC4SZapu2Yjmr5 {
  width: 90%;
  height: 15rem;
  border-radius: 0.5rem;
  margin: 1rem 0 10rem 0;
}
.dpQGpbiC4SZapu2Yjmr5 .kQXXS63lk1AOtMRf9k1g {
  background-color: var(--text-dark);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  color: white;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dpQGpbiC4SZapu2Yjmr5 .kQXXS63lk1AOtMRf9k1g .cWboqian8YAaoXaLUlgV {
  margin: 0;
}
.dpQGpbiC4SZapu2Yjmr5 .OdmiW9kOLKerqlbWsBkw {
  border: 0.3rem solid var(--text-light);
  background-color: aliceblue;
  padding-left: 1rem;
}
.dpQGpbiC4SZapu2Yjmr5 .OdmiW9kOLKerqlbWsBkw .sufKvomTvNagsh8348Xw {
  display: flex;
  align-items: center;
}
.dpQGpbiC4SZapu2Yjmr5 .OdmiW9kOLKerqlbWsBkw .sufKvomTvNagsh8348Xw .l9uWJByiTnyLTT6ycPlQ {
  margin-right: 1rem;
}
.dpQGpbiC4SZapu2Yjmr5 .OdmiW9kOLKerqlbWsBkw .q4EBXp_XxAU2McEi0U5X {
  display: flex;
}
.dpQGpbiC4SZapu2Yjmr5 .OdmiW9kOLKerqlbWsBkw .q4EBXp_XxAU2McEi0U5X .IDFvwTcXxmvlKtixHbo8 {
  margin-left: 1rem;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.dpQGpbiC4SZapu2Yjmr5 .OdmiW9kOLKerqlbWsBkw .oTGQwgnrKSZwBl6FQKJt, .dpQGpbiC4SZapu2Yjmr5 .OdmiW9kOLKerqlbWsBkw .cXX2LTSRZq7_BFoW0jgm {
  margin-left: 1rem;
}
.dpQGpbiC4SZapu2Yjmr5 .uaJSk454LHz2QK3qVoH9 {
  background-color: var(--text-light);
  height: 20%;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.FctXze9aCqeQgcg3Nnhx {
  display: flex;
  justify-content: flex-end;
  width: 70%;
}
.FctXze9aCqeQgcg3Nnhx .GLavoEiZXmlp_rfyyVvK:focus {
  outline: none;
}`, "",{"version":3,"sources":["webpack://./src/components/TeacherReadingTracker/TeacherReadingTracker.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,aAAA;EACA,qBAAA;EACA,sBAAA;AACJ;AAAI;EACI,kCAAA;EACA,8BAAA;EACA,+BAAA;EACA,YAAA;EACA,oBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAER;AADQ;EACI,SAAA;AAGZ;AAAI;EACI,sCAAA;EACA,2BAAA;EACA,kBAAA;AAER;AADQ;EACI,aAAA;EACA,mBAAA;AAGZ;AAFY;EACI,kBAAA;AAIhB;AADQ;EACI,aAAA;AAGZ;AAFY;EACI,iBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;AAIhB;AADQ;EACI,iBAAA;AAGZ;AAAI;EACI,mCAAA;EACA,WAAA;EACA,iCAAA;EACA,kCAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;EACA,mBAAA;AAER;;AACA;EACI,aAAA;EACA,yBAAA;EACA,UAAA;AAEJ;AAAQ;EACI,aAAA;AAEZ","sourcesContent":[".ReadingTracker {\n    width: 90%;\n    height: 15rem;\n    border-radius: .5rem;\n    margin: 1rem 0 10rem 0;\n    .headerContainer {\n        background-color: var(--text-dark);\n        border-top-left-radius: .5rem;\n        border-top-right-radius: .5rem;\n        color: white;\n        padding: .3rem 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        .header {\n            margin: 0;\n        }\n    }\n    .scoringContainer {\n        border: .3rem solid var(--text-light);\n        background-color: aliceblue;\n        padding-left: 1rem;\n        .goalContainer {\n            display: flex;\n            align-items: center;\n            .goalLabel {\n                margin-right: 1rem;\n            }\n        }\n        .targetContainer {\n            display: flex;\n            .targetInnerContainer {\n                margin-left: 1rem;\n                width: 40%;\n                display: flex;\n                justify-content: space-between;\n            }\n        }\n        .onLevelSpan, .checkInSpan {\n            margin-left: 1rem;\n        }\n    }\n    .teacherSelector {\n        background-color: var(--text-light);\n        height: 20%;\n        border-bottom-left-radius: .5rem;\n        border-bottom-right-radius: .5rem;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n}\n.selectorContainer {\n    display: flex;\n    justify-content: flex-end;\n    width: 70%;\n    .selector {\n        &:focus {\n            outline: none;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ReadingTracker": `dpQGpbiC4SZapu2Yjmr5`,
	"headerContainer": `kQXXS63lk1AOtMRf9k1g`,
	"header": `cWboqian8YAaoXaLUlgV`,
	"scoringContainer": `OdmiW9kOLKerqlbWsBkw`,
	"goalContainer": `sufKvomTvNagsh8348Xw`,
	"goalLabel": `l9uWJByiTnyLTT6ycPlQ`,
	"targetContainer": `q4EBXp_XxAU2McEi0U5X`,
	"targetInnerContainer": `IDFvwTcXxmvlKtixHbo8`,
	"onLevelSpan": `oTGQwgnrKSZwBl6FQKJt`,
	"checkInSpan": `cXX2LTSRZq7_BFoW0jgm`,
	"teacherSelector": `uaJSk454LHz2QK3qVoH9`,
	"selectorContainer": `FctXze9aCqeQgcg3Nnhx`,
	"selector": `GLavoEiZXmlp_rfyyVvK`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeamCollapsible/TeamCollapsible.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeamCollapsible/TeamCollapsible.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.fydLXw9yGVdW58uo8Zuw {
  display: flex;
}

.SZb477xUTem7uQBBIxhv {
  width: 500px;
}

.AcMKBmddErtPZr1ODx0D {
  margin-bottom: 0;
}

.pglvDiMCkQxWTpCNoFfW {
  background: var(--text-light);
  margin-bottom: 5px;
}

.p9yyVrk9XCa7IgsURQ9B {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.UeSV7udoYJuVCdOdF6hz {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.jh7MWs9gn82e7eke3MeS, .eeffQC9Bv81gqHjZffqd.uHhDAO2MXR6I03bZsa_D {
  padding: 0 20px;
}

.jh7MWs9gn82e7eke3MeS {
  background-color: var(--text-dark);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 47.5px;
}

.oIXkE4dbDAKdZPeojJG8 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.FYnRUOorMqt7CrwtAZdl {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.eeffQC9Bv81gqHjZffqd {
  background-color: var(--text-light);
  padding: 0 20px;
  color: var(--text-dark);
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
}

.kpd8S7kJ4Z9mjbFkoBhG {
  margin-bottom: 0.5rem;
}

.gqpiNQ8QxGj7mG8rKQR7 {
  margin: 0;
}

.eeffQC9Bv81gqHjZffqd.uHhDAO2MXR6I03bZsa_D {
  height: auto;
  max-height: 9999px;
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
}`, "",{"version":3,"sources":["webpack://./src/components/TeamCollapsible/TeamCollapsible.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,YAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,6BAAA;EACA,kBAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,kCAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;AACJ;;AAEA;EACI,8BAAA;EACA,+BAAA;AACJ;;AAEA;EACI,iCAAA;EACA,kCAAA;AACJ;;AAEA;EACI,mCAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,6CAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,SAAA;AACJ;;AAEA;EACI,YAAA;EACA,kBAAA;EACA,6CAAA;AACJ","sourcesContent":[".wrapper {\n    display: flex;\n}\n\n.accordion {\n    width: 500px;\n}\n\n.header {\n    margin-bottom: 0;\n}\n\n.item {\n    background: var(--text-light);\n    margin-bottom: 5px;\n}\n\n.firstItem {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastItem {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.title, .content.show {\n    padding: 0 20px;\n}\n\n.title {\n    background-color: var(--text-dark);\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    height: 47.5px;\n}\n\n.firstTitle {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n\n.lastTitle {\n    border-bottom-left-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n\n.content {\n    background-color: var(--text-light);\n    padding: 0 20px;\n    color: var(--text-dark);\n    max-height: 0;\n    overflow: hidden;\n    transition: all .5s cubic-bezier(0,1,0,1);\n}\n\n.contentContainer {\n    margin-bottom: .5rem;\n}\n\n.studentName {\n    margin: 0;\n}\n\n.content.show {\n    height: auto;\n    max-height: 9999px;\n    transition: all .5s cubic-bezier(1,0,1,0);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `fydLXw9yGVdW58uo8Zuw`,
	"accordion": `SZb477xUTem7uQBBIxhv`,
	"header": `AcMKBmddErtPZr1ODx0D`,
	"item": `pglvDiMCkQxWTpCNoFfW`,
	"firstItem": `p9yyVrk9XCa7IgsURQ9B`,
	"lastItem": `UeSV7udoYJuVCdOdF6hz`,
	"title": `jh7MWs9gn82e7eke3MeS`,
	"content": `eeffQC9Bv81gqHjZffqd`,
	"show": `uHhDAO2MXR6I03bZsa_D`,
	"firstTitle": `oIXkE4dbDAKdZPeojJG8`,
	"lastTitle": `FYnRUOorMqt7CrwtAZdl`,
	"contentContainer": `kpd8S7kJ4Z9mjbFkoBhG`,
	"studentName": `gqpiNQ8QxGj7mG8rKQR7`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --text-dark: #232946;
  --text-light: rgb(176, 207, 228);
  --bg-color: rgb(244, 246, 240);
  --btn-animation: rgba(219, 171, 171, 0.3);
  --input-color: rgb(87, 8, 8);
  --nav-border: rgba(219, 171, 171, 0.3);
  --text-red: rgb(237, 100, 100);
  --text-green: rgb(51, 86, 51);
}

* {
  box-sizing: border-box;
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAAA;EACI,oBAAA;EACA,gCAAA;EACA,8BAAA;EACA,yCAAA;EACA,4BAAA;EACA,sCAAA;EACA,8BAAA;EACA,6BAAA;AACJ;;AAEA;EACI,sBAAA;AACJ","sourcesContent":[":root {\n    --text-dark: #232946;\n    --text-light: rgb(176, 207, 228);\n    --bg-color: rgb(244, 246, 240);\n    --btn-animation: rgba(219, 171, 171, 0.3);\n    --input-color: rgb(87, 8, 8);\n    --nav-border: rgba(219, 171, 171, 0.3);\n    --text-red: rgb(237, 100, 100);\n    --text-green: rgb(51, 86, 51);\n}\n\n* {\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AdminPage/AdminPage.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AdminPage/AdminPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.t94ykq1IYkjSjcirq1io {
  width: 100%;
  height: 100%;
  position: relative;
}
.t94ykq1IYkjSjcirq1io .thz6UkFUFIkfZxopICYv {
  color: white;
  font-size: 3rem;
  text-align: center;
  background-color: var(--text-dark);
  border-radius: 1.5rem;
  box-shadow: 0 0 10px black;
}
.t94ykq1IYkjSjcirq1io .thz6UkFUFIkfZxopICYv .NqbYiys6TGloJyZJmPi_ {
  color: var(--text-light);
  text-shadow: 1px 1px 1px white, -1px 1px 1px white, -1px -1px 0 white, 1px -1px 0 white;
}
.t94ykq1IYkjSjcirq1io .LTbBi1qWev1Tt5s3ZoYB {
  width: 100%;
  display: flex;
  justify-items: stretch;
  align-items: center;
  margin-bottom: 1rem;
}
.t94ykq1IYkjSjcirq1io .LTbBi1qWev1Tt5s3ZoYB .xEFfL5_hO2IKVfNpGj7d {
  font-family: "Dekko", cursive;
  background-color: var(--text-light);
  border: 0.2rem solid var(--text-dark);
  height: 3rem;
  width: 100%;
  margin: 0.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.3rem;
  color: var(--text-dark);
  transition: 0.4s ease;
}
.t94ykq1IYkjSjcirq1io .LTbBi1qWev1Tt5s3ZoYB .xEFfL5_hO2IKVfNpGj7d:hover {
  background-color: var(--text-dark);
  color: white;
  transition: 0.4s ease;
}
.t94ykq1IYkjSjcirq1io .SPArmqMqj3lWYj1prkk5 {
  width: 100%;
  height: 100%;
  z-index: 500;
  position: absolute;
  display: flex;
  border-radius: 3rem;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px black;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 {
  width: 100%;
  display: flex;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .okfSNkPLGLju07TQuKfK {
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .okfSNkPLGLju07TQuKfK p {
  margin: 0;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .qMMAmIImaZjL54Y95S6S {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: 0.2rem solid var(--text-dark);
  background-color: var(--text-light);
  width: 500px;
  height: 500px;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .qMMAmIImaZjL54Y95S6S .EF9FrgVHGzCZKH6tUiDO {
  margin: 0;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .qMMAmIImaZjL54Y95S6S .ZhLhAJpMDCKNj_v8WoDn {
  width: 400px;
  height: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-radius: 2rem;
  background-color: white;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .qMMAmIImaZjL54Y95S6S .ZhLhAJpMDCKNj_v8WoDn .lT28ZqmJktdnEp2m5AiZ {
  display: flex;
  flex-direction: column;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .qMMAmIImaZjL54Y95S6S .ZhLhAJpMDCKNj_v8WoDn .lT28ZqmJktdnEp2m5AiZ .HITcdosq_5oztVa42bvl {
  width: 1.5rem;
  height: 325px;
  position: relative;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .X2PJMDJ4ICy0sqSiVUIN .qMMAmIImaZjL54Y95S6S .ZhLhAJpMDCKNj_v8WoDn .lT28ZqmJktdnEp2m5AiZ .HITcdosq_5oztVa42bvl .PH_VdmsmMDGWDsKCCLWQ {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: var(--text-dark);
  border: 0.15rem solid white;
}
.t94ykq1IYkjSjcirq1io .xCsQJ6aTbkTPRNT11ZO4 .n9krAkJzJRwlUBCxdjcU {
  width: 50%;
}`, "",{"version":3,"sources":["webpack://./src/pages/AdminPage/AdminPage.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AACJ;AAAI;EACI,YAAA;EACA,eAAA;EACA,kBAAA;EACA,kCAAA;EACA,qBAAA;EACA,0BAAA;AAER;AADQ;EACI,wBAAA;EACA,uFACA;AAEZ;AAII;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;AAFR;AAGQ;EACI,6BAAA;EACA,mCAAA;EACA,qCAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,qBAAA;EACA,uBAAA;EACA,qBAAA;AADZ;AAEY;EACI,kCAAA;EACA,YAAA;EACA,qBAAA;AAAhB;AAII;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCAAA;EACA,0BAAA;AAFR;AAII;EACI,WAAA;EACA,aAAA;AAFR;AAGQ;EACI,UAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADZ;AAEY;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;AAAhB;AACgB;EACI,SAAA;AACpB;AAEY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;AAAhB;AACgB;EACI,SAAA;AACpB;AACgB;EACI,YAAA;EACA,aAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;AACpB;AAAoB;EACI,aAAA;EACA,sBAAA;AAExB;AADwB;EACI,aAAA;EACA,aAAA;EACA,kBAAA;AAG5B;AAF4B;EACI,kBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,kCAAA;EACA,2BAAA;AAIhC;AAGQ;EACI,UAAA;AADZ","sourcesContent":[".AdminPage {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    .Header {\n        color: white;\n        font-size: 3rem;\n        text-align: center;\n        background-color: var(--text-dark);\n        border-radius: 1.5rem;\n        box-shadow: 0 0 10px black;\n        .span {\n            color: var(--text-light);\n            text-shadow:\n            1px 1px 1px white,\n            -1px 1px 1px white,\n            -1px -1px 0 white,\n            1px -1px 0 white;\n        }\n    }\n    .addBtnContainer {\n        width: 100%;\n        display: flex;\n        justify-items: stretch;\n        align-items: center;\n        margin-bottom: 1rem;\n        .addBtn {\n            font-family: \"Dekko\", cursive;\n            background-color: var(--text-light);\n            border: .2rem solid var(--text-dark);\n            height: 3rem;\n            width: 100%;\n            margin: .3rem;\n            font-size: 1.2rem;\n            font-weight: bold;\n            border-radius: .3rem;\n            color: var(--text-dark);\n            transition: .4s ease;\n            &:hover {\n                background-color: var(--text-dark);\n                color: white;\n                transition: .4s ease;\n            }\n        }\n    }\n    .createForm {\n        width: 100%;\n        height: 100%;\n        z-index: 500;\n        position: absolute;\n        display: flex;\n        border-radius: 3rem;\n        justify-content: center;\n        background-color: rgba(0, 0, 0, .3);\n        box-shadow: 0 0 10px black;\n    }\n    .mainContainer {\n        width: 100%;\n        display: flex;\n        .leftContainer {\n            padding: 0;\n            margin: 0;\n            height: 100%;\n            width: 50%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            .graphScale {\n                height: 325px;\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                margin-bottom: 1rem;\n                p {\n                    margin: 0;\n                }\n            }\n            .graphContainer {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                border-radius: 2rem;\n                border: .2rem solid var(--text-dark);\n                background-color: var(--text-light);\n                width: 500px;\n                height: 500px;\n                .subject {\n                    margin: 0;\n                }\n                .graphInnerContainer {\n                    width: 400px;\n                    height: 350px;\n                    display: flex;\n                    justify-content: space-evenly;\n                    align-items: flex-end;\n                    border-radius: 2rem;\n                    background-color: white;\n                    .gradeContainer {\n                        display: flex;\n                        flex-direction: column;\n                        .bar {\n                            width: 1.5rem;\n                            height: 325px;\n                            position: relative;\n                            .barColor {\n                                position: absolute;\n                                bottom: 0;\n                                height: 100%;\n                                width: 100%;\n                                background-color: var(--text-dark);\n                                border: .15rem solid white;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        .rightContainer {\n            width: 50%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AdminPage": `t94ykq1IYkjSjcirq1io`,
	"Header": `thz6UkFUFIkfZxopICYv`,
	"span": `NqbYiys6TGloJyZJmPi_`,
	"addBtnContainer": `LTbBi1qWev1Tt5s3ZoYB`,
	"addBtn": `xEFfL5_hO2IKVfNpGj7d`,
	"createForm": `SPArmqMqj3lWYj1prkk5`,
	"mainContainer": `xCsQJ6aTbkTPRNT11ZO4`,
	"leftContainer": `X2PJMDJ4ICy0sqSiVUIN`,
	"graphScale": `okfSNkPLGLju07TQuKfK`,
	"graphContainer": `qMMAmIImaZjL54Y95S6S`,
	"subject": `EF9FrgVHGzCZKH6tUiDO`,
	"graphInnerContainer": `ZhLhAJpMDCKNj_v8WoDn`,
	"gradeContainer": `lT28ZqmJktdnEp2m5AiZ`,
	"bar": `HITcdosq_5oztVa42bvl`,
	"barColor": `PH_VdmsmMDGWDsKCCLWQ`,
	"rightContainer": `n9krAkJzJRwlUBCxdjcU`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.RygkJgZmBHTETlLP3C3i {
  padding-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/pages/AuthPage/AuthPage.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ","sourcesContent":[".AuthPage {\n    padding-top: 5vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AuthPage": `RygkJgZmBHTETlLP3C3i`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.luBJirBC3AbIwQNsEypk {
  height: 100%;
  background-color: white;
  margin: 2rem 0;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn {
  height: 100vh;
  width: 100%;
  text-align: center;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW {
  margin: 0;
  color: white;
  font-size: 3rem;
  text-align: center;
  background-color: var(--text-dark);
  border-radius: 1.5rem;
  box-shadow: 0 0 10px black;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .XsNBZjjraoQhCb8vwGiG {
  font-size: 4rem;
  letter-spacing: 5px;
  color: var(--text-light);
  text-shadow: 1px 1px 1px white, -1px 1px 1px white, -1px -1px 0 white, 1px -1px 0 white;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .Y3O2_Ragj9tGH2q6vZ0u {
  display: flex;
  width: 100%;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .Y3O2_Ragj9tGH2q6vZ0u .q8pfVjuaeU_XkC47nJFh {
  text-align: left;
  line-height: 2rem;
  font-size: 1rem;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .Y3O2_Ragj9tGH2q6vZ0u .q8pfVjuaeU_XkC47nJFh .v1AGjsW6weOpCWspyKhm {
  font-weight: 800;
  font-size: 1.4rem;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .Y3O2_Ragj9tGH2q6vZ0u .zji2A40FAnmBpMWl_jwR {
  margin-top: 2rem;
  height: 100%;
  width: 40%;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .lXfzdOHBHXf5pLlpvxSs {
  margin: 0 auto;
  width: 20rem;
  height: 3rem;
  background-color: var(--text-light);
  color: var(--text-dark);
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Dekko", cursive;
  border: 0.1rem solid var(--text-dark);
  border-radius: 0.5rem;
  transition: 0.3s ease;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .lXfzdOHBHXf5pLlpvxSs:hover {
  cursor: pointer;
  transition: 0.3s ease;
  background-color: var(--text-dark);
  color: white;
  box-shadow: 0 0 10px black;
}
.luBJirBC3AbIwQNsEypk .SFzQUleyXLDlii7aEUlZ {
  background-color: var(--text-light);
  width: 100%;
  border-radius: 3rem;
  padding: 2rem 0;
  border: 0.2rem solid var(--text-dark);
}
.luBJirBC3AbIwQNsEypk .SFzQUleyXLDlii7aEUlZ .Uww1ZXnPyqReM6vFaTjs {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem 0;
}
.luBJirBC3AbIwQNsEypk .SFzQUleyXLDlii7aEUlZ .Uww1ZXnPyqReM6vFaTjs .t7n9GX7N4b1nwTYj2BJv {
  max-width: 50%;
  padding: 0 2rem;
  font-size: 1.4rem;
}
.luBJirBC3AbIwQNsEypk .SFzQUleyXLDlii7aEUlZ .Uww1ZXnPyqReM6vFaTjs .OANrHW02gzoqyv5UHhmL {
  max-width: 350px;
  border-radius: 3rem;
  border: 0.4rem solid var(--text-dark);
}
.luBJirBC3AbIwQNsEypk .SFzQUleyXLDlii7aEUlZ .Uww1ZXnPyqReM6vFaTjs:nth-of-type(2) {
  flex-direction: row-reverse;
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,uBAAA;EACA,cAAA;AACJ;AAAI;EACI,aAAA;EACA,WAAA;EACA,kBAAA;AAER;AADQ;EACI,SAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,kCAAA;EACA,qBAAA;EACA,0BAAA;AAGZ;AADQ;EACI,eAAA;EACA,mBAAA;EACA,wBAAA;EACA,uFACE;AAEd;AAGQ;EACI,aAAA;EACA,WAAA;AADZ;AAEY;EACI,gBAAA;EACA,iBAAA;EACA,eAAA;AAAhB;AACgB;EACI,gBAAA;EACA,iBAAA;AACpB;AAEY;EACI,gBAAA;EACA,YAAA;EACA,UAAA;AAAhB;AAGQ;EACI,cAAA;EACA,YAAA;EACA,YAAA;EACA,mCAAA;EACA,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,6BAAA;EACA,qCAAA;EACA,qBAAA;EACA,qBAAA;AADZ;AAEY;EACI,eAAA;EACA,qBAAA;EACA,kCAAA;EACA,YAAA;EACA,0BAAA;AAAhB;AAII;EACI,mCAAA;EACA,WAAA;EACA,mBAAA;EACA,eAAA;EACA,qCAAA;AAFR;AAGQ;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;AADZ;AAEY;EACI,cAAA;EACA,eAAA;EACA,iBAAA;AAAhB;AAEY;EACI,gBAAA;EACA,mBAAA;EACA,qCAAA;AAAhB;AAGQ;EACI,2BAAA;AADZ","sourcesContent":[".HomePage {\n    height: 100%;\n    background-color: white;\n    margin: 2rem 0;\n    .introContainer {\n        height: 100vh;\n        width: 100%;\n        text-align: center;\n        .heading {\n            margin: 0;\n            color: white;\n            font-size: 3rem;\n            text-align: center;\n            background-color: var(--text-dark);\n            border-radius: 1.5rem;\n            box-shadow: 0 0 10px black;\n        }\n        .span {\n            font-size: 4rem;\n            letter-spacing: 5px;\n            color: var(--text-light);\n            text-shadow:\n              1px 1px 1px white,\n              -1px 1px 1px white,\n              -1px -1px 0 white,\n              1px -1px 0 white;\n        }\n        .introAndImgContainer {\n            display: flex;\n            width: 100%;\n            .intro {\n                text-align: left;\n                line-height: 2rem;\n                font-size: 1rem;\n                .titleSpan {\n                    font-weight: 800;\n                    font-size: 1.4rem;\n                }\n            }\n            .owlImage {\n                margin-top: 2rem;\n                height: 100%;\n                width: 40%;\n            }\n        }\n        .button {\n            margin: 0 auto;\n            width: 20rem;\n            height: 3rem;\n            background-color: var(--text-light);\n            color: var(--text-dark);\n            font-size: 1.3rem;\n            font-weight: bold;\n            font-family: \"Dekko\", cursive;\n            border: .1rem solid var(--text-dark);\n            border-radius: .5rem;\n            transition: .3s ease;\n            &:hover {\n                cursor: pointer;\n                transition: .3s ease;\n                background-color: var(--text-dark);\n                color: white;\n                box-shadow: 0 0 10px black;\n            }\n        }\n    }\n    .contentContainer {\n        background-color: var(--text-light);\n        width: 100%;\n        border-radius: 3rem;\n        padding: 2rem 0;\n        border: .2rem solid var(--text-dark);\n        .textImageContainer {\n            display: flex;\n            justify-content: space-evenly;\n            align-items: center;\n            margin: 2rem 0;\n            padding: 1rem 0;\n            .p {\n                max-width: 50%;\n                padding: 0 2rem;\n                font-size: 1.4rem\n            }\n            .image {\n                max-width: 350px;\n                border-radius: 3rem;\n                border: .4rem solid var(--text-dark);\n            }\n        }\n        .textImageContainer:nth-of-type(2) {\n            flex-direction: row-reverse;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"HomePage": `luBJirBC3AbIwQNsEypk`,
	"introContainer": `dDBktqHefpOPtro_D3nn`,
	"heading": `HXb4If_3xaEW4b91vFuW`,
	"span": `XsNBZjjraoQhCb8vwGiG`,
	"introAndImgContainer": `Y3O2_Ragj9tGH2q6vZ0u`,
	"intro": `q8pfVjuaeU_XkC47nJFh`,
	"titleSpan": `v1AGjsW6weOpCWspyKhm`,
	"owlImage": `zji2A40FAnmBpMWl_jwR`,
	"button": `lXfzdOHBHXf5pLlpvxSs`,
	"contentContainer": `SFzQUleyXLDlii7aEUlZ`,
	"textImageContainer": `Uww1ZXnPyqReM6vFaTjs`,
	"p": `t7n9GX7N4b1nwTYj2BJv`,
	"image": `OANrHW02gzoqyv5UHhmL`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/StudentPage/StudentPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/StudentPage/StudentPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.oQIE1J3Ehu0f1cfE4wsv {
  width: 100%;
  height: 100%;
}
.oQIE1J3Ehu0f1cfE4wsv .pRfWFLVg3xDCU282S0Pp {
  color: white;
  font-size: 3rem;
  text-align: center;
  background-color: var(--text-dark);
  border-radius: 1.5rem;
  box-shadow: 0 0 10px black;
}
.oQIE1J3Ehu0f1cfE4wsv .pRfWFLVg3xDCU282S0Pp .Kwb6SH9xcaruFPvd9NpR {
  color: var(--text-light);
  text-shadow: 1px 1px 1px white, -1px 1px 1px white, -1px -1px 0 white, 1px -1px 0 white;
}
.oQIE1J3Ehu0f1cfE4wsv .NqXjGRhUOU4hB5Jz0z0Q {
  width: 100%;
  display: flex;
}
.oQIE1J3Ehu0f1cfE4wsv .NqXjGRhUOU4hB5Jz0z0Q ._ITxAoTxxIIVB8dvLAMw {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.oQIE1J3Ehu0f1cfE4wsv .NqXjGRhUOU4hB5Jz0z0Q .J62klrLlxjEJIQkPiSns {
  width: 50%;
}`, "",{"version":3,"sources":["webpack://./src/pages/StudentPage/StudentPage.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ;AAAI;EACI,YAAA;EACA,eAAA;EACA,kBAAA;EACA,kCAAA;EACA,qBAAA;EACA,0BAAA;AAER;AADQ;EACI,wBAAA;EACA,uFACA;AAEZ;AAII;EACI,WAAA;EACA,aAAA;AAFR;AAGQ;EACI,UAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADZ;AAGQ;EACI,UAAA;AADZ","sourcesContent":[".StudentPage {\n    width: 100%;\n    height: 100%;\n    .Header {\n        color: white;\n        font-size: 3rem;\n        text-align: center;\n        background-color: var(--text-dark);\n        border-radius: 1.5rem;\n        box-shadow: 0 0 10px black;\n        .span {\n            color: var(--text-light);\n            text-shadow:\n            1px 1px 1px white,\n            -1px 1px 1px white,\n            -1px -1px 0 white,\n            1px -1px 0 white;\n        }\n    }\n    .mainContainer {\n        width: 100%;\n        display: flex;\n        .leftContainer {\n            padding: 0;\n            margin: 0;\n            height: 100%;\n            width: 50%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        .rightContainer {\n            width: 50%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"StudentPage": `oQIE1J3Ehu0f1cfE4wsv`,
	"Header": `pRfWFLVg3xDCU282S0Pp`,
	"span": `Kwb6SH9xcaruFPvd9NpR`,
	"mainContainer": `NqXjGRhUOU4hB5Jz0z0Q`,
	"leftContainer": `_ITxAoTxxIIVB8dvLAMw`,
	"rightContainer": `J62klrLlxjEJIQkPiSns`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/TeacherPage/TeacherPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/TeacherPage/TeacherPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.emsU6kgDEloBJriL_yTp {
  width: 100%;
  height: 100%;
  position: relative;
}
.emsU6kgDEloBJriL_yTp .o_abCV2G_KvW4SW8IQfK {
  color: white;
  font-size: 3rem;
  text-align: center;
  background-color: var(--text-dark);
  border-radius: 1.5rem;
  box-shadow: 0 0 10px black;
}
.emsU6kgDEloBJriL_yTp .o_abCV2G_KvW4SW8IQfK .sK6u_wOJOHRKnq4Occ1Q {
  color: var(--text-light);
  text-shadow: 1px 1px 1px white, -1px 1px 1px white, -1px -1px 0 white, 1px -1px 0 white;
}
.emsU6kgDEloBJriL_yTp .G1Z_hX8nfCAq3jJ29DQb {
  width: 100%;
  display: flex;
  justify-items: stretch;
  align-items: center;
  margin-bottom: 1rem;
}
.emsU6kgDEloBJriL_yTp .G1Z_hX8nfCAq3jJ29DQb .gKDpmKxiZNIAr4FCvvQy {
  font-family: "Dekko", cursive;
  background-color: var(--text-light);
  border: 0.2rem solid var(--text-dark);
  height: 3rem;
  width: 100%;
  margin: 0.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 0.3rem;
  color: var(--text-dark);
  transition: 0.4s ease;
}
.emsU6kgDEloBJriL_yTp .G1Z_hX8nfCAq3jJ29DQb .gKDpmKxiZNIAr4FCvvQy:hover {
  background-color: var(--text-dark);
  color: white;
  transition: 0.4s ease;
}
.emsU6kgDEloBJriL_yTp .UODI2mGCqYkxcILS5ffp {
  width: 100%;
  height: 100%;
  z-index: 500;
  position: absolute;
  display: flex;
  border-radius: 3rem;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px black;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb {
  width: 100%;
  display: flex;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .EfKHN2SAytWqEql6vdoQ {
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .EfKHN2SAytWqEql6vdoQ p {
  margin: 0;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .khgZ9YqDyHPm_o3WFbf9 {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: 0.2rem solid var(--text-dark);
  background-color: var(--text-light);
  width: 500px;
  height: 500px;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .khgZ9YqDyHPm_o3WFbf9 .JLW6g_AXMUS559ISLIj0 {
  margin: 0;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .khgZ9YqDyHPm_o3WFbf9 .DrrMQJHVZ8SReHJBI1Su {
  width: 400px;
  height: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-radius: 2rem;
  background-color: white;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .khgZ9YqDyHPm_o3WFbf9 .DrrMQJHVZ8SReHJBI1Su .b1ocQbwxQ9aHotoptuCO {
  display: flex;
  flex-direction: column;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .khgZ9YqDyHPm_o3WFbf9 .DrrMQJHVZ8SReHJBI1Su .b1ocQbwxQ9aHotoptuCO .ZY4p2ZPd0sLt9BRtRPrA {
  width: 1.5rem;
  height: 325px;
  position: relative;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .PVZyCcTXgOloKXyLtzGG .khgZ9YqDyHPm_o3WFbf9 .DrrMQJHVZ8SReHJBI1Su .b1ocQbwxQ9aHotoptuCO .ZY4p2ZPd0sLt9BRtRPrA .XXeAPrkiCyk5zT2IhqtB {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: var(--text-dark);
  border: 0.15rem solid white;
}
.emsU6kgDEloBJriL_yTp .wDUvVrlG84aiRkCPonSb .VW6MmtRTDJxGtq1Vfq6Z {
  width: 50%;
}`, "",{"version":3,"sources":["webpack://./src/pages/TeacherPage/TeacherPage.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AACJ;AAAI;EACI,YAAA;EACA,eAAA;EACA,kBAAA;EACA,kCAAA;EACA,qBAAA;EACA,0BAAA;AAER;AADQ;EACI,wBAAA;EACA,uFACA;AAEZ;AAII;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;AAFR;AAGQ;EACI,6BAAA;EACA,mCAAA;EACA,qCAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,qBAAA;EACA,uBAAA;EACA,qBAAA;AADZ;AAEY;EACI,kCAAA;EACA,YAAA;EACA,qBAAA;AAAhB;AAII;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCAAA;EACA,0BAAA;AAFR;AAII;EACI,WAAA;EACA,aAAA;AAFR;AAGQ;EACI,UAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADZ;AAEY;EACI,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;AAAhB;AACgB;EACI,SAAA;AACpB;AAEY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,qCAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;AAAhB;AACgB;EACI,SAAA;AACpB;AACgB;EACI,YAAA;EACA,aAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;AACpB;AAAoB;EACI,aAAA;EACA,sBAAA;AAExB;AADwB;EACI,aAAA;EACA,aAAA;EACA,kBAAA;AAG5B;AAF4B;EACI,kBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,kCAAA;EACA,2BAAA;AAIhC;AAGQ;EACI,UAAA;AADZ","sourcesContent":[".TeacherPage {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    .Header {\n        color: white;\n        font-size: 3rem;\n        text-align: center;\n        background-color: var(--text-dark);\n        border-radius: 1.5rem;\n        box-shadow: 0 0 10px black;\n        .span {\n            color: var(--text-light);\n            text-shadow:\n            1px 1px 1px white,\n            -1px 1px 1px white,\n            -1px -1px 0 white,\n            1px -1px 0 white;\n        }\n    }\n    .addBtnContainer {\n        width: 100%;\n        display: flex;\n        justify-items: stretch;\n        align-items: center;\n        margin-bottom: 1rem;\n        .addBtn {\n            font-family: \"Dekko\", cursive;\n            background-color: var(--text-light);\n            border: .2rem solid var(--text-dark);\n            height: 3rem;\n            width: 100%;\n            margin: .3rem;\n            font-size: 1.2rem;\n            font-weight: bold;\n            border-radius: .3rem;\n            color: var(--text-dark);\n            transition: .4s ease;\n            &:hover {\n                background-color: var(--text-dark);\n                color: white;\n                transition: .4s ease;\n            }\n        }\n    }\n    .createForm {\n        width: 100%;\n        height: 100%;\n        z-index: 500;\n        position: absolute;\n        display: flex;\n        border-radius: 3rem;\n        justify-content: center;\n        background-color: rgba(0, 0, 0, .3);\n        box-shadow: 0 0 10px black;\n    }\n    .mainContainer {\n        width: 100%;\n        display: flex;\n        .leftContainer {\n            padding: 0;\n            margin: 0;\n            height: 100%;\n            width: 50%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            .graphScale {\n                height: 325px;\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                margin-bottom: 1rem;\n                p {\n                    margin: 0;\n                }\n            }\n            .graphContainer {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                border-radius: 2rem;\n                border: .2rem solid var(--text-dark);\n                background-color: var(--text-light);\n                width: 500px;\n                height: 500px;\n                .subject {\n                    margin: 0;\n                }\n                .graphInnerContainer {\n                    width: 400px;\n                    height: 350px;\n                    display: flex;\n                    justify-content: space-evenly;\n                    align-items: flex-end;\n                    border-radius: 2rem;\n                    background-color: white;\n                    .gradeContainer {\n                        display: flex;\n                        flex-direction: column;\n                        .bar {\n                            width: 1.5rem;\n                            height: 325px;\n                            position: relative;\n                            .barColor {\n                                position: absolute;\n                                bottom: 0;\n                                height: 100%;\n                                width: 100%;\n                                background-color: var(--text-dark);\n                                border: .15rem solid white;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        .rightContainer {\n            width: 50%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"TeacherPage": `emsU6kgDEloBJriL_yTp`,
	"Header": `o_abCV2G_KvW4SW8IQfK`,
	"span": `sK6u_wOJOHRKnq4Occ1Q`,
	"addBtnContainer": `G1Z_hX8nfCAq3jJ29DQb`,
	"addBtn": `gKDpmKxiZNIAr4FCvvQy`,
	"createForm": `UODI2mGCqYkxcILS5ffp`,
	"mainContainer": `wDUvVrlG84aiRkCPonSb`,
	"leftContainer": `PVZyCcTXgOloKXyLtzGG`,
	"graphScale": `EfKHN2SAytWqEql6vdoQ`,
	"graphContainer": `khgZ9YqDyHPm_o3WFbf9`,
	"subject": `JLW6g_AXMUS559ISLIj0`,
	"graphInnerContainer": `DrrMQJHVZ8SReHJBI1Su`,
	"gradeContainer": `b1ocQbwxQ9aHotoptuCO`,
	"bar": `ZY4p2ZPd0sLt9BRtRPrA`,
	"barColor": `XXeAPrkiCyk5zT2IhqtB`,
	"rightContainer": `VW6MmtRTDJxGtq1Vfq6Z`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AdminCreateForm/AdminCreateForm.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/AdminCreateForm/AdminCreateForm.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AdminCreateForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AdminCreateForm/AdminCreateForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AdminReadingTracker/AdminReadingTracker.module.scss":
/*!****************************************************************************!*\
  !*** ./src/components/AdminReadingTracker/AdminReadingTracker.module.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AdminReadingTracker.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AdminReadingTracker/AdminReadingTracker.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AssignmentCollapsible/AssignmentCollapsible.module.scss":
/*!********************************************************************************!*\
  !*** ./src/components/AssignmentCollapsible/AssignmentCollapsible.module.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AssignmentCollapsible.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/AssignmentCollapsible/AssignmentCollapsible.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AssignmentCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/BarGraph/BarGraph.module.scss":
/*!******************************************************!*\
  !*** ./src/components/BarGraph/BarGraph.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./BarGraph.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/BarGraph/BarGraph.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ClassCollapsible/ClassCollapsible.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/ClassCollapsible/ClassCollapsible.module.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ClassCollapsible.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ClassCollapsible/ClassCollapsible.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ClassCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Collapsible/Collapsible.module.scss":
/*!************************************************************!*\
  !*** ./src/components/Collapsible/Collapsible.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Collapsible.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Collapsible/Collapsible.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Collapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Login/Login.module.scss":
/*!************************************************!*\
  !*** ./src/components/Login/Login.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Login.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Login/Login.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ParentCreateForm/ParentCreateForm.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/ParentCreateForm/ParentCreateForm.module.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ParentCreateForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ParentCreateForm/ParentCreateForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ParentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Register/Register.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Register/Register.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Register.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Register/Register.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Register_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/StudentCreateForm/StudentCreateForm.module.scss":
/*!************************************************************************!*\
  !*** ./src/components/StudentCreateForm/StudentCreateForm.module.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./StudentCreateForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/StudentCreateForm/StudentCreateForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SubjectCollapsible/SubjectCollapsible.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/SubjectCollapsible/SubjectCollapsible.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SubjectCollapsible.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SubjectCollapsible/SubjectCollapsible.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SubjectCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/TeacherCreateForm/TeacherCreateForm.module.scss":
/*!************************************************************************!*\
  !*** ./src/components/TeacherCreateForm/TeacherCreateForm.module.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./TeacherCreateForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeacherCreateForm/TeacherCreateForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherCreateForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/TeacherReadingTracker/TeacherReadingTracker.module.scss":
/*!********************************************************************************!*\
  !*** ./src/components/TeacherReadingTracker/TeacherReadingTracker.module.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./TeacherReadingTracker.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeacherReadingTracker/TeacherReadingTracker.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherReadingTracker_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/TeamCollapsible/TeamCollapsible.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/TeamCollapsible/TeamCollapsible.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./TeamCollapsible.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/TeamCollapsible/TeamCollapsible.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeamCollapsible_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.module.scss":
/*!*******************************!*\
  !*** ./src/index.module.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AdminPage/AdminPage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/AdminPage/AdminPage.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AdminPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AdminPage/AdminPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AdminPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AuthPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/StudentPage/StudentPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/StudentPage/StudentPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./StudentPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/StudentPage/StudentPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StudentPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/TeacherPage/TeacherPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/TeacherPage/TeacherPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./TeacherPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/TeacherPage/TeacherPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_TeacherPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./public/img/star-bg.png":
/*!********************************!*\
  !*** ./public/img/star-bg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9025efb22dcdb2c58efe.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_css-loader_dist_r-d77602"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.20ce771606038cf531be2010eaffe756.js.map