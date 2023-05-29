import { useState } from "react"

const Tour = (tour) => {
  const { id, image, info, name, price, notIntrested } = tour
  console.log(notIntrested)
  const [lessinfo, setLessInfo] = useState(true)
  return (
    <article className="tour-card">
      <img className="tour-img" src={image} alt={name} />
      <footer className="tour-card-footer">
        <h3 className="tour-h3">{name}</h3>
        <p>
          {lessinfo ? `${info.substring(0, 250)}...` : info}
          <button
            className="show-more-btn"
            onClick={() => setLessInfo(!lessinfo)}
          >
            {lessinfo ? "read more" : "show less"}
          </button>
        </p>
        <button onClick={() => notIntrested(id)} className="delete-btn">
          not interested
        </button>
        <p className="tour-price">${price}</p>
      </footer>
    </article>
  )
}
export default Tour
