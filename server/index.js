const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const pool = require('./db')

//middleware, this allows frontend and backend to interact with each other
//localhost 3000 and 5000
app.use(cors())
app.use(express.json()) //this allows us to access the req.body


//ROUTES//

//create a user in db
app.post('/register', async (req, res) => { 
    const { fName, lName, email, password} = req.body
    try {
        //check to see if user is already in db
        let records = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]) //[{}, {}]
        console.log(records)
        if(records.rows.length !== 0){
            //email is registered in db, so send back an error message to react
            return res.status(422).json({error: "Email already exists"})
        }else{
            //create a new account
            const newAccount = await pool.query(`INSERT INTO users (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`, [fName, lName, email, password]);
            res.json(newAccount.rows[0])
        }
    } catch (error) {
        console.log(error)
    }
 })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})