import React from 'react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { useLocation } from 'react-router'

export function ShareFB({ children, quote = '' }) {
  const { pathname } = useLocation()

  const shareURL = `https://catawbalanguage.org${pathname}`
  const shareTag = 'catawbalanguage'
  if (quote.length === 0) {
    return (
      <FacebookShareButton
        url={shareURL}
        // quote={'CampersTribe - World is yours to explore'}
        hashtag={shareTag}
      >
        {children}
      </FacebookShareButton>
    )
  } else {
    return (
      <FacebookShareButton url={shareURL} quote={quote} hashtag={shareTag}>
        {children}
      </FacebookShareButton>
    )
  }
}

export const ShareTwitter = ({
  children,
  title = 'Catawba Langauge Project',
}) => {
  const { pathname } = useLocation()
  const shareURL = `https://catawbalanguage.org${pathname}`
  const shareTags = ['catawbalanguage']
  return (
    <TwitterShareButton url={shareURL} hashtags={shareTags} title={title}>
      {children}
    </TwitterShareButton>
  )
}
