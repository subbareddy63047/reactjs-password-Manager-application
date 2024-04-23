import './index.css'

const EachUser = props => {
  const {eachItem, show, onDelete} = props
  const {id, username, password, website} = eachItem

  const deleteBtn = () => {
    onDelete(id)
  }

  return (
    <li className="each-item">
      <div className="each-name-container">
        <div className="first-letter">{username.charAt(0)}</div>
        <div className="each-item-name-password-container">
          <p className="each-item-website">{website}</p>
          <p className="each-item-username">{username}</p>
          {show ? (
            <p className="each-item-password">{password}</p>
          ) : (
            <img
              className="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-btn"
        onClick={deleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default EachUser
