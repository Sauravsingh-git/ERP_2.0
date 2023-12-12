console.log("handleFeedback")

const queryString = window.location.search;

const queryParams = new URLSearchParams(queryString);

const code = queryParams.get('code');
const subject = queryParams.get('subject');
const formattedSubject = subject.replaceAll("_", " ")

const codeInput = document.querySelector('#code_input')
const subjectInput = document.querySelector('#subject_input')
const codeElement = document.querySelector('#subject_code');
const subjectElement = document.querySelector("#subject_name")

codeElement.textContent = "Subject Code : " + code;
subjectElement.textContent = "Subject Name : " + formattedSubject;  
subjectInput.value = subject;
codeInput.value = code;

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", e => {
    e.preventDefault(); 

    const fd = new FormData(form);
    fetch("http://localhost:8000/feedbackAdd", {
        method : 'POST',
        body : fd
    })
    .then(response => {

        window.history.back();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
