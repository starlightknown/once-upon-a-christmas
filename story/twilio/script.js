const cloudless_function_url = 'https://wt-8081b26e05bb4354f7d65ffc34cbbd67-0.run.webtask.io/twilio';

let form = document.querySelector("#send-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  axios.post(cloudless_function_url, {
    // message: document.querySelector("#recipe").textContent,
    message: `You're gonna need butter and eggs.\n\Let's bake it together on video call!`,
    to_number: document.querySelector("#sms-number").value
  })
  .then(function (response) {
    // console.log(response);
  })
  .catch(function (error) {
    // console.log(error);
  });
});

