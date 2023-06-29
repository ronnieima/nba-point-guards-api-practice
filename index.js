const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illiniois' 
    },
    'yung kaitoima': {
        'age': 21,
        'birthName': 'Kaitoima',
        'birthLocation': 'Tamuning, Guam'
    },
    'unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown' 
    }

}
    

// READ
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') 
})

app.get('/api/:name', (request, response) =>{
    let rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]){
        response.json(rappers[rapperName].birthName)
    } else{
        response.json(rappers['unknown'].birthName)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})

