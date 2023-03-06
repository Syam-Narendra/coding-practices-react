import {Component} from 'react'
import './index.css'
import Playitem from '../Playitem/index'

class MusicPlaylist extends Component {
  state = {playListData: []}

  componentDidMount() {
    const {data} = this.props
    this.setState({playListData: data})
  }

  onSearch = event => {
    const inputValue = event.target.value
    const {data} = this.props
    const updatedData = data.filter(each =>
      each.name.toLowerCase().includes(inputValue),
    )
    this.setState({playListData: updatedData})
  }

  deleteId = id => {
    const {playListData} = this.state
    const deletedData = playListData.filter(each => each.id !== id)
    this.setState({playListData: deletedData})
  }

  render() {
    const {playListData} = this.state

    return (
      <>
        <div className="main">
          <div className="elements">
            <h1>Ed Sheeran</h1>
            <p>Singer</p>
          </div>
        </div>
        <div className="down">
          <div className="search-box">
            <h1>Songs Playlist</h1>
            <input
              onChange={this.onSearch}
              className="input-box"
              type="search"
              placeholder="Search"
            />
          </div>
          <ul>
            {playListData.map(each => (
              <Playitem
                key={each.id}
                deleteId={this.deleteId}
                playlistitem={each}
              />
            ))}
          </ul>
        </div>
        {playListData.length === 0 && <p>No Songs Found</p>}
      </>
    )
  }
}

export default MusicPlaylist
