"use strict";

var login = {};

login.attachUnameEvent = function () {
    var unameInput = document.getElementsByName("uname");
    if (unameInput.length > 0) {
        unameInput = unameInput[0];
        unameInput.onfocus = function () {
            if (unameInput.value === "Enter user name") {
                unameInput.value = "";
            }
        };
        unameInput.onblur = function () {
            if (unameInput.value === "") {
                unameInput.value = "Enter user name";
            }
        };
    }
};

login.attachPasswordEvent = function () {
    var passwdInput = document.getElementsByName("password");
    var label = document.getElementsByClassName("login_password");
    if (passwdInput.length > 0 && label.length > 0) {
        passwdInput = passwdInput[0];
        label = label[0];

        passwdInput.onfocus = function () {
            label.style.display = "none";
        };
        passwdInput.onblur = function () {
            if (passwdInput.value === "") {
                label.style.display = "block";
            }
        };
    }
};

login.displayLoginBox = function () {
    var loginBox = document.getElementsByClassName("login_box");
    if (loginBox.length === 0) {
        return;
    }

    loginBox = loginBox[0];
    var keycode = event.keyCode || event.which;
    if (event.ctrlKey && event.shiftKey && keycode === 13) {
        if (loginBox.style.display !== "block") {
            loginBox.style.display = "block";
            var input = document.getElementsByName("uname");
            if (input.length > 0) {
                input[0].focus();
            }
        }
    } else if (keycode === 27) {
        loginBox.style.display = "none";
        var unameInput = document.getElementsByName("uname");
        if (unameInput.length > 0) {
            unameInput[0].value = "";
            unameInput[0].onblur();
        }
        var passwdInput = document.getElementsByName("password");
        if (passwdInput.length > 0) {
            passwdInput[0].value = "";
            passwdInput[0].onblur();
        }
    }
};

function onload () {
    login.attachUnameEvent();
    login.attachPasswordEvent();

    document.onkeyup = function () {
        login.displayLoginBox();
    };
}