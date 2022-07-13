# Simple Login/Register RESTApi

This is a simple login and registration API hosted with heroku, with 
the objective of studying and practicing programming with the backend, in 
addition to training the coding with some design patterns such as the 
repositoy patterns, service layer, models and controllers

### ENDPOINTS (short description)

- *api/login*

    Endpoint que deve gerar um token de autenticação.

    ```json
        Required in the request body
        
        {
            "user": "@raphael",
            "password": "123"
        }
    ```

    

- *api/loginUser*

    Endpoint que realizarar o login do usuário.

- *api/register*

    Enpoint que vai registrar um novo usuário.

Para cada endpoint será necessário um token de autenticação, e 
esse token deve ser colocado no cabeçalho `Autorization: Bearer <token>`:

# Host HEROKU

> [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

Login/Register API: https://login-register-app-node.herokuapp.com/
