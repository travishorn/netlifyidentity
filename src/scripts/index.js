import netlifyIdentity from "netlify-identity-widget";

const checkIdentityBtn = document.getElementById("checkIdentityBtn");
const identityOutput = document.getElementById("identityOutput");
const callFunctionBtn = document.getElementById("callFunctionBtn");
const functionOutput = document.getElementById("functionOutput");

netlifyIdentity.init();

const checkIdentity = () => {
  identityOutput.innerText = JSON.stringify(
    netlifyIdentity.currentUser(),
    null,
    2
  );
};

const generateHeaders = () => {
  const headers = { "Content-Type": "application/json" };

  if (netlifyIdentity.currentUser()) {
    return netlifyIdentity
      .currentUser()
      .jwt()
      .then(token => {
        return {
          ...headers,
          Authorization: `Bearer ${token}`
        };
      });
  }

  return Promise.resolve(headers);
};

const callFunction = () => {
  generateHeaders().then(headers => {
    fetch("/.netlify/functions/protected", {
      method: "POST",
      headers,
      body: JSON.stringify({ message: "Hello World" })
    })
      .then(res => res.json())
      .then(data => {
        functionOutput.innerText = JSON.stringify(data);
      })
      .catch(err => {
        functionOutput.innerText = err;
      });
  });
};

checkIdentityBtn.addEventListener("click", checkIdentity);
callFunctionBtn.addEventListener("click", callFunction);
