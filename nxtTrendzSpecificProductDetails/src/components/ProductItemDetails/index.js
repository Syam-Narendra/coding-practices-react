import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header/index'
import SimilarProduct from '../SimilarProductItem/index'

import './index.css'

const pageStatus = {
  loading: 'LOADING',
  sucess: 'SUCESS',
  failure: 'FAILURE',
}

class ProductItemDetails extends Component {
  state = {itemDetailsData: [], status: pageStatus.loading, quantity: 1}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/products/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        similarProducts: data.similar_products,
        style: data.style,
        title: data.title,
        totalReviews: data.total_reviews,
      }
      //   console.log(updatedData.similarProducts)
      this.setState({itemDetailsData: updatedData, status: pageStatus.sucess})
    } else {
      this.setState({status: pageStatus.failure})
    }
  }

  renderItemDetails = () => {
    const {itemDetailsData, quantity} = this.state
    const {
      imageUrl,
      title,
      price,
      rating,
      totalReviews,
      availability,
      description,
      brand,
      similarProducts,
    } = itemDetailsData

    const updatedSimilarData = similarProducts.map(each => ({
      availability: each.availability,
      brand: each.brand,
      description: each.description,
      id: each.id,
      imageUrl: each.image_url,
      price: each.price,
      rating: each.rating,
      style: each.style,
      title: each.title,
      totalReviews: each.total_reviews,
    }))

    return (
      <>
        <img className="product-image" src={imageUrl} alt="product" />
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
          <p>{totalReviews} Reviews</p>
          <p>{description}</p>
          <p>Available: {availability}</p>
          <p>Brand: {brand}</p>
          <button type="button" testid="minus" onClick={this.decreaseQuantity}>
            -
          </button>
          <p>{quantity}</p>
          <button type="button" testid="plus" onClick={this.increaseQuantity}>
            +
          </button>
          <button type="button">ADD TO CART</button>
          <h1>Similar Products</h1>
          <ul>
            {updatedSimilarData.map(each => (
              <SimilarProduct data={each} key={each.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  decreaseQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState({quantity: quantity - 1})
    }
  }

  increaseQuantity = () => {
    const {quantity} = this.state
    this.setState({quantity: quantity + 1})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="TailSpin" />
    </div>
  )

  countinueShoping = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderFailureView = () => (
    <>
      <h1>Product Not Found</h1>
      <img
        className="product-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
      />
      <button type="button" onClick={this.countinueShoping}>
        Continue Shopping
      </button>
    </>
  )

  renderAllItems = () => {
    const {status} = this.state
    switch (status) {
      case pageStatus.loading:
        return this.renderLoader()
      case pageStatus.sucess:
        return this.renderItemDetails()
      case pageStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="item-details-card">{this.renderAllItems()}</div>
      </>
    )
  }
}

export default ProductItemDetails
