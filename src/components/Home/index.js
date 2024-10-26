import './index.css'

import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="games-heading">Home</h1>
      <div className="games-container">
        <Link to="/emoji-game" className="link-styling">
          <div className="eachGame">
            <img
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729257912/Group_7471_w4hbbx.png"
              alt="emoji game"
            />
          </div>
        </Link>
        <Link to="/memory-matrix" className="link-styling">
          <div className="eachGame">
            <h1 className="memory-matrix-heading">Memory Matrix</h1>
            <img
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729259272/memory_fv4c6f.png"
              alt="memory matrix"
            />
          </div>
        </Link>
        <Link to="/rock-paper-scissor" className="link-styling">
          <div className="eachGame">
            <h1 className="rock-paper-scissor">ROCK PAPER SCISSOR</h1>
            <img
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729259510/Group_7469_p76ztk.png"
              alt="rock paper scissor"
            />
          </div>
        </Link>
        <Link to="/card-flip-memory-game" className="link-styling">
          <div className="eachGame">
            <img
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729259729/animals_fjhgr1.png"
              alt="card flip memory game"
              className="flip-home-icon"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
