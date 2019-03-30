document.getElementById('postData').addEventListener('submit', postData);

function postData(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let pass = document.getElementById('pass').value;

    fetch('https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username: username, pass: pass })
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}