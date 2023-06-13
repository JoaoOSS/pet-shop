async function getAnimalList() {
    const response = await fetch('http://localhost:3000/api/animal')
    const data = await response.json()
    
    const animals = document.querySelectorAll('tr > td')
  
    animals.forEach(td => {
      const tr = td.parentNode
      //Vai retornar o elemento pai do td(neste caso é o tr)
      tr.remove()
    })
  
    const animalListContainer = document.getElementById('animal-list-container')
  
    data.forEach(animal => {
        const newAnimalDiv = document.createElement('tr')
          
        newAnimalDiv.id = animal.id
        newAnimalDiv.innerHTML = `
          <td>${animal.name}</td>
          <td>${animal.breed}</td>
          <td>${animal.age}</td>
          <td>${animal.weight}</td>
          <td>${animal.owner_name}</td>
          <td>${animal.is_vacinated}</td>
        `
  
        animalListContainer.appendChild(newAnimalDiv)
    })
  }
  
  getAnimalList()
  
  const createAnimalButton = document.getElementById('create-animal-button')
  
  createAnimalButton.addEventListener('click', async (event) => {
      event.preventDefault()
  
      const name = document.querySelector('input[name="name"]').value
      const breed = document.querySelector('input[name="breed"]').value
      const age = document.querySelector('input[name="age"]').value
      const weight = document.querySelector('input[name="weight"]').value
      const owner_name = document.querySelector('input[name="owner_name"]').value
      const is_vacinated = document.querySelector('input[name="is_vacinated"]').value

      // Pegando os dados que vão ser inseridos pelo usuário(nome, data de nascimento, email e cpf)
  
      await fetch('http://localhost:3000/api/animal', { 
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              name,
              breed,
              age,
              weight,
              owner_name,
              is_vacinated
          })
      })
  
    await getAnimalList()
  })
  