async function signupFormHandler(event) {

    event.preventDefault();


    const username = document.querySelector('#signup-username').value.trim();

    const email = document.querySelector('#signup-email').value.trim();

    const password = document.querySelector('#signup-password').value.trim();



    if (username && email && password) {

        const response = await fetch('/api/users', {

            method: 'POST',

            body: JSON.stringify({

                username,
                email,
                password

            }),

            headers: { 'Content-Type': 'application/json' }

        });

        // check the response status
        if (response.ok) {

            document.location.replace('/dashboard/')

        } else {

            alert(response.statusText);

        }

    }

}


async function loginFormHandler(event) {

    event.preventDefault();


    const email = document.querySelector('#login-email').value.trim();

    const password = document.querySelector('#login-password').value.trim();

    console.log(email, password);
    
    if (email && password) {


        const response = await fetch('/api/users/login', {

            method: 'POST',

            body: JSON.stringify({

                email: email,
                password: password

            }),

            headers: { 'Content-Type': 'application/json' }

        });


        if (response.ok) {

            document.location.replace('/dashboard/');

        } else {

            alert(response.statusText);

        }

    }

}


document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

