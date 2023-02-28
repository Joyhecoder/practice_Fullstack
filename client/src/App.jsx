import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
  const [sex, setSex] = useState('')
  const [age, setAge] = useState()
  const [tobacco, setTobacco] = useState('')
  const [language, setLanguage] = useState('')
  console.log(sex, age, tobacco, language)

  const [initialData, setInitialData] = useState([])
  console.log(initialData)
  useEffect(() => {
    const initialFetch = async () => {
      try {
        const response = await fetch('https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=527')
        const data = await response.json()
        setInitialData(data.Result.Resources.Resource[0])
      } catch (error) {
        console.log(error);
      }
    }
    initialFetch()

  }, [])
  
  return (
    <>
    <div className="page-container">
      <div className="searchBar-container">
        <div className="searchReq">
          <div className="sex">
          <Form.Label htmlFor="ageInput">Gender</Form.Label>
            <Form.Select aria-label="Default select example" required onChange={e=>setSex(e.target.value)}>
              <option>Select your gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </Form.Select>
          </div>
          <div className="age">
            <Form.Label htmlFor="ageInput">Age</Form.Label>
            <Form.Control
              type="text"
              id="ageInput" required onChange={e=>setAge(e.target.value)}/>
          </div>
          <div className="tobacco">
            <Form.Label htmlFor="ageInput">Tobacco Useage</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e=>setTobacco(e.target.value)}>
              <option>Do you smoke tobacco</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </div>
          <div className="language">
            <Form.Label htmlFor="ageInput">Language</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e=>setLanguage(e.target.value)}>
              <option>English or Spanish</option>
              <option value="english">English</option>
              <option value="es">Spanish</option>
            </Form.Select>
          </div>
          <div className="search-button">
          <Button variant="warning">Search</Button>
        </div>
        </div>
    
        <div className="initialDisplay">
          {initialData.length === 0 ? 
          <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        :
        <>show items</>
        }
        </div>
        

      </div>
      <div className="displayCard-container">
       
      </div>
    </div>
    
    
    </>
  )
}

export default App
