const users = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return [
        ...state,
        console.log(action)
        // {
        //   name: action.name,
        //   email: action.email,
        //   password: action.password,
        // }
      ]
    default:
      return state
  }
}

export default users
