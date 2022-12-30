# Contribution Guide

Thank you very much for wanting to contribute to this beautiful project. 😄

## Getting started

Take a look at the **issues** section where you will find all issues and tasks of the development team. You can
assign yourself any task or suggest a new feature or bug.

If you find a bug first look for it in **issues** if it is already described join the conversation but if not write a
new **issue** you can make use of
screenshots, videos, etc.

## Make changes

Once you have detected the change you want to make, make sure that you have installed
locally installed [Node and Npm](https://nodejs.org/en/)
in version 18 and 8 respectively.

- Perform a fork of the project.
- Clone the clan sports fork `git clone https://github.com/[username]/clan.sports`.
- `cd clan.sports`
- `npm install` Installs all dependencies.

You are now ready locally to make changes.

## Work Flow

The workflow and development branches are managed using the one recommended by Github for open source project
management. In the following link you can find the
official [Github Work Flow](https://docs.github.com/en/get-started/quickstart/github-flow).

### `package.json` scripting guide

Due to the structure of the monorepo it is divided into `frontend` and `services` each one has different scripts. The
following scripts only work in the root of the monorepo, inside each package it contains its own scripts in
the `package.json`.

#### Workspace scripts

##### Handling dependencies

> Before installing dependencies be very careful with the changes you send to the pull request.

- `npm update -w {package}` Update dependencies.
- `npm install [dependency name] -w {package}` Install dependencies.

##### Development

- `npm run {package}:start` Launch service.
- `npm run frontend:dev` Run local server `http://localhost:3000`.
- `npm run {package}:test` Run tests.
- `npm run {package}:build` Compile code for production.

> Note: Where `{package}` can be either `services` or `frontend`.

### Format of commit messages

Commit messages follow the standard
of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

**Note:** Each commit must be signed by the developer, this is done by adding the `--signoff` flag to the
message of the
commit message, see the following example:

`git commit --signoff -m "chore(services): dependencies are updated"`.

### Pull request

- Once the changes have been made you should submit the pull request referencing the issue you are trying to resolve,
  along with a message describing the changes. It is recommended to read the official
  documentation [Link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

- According to the Github workflow the `development` branch is where PRs should be sent if they are sent to any of the
  other active branches they are rejected.

- The PR may recommend changes through comments or changes may be made directly by the project maintainer.

Thank you very much for wanting to contribute, we are open to any comments or changes you want to make. **Welcome to this beautiful community.** 🥳
