const initState = {
  admin_user_list: [],
  count: ''
}

function reducer (state = initState, action) {
  switch (action.type) {
    case 'GET_ADMIN_USER_LIST':
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default reducer