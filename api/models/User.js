module.exports = {
  attributes: {
    name: {
      type: 'string'
    },

    email: {
      type: 'email'
    },

    expertise: {
      collection: 'expertise',
      via: 'users'
    }
  }
}