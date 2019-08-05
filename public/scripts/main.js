/* globals netlifyIdentity */

const checkIdentityBtn = document.getElementById("checkIdentityBtn");
const identityOutput = document.getElementById("identityOutput");

const checkIdentity = () => {
  identityOutput.innerText = JSON.stringify(
    netlifyIdentity.currentUser(),
    null,
    2
  );
};

checkIdentityBtn.addEventListener("click", checkIdentity);
