import './index.css'

import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {BiArrowBack} from 'react-icons/bi'

import {CgClose} from 'react-icons/cg'

import {Line} from 'rc-progress'

const MemoryMatrixInterface = () => {
  const [gameLevel, setGameLevel] = useState(1)
  const [gridSize, setGridSize] = useState(3)
  const [highlightedCells, setHightlightedCells] = useState([])
  const [selectedCells, setSelectedCells] = useState([])
  const [gameStatus, setGameStatus] = useState('memorize')
  const [timer, setTimer] = useState(gridSize)

  useEffect(() => {
    const generateRandomCells = () => {
      const totalCells = gridSize * gridSize
      const randomCells = new Set()
      while (randomCells.size < gridSize) {
        const eachrandomCell = Math.floor(Math.random() * totalCells)
        randomCells.add(eachrandomCell)
      }
      setHightlightedCells(Array.from(randomCells))
    }
    generateRandomCells()
    setTimer(gridSize)
    setSelectedCells([])
    setGameStatus('memorize')

    const memorizeTime = setTimeout(() => {
      setGameStatus('select')
    }, gridSize * 1000)

    return () => clearTimeout(memorizeTime)
  }, [gameLevel, gridSize])

  const onSquareBlockClick = index => {
    if (gameStatus !== 'select') {
      return
    }

    if (highlightedCells.includes(index)) {
      setSelectedCells(prevSelectedCells => [...prevSelectedCells, index])
    } else {
      setGameStatus('result')
    }
  }

  useEffect(() => {
    if (selectedCells.length >= 3 && highlightedCells.length >= 3) {
      if (selectedCells.length === highlightedCells.length) {
        if (
          highlightedCells.every(eachItem => selectedCells.includes(eachItem))
        ) {
          console.log(
            highlightedCells.every(eachItem =>
              selectedCells.includes(eachItem),
            ),
          )
          setTimeout(() => {
            setGridSize(prevGridSize => prevGridSize + 1)
            setGameLevel(prevgameLevel => prevgameLevel + 1)
          }, 500)
        }
      }
    }
  }, [selectedCells, highlightedCells])

  const renderActiveTopSection = () => {
    return (
      <div className="mmg-activestate-top-container">
        <Link to="/" className="link-styling">
          <button type="button" className="mmg-initial-Back-button">
            <BiArrowBack color="#ffffff" /> Back
          </button>
        </Link>
        <Popup
          modal
          trigger={
            <button type="button" className="mmg-active-state-rules-button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="mmg-popup-rules-container">
              <button
                type="button"
                data-testid="close"
                className="mmg-active-rules-close-button"
                onClick={() => close()}
              >
                <CgClose color="#334155" />
              </button>
              <h1 className="mmg-active-state-rules-text">Rules</h1>
              <ul className="mmg-inital-rules-unordered-styling">
                <li className="mmg-active-rules-list-item-styling">
                  In each level of the Game, Users should be able to see the
                  Grid with (N X N) size starting from 3 and the grid will
                  highlight N cells in Blue, the N highlighted cells will be
                  picked randomly.
                </li>
                <li className="mmg-active-rules-list-item-styling">
                  At N seconds, the user can click on any cell. Clicking on a
                  cell that was highlighted before it will turn blue. Clicking
                  on the other cells that were not highlighted before then will
                  turn to red.
                </li>
                <li className="mmg-active-rules-list-item-styling">
                  The highlighted cells will remain N seconds for the user to
                  memorize the cells. At this point, the user should not be able
                  to perform any action.
                </li>
                <li className="mmg-active-rules-list-item-styling">
                  The user should be promoted to the next level if they guess
                  all N cells correctly in one attempt.
                </li>
                <li className="mmg-active-rules-list-item-styling">
                  After N seconds, the grid will clear the N highlighted cells.
                </li>
                <li className="mmg-active-rules-list-item-styling">
                  The user should be taken to the results page if the user
                  clicks on the wrong cell.
                </li>
                <li className="mmg-active-rules-list-item-styling">
                  If the user completed all the levels, then the user should be
                  taken to the results page.
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }

  const onPlayAgain = () => {
    setGameLevel(1)
    setGridSize(3)
    setHightlightedCells([])
    setSelectedCells([])
    setGameStatus('memorize')
    setTimer(3)
  }

  const renderGrid = () => {
    const totalCells = gridSize * gridSize
    const totalVisualization = Array.from({length: totalCells})
    return Array.from({length: totalCells}).map((_, index) => {
      let className = 'each-square-block '
      if (highlightedCells.includes(index) && gameStatus === 'memorize') {
        className += ' blue-block'
      }
      if (selectedCells.includes(index)) {
        className += ' blue-block'
      } else if (gameStatus === 'result' && !highlightedCells.includes(index)) {
        className += ' red-block'
      }

      return (
        <div
          className={className}
          key={index}
          onClick={() => onSquareBlockClick(index)}
        />
      )
    })
  }

  return (
    <div className="mmg-active-state-container">
      {gameStatus === 'result' ? (
        <div className="result-container">
          <ul className="unordered-levels-list">
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729847807/znotwgepsr3l0uzgvakr.png"
                alt="neutral face"
              />
            </li>
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729847979/rzvmztzaebr8n7miajgr.png"
                alt="grimacing face"
              />
            </li>
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729848071/2x_pqtsme.png"
                alt="slightly smiling face"
              />
            </li>
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729848186/2x_mnl15m.png"
                alt="grinning face with big eyes"
              />
            </li>
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729848397/2x_i9tyxj.png"
                alt="grinning face with smiling eyes"
              />
            </li>
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729848493/2x_il4xp7.png"
                alt="beaming face with smiling eyes"
              />
            </li>
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729848687/2x_vzhns8.png"
                alt="grinning face"
              />
            </li>
            <li className="level-list-item">
              <img
                src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729848810/jg3tytzrqwm72fwv2bh5.png"
                alt="smiling face with sunglasses"
              />
            </li>
          </ul>
          <Line
            percent={gameLevel * 10}
            strokeWidth={4}
            strokeColor="#467AFF"
          />
          <ul className="unordered-levels-list">
            <li className="level-list-item">Level 1</li>
            <li className="level-list-item">Level 5</li>
            <li className="level-list-item">Level 10</li>
            <li className="level-list-item">Level 15</li>
          </ul>
          <h1 className="congratulations-text">Congratulations!</h1>
          <p className="game-level-result-indication">{`You have reached level ${gameLevel}`}</p>
          <button
            type="button"
            className="play-again-button"
            onClick={onPlayAgain}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          {renderActiveTopSection()}
          <h1 className="mmg-heading-styling">Memory Matrix</h1>
          <p className="mmg-active-level-text">Level -{gameLevel}</p>
          <p className="mmg-active-level-text">{gameStatus}</p>
          <div
            className="square-blocks-container"
            style={{gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}
          >
            {renderGrid()}
          </div>
        </>
      )}
    </div>
  )
}

export default MemoryMatrixInterface
