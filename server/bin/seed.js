const mongoose = require('mongoose')

const dbName = 'buddy'

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

//mongoose.connect('mongodb+srv://BelenOlias:qUW2FYfzj25NzjU@cluster0.eyzhh.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})

// Dogs

const Dog = require('../models/dog.model')

const dogs = [
    {
        name: 'Pancho',
        age: '6',
        race: 'Jack Russell',
        gender: 'Macho',
        description: 'Pequeñito pero matón. Vivía con una señora mayor a la que daba mucho amor y compañía. Ahora que ella ya no puede seguir haciéndose cargo de mí, necesito una nueva familia a la que llenar de momentos inolvidables.',
        imageUrl: 'https://www.petdarling.com/articulos/wp-content/uploads/2014/08/perros-jack-russell-terrier.jpg'
    },

    {
        name: 'Alma',
        age: '1',
        race: 'Golden Retriever',
        gender: 'Hembra',
        description: 'Soy súper cariñosa y adorable. Me llevo genial con todos los demás perros y me encanta jugar, sería perfecta para una casa con niños',
        imageUrl: 'https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg'
    },

    {
        name: 'Hammer',
        age: '5',
        race: 'Pitbull',
        gender: 'Macho',
        description: 'Soy un perro leal y protector, ideal para cuidar la casa. Me abandonaron hace unos meses en la calle y llegué a estar muy malito, pero ya estoy completamente recuperado y con muchas ganas de encontrar un nuevo hogar',
        imageUrl: 'https://estaticos.muyinteresante.es/media/cache/400x300_thumb/uploads/images/gallery/5abb51145cafe8eab0b34dec/pitbull-marron-blanco.jpg'
    },

    {
        name: 'Bibi',
        age: '3',
        race: 'Pinscher alemán',
        gender: 'Hembra',
        description: 'Tengo un carácter tranquilo, soy muy calmada y es raro que me ponga nerviosa por algo. Me gusta mucho que me acaricien las orejas y jugar con mi hueso de goma',
        imageUrl: 'https://fordogtrainers.es/images/razas-de-perros/P/perro-de-raza-pincher-aleman.jpg'
    },

    {
        name: 'Toby',
        age: '4',
        race: 'Pastor alemán',
        gender: 'Macho',
        description: 'Mi antigua familia me dejó en una gasolinera este verano, pero a pesar de eso sigo siendo muy alegre y juguetón. Me gusta mucho que me lancen una pelota para ir a buscarla y conocer a nuevos perritos',
        imageUrl: 'https://perrosdomesticos.org/wp-content/uploads/2020/03/pastor-alem%C3%A1n.jpg'
    },

    {
        name: 'Lola',
        age: '2',
        race: 'Beagle',
        gender: 'Hembra',
        description: 'Lo que más me gusta hacer es ir correteando a todos lados persiguiendo mariposas. Mi comida favorita son las chuches para perros con forma de hueso. Conmigo nunca te vas a aburrir',
        imageUrl: 'https://www.zooportraits.com/wp-content/uploads/2018/06/shutterstock_528653692.jpg'
    }
]

mongoose.connection.collections['dogs'].drop()

Dog.create(dogs)
    .then(dogs => console.log(`Se han creado ${dogs.length} perretes en la DDBB`))
    .catch(err => console.log(err))



// Associations

// const User = require('../models/user.model')

// const users = [

//     {
//         username: 'pataspeludas',
//         password: '12345',
//         associationName: 'Asociación Patas Peludas',
//         CIF: 'G58818501',
//         imageUrl: ,
//         email: 'pataspeludas@peludaspatas.com'
//     },

//     {
//         username: 'doglife',
//         password: '12345',
//         associationName: 'Dog Life ONG',
//         CIF: 'G27848503',
//         imageUrl: ,
//         email: 'doglife@savinglives.com'
//     },

//     {
//         username: 'helpingdogs',
//         password: '12345',
//         associationName: 'Helping Dogs Co.',
//         CIF: 'G92758536',
//         imageUrl: ,
//         email: 'helping@dogs.com'
//     }

// ]

// mongoose.connection.collections['users'].drop()


