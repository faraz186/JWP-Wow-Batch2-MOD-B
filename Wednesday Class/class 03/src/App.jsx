import Cards from "./components/CMCards"
import CMButton from "./components/CMButton"


function App() 
{
  return (
    
    <div style={{display:"flex",justifyContent:"space-evenly"}}>

    <Cards title="google pixel 5" imgSrc="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a76/middlebanner/a76-pc.png.thumb.webp" />

    <Cards title="google pixel 7" imgSrc="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/navigation/v2/Navigation-SunsetOrange-427_600-pc.png.thumb.webp"/>

    <Cards title="google pixel 4" imgSrc="https://i.gadgets360cdn.com/products/large/Oppo-Reno-10-Pro-Plus-5G-DB-709x800-1685018454.jpg?downsize=240:*"/>

      <h1 className="borderHeading text-6xl text-blue-500 font-bold underline">
        Hello world!
      </h1>

      <h1 style={{textAlign:"center"}}>This is demo heading of react application</h1>

      {CMButton()}

      <CMButton type="sign up" />
      <CMButton type="login" />
      <CMButton type="submit" />
      <CMButton type="logout" />
      <CMButton type="profile" />
      <CMButton type="results" />
      <CMButton type="output" />
    <CMButton type="message" />

    </div>
  )
}

export default App
