import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'john@example.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
