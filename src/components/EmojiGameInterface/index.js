import './index.css'

import {useState} from 'react'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {BiArrowBack} from 'react-icons/bi'

import {CgClose} from 'react-icons/cg'

import EachEmoji from '../EachEmoji'

const gameState = {
  activeState: 'ACTIVE',
  lostState: 'LOST',
  wonState: 'WON',
}

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const EmojiGameInterface = () => {
  const [gameStatus, setGameState] = useState(gameState.activeState)
  const [shuffledList, setShuffledList] = useState(emojisList)
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [clickedEmojis, setClickedEmojis] = useState([])
  console.log(clickedEmojis)

  const renderPlayAgain = () => {
    setGameState(gameState.activeState)
    setScore(0)
    setClickedEmojis([])
  }

  const renderLost = () => {
    return (
      <div className="lost-container-styling">
        <div>
          <h1 className="you-lose-text">You Lose</h1>
          <p className="best-score-text">Best Score</p>
          <h1 className="card-score">
            {score < 10 ? `0${score}` : `${score}`}/12
          </h1>
          <button className="play-again-button" onClick={renderPlayAgain}>
            Play Again
          </button>
        </div>
        <img
          className="lost-image"
          src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729574748/Image_euhabo.png"
          alt="lose"
        />
      </div>
    )
  }

  const renderWon = () => {
    return (
      <div className="lost-container-styling">
        <div>
          <h1 className="you-lose-text">You Won</h1>
          <p className="best-score-text">Best Score</p>
          <h1 className="card-score">
            {score < 10 ? `0${score}` : `${score}`}/12
          </h1>
          <button className="play-again-button" onClick={renderPlayAgain}>
            Play Again
          </button>
        </div>
        <img
          className="lost-image"
          src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729577563/Image_1_nbpdb7.png"
          alt="won"
        />
      </div>
    )
  }

  const onSelection = id => {
    console.log(id)
    if (clickedEmojis.includes(id)) {
      if (score > topScore) {
        setTopScore(score)
      }
      setGameState(gameState.lostState)
    } else {
      if (clickedEmojis.length === 11) {
        setClickedEmojis(prevClickedEmojis => [...prevClickedEmojis, id])
        setScore(prevScore => prevScore + 1)
        setGameState(gameState.wonState)
        setTopScore(12)
      } else {
        setClickedEmojis(prevClickedEmojis => [...prevClickedEmojis, id])
        setScore(prevScore => prevScore + 1)
      }
    }
    const afterShuffledList = shuffledList.sort(() => Math.random() - 0.5)
    setShuffledList(afterShuffledList)
  }

  const renderNavBar = () => {
    return (
      <nav className="nav-styling">
        <div className="emoji-container">
          <img
            src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1729334142/wink_1_vmnvdf.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h3 className="emoji-game-text">Emoji Game</h3>
        </div>
        <div className="scores-container">
          <p className="score-text">
            Score:<span className="score-value">{score}</span>
          </p>
          <p className="score-text">
            TopScore:<span className="score-value">{topScore}</span>
          </p>
        </div>
      </nav>
    )
  }

  const renderBackAndPopupContainer = () => {
    return (
      <div className="back-popup-container">
        <Link to="/" className="link-styling">
          <button type="button" className="back-button-styling">
            {' '}
            <BiArrowBack /> Back
          </button>
        </Link>
        <Popup
          modal
          data-testid=""
          trigger={<button className="rules-button-styling">Rules</button>}
        >
          {close => (
            <div className="rules-content-interface">
              <button
                type="button"
                data-testid="close"
                className="close-button-styling"
                onClick={() => close()}
              >
                <CgClose color="grey" />
              </button>
              <h2 className="rules-heading">Rules</h2>
              <ul className="unordered-list-styling-interface">
                <li>User should be able to see the list of Emojis.</li>
                <li>
                  When the user clicks any one of the Emoji for the first time,
                  then the count of the score should be incremented by 1 and the
                  List of emoji cards should be shuffled.
                </li>
                <li>
                  This process should be repeated every time the user clicks on
                  an emoji card.
                </li>
                <li>
                  When the user clicks on all Emoji cards without clicking any
                  of it twice, then the user will win the game.
                </li>
                <li>
                  When the user clicks on the same Emoji for the second time,
                  then the user will lose the game.
                </li>
                <li>
                  Once the game is over, the user will be redirected to the
                  results page.
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }

  const renderEmojisList = () => {
    return (
      <ul className="emojis-list">
        {shuffledList.map(eachItem => (
          <EachEmoji
            eachItem={eachItem}
            key={eachItem.id}
            onSelection={onSelection}
          />
        ))}
      </ul>
    )
  }

  const renderInterface = () => {
    switch (gameStatus) {
      case gameState.activeState:
        return (
          <>
            {renderBackAndPopupContainer()}
            <div className="emojis-list-container">{renderEmojisList()}</div>
          </>
        )
      case gameState.lostState:
        return renderLost()
      case gameState.wonState:
        return renderWon()
    }
  }

  return (
    <>
      {renderNavBar()}
      <div className="below-header-section">{renderInterface()}</div>
    </>
  )
}

export default EmojiGameInterface
