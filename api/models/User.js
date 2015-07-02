module.exports = {
  attributes: {
    firstName: {
      type: 'string'
    },

    lastName: {
      type: 'string'
    },

    email: {
      type: 'string'
    },

    zipcode: {
      type: 'string'
    },

    expertise: {
      collection: 'expertise',
      via: 'users'
    }
  }
}