document.querySelector('button').addEventListener('click', sendApiReq)
document.querySelector('button').addEventListener('keypress', (e)=>{
    if (e.key === 'Enter'){
        console.log('click')
        sendApiReq()
    }
})


async function sendApiReq(){
    const teamName = document.querySelector('input').value
    try {
        const response = await fetch(`https://good-pink-giraffe-shoe.cyclic.app/api/${teamName}`)
        const data = await response.json()

        document.querySelector('img').style.visibility = 'visible';
        document.querySelector('#name').innerText = data.pointGuard
        document.querySelector('#team').innerText = data.team
        document.querySelector('img').src = data.photo
    } catch (error) {
        console.log(error)
    }
}