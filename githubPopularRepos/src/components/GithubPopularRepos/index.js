import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem/index'
import RespositoryItem from '../RepositoryItem/index'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {isLoading: true, isError: false, repo: [], selectedRepo: 'ALL'}

  componentDidMount() {
    this.makeUrlCall()
  }

  changeSelectedRepo = language => {
    this.setState({selectedRepo: language, isLoading: true}, this.makeUrlCall)
  }

  makeUrlCall = async () => {
    const {selectedRepo} = this.state

    try {
      const url = `https://apis.ccbp.in/popular-repos?language=${selectedRepo}`
      const response = await fetch(url)
      const data = await response.json()
      const popularRepos = data.popular_repos.map(each => ({
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        id: each.id,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      this.setState({repo: popularRepos, isLoading: false})
    } catch {
      this.setState({isError: true, isLoading: false, repo: []})
    }
  }

  render() {
    const {repo, isLoading, isError} = this.state
    return (
      <div className="main">
        <h1>Popular</h1>
        <ul className="languages-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              data={each}
              changeSelectedRepo={this.changeSelectedRepo}
              key={each.id}
            />
          ))}
        </ul>
        {isLoading ? (
          <Loader testid="loader" type="ThreeDots" color="#0284c7" height={80} width={80} />
        ) : (
          <ul className="respository-list">
            {repo.map(each => (
              <RespositoryItem data={each} key={each.id} />
            ))}
          </ul>
        )}
        {isError && (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1>Something Went Wrong</h1>
          </>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
