import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogListDetails()
  }

  getBlogListDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="main">
        {isLoading ? (
          <Loader type="TailSpin" />
        ) : (
          <>
            <h1>{blogData.title}</h1>
            <img
              className="avatar-image"
              src={blogData.avatarUrl}
              alt={blogData.id}
            />
            <p>{blogData.author}</p>
            <img
              className="image"
              src={blogData.imageUrl}
              alt={blogData.title}
            />
            <p>{blogData.content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
