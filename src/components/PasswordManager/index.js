import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import EachUser from '../EachUser'

import './index.css'

class PasswordManager extends Component {
  state = {
    show: false,
    website: '',
    username: '',
    password: '',
    searchInput: '',
    searchList: [],
    list: [],
  }

  enterWebsite = event => {
    this.setState(prevState => ({...prevState, website: event.target.value}))
  }

  enterUserName = event => {
    this.setState(prevState => ({...prevState, username: event.target.value}))
  }

  enterPassword = event => {
    this.setState(prevState => ({...prevState, password: event.target.value}))
  }

  addUserDetails = event => {
    event.preventDefault()
    const {username, password, website} = this.state
    const newPassword = {
      id: uuidv4(),
      username,
      password,
      website,
    }
    this.setState(prevState => ({
      ...prevState,
      username: '',
      website: '',
      password: '',
      searchList: [...prevState.list, newPassword],
      list: [...prevState.list, newPassword],
    }))
  }

  searching = event => {
    const {searchList} = this.state
    const filterList = searchList.filter(each =>
      each.website.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    this.setState(prevState => ({
      ...prevState,
      searchInput: event.target.value,
      list: filterList,
    }))
  }

  showPassword = () => {
    this.setState(prevState => ({...prevState, show: !prevState.show}))
  }

  onDelete = id => {
    const {list} = this.state
    const filterList = list.filter(each => each.id !== id)
    this.setState(prevState => ({...prevState, list: filterList}))
  }

  render() {
    const {website, username, password, list, searchInput, show} = this.state

    return (
      <div className="main-container">
        <div className="inner-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="logo"
            />
          </div>
          <div className="first-container">
            <div className="left-container">
              <h1 className="left-container__heading">Add New password</h1>
              <form className="form-container" onSubmit={this.addUserDetails}>
                <div className="website-container">
                  <img
                    className="website-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                  <hr />
                  <input
                    onChange={this.enterWebsite}
                    value={website}
                    type="text"
                    placeholder="Enter Website"
                    className="input-ele"
                  />
                </div>

                <div className="website-container">
                  <img
                    className="website-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                  <hr />
                  <input
                    onChange={this.enterUserName}
                    value={username}
                    type="text"
                    placeholder="Enter UserName"
                    className="input-ele"
                  />
                </div>

                <div className="website-container">
                  <img
                    className="website-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                  <hr />
                  <input
                    value={password}
                    onChange={this.enterPassword}
                    type="password"
                    placeholder="Enter Password"
                    className="input-ele"
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="right-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>

          <div className="second-container">
            <div className="second-container__first">
              <h1 className="text-count">
                Your Password <p>{list.length}</p>
              </h1>
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <hr />
                <input
                  type="search"
                  placeholder="search"
                  value={searchInput}
                  className="input-ele"
                  onChange={this.searching}
                />
              </div>
            </div>
            <hr className="second-container-line" />
            <div className="show-password-container">
              <input
                type="checkbox"
                className="checkbox-input"
                onClick={this.showPassword}
                id="checkbox"
              />
              <label htmlFor="checkbox" className="show-password-text">
                Show password
              </label>
            </div>
            <div className="list-items-container">
              {list.length === 0 ? (
                <div className="empty-list">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                  />
                  <p>No Passwords</p>
                </div>
              ) : (
                <ul className="list-items-container">
                  {list.map(each => (
                    <EachUser
                      onDelete={this.onDelete}
                      show={show}
                      eachItem={each}
                      key={each.id}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
