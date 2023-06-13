const express = require("express");
const req = require("express/lib/request");
const { User, Service, Animal } = require("./models"); 
const app = express();
const port = 3000;

app.use(express.json())
app.use("/home", express.static('./index.html'))
app.use("/index.css", express.static('./index.css'))
app.use("/script.js", express.static('./script.js'))

app.use("/service", express.static('./service.html'))
app.use("/service.css", express.static('./service.css'))
app.use("/service.js", express.static('./service.js'))

app.use("/animal", express.static('./animals.html'))
app.use("/animals.css", express.static('./animals.css'))
app.use("/animals.js", express.static('./animals.js'))

app.use("/call", express.static('./calls.html'))
app.use("/calls.css", express.static('./calls.css'))
app.use("/calls.js", express.static('./calls.js'))
//Disponibilizando arquivos

let calls = []

app.get('/api/user', async (request, response) => {
    const users = await User.findAll()
    response.json(users)
})
app.get('/api/service', async (request, response) => {
    const services = await Service.findAll()
    response.json(services)
})
app.get('/api/animal', async (request, response) => {
    const animals = await Animal.findAll()
    response.json(animals)
})
app.get('/api/call', (request, response) => {
    response.json(calls)
})
app.post('/api/user', async (request, response) => {
    const newUser= {
        name: request.body.name,
        birthDate: request.body.birthDate,
        email: request.body.email,
        cpf: request.body.cpf,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    const user = await User.create(newUser)

    response.json(user)
})
app.post('/api/service', async (request, response) => {
    const newService= {
        name: request.body.name,
        price: request.body.price,
        duration: request.body.duration,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    const service = await Service.create(newService)

    response.json(service)
})
app.post('/api/animal', async (request, response) => {
    const newAnimal= {
        name: request.body.name,
        breed: request.body.breed,
        age: request.body.age,
        weight: request.body.weight,
        owner_name: request.body.owner_name,
        is_vacinated: request.body.is_vacinated,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    const animal = await Animal.create(newAnimal)

    response.json(animal)
})
app.post('/api/call', (request, response) => {
    const newCall= {
        id: services.length + 1,
        service_type: request.body.service_type,
        animal: request.body.animal,
        scheduled_data: request.body.scheduled_data,
        // createdAt: new Date(),
        // updatedAt: new Date(),
    }
    calls.push(newCall)
    response.json(newCall)
})
app.delete("/api/user/:id", function(request, response) {
    if (!request.params.id) {
        request
            .statusCode(400)
            .send({ message: "É necessário um id para deletar um usuário"})
            return
    }

    User.destroy({where: {id: request.params.id} })
        .then((data) => {
            response.send({ deleteUserCount: data })
        })
        .catch((erro) => {
            response.status(500).send({
                message:
                    erro.message || "Ocorreu um erro ao deletar o usuário"
        })
    })
})

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
