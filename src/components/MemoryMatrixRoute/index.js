import './index.css'

import {useState, useEffect} from 'react'

import MemoryMatrixGameInterface from '../MemoryMatrixGameInterface'

import {Link} from 'react-router-dom'

import {BiArrowBack} from 'react-icons/bi'

const gameStateConstants = {
  initialState: 'INITIAL',
  activeState: 'ACTIVE',
  resultState: 'RESPONSE',
}

const MemoryMatrixRoute = () => {
  const [gameState, setGameState] = useState(gameStateConstants.initialState)

  const onSelection = () => {
    setGameState(gameStateConstants.activeState)
  }

  const renderInitialState = () => {
    return (
      <div className="mmg-initial-state-container">
        <Link to="/" className="link-styling">
          <button type="button" className="mmg-initial-Back-button">
            <BiArrowBack color="#ffffff" /> Back
          </button>
        </Link>
        <h1 className="mmg-heading-styling">Memory Matrix</h1>
        <img
          src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729749104/memory_1_tmqm6u.png"
          alt="memory matrix game"
          className="mmg-initial-image"
        />
        <p className="mmg-rules-inital-text">Rules</p>
        <ul className="mmg-inital-rules-unordered-styling">
          <li className="mmg-inital-list-item-styling">
            In each level of the Game, Users should be able to see the Grid with
            (N X N) size starting from 3 and the grid will highlight N cells in
            Blue, the N highlighted cells will be picked randomly.
          </li>
          <li className="mmg-inital-list-item-styling">
            At N seconds, the user can click on any cell. Clicking on a cell
            that was highlighted before it will turn blue. Clicking on the other
            cells that were not highlighted before then will turn to red.
          </li>
          <li className="mmg-inital-list-item-styling">
            The highlighted cells will remain N seconds for the user to memorize
            the cells. At this point, the user should not be able to perform any
            action.
          </li>
          <li className="mmg-inital-list-item-styling">
            The user should be promoted to the next level if they guess all N
            cells correctly in one attempt.
          </li>
          <li className="mmg-inital-list-item-styling">
            After N seconds, the grid will clear the N highlighted cells.
          </li>
          <li className="mmg-inital-list-item-styling">
            The user should be taken to the results page if the user clicks on
            the wrong cell.
          </li>
          <li className="mmg-inital-list-item-styling">
            If the user completed all the levels, then the user should be taken
            to the results page.
          </li>
        </ul>
        <button
          className="mmg-inital-start-button"
          type="button"
          onClick={onSelection}
        >
          Start Playing
        </button>
      </div>
    )
  }

  const renderActiveState = () => {
    return (
      <>
        <MemoryMatrixGameInterface />
      </>
    )
  }

  const renderMMRGame = () => {
    switch (gameState) {
      case gameStateConstants.initialState:
        return renderInitialState()
      case gameStateConstants.activeState:
        return renderActiveState()
      default:
        return null
    }
  }

  return <div className="mmg-mainbg-container">{renderMMRGame()}</div>
}

export default MemoryMatrixRoute
