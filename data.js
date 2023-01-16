import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Ramesh',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin:true
        },
        {
            name: 'Suresh',
            email: 'user1@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin:false
        }
    ],
    products: [
        {
            // _id: '1',
            name: 'Nike Slim shirt',
            slug: 'Nike-Slim-shirt',
            category: 'Shirts',
            image: './images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            desc: 'high quality shirt',
        },
        {
            // _id: '2',
            name: 'Adidas Slim shirt',
            slug: 'Adidas-Slim-shirt',
            category: 'Shirts',
            image: './images/p2.jpg',
            price: 100,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            desc: 'high quality shirt',
        },
        {
            // _id: '3',
            name: 'Adidas Formal shirt',
            slug: 'Adidas-formal-shirt',
            category: 'Shirts',
            image: './images/p3.jpg',
            price: 200,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            desc: 'high quality formal shirt',
        },
        {
            // _id: '4',
            name: 'Nike Cream Pant',
            slug: 'Nike-cream-pant',
            category: 'Pants',
            image: './images/p4.jpg',
            price: 300,
            countInStock: 11,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            desc: 'high quality pant',
        },
        {
            // _id: '5',
            name: 'Nike Slim Pant',
            slug: 'Nike-Slim-pant',
            category: 'Pants',
            image: './images/p5.jpg',
            price: 250,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 11,
            desc: 'high quality pant',
        },
        {
            // _id: '6',
            name: 'Nike Formal Pant',
            slug: 'Nike-formal-pant',
            category: 'Pants',
            image: './images/p6.jpg',
            price: 350,
            countInStock: 12,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 5,
            desc: 'high quality pant',
        },
    ]
}

export default data