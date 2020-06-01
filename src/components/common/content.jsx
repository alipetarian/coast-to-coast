/* eslint-disable */

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Marked from 'react-markdown'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from './image'

const encodeMarkdownURIs = (source = '') => {
  const markdownLinkRegex = /\[(.+)\]\((.+)(".+)\)/g
  console.log(source)
  return source.replace(markdownLinkRegex, (match, linkURI) => {
    if (!linkURI) return match
    const replaced = match.replace(linkURI, encodeURI(linkURI))
    return replaced
  })
}

const withContentImages = (source) => {
  const images = source.match(/<img(.*?)\\?>/gim)

  for (const i in images) {
    const src = /src="(.*?)"/g.exec(images[i])
    const alt = /alt="(.*?)"/g.exec(images[i])
    const title = /title="(.*?)"/g.exec(images[i])
    source = source.replace(
      images[i],
      ReactDOMServer.renderToStaticMarkup(
        <Image
          resolutions="medium"
          className="Content--Image"
          lazy={false}
          src={src ? src[1] : null}
          alt={alt ? alt[1] : null}
          title={title ? title[1] : null}
        />,
      ),
    )
  }

  return source
}

const MyImage = ({
  nodeKey, src, title, alt,
}) => {
  const decodedSrc = decodeURI(src)
  return (
    <Image
      className="Content--Image markdown-preview"
      resolutions="medium"
      lazy={false}
      src={decodedSrc}
      title={title}
      alt={alt}
    />
  )
}

const HtmlBlock = ({ value }) => {
  if (value.indexOf('<iframe') !== 0) return value
  return (
    <div
      className="Content--Iframe"
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  )
}

const StyledContent = styled(Marked)`
  & .Content--Image,
  .Content img {
    max-width: 100%;
    display: block;
    height: auto;
    margin-bottom: 2.5rem;
  }

  & .Content--Iframe {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }

  & .Content--Iframe iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

`

const Content = ({ source, src, className = '' }) => {
  // accepts either html or markdown
  source = source || src || ''
  if (source.match(/^</)) {
    source = withContentImages(source)

    return (
      <div
        className={`Content ${className}`}
        dangerouslySetInnerHTML={{ __html: source }}
      />
    )
  }

  return (
    <StyledContent
      className={`Content ${className}`}
      source={encodeMarkdownURIs(source)}
      renderers={{
        image: MyImage,
        html: HtmlBlock,
      }}
    />
  )
}

Content.propTypes = {
  source: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
}

export default Content
