#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('SafeFly /'),
  handle: chalk.cyan('ast850328'),
  work: chalk.white('Software Engineer at TSMC'),
  telegram: chalk.white('@safefly_Tsai'),
  github: chalk.cyan('github.com/ast850328'),
  linkedin: chalk.cyan('linkedin.com/in/safefly'),
  web: chalk.cyan('safefly.tw'),
  npx: chalk.white('npx safefly'),
  labelWork: chalk.white.bold('      Work:'),
  labelTelegram: chalk.white.bold('  Telegram:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const telegraming = `${data.labelTelegram}  ${data.telegram}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  telegraming +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
