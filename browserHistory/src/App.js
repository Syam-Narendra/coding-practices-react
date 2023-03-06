import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const HistoryItem = props => {
  const {details, deleteFun} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = details

  const clickDel = () => {
    deleteFun(id)
  }

  return (
    <li className="historyItem">
      <p>{timeAccessed}</p>
      <div className="threeEle">
        <img src={logoUrl} alt="domain logo" />

        <p className="title">{title}</p>
      </div>
      <p className="url">{domainUrl}</p>
      <button
        testId="delete"
        onClick={clickDel}
        className="deleteButton"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

class HistoryList extends Component {
  state = {searchInput: '', filterData: initialHistoryList}

  searchHistoryFunction = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  deleteFun = id => {
    const {filterData} = this.state
    const Data = filterData.filter(each => each.id !== id)
    this.setState({filterData: Data})
    console.log(Data)
  }

  render() {
    const {searchInput, filterData} = this.state
    const outData = filterData.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const lenofData = outData.length === 0

    return (
      <div className="out">
        <div className="main">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-contain">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              onChange={this.searchHistoryFunction}
              className="searchInput"
              placeholder="Search history"
              type="search"
            />
          </div>
        </div>
        {!lenofData ? (
          <ul className="elements">
            {outData.map(each => (
              <HistoryItem
                details={each}
                deleteFun={this.deleteFun}
                key={each.id}
              />
            ))}
          </ul>
        ) : (
          <p>There is no history to show</p>
        )}
      </div>
    )
  }
}

const App = () => <HistoryList HistoryListDetails={initialHistoryList} />

export default App
