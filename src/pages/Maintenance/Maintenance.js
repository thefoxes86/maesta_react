import './maintenance.css'

const Maintenance = ({ title }) => {
  return (
    <div className="maintenance">
      <div className="bg-img"></div>
      <div className="bg-overlay">
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
      </div>
    </div>
  )
}

export default Maintenance
