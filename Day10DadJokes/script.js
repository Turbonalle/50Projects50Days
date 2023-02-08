const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// ------------- using ASYNC/AWAIT -------------
async function generateJoke() { // await inside the function requires async before the function.
    const config = {headers: {'Accept': 'application/json'} }

    const response = await fetch('https://icanhazdadjoke.com', config);

    const data = await response.json();

    jokeEl.innerHTML = data.joke;
}

// ---------------- using .THEN ----------------
// function generateJoke() {
//     const config = {headers: {'Accept': 'application/json'} }

//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke;
//         });
// }