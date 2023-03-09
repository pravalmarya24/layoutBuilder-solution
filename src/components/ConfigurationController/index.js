import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

// Write your code here
const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = () => onToggleShowContent()
      const onShowLeftNavbar = () => onToggleShowLeftNavbar()
      const onShowRightNavbar = () => onToggleShowRightNavbar()

      return (
        <div className="configuration-bg-container">
          <ul className="unordered-list">
            <h1 className="layout-heading">Layout</h1>
            <li>
              <input
                type="checkbox"
                id="contentId"
                className="checkbox-size"
                onClick={onShowContent}
              />
              <label className="label" htmlFor="contentId">
                Content
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="leftNavbarId"
                className="checkbox-size"
                onClick={onShowLeftNavbar}
              />
              <label className="label" htmlFor="leftNavbarId">
                Left Navbar
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="rightNavbarId"
                className="checkbox-size"
                onClick={onShowRightNavbar}
              />
              <label className="label" htmlFor="rightNavbarId">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
