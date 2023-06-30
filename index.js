const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const teams = {
    'warriors':{
        'pointGuard': 'Stephen Curry',
        'team': 'Golden State Warriors'
    },
    'mavericks':{
        'pointGuard': 'Luka Doncic',
        'team': 'Dallas Mavericks'
    },
    'hawks':{
        'pointGuard': 'Trae Young',
        'team': 'Atlanta Hawks'
    },
    '76ers':{
        'pointGuard': 'James Harden',
        'team': 'Philadelphia 76ers'
    },
    'unknown': {
        'pointGuard': 'Unknown',
        'team': 'Unknown'
    }

}
    

// READ
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') 
})

app.get('/api/:name', (request, response) =>{
    let teamName = request.params.name.toLowerCase()
    if (teams[teamName]){
        response.json(teams[teamName])
    } else{
        response.json(teams['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})

