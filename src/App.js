import './App.css';

export default function App(){
  return(
    <div className = 'sidebar'>
      <div className="sidebar-top">
        <i class="logo fab fa-sketch"></i> 
        <span className="brand">The App</span> 
      </div>
      <div className="sidebar-center">
        <ul className="list">
          <li className="list-item active">
            <i class=" list-item-icon fas fa-home"></i>
            <span className="list-item-text">Dashboard</span>
          </li>
          <li className="list-item">
            <i class=" list-item-icon fas fa-search"></i>
            <span className="list-item-text">Search</span>
          </li>
          <li className="list-item">
            <i class=" list-item-icon fas fa-stream"></i>
            <span className="list-item-text">Insight</span>
          </li>
          <li className="list-item">
            <i class=" list-item-icon fas fa-book"></i>
            <span className="list-item-text">Docs</span>
          </li>
          <li className="list-item">
            <i class=" list-item-icon fas fa-users"></i>
            <span className="list-item-text">Community</span>
          </li>
          <li className="list-item">
            <i class=" list-item-icon fas fa-shopping-cart"></i>
            <span className="list-item-text">Market</span>
          </li>
          <li className="list-item">
            <i class=" list-item-icon fas fa-question-circle"></i>
            <span className="list-item-text">Resources</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <div className="color-box dark"></div>
        <div className="color-box night"></div>
        <div className="color-box light"></div>
      </div>
    </div>
  )
}
