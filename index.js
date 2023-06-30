const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

app.use(express.static('public'))

const teams = {
    'warriors':{
        'pointGuard': 'Stephen Curry',
        'team': 'Golden State Warriors',
        'photo': 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'
    },
    'mavericks':{
        'pointGuard': 'Luka Doncic',
        'team': 'Dallas Mavericks',
        'photo': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png'
    },
    'hawks':{
        'pointGuard': 'Trae Young',
        'team': 'Atlanta Hawks',
        'photo': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png'
    },
    '76ers':{
        'pointGuard': 'James Harden',
        'team': 'Philadelphia 76ers',
        'photo': 'https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png'
    },
    'grizzlies':{
        'pointGuard': 'Ja Morant',
        'team': 'Memphis Grizzlies',
        'photo': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png'
    },
    'blazers':{
        'pointGuard': 'Damian Lillard',
        'team': 'Portland Trail Blazers',
        'photo': 'https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png'
    },
    'suns':{
        'pointGuard': 'Chris Paul',
        'team': 'Phoenix Suns',
        'photo': 'https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png'
    },
    'unknown': {
        'pointGuard': 'Unknown',
        'team': 'Unknown',
        'photo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png'
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

