function sendMail(){
  emailjs.init("l61WO8OxnrcQYItrB"); // your public key

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
      from_name: document.getElementById("fullName").value,
      email_id:  document.getElementById("email_id").value,
      message:   document.getElementById("message").value
    };

    emailjs.send("service_c46ygpf", "template_ctenhtb", params)
      .then(() => {
        document.getElementById("form-status").textContent = "Message sent successfully!";
        document.getElementById("form-status").style.color = "green";
        document.getElementById("contact-form").reset();
      })
      .catch(error => {
        console.error("EmailJS error:", error);
        document.getElementById("form-status").textContent = "Error sending message.";
        document.getElementById("form-status").style.color = "red";
      });
  });

}