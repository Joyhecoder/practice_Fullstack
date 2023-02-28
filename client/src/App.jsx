import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

const App = () => {
  const [sex, setSex] = useState('')
  const [age, setAge] = useState()
  const [tobacco, setTobacco] = useState('')
  const [language, setLanguage] = useState('')
  // console.log(sex, age, tobacco, language)
  const [searchResult, setSearchResult] = useState([])
  console.log(searchResult)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=${age}&sex=${sex}&tobaccoUse=${tobacco}&Lang=${language}`)
      const data = await response.json()
      console.log(data);
      setSearchResult(data.Result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="header">
        <h2>For your Healthcare</h2>
      </div>

      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>You may be interested in ...</h2>
            {initialData.length === 0 ? 
            <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          :
          <div className="text">
            <h5>{initialData.Title}</h5>
            <div className="fakeimg">
              <img src={initialData.ImageUrl} alt={initialData.ImageAlt} className="initialImg"/>
            </div>
            <h3>What action can we take?</h3>
            <div className="card">
              <h5>{initialData.Sections.section[0].Title}</h5>
              {initialData.Sections.section[0].Content.replace(/"/g, ' ')}
            </div>
          </div>
          }
         
          </div>
        </div>

        <div className="rightcolumn">
          <div className="card">
            <h2>Search</h2>

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
          <Button variant="warning" onClick={(e)=>handleSubmit(e)}>Search</Button>
          </div>
            
          </div>

          <div class="card">
          <h3>More Related Resource</h3>
          {initialData.length === 0 ?
             <div className="spinner">
             <Spinner animation="border" role="status">
               <span className="visually-hidden">Loading...</span>
             </Spinner>
           </div>
           :
           <>
           {initialData.RelatedItems.RelatedItem.map(item => {
            return (
              <>
              <div class="fakeimg">
              <a href={item.Url} target="_blank" key={item.Id}>{item.Title}</a>
              </div>
              <br />
              </>
            )
           })}
           
           </>
          }
          
        </div>
        </div>
      </div>
    </>
  )
}

export default App
