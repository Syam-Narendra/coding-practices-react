const SimilarProduct = props => {
  const {data} = props

  const {brand, imageUrl, price, rating, title} = data
  return (
    <li>
      <img className="product-image" src={imageUrl} alt="similar product" />
      <div className="product-data">
        <h1>{title}</h1>
        <p>Rs {price}/-</p>
        <p className="rating">
          {rating}
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </p>
        <p>Brand: {brand}</p>
      </div>
    </li>
  )
}

export default SimilarProduct
