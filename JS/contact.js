// emailjs.init("YOUR_PUBLIC_KEY");

// const form = document.getElementById("contact-form");
// const status = document.getElementById("status");

// form.addEventListener("submit", function(e){
//   e.preventDefault();

//   status.innerText = "Sending...";

//   emailjs.sendForm(
//     "YOUR_SERVICE_ID",
//     "YOUR_TEMPLATE_ID",
//     this
//   )
//   .then(() => {
//     status.innerText = "Message sent successfully!";
//     form.reset();
//   })
//   .catch(() => {
//     status.innerText = "Failed to send message.";
//   });
// });


// for form 
emailjs.init("UEFpfu_qcSdXwY3Pb");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const status = document.getElementById("status");

    emailjs.sendForm(
      "service_b7dv1mh",
      "template_e0nwupf",
      this
    )

      .then(() => {

        document.getElementById("contact-form").style.display = "none";

        document.getElementById("thankYouBox").style.display = "block";

        thankYouBox.scrollIntoView({
          behavior: "smooth"
        });

        this.reset();

      })

      .catch((error) => {
        document.getElementById("contact-form").style.display = "none";

        document.getElementById("sorryBox").style.display = "block";

        sorryBox.scrollIntoView({
          behavior: "smooth"
        });

        console.log(error);
      });

  });