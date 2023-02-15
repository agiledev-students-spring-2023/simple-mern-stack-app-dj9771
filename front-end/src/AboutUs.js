import './AboutUs.css'

import './App.css'

import { useState, useEffect } from 'react'

import axios from 'axios'


/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [AboutMeData, setAboutMeData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {

    fetchAboutMeData()

  }, [])
  const fetchAboutMeData = () => {
      axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutUs`)
          .then(response => {

            setAboutMeData(response.data)

          })
          .catch(err => {
            setError(err)
          })
          .finally(() => {
            setLoaded(true)
          })
  }

  return (
      <>
        <h1>Self-Introduction</h1>
        <br></br>


        <h2>{AboutMeData.map(AboutMeData => AboutMeData.name)}</h2>

        <br></br>
        <p>{AboutMeData.map(AboutMeData => AboutMeData.description)}</p>

        <br></br>

        {AboutMeData.map(AboutMeData => 
          <img src={AboutMeData.imageUrl} alt="self" className="aboutUsImage"></img>
        )}
      </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
