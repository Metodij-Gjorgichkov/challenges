class Email {
  constructor(from, to, subject, message) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.message = message;
  }

  displayEmail() {
    const fullEmail = `From: ${this.from}, To: ${this.to}, Subject: ${this.subject}, Message: ${this.message}`;
    alert(fullEmail);
  }
}

const from = prompt("Enter the sender's email address:");
const to = prompt("Enter the recipient's email address:");
const subject = prompt("Enter the subject of the email:");
const message = prompt("Enter the email message:");

const email = new Email(from, to, subject, message);
email.displayEmail();

const fromInput = document.querySelector("#from");
const toInput = document.querySelector("#to");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const sendEmail = document.querySelector("#sendEmail");

sendEmail.addEventListener("click", () => {
  if (
    fromInput.value &&
    toInput.value &&
    subjectInput.value &&
    messageInput.value &&
    subjectInput.value
  ) {
    const newEmail = new Email(
      fromInput.value,
      toInput.value,
      subjectInput.value,
      messageInput.value
    );

    const alertMessage = `From ${newEmail.from}, To: ${newEmail.to}, Subject: ${newEmail.subject}, Message: ${newEmail.message}`;
    alert(alertMessage);
  }

  fromInput.value = "";
  toInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
});

// solution with a constructor function

// function Email(from, to, subject, message) {
//   this.from = from;
//   this.to = to;
//   this.subject = subject;
//   this.message = message;

//   this.displayEmail = function () {
//     const fullEmail = `From: ${this.from}, To: ${this.to}, Subject: ${this.subject}, Message: ${this.message}`;
//     alert(fullEmail);
//   };
// }

// const from = prompt("Enter the sender's email address:");
// const to = prompt("Enter the recipient's email address:");
// const subject = prompt("Enter the subject of the email:");
// const message = prompt("Enter the email message:");

// const email = new Email(from, to, subject, message);
// email.displayEmail();
