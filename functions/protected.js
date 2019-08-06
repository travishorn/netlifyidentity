exports.handler = function(event, context, callback) {
  const user = context.clientContext && context.clientContext.user;
  const payload = JSON.parse(event.body);

  if (!user) {
    return callback(null, {
      statusCode: 401,
      body: JSON.stringify({
        message: "You must be signed in to call this function"
      })
    });
  }

  // Do something with the payload

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: "Request processed sucessfully",
      email: user.email,
      payload
    })
  });
};
