document.querySelector('button').addEventListener('click', getPlayer)

function getPlayer(){
    const player = document.querySelector('input').value
    const url = `/api/${player}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#birthName').innerText = data.birthName
        // document.querySelector('img').src = data.src
        document.querySelector('#position').innerText = data.position
        document.querySelector('#duration').innerText = data.duration
        document.querySelector('#birthName').innerText = data.birthName
        document.querySelector('#age').innerText = data.age
        document.querySelector('#birthday').innerText = data.birthday
        document.querySelector('#funFact').innerText = data.funFact
    })
}