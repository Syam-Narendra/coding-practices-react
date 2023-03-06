import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = {isLoading: true, data: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(each => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({data: formattedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div className="main">
        {isLoading ? (
          <Loader testId="loader" type="TailSpin" />
        ) : (
          data.map(each => <BlogItem key={each.id} blogData={each} />)
        )}
      </div>
    )
  }
}

export default BlogsList
