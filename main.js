document.querySelector('button').addEventListener('click', sendApiReq)

async function sendApiReq(){
    const rapperName = document.querySelector('input').value
    try {
        const response = await fetch(`https://good-pink-giraffe-shoe.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h3').innerText = data.birthName
    } catch (error) {
        console.log(error)
    }
}