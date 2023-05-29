import Tour from "./Tour"

const Tours = ({ tours, notIntrested }) => {
  return (
    <section className="tours">
      <h1 className="tours-h1">Our Tours</h1>
      <div className="underline"></div>
      <div className="tour-card-container">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} notIntrested={notIntrested} />
        })}
      </div>
    </section>
  )
}
export default Tours
