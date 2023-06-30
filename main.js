document.querySelector('button').addEventListener('click', sendApiReq)

async function sendApiReq(){
    const teamName = document.querySelector('input').value
    try {
        const response = await fetch(`https://good-pink-giraffe-shoe.cyclic.app/api/${teamName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h3').innerText = data.pointGuard
        document.querySelector('h4').innerText = data.team
        document.querySelector('img').src = data.photo
    } catch (error) {
        console.log(error)
    }
}