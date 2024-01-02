import {useState , useEffect} from "react"
import {useSelector} from "react-redux"

const Home = () => {
  const {currentUser} = useSelector(state =>state.user)

  const [data,setData] = useState([]);


  useEffect(()=>{
     fetch("/api/mobiles/getMobiles")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching Data'))
  }, [data])

  


  return (
    <section>
      {currentUser ? <span className="text-pink-500 text-3xl mx-16 mt-5">Hello,{currentUser.username}</span> : ""}
      <div className="grid grid-cols-3 ">
      {
        data.map((eachMobile)=>{
          return <div key={eachMobile._id} className="bg-white w-100 mt-4 rounded-lg p-10 m-auto flex flex-col gap-4 shadow-md rounded-lg">
                <img src={eachMobile.image} alt="image" className="W-10  bg-transparent" />
                <h1 className="text-start text-2xl font-bold mt-5 text-teal-400"> {eachMobile.name} {eachMobile.type}</h1>
                <h1 className="text-xl font-semibold"><span className="text-orange-400">Price :</span> ₹{eachMobile.price}/-</h1>
                <h1 className="font-medium"><span className="text-orange-400">Processor : -</span>  {eachMobile.processor}</h1>
                <h1 className="font-extrabold"><span className="text-orange-400">Memory(ROM) : -</span>  {eachMobile.memory}</h1>
                
            </div>
        })
      }
      </div>
      
    </section>
  )
}

export default Home