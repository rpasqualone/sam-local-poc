#SAM Local Proof of Concept

## Goals

 - Create environment for rapid development of lambda functions.
 - Stage a SAM docker instance.

## Installation

### Prerequisites
 - Docker
 - aws-sam-local

#### Docker

Running Serverless projects and functions locally with SAM Local requires Docker to be installed and running. SAM Local will use the `DOCKER_HOST` environment variable to contact the docker daemon.

 - macOS: [Docker for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)

For macOS: SAM local requires that the project directory (or any parent directory) is listed in Docker file sharing options.

Verify that docker is working, and that you can run docker commands from the CLI (e.g. ‘docker ps’). You do not need to install/fetch/pull any containers – SAM Local will do it automatically as required.


#### macOS with NPM [Recommended]

The easiest way to install **`sam`** is to use [NPM](https://www.npmjs.com).

```bash
npm install -g aws-sam-local
```

Verify the installation worked:
```bash
sam --version
```

If you get a permission error when using npm (such as `EACCES: permission denied`), please see the instructions on this 
page of the NPM documentation: [https://docs.npmjs.com/getting-started/fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions).

##### Upgrading via npm

To update **`sam`** once installed via npm:

```bash
npm update -g aws-sam-local
```

### Available Scripts

In the project directory, you can run: 

```bash
npm run start
```
This Mounting mounts index.handler (using nodejs6.10) at 
[http://127.0.0.1:3000/some-path/{pathParam}](http://127.0.0.1:3000/some-path/{pathParam}), {pathParam} being a lambda pathParameter.
