async function getCallList() {
    const response = await fetch('http://localhost:3000/api/call')
    const data = await response.json()
    
    const calls = document.querySelectorAll('tr > td')
  
    calls.forEach(td => {
      const tr = td.parentNode
      //Vai retornar o elemento pai do td(neste caso é o tr)
      tr.remove()
    })
  
    const callListContainer = document.getElementById('call-list-container')
  
    data.forEach(call => {
        const newCallDiv = document.createElement('tr')
          
        newCallDiv.id = call.id
        newCallDiv.innerHTML = `
          <td>${call.service_type}</td>
          <td>${call.animal}</td>
          <td>${call.scheduled_data}</td>
        `
  
        callListContainer.appendChild(newCallDiv)
    })
  }
  
  getCallList()
  
  const createCallButton = document.getElementById('create-call-button')
  
  createCallButton.addEventListener('click', async (event) => {
      event.preventDefault()
  
      const service_type = document.querySelector('input[name="service_type"]').value
      const animal = document.querySelector('input[name="animal"]').value
      const scheduled_data = document.querySelector('input[name="scheduled_data"]').value

      // Pegando os dados que vão ser inseridos pelo usuário(nome, data de nascimento, email e cpf)
  
      await fetch('http://localhost:3000/api/call', { 
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              service_type,
              animal,
              scheduled_data,
          })
      })
  
    await getCallList()
  })
  