import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

// Write your code here
const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-bg-container">
          {showLeftNavbar ? (
            <div className="left-navbar-menu-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-unlist">
                <li className="list">Item 1</li>
                <li className="list">Item 2</li>
                <li className="list">Item 3</li>
                <li className="list">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="description-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="left-navbar-heading">Right Navbar</h1>
              <div className="ad-1-container">
                <p className="ad-1-para">Ad 1</p>
              </div>
              <div className="ad-2-container">
                <p className="ad-2-para">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
