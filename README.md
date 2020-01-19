# Context Finder

Context Finder is based on what you want to achieve. It will pull configuration blocks that you specify (can be generic to match various blocks) from a file.

## Use Case

You have `.conf` file that holds *context blocks* for certain configurations. That file might look like this:

```
[user-1]
name = Edward
language = en

[user-2]
name = John
language = us

[admin-1-1]
name = Admin Edward

[admin-1-2]
name = Admin John

[admin-2]
name = Admin
```

You want to create a new configuration file using **some** from the above file. You might want to pull only `admin` blocks, and if you are trying to be very specific, you might want to only pull `admin-1` blocks.

This is where ***Content Finder*** comes in.

## How it Works

Contexts are matched based on if the title **contains** the given parameters. This means that a single argument *can* match multiple context blocks, and will then write those collected to a file

### Example

Passing in `version-1.` as an argument will match `version-1.`, `version-1.1`, `version-1.two` and so on.

## Requirements

* NodeJS

`apt install nodejs`

* NPM

`apt install npm`

## Require as an NPM Module

### Installing

* Install the package from the NPM library

`npm i --save context-finder` in your project root, or where your configuration files reside. This will create some files and folders:

* `node_modules`
	* Contains the `context-finder` package. This directory can be ignored by Git

* `package.json`
	* Contains the dependencies of the project e.g. the `--save` flag in `npm i` saves that package into the dependencies, so if you ever remove the `node_modules` folder, running `npm i` will install all dependencies. This file **does** need to be tracked by Git
	
* `package-lock.json`
	* This file can be ignored by Git

### How To Run

* Require the package

```
// my-node-script.js
const contextFinder = require('context-finder')
```

* Gather your Variables

```
const contextsToFind = ['version-1.', 'version-4.']
const fileToRead = 'all-contexts.txt' // this file must exist
const fileToWrite = 'some-contexts.txt' // this file doesn't have to exist as it will be overwritten anyway
```

* Execute

***Note:** Parameters must be the array of context titles, the file to read, and the file to write, respectively*

`contextFinder.readAndPrint(contextsToFind, fileToRead, fileToWrite)`

## Command Line Usage (From the Source)

### Install

* Navigate to a directory of your choice

`cd ~/projects`

* Pull down the repository
	
`git clone https://www.github.com/ebebbington/context-finder.git`
	
* Install dependencies

`npm i`

### How To Run

`node index.js <file to read> <file to write to> <context title 1> <context-title 2> ...`

## Built With

* [NodeJS](https://www.nodejs.org) - Runtime Environment

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details
