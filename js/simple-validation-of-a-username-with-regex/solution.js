function validateUsr(username) {
    return !!username.match(/^[a-z_0-9]{4,16}$/)
  }