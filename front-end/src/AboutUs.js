import './AboutUs.css'
import self from './self.svg'


/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (

    <div>
      
      <h1>Self-Introduction </h1>

        <p>
        <br></br>
        Hello everyone! I am Danica Jin, a sophomore at the College of Arts and Science at New York University. <br></br>My major is computer science
        and mathematics, and I may also plan to have economics as my minor. <br></br>My hobbies are playing saxophone, playing badminton, skating, writing, swimming, and traveling.<br></br>
        Besides those hobbies listed above, I am also good at calligraphy and Chinese painting.<br></br>

        <br></br>I come from Beijing which is the capital city of China, and now I live in Jersey City, <br></br>so I spend 30 minutes 
        taking the path train to New York City every day. <br></br> Visiting museums and watching Broadway shows during weekends, I feel my daily life is more colorful in NYC.<br></br>

        <br></br>The following picture is my photo. It's very nice to meet you guys on this website.<br></br>
        </p>
     

        <img src={self} alt="self" width="420" height="420" />
    </div>
  )
}

// make this component available to be imported into any other file
export default AboutUs
