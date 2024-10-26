import './index.css'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {BiArrowBack} from 'react-icons/bi'

import {CgClose} from 'react-icons/cg'

import {useState} from 'react'

const gameStateConstants = {
  initial: 'INITIAL',
  activeState: 'ACTIVE',
  wonState: 'WON',
  lossState: 'LOST',
  drawState: 'DRAW',
}

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const RockPaperScissorRoute = () => {
  const [gameStatus, setStatus] = useState(gameStateConstants.initial)
  const [score, setSore] = useState(0)
  const [yourOption, setYourOption] = useState({})
  const [computerOption, setComputerOption] = useState({})

  const renderScoreBoard = () => {
    return (
      <div className="scoreboard-container-styling">
        <ul className="rps-scoreboard-text-unorderedlist">
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissor</li>
        </ul>
        <img
          src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729669525/Group_7618_wz7w1p.png"
          alt="won"
          className="result-face"
        />
        <div className="score-text-container">
          <p className="score-text">Score</p>
          <h1 className="score-num">{score}</h1>
        </div>
      </div>
    )
  }

  const onPlayAgain = () => {
    setStatus(gameStateConstants.activeState)
    setYourOption({})
    setComputerOption({})
  }

  const renderDrawState = () => {
    return (
      <div className="response-container">
        <h1 className="rps-heading-styling">ROCK PAPER SCISSOR</h1>
        {renderScoreBoard()}
        <ul className="response-status-container-unordered-list">
          <li className="each-response-section">
            <h3 className="player-name">You</h3>
            <img
              src={yourOption.imageUrl}
              alt={yourOption.id}
              className="response-emoji"
            />
          </li>
          <li className="each-response-section">
            <img
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729682268/Emoji_ta4me1.png"
              alt="draw emoji"
              className="response-icon"
            />
            <h1 className="response-text">IT IS DRAW</h1>
            <button
              type="button"
              className="play-again-button"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </li>
          <li className="each-response-section">
            <h3 className="player-name">Opponent</h3>
            <img
              src={computerOption.imageUrl}
              alt={computerOption.id}
              className="response-emoji"
            />
          </li>
        </ul>
      </div>
    )
  }

  const renderWonState = () => {
    return (
      <div className="response-container">
        <h1 className="rps-heading-styling">ROCK PAPER SCISSOR</h1>
        {renderScoreBoard()}
        <ul className="response-status-container-unordered-list">
          <li className="each-response-section">
            <h3 className="player-name">You</h3>
            <img
              src={yourOption.imageUrl}
              alt={yourOption.id}
              className="response-emoji"
            />
          </li>
          <li className="each-response-section">
            <img
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729682935/Emoji_1_cplewm.png"
              alt="won emoji"
              className="response-icon"
            />
            <h1 className="response-text">YOU WON</h1>
            <button
              type="button"
              className="play-again-button"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </li>
          <li className="each-response-section">
            <h3 className="player-name">Opponent</h3>
            <img
              src={computerOption.imageUrl}
              alt={computerOption.id}
              className="response-emoji"
            />
          </li>
        </ul>
      </div>
    )
  }

  const renderLossState = () => {
    return (
      <div className="response-container">
        <h1 className="rps-heading-styling">ROCK PAPER SCISSOR</h1>
        {renderScoreBoard()}
        <ul className="response-status-container-unordered-list">
          <li className="each-response-section">
            <h3 className="player-name">You</h3>
            <img
              src={yourOption.imageUrl}
              alt={yourOption.id}
              className="response-emoji"
            />
          </li>
          <li className="each-response-section">
            <img
              src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729683488/Emoji_3_s4c8bv.png"
              alt="lose emoji"
              className="response-icon"
            />
            <h1 className="response-text">YOU LOSE</h1>
            <button
              type="button"
              className="play-again-button"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </li>
          <li className="each-response-section">
            <h3 className="player-name">Opponent</h3>
            <img
              src={computerOption.imageUrl}
              alt={computerOption.id}
              className="response-emoji"
            />
          </li>
        </ul>
      </div>
    )
  }

  const onSelectionChoice = eachItem => {
    const yourChoice = eachItem
    setYourOption(yourChoice)
    const generatedChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    setComputerOption(generatedChoice)

    if (yourChoice.id === generatedChoice.id) {
      setStatus(gameStateConstants.drawState)
    } else if (
      (yourChoice.id === 'rock' && generatedChoice.id === 'scissors') ||
      (yourChoice.id === 'scissors' && generatedChoice.id === 'paper') ||
      (yourChoice.id === 'paper' && generatedChoice.id === 'rock')
    ) {
      setStatus(gameStateConstants.wonState)
      setSore(prevScore => prevScore + 1)
    } else {
      setStatus(gameStateConstants.lossState)
      setSore(prevScore => prevScore - 1)
    }
  }

  const onStartGame = () => {
    setStatus(gameStateConstants.activeState)
  }

  const renderInitialState = () => {
    return (
      <div className="initial-container">
        <Link to="/" className="rps-link-styling">
          <button type="button" className="rps-back-button-styling">
            {' '}
            <BiArrowBack /> Back
          </button>
        </Link>
        <h1 className="rps-heading-styling">ROCK PAPER SCISSOR</h1>
        <img
          src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729656991/Group_7469_1_rijazz.png"
          alt="rock paper scissor"
          className="rps-image"
        />
        <p className="rules-text">Rules</p>
        <ul className="rps-rules-unordered-styling">
          <li className="list-item-styling">
            The game result should be based on user and user opponent choices
          </li>
          <li className="list-item-styling">
            When the user choice is rock and his opponent choice is rock then
            the result will be <span className="span-styling">IT IS DRAW</span>
          </li>
          <li className="list-item-styling">
            When the user choice is paper and his opponent choice is rock then
            the result will be <span className="span-styling">YOU WON</span>
          </li>
          <li className="list-item-styling">
            When the user choice is a scissor and his opponent choice is rock
            then the result will be
            <span className="span-styling">YOU LOSE</span>
          </li>
          <li className="list-item-styling">
            When the user choice is paper and his opponent choice is paper then
            the result will be <span className="span-styling">IT IS DRAW</span>
          </li>
          <li className="list-item-styling">
            When the user choice is scissors and his opponent choice is paper
            then the result will be{' '}
            <span className="span-styling">YOU WON</span>
          </li>
          <li className="list-item-styling">
            When the user choice is rock and his opponent choice is scissors
            then the result will be{' '}
            <span className="span-styling">YOU WON</span>
          </li>
          <li className="list-item-styling">
            When the user choice is paper and his opponent choice is scissors
            then the result will be{' '}
            <span className="span-styling">YOU LOSE</span>
          </li>
          <li className="list-item-styling">
            When the user choice is scissors and his opponent choice is scissors
            then the result will be{' '}
            <span className="span-styling">IT IS DRAW</span>
          </li>
          <li className="list-item-styling">
            When the result is <span className="span-styling">YOU WON</span>,
            then the count of the score should be incremented by 1
          </li>
          <li className="list-item-styling">
            When the result is <span className="span-styling">IT IS DRAW</span>,
            then the count of the score should be the same
          </li>
          <li className="list-item-styling">
            When the result is <span className="span-styling">YOU LOSE</span>,
            then the count of the score should be decremented by 1.
          </li>
        </ul>
        <button
          className="rps-start-button"
          type="button"
          onClick={onStartGame}
        >
          Start Playing
        </button>
      </div>
    )
  }

  const renderActiveStateTopSection = () => {
    return (
      <div className="rps-back-popup-container">
        <Link to="/" className="rps-active-state-link-styling">
          <button type="button" className="rps-back-button-styling">
            {' '}
            <BiArrowBack /> Back
          </button>
        </Link>
        <Popup
          modal
          trigger={
            <button type="button" className="rps-active-state-rules-button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="rps-popup-rules-container">
              <button
                type="button"
                data-testid="close"
                className="rps-active-rules-close-button"
                onClick={() => close()}
              >
                <CgClose color="#334155" />
              </button>
              <h1 className="rps-active-state-rules-state">Rules</h1>
              <ul className="rps-rules-unordered-styling">
                <li className="rps-active-state-list-item-styling">
                  The game result should be based on user and user opponent
                  choices
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is rock and his opponent choice is rock
                  then the result will be{' '}
                  <span className="span-styling">IT IS DRAW</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is paper and his opponent choice is rock
                  then the result will be{' '}
                  <span className="span-styling">YOU WON</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is a scissor and his opponent choice is
                  rock then the result will be
                  <span className="span-styling">YOU LOSE</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is paper and his opponent choice is paper
                  then the result will be{' '}
                  <span className="span-styling">IT IS DRAW</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is scissors and his opponent choice is
                  paper then the result will be{' '}
                  <span className="span-styling">YOU WON</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is rock and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-styling">YOU WON</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is paper and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-styling">YOU LOSE</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the user choice is scissors and his opponent choice is
                  scissors then the result will be{' '}
                  <span className="span-styling">IT IS DRAW</span>
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the result is{' '}
                  <span className="span-styling">YOU WON</span>, then the count
                  of the score should be incremented by 1
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the result is{' '}
                  <span className="span-styling">IT IS DRAW</span>, then the
                  count of the score should be the same
                </li>
                <li className="rps-active-state-list-item-styling">
                  When the result is{' '}
                  <span className="span-styling">YOU LOSE</span>, then the count
                  of the score should be decremented by 1.
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }

  const renderActiveState = () => {
    return (
      <div className="rps-active-state-container">
        {renderActiveStateTopSection()}
        <h1 className="rps-heading-styling">ROCK PAPER SCISSOR</h1>
        <p className="active-state-lets-pick">Let’s pick</p>
        {renderScoreBoard()}
        <div className="rps-icons-unordered-list">
          {choicesList.map(eachItem => (
            <button
              className="each-icon-button"
              type="button"
              onClick={() => onSelectionChoice(eachItem)}
              key={eachItem.id}
            >
              <img
                src={eachItem.imageUrl}
                alt={eachItem.id}
                className="rps-icons-styling"
              />
            </button>
          ))}
        </div>
      </div>
    )
  }

  const renderRPSgame = () => {
    switch (gameStatus) {
      case gameStateConstants.initial:
        return renderInitialState()
      case gameStateConstants.activeState:
        return renderActiveState()
      case gameStateConstants.drawState:
        return renderDrawState()
      case gameStateConstants.wonState:
        return renderWonState()
      case gameStateConstants.lossState:
        return renderLossState()
    }
  }

  return <div className="rps-game-container-bg">{renderRPSgame()}</div>
}

export default RockPaperScissorRoute
