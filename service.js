async function getServiceList() {
  const response = await fetch('http://localhost:3000/api/service')
  const data = await response.json()
  
  const services = document.querySelectorAll('tr > td')

  services.forEach(td => {
    const tr = td.parentNode
    //Vai retornar o elemento pai do td(neste caso é o tr)
    tr.remove()
  })

  const serviceListContainer = document.getElementById('service-list-container')

  data.forEach(service => {
      const newServiceDiv = document.createElement('tr')
        
      newServiceDiv.id = service.id
      newServiceDiv.innerHTML = `
        <td>${service.name}</td>
        <td>${service.price}</td>
        <td>${service.duration}</td>
      `

      serviceListContainer.appendChild(newServiceDiv)
  })
}

getServiceList()

const createServiceButton = document.getElementById('create-service-button')

createServiceButton.addEventListener('click', async (event) => {
    event.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const price = document.querySelector('input[name="price"]').value
    const duration = document.querySelector('input[name="duration"]').value
    // Pegando os dados que vão ser inseridos pelo usuário(nome, data de nascimento, email e cpf)

    await fetch('http://localhost:3000/api/service', { 
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            name,
            price,
            duration,
        })
    })

  await getServiceList()
})
