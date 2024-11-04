const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const date = new Date()
let today = date.getDate()
console.log(date)

const players = {
    'zeus': {
        'birthName': 'Choi Woo-je (최우제)',
        'position': 'Top lane',
        'duration': 'Since November 2020',
        'age': 20,
        'birthday': '2004-01-31',
        'funFact': 'His mother recommended him the nickname "Zeus", because the transcription of his nickname is similar to his name.',
        'src': 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/69/T1_Zeus_2024_Split_2.png/revision/latest/scale-to-width-down/220?cb=20240618150302'
    },
    'oner': {
        'birthName': 'Mun Hyeon-jun (문현준)',
        'position': 'Jungle',
        'duration': 'Since December 2020',
        'age': 21,
        'birthday': '2002-12-24',
        'funFact': 'Reached rank 1 on the North America server during Worlds 2022.',
        'src': 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3d/T1_Oner_2024_Split_2.png/revision/latest/scale-to-width-down/220?cb=20240618150300'
    },
    'faker': {
        'birthName': 'Lee Sang-hyeok (이상혁)',
        'position': 'Mid lane',
        'duration': 'Since February 2013',
        'age': 28,
        'birthday': '1996-05-07',
        'funFact': 'Faker is the first inductee for the LoL Esports Hall of Legends.',
        'src': '/images/Faker.png'
    },
    'gumayusi': {
        'birthName': 'Lee Min-hyeong (이민형)',
        'position': 'Bot lane: ADC',
        'duration': 'Since December 2019, initially a substitute player.',
        'age': 22,
        'birthday': '2002-02-06',
        'funFact': 'He is the sixth of seven siblings.',
        'src': 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b3/T1_Gumayusi_2024_Split_2.png/revision/latest/scale-to-width-down/220?cb=20240618150256'
    },
    'keria': {
        'birthName': 'Ryu Min-seok (류민석)',
        'position': 'Support',
        'duration': 'Joined T1\'s main roster in November 2020. Played on DRX\'s main roster from Dec 2019-Nov 2020.',
        'age': 22,
        'birthday': '2002-10-14',
        'funFact': 'He is the first support to win LCK\'s Regular Season MVP award.',
        'src': 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/92/T1_Keria_2024_Split_2.png/revision/latest/scale-to-width-down/220?cb=20240618150254'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/js/main.js', (request, response)=>{
    response.sendFile(__dirname + '/js/main.js')
})
app.get('/css/style.css', (request, response)=>{
    response.sendFile(__dirname + '/css/style.css')
})
/*app.get('/images/:imageName', (request, response)=> { //took this section from google
    const imageName = request.params.imageName;

    // Assuming images are in a folder named '/images'
    const imagePath = `/images/${imageName}`;
  
    // Set the Content-Type header based on the image type
    const imageType = imageName.split('.').pop().toLowerCase();
    let contentType;
  
    switch (imageType) {
      case 'jpg':
      case 'jpeg':
        contentType = 'image/jpeg';
        break;
      case 'png':
        contentType = 'image/png';
        break;
      case 'gif':
        contentType = 'image/gif';
        break;
    }
    response.setHeader('Content-Type', contentType);
    response.sendFile(__dirname + '/style.css')
})
*/
app.get('/api/:name',(request,response)=>{
    const playerName = request.params.name.toLowerCase()
    if( players[playerName] ){
        response.json(players[playerName])
    }else{
        response.json(players['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})