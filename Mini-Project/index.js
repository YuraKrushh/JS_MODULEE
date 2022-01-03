fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let user_div = document.createElement('div');
            let name = document.createElement('div');
            let username = document.createElement('div');
            let email = document.createElement('div');
            document.body.append(user_div);
            user_div.append(name, username, email);
            name.innerText = user.name;
            username.innerText = 'Username: ' + user.username;
            email.innerText = 'Email: ' + user.email;
            user_div.classList.add('user_div');
            name.classList.add('name');
            username.classList.add('username');
            email.classList.add('email');
            let button = document.createElement('button');
            button.innerText = 'Details';
            user_div.append(button);
            button.classList.add('button_details')


            button.onclick = function () {
                localStorage.setItem('user_id', user.id);
                document.location ='./userDetails.html'
            }
        }
    })