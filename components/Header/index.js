/**@jsx jsx*/
import { jsx, MenuButton } from 'theme-ui'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
//import styled from '@emotion/styled'
import ScrollLock from 'react-scrolllock'
import { withResizeDetector } from 'react-resize-detector'

export default withResizeDetector(({ width }) => {
  const [scroll, setscroll] = useState(false)

  if (width > 767) {
    if (scroll) setscroll(false)
  }

  const Menu = () => (
    <span
      onClick={() => {
        setscroll(!scroll)
      }}
    >
      <svg
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="menu"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        width="42"
        height="42"
        sx={{
          ':hover': {
            cursor: 'pointer'
          }
        }}
      >
        <g>
          <path d="M9,10c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"></path>
          <path d="M9,15c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"></path>
          <path d="M9,20c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"></path>
        </g>
      </svg>
    </span>
  )

  return (
    <>
      <ScrollLock isActive={scroll} />
      <Overlay display={scroll} />
      <div
        sx={{
          width: '100%',
          position: 'fixed',
          zIndex: 1000,
          backgroundColor: 'white',
          opacity: '0.97',
          borderBottom: '1px solid rgba(48, 48, 48, 0.125)',
          minHeight: '60px'
        }}
      >
        <img
          sx={{
            width: ['100px', '120px'],
            ml: [3, 4, 4, 5],
            position: 'absolute'
          }}
          src="hackclubflag.png"
        />
        <div
          sx={{
            display: ['flex'],
            flexDirection: ['row-reverse', 'row-reverse', 'row'],
            justifyContent: [null, null, 'center']
          }}
        >
          <div
            sx={{
              display: ['flex', 'flex', 'none'],
              flexDirection: 'column',
              justifyContent: 'center',
              height: '60px',
              mr: 3
            }}
          >
            <Menu />
          </div>

          <Link Text="Home" />
          <Link Text="Alexa-challenge" />
          <Link Text="Join" />
          <Link Text="Team" />
        </div>
      </div>
    </>
  )
})

const Link = ({ Text }) => (
  <p sx={{ mx: 3, fontSize: 2, display: ['none', 'none', 'initial'] }}>
    <span sx={{ cursor: 'pointer', color: 'mute' /* color: white'*/ }}>
      {Text}
    </span>
  </p>
)

const Overlay = ({ display }) => (
  <div
    sx={{
      position: 'absolute',
      height: '100vh',
      width: '100vw',
      bg: 'white',
      opacity: '0.99',
      display: display ? 'flex' : 'none',
      pt: '90px',
      flexDirection: 'column'
    }}
  >
    <OverlayItem Text={'Home'} />
    <OverlayItem Text={'Alexa-Challenge'} />
    <OverlayItem Text={'Join'} />
    <OverlayItem Text={'Team'} />
  </div>
)

const OverlayItem = ({ Text }) => (
  <div sx={{ ml: 4, my: 0 }}>
    <p
      sx={{
        fontSize: 3,
        my: 2,
        width: '80%',
        borderBottom: '1px solid',
        borderColor: 'smoke',
        pb: 3,
        pl: 3
      }}
    >
      <b sx={{ fontWeight: 'regular' }}> {Text}</b>
    </p>
  </div>
)

/** <div sx={{ width: '100vw', display: 'flex' }}>
    <img sx={{ width: '120px', ml: 5 }} src="hackclubflag.png" />
    <div sx={{ flex: 1, justifyContent: 'center', display: 'flex' }}>
      <Link Text="Home" />
      <Link Text="Clubs" />
      <Link Text="Workshops" />
      <Link Text="Team" />
    </div>
  </div> */
