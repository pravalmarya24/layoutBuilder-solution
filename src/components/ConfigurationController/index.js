import './index.css'

// Write your code here
const ConfigurationController = () => (
  <div className="configuration-bg-container">
    <h1 className="layout-heading">Layout</h1>
    <ul className="unordered-list">
      <li>
        <input type="checkbox" id="contentId" className="checkbox-size" />
        <label className="label" htmlFor="contentId">
          Content
        </label>
      </li>
      <li>
        <input type="checkbox" id="leftNavbarId" className="checkbox-size" />
        <label className="label" htmlFor="leftNavbarId">
          Left Navbar
        </label>
      </li>
      <li>
        <input type="checkbox" id="rightNavbarId" className="checkbox-size" />
        <label className="label" htmlFor="rightNavbarId">
          Right Navbar
        </label>
      </li>
    </ul>
  </div>
)

export default ConfigurationController
