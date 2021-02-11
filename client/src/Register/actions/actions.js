let nextTodoId = 0
export const createUser = text => ({
  type: 'CREATE_USER',
  id: nextTodoId++,
  text
})
