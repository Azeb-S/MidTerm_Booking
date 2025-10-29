// Import the express module
import express from 'express'

// Create an instance of an Express application
const app = express()

// Enable static file serving
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// Define the port number where our server will listen
const PORT = 3006

//create an Arrray for appointment 
const submissions = []


// Define a default "route" ('/')

app.get('/', (req, res) => {
 // Send a response to the client
 // res.send(`<h1>Welcome to Poppa\'s Pizza!</h1>`);
 res.sendFile(`${import.meta.dirname}/views/home.html`)
})

//confirmation page 
// Handle form submissions
app.post('/submissions', (req, res) => {


 const bookings = {
  destination: req.body.destination,
  date: req.body.date,
  numbers: req.body.numbers,

 }

 submissions.push(bookings)
 console.log(bookings)

 res.sendFile(`${import.meta.dirname}/views/submissions.html`)
})



// Start the server and make it listen on the port 
// specified above
app.listen(PORT, () => {
 console.log(`Server is running at http://localhost:${PORT}`)
}) 