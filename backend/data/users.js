import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Arohan',
        email: 'arohan@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true

    },
    {
        name: 'Manish',
        email: 'manish@gmail.com',
        password: bcrypt.hashSync('123456',10), 
       

    },
    {
        name: 'Nishu',
        email: 'nishu@gmail.com',
        password: bcrypt.hashSync('123456',10),
       

    },
     
    {
        name: 'Mohit',
        email: 'Mohit@gmail.com',
        password: bcrypt.hashSync('123456',10),
       

    },
    
    {
        name: 'Vysakh',
        email: 'vysakh@gmail.com',
        password: bcrypt.hashSync('123456',10),
       

    }

]
export default users
