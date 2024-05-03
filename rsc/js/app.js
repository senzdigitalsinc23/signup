//Helper functions for creating and setting elements on DOM
function createElements(element, text = "") {

    let create = document.createElement(element)

    create.textContent = text;

    return create;
}


function setAttributes(attributes, elements = []|"") {
    let properties = Object.keys(attributes);
    let values = Object.values(attributes);

   for (let i = 0; i < Object.keys(attributes).length; i++) {
       
       if (Array.isArray(elements)) {
            elements.map(element => {
                element.setAttribute(properties[i], values[i])
            })
       } else {
           elements.setAttribute(properties[i], values[i])
       }
    
    }
}

function attachElements(parent, children = []) {
    children.map((child) => parent.append(child));
}

let container = document.querySelector(".container");

//Create Elements
let wrapper = createElements("div");
let letGetOnContainer = createElements('div');
let formContainer = createElements('div');
let inputsContainer = createElements("div");
let logoContainer = createElements('div');
let logo = createElements('img');
let eCastContainer = createElements('div');
let error = createElements('div');

let form = createElements('form');
let mainTextContainer = createElements('div');
let paraText = createElements('p', "This is not a completed e-voting system! This system is still under development. The completed version will be available within 30-days. Thank you and stay connected to vote!");
let shortText = createElements('p', "Cast your vote anywhere.");
let firstNameInput = createElements('input');
let lastNameInput = createElements('input');
let emailInput = createElements('input');
let phoneInput = createElements('input');
let passwordInput = createElements('input');
let confirmInput = createElements('input');
let haveAccount = createElements('p', "Already have an account?");
let haveAccountContainer = createElements('div');
let login = createElements('a', "Log in");
let letDoThis = createElements('p', "Let's Get On!");
let btnCreate = createElements('input');
let eCast = createElements('h2', "eCAST");

let firstNameLabel = createElements("label");
let lastNameLabel = createElements("label");
let emailLabel = createElements("label");
let phoneLabel = createElements("label");
let passwordLabel = createElements("label");
let confirmLabel = createElements('label');

let firstNameDiv = createElements('div');
let lastNameDiv = createElements('div');
let emailDiv = createElements('div');
let phoneDiv = createElements('div');
let passwordDiv = createElements('div');
let confirmDiv = createElements('div');
let btnCreateDiv = createElements('div');


//Set elements properties
setAttributes({
    'style' : "margin: 0 3vw 2vh 0"
}, [firstNameDiv, lastNameDiv, emailDiv, phoneDiv, passwordDiv, confirmDiv, btnCreateDiv])

setAttributes({
    'class': "wrapper",
}, [wrapper]);


firstNameLabel.textContent = "First Name";
lastNameLabel.textContent = "Last Name";
emailLabel.textContent = "Email";
phoneLabel.textContent = "Phone Number";
passwordLabel.textContent = "Password";
confirmLabel.textContent = "Confirm Password";

setAttributes({ 'method': "post" }, [form]);
setAttributes({
    'type': "text",
    'name': "firstName",
    'class': "firstName",
    'id': "firstName",
    'required': true,
    'minLength': "3"
}, firstNameInput);
setAttributes({
    'type': "text",
    'name': "lastName",
    'class': "lastName",
    'id': "lastName",
    'required': true,
    'minLength': "3"
}, lastNameInput);
setAttributes({
    'type': "email",
    'name': "email",
    'class': "email",
    'id': "email",
    'required': true,
    'minLength': "3"
}, emailInput);
setAttributes({
    'type': "text",
    'name': "phone",
    'class': "phone",
    'id': "phone",
    'required': true
}, phoneInput);
setAttributes({
    'type': "password",
    'name': "password",
    'class': "password",
    'id': "password",
    'required': true,
    'minLength': "10",
    'minLength': "8"
}, passwordInput);
setAttributes({
    'type': "password",
    'name': "confirm",
    'class': "confirm",
    'id': "confirm",
    'required': true
}, confirmInput);

setAttributes({ 'class': "inputs-container" }, inputsContainer);
setAttributes({
    'type': "Submit",
    'value': "Create Account",
    'class': "btn-create-account",
}, btnCreate);

setAttributes({'class': "logo-container"}, logoContainer);

setAttributes({'class': "let-go-container"}, [letGetOnContainer])
setAttributes({ 'class': "form-container" }, [formContainer])
setAttributes({ 'class': "have-account" }, haveAccountContainer)
setAttributes({ 'href': "#" }, login)
setAttributes({ 'class': "main-text" }, mainTextContainer);

setAttributes({
    'src': "../../rsc/images/votes.ico",
    'alt': "Logo",
    'style': "width: 80px;"
}, logo)

setAttributes({ 'class': "ecast-container" }, eCastContainer)

setAttributes({ 'class': "e-cast" }, eCast)
setAttributes({'class': 'error'}, error)

//Attach elements to containers
attachElements(firstNameDiv, [firstNameLabel, createElements('br'), firstNameInput]);
attachElements(lastNameDiv, [lastNameLabel, createElements('br'), lastNameInput]);
attachElements(emailDiv, [emailLabel,createElements('br'), emailInput]);
attachElements(phoneDiv, [phoneLabel, createElements('br'), phoneInput]);
attachElements(passwordDiv, [passwordLabel, createElements('br'),passwordInput]);
attachElements(confirmDiv, [confirmLabel, createElements('br'), confirmInput]);
attachElements(btnCreateDiv, [createElements('br'), btnCreate]);
attachElements(formContainer, [letGetOnContainer, inputsContainer]);
attachElements(letGetOnContainer, [letDoThis]);
attachElements(inputsContainer, [firstNameDiv, lastNameDiv, emailDiv,
    phoneDiv, passwordDiv, confirmDiv]);
attachElements(passwordDiv, [error])
attachElements(haveAccountContainer, [haveAccount, login])
attachElements(form, [formContainer, btnCreateDiv, haveAccountContainer]);
attachElements(mainTextContainer, [paraText, shortText])
attachElements(wrapper, [mainTextContainer, form])
attachElements(eCastContainer, [logo, eCast])
attachElements(container, [logoContainer, wrapper, eCastContainer]);


//Adding Events to forms
firstNameInput.addEventListener('focusout', () => {
    if (!firstNameInput.validity.valid) {
        setAttributes({ 'style': "border: 1px solid red" }, firstNameInput);
    } else {
        setAttributes({ 'style': "border: 1px solid var(--btn-success)" }, firstNameInput);
    }
});
lastNameInput.addEventListener('focusout', () => {
    if (!lastNameInput.validity.valid) {
        setAttributes({'style': "border: 1px solid red"}, lastNameInput)
    } else {
        setAttributes({ 'style': "border: 1px solid var(--btn-success)" }, lastNameInput);
    }
});
emailInput.addEventListener('focusout', () => {
    if (!emailInput.validity.valid) {
        setAttributes({'style': "border: 1px solid red"}, emailInput)
    }else {
        setAttributes({ 'style': "border: 1px solid var(--btn-success)" }, emailInput);
    }
});
phoneInput.addEventListener('focusout', () => {
    if (!phoneInput.validity.valid) {
        setAttributes({'style': "border: 1px solid red"}, phoneInput)
    } else {
        setAttributes({ 'style': "border: 1px solid var(--btn-success)" }, phoneInput);
    }
});
passwordInput.addEventListener('focusout', () => {
    if (!passwordInput.validity.valid) {
        setAttributes({'style': "border: 1px solid red"}, passwordInput)
    } else {
        setAttributes({ 'style': "border: 1px solid var(--btn-success)" }, passwordInput);
    }
});
confirmInput.addEventListener('focusout', () => {
    if (!confirmInput.validity.valid) {
        setAttributes({'style': "border: 1px solid red"}, confirmInput)
    } else {
        setAttributes({ 'style': "border: 1px solid var(--btn-success)" }, confirmInput);
    }

    if (confirmInput.value !== passwordInput.value) {
        error.textContent = "Passwords do no match";
    }
});

