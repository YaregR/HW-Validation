const schema = {
    type: "object",
    properties: {
        id: {type: "string", minLength: 1, maxLength: 2,},
        firstName: {type: "string"},
        lastName: {type: "string"}, 
        email: {type: "string", format: "email"},
        gender: {type: "string"},
        ipAddress: {type: "string", format: "ipv4"},
      },
    additionalProperties: false,
  };

  module.exports = {schema};