import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    image: '/images/lil.jpg',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    image: '/images/lil.jpg',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    image: '/images/lil.jpg',
  },
]

export default users