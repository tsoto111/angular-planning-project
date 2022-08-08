# Docker + Nginx + Angular

This is a base starter docker configuration for an NGINX + Angular environment for simple
training projects.

## Index
* [Tools](#tools)
* [Install Angular App](#install-angular-app)

## Tools
These are the tools that are installed manually into the nginx image via the Dockerfile.

* **Nginx** - The base server we are using within the docker container. We always install the latest version of Nginx via the official Docker distro via DockerHub.
* **Node JS** - Node package manager we use to install Angular CLI with.
* **Angular CLI** - The "command line interface" we use to install a fresh install of Angular into this project's app directory documented below.


## Install Angular App
To install a fresh Angular app, we will used the pre-installed `angular-cli` tool within the web container.

1. Make sure `docker compose` is running for the project. All you have to do is run the following script within the root directory of the project.

    ```
    docker compose up
    ```

2. Once docker as built the project and installed all of the required dependencies for the first time, you can install a fresh Angular project in the following way. Open a bash console within the running docker container.

    ```
    docker compose exec web bash -l
    ```

3. Once you have entered the container's bash console, run the following script using the pre-installed `angular-cli`.

    ```
    ng new <my-app-name>
    ```

    where `<my-app-name>` is the desired project name.

4. After you have installed the Angular project and filled out all of the script's prompts, you should be able to start serving your angular app within the container by running:

    ```
    ng serve
    ```

5. From there, you should be able to open your freshly installed Angular app by opening `http://localhost:8080` in your browser.