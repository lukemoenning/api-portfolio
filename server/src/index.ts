import express, { Request, Response } from 'express'

const app = express()
const port: string = process.env.SERVER_PORT || '8080'

app.use(express.json())

const dbo = require('./db/conn')

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send('Hello worldjlgjjl!')
})

/** ABOUT SECTION */
app.get('/about', (req: Request, res: Response) => {
  res.send('Hello world!')
})

/** EXPERIENCE SECTION */
app.get('/experience', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.get('/experience/:id', (req: Request, res: Response) => {
  res.send('Hello world!')
})

/** EDUCATION SECTION */
app.get('/education', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.get('/education/:id', (req: Request, res: Response) => {
  res.send('Hello world!')
})

/** SKILLS SECTION */
app.get('/skills', (req: Request, res: Response) => {
  res.send('Hello world!')
})

/** PROJECTS SECTION */
app.get('/projects', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.get('/projects/:id', (req: Request, res: Response) => {
  res.send('Hello world!')
})

/** CONTACT SECTION */
app.get('/contact', (req: Request, res: Response) => {
  res.send('Hello world!')
})

// start the Express server
app.listen(port, () => {
  dbo.connectToServer(function (error: Error) {
    if (error) console.error(error)
  })

  console.log(`server started at http://localhost:${port}`)
})
