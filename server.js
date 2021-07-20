import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import chalk from 'chalk'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import characterRoutes from './routes/characterRoutes.js'
import userRoutes from './routes/userRoutes.js'



dotenv.config()
connectDB()
const app = express()
app.use(express.json())

const morganMiddleware = morgan(function (tokens, req, res) {
  return [
      '\n\n\n',
      chalk.hex('#3cf281').bold('💻💩💻  Morgan is Running dis --> '),
      chalk.hex('#44d9e8').bold(tokens.method(req, res)),
      chalk.hex('#ea39b8').bold(tokens.status(req, res)),
      chalk.hex('#e44c55').bold(tokens.url(req, res)),
      chalk.hex('#3f81a2').bold(tokens['response-time'](req, res) + ' ms'),
      chalk.hex('#1ba2f6').bold('@ ' + tokens.date(req, res)),
      chalk.yellow(tokens['remote-addr'](req, res)),
      chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
      chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
      '\n\n\n',
  ].join(' ');
})

app.use(morganMiddleware)

app.get('/', (req, res) =>{
  res.send('API is Running')
})

app.use('/api/characters', characterRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.table
  (`🌈💩 Server is Running in ${process.env.NODE_ENV} mode on Port ${PORT}!! 💩🌈`
    .brightGreen.bold.inverse)
)