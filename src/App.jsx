import { useState } from "react"
import { useEffect } from "react"
import Tours from "./components/Tours.jsx"

const App = () => {
  const [loading, isLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      isLoading(true)
      const res = await fetch("https://course-api.com/react-tours-project")
      const data = await res.json()
      setTours(data)
      isLoading(false)
    } catch (error) {
      console.log(error)
      isLoading(false)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  const notIntrested = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main className="no-tours-left">
        <h1 className="no-tour-left-h1">No Tours left</h1>
        <button className="refresh-btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} notIntrested={notIntrested} />
    </main>
  )
}
export default App
