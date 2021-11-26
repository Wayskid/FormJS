'use strict';

let firstNameField = document.querySelector('.fNameField')
let lastNameField = document.querySelector('.lNameField')
let userName = document.querySelector('.userNameField')
let emailField = document.querySelector('.emailField')
let passwordField = document.querySelector('.passwordField')
let cPasswordField = document.querySelector('.cPasswordField')
let pNumberField = document.querySelector('#pNumberField')
let submitButton = document.querySelector('.submitButton')


function validateEmail (textInput){
    let textData = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    textData.test(textInput) ? true : false ;
}

function disbaleBtn (){
    submitButton.disabled = true;
}

function enableBtn (){
    submitButton.disabled = false;
}