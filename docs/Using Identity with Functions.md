# Using Identity with Functions

In your web application, create a function to generate identity headers.

```
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

```

Use this function when making an HTTP request.

```
generateHeaders().then(headers => {
  fetch("/.netlify/functions/some_endpoint", {
    method: "POST",
    headers,
    body: "Any data you want to send"
  })
    .then(response => {
      // Do something with response
    })
    .catch(err => {
      // Handle error
    });
});
```

In the server-side function, Identity information is automatically verified and
added to the context.

```
export function handler(event, context, callback) {
  const user = context.clientContext && context.clientContext.user;
  const payload = JSON.parse(event.body);

  if (!user) {
    return callback(null, {
      statusCode: 401,
      body: "You must be signed in to call this function"
    });
  }

  // Do something with the payload

  callback(null, {
    statusCode: 200,
    body: "Request processed successfully"
  });
}
```
