import netlifyIdentity from "netlify-identity-widget";

const checkIdentityBtn = document.getElementById("checkIdentityBtn");
const identityOutput = document.getElementById("identityOutput");

netlifyIdentity.init();

const checkIdentity = () => {
  identityOutput.innerText = JSON.stringify(
    netlifyIdentity.currentUser(),
    null,
    2
  );
};

checkIdentityBtn.addEventListener("click", checkIdentity);
