const url = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available'

fetch(url)
    .then(data => data.json())
    .then(response => console.log(response));