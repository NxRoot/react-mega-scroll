import React, { useEffect, useRef } from 'react';
import "./index.css"

const MegaScrollPage = (props: {
  children: any,
  onActive?: () => void
  bg?: string,
  title?: string,
  threshold?: number
}) => {

  let observer: any
  const ref: any = useRef()

  const onScroll = (entries: any) => {
    if (!document.fullscreenElement) {
      for (const i in entries) {
        if (ref.current) {
          if (entries[i].isIntersecting) {
            props.onActive?.()
          }
        }
      }
    }
  }

  useEffect(() => {
    if (ref.current && props.onActive) {
      observer = new IntersectionObserver(onScroll, {
        threshold: props.threshold || .5
      })
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current && observer) {
        observer?.unobserve?.(ref.current)
        observer = null
      }
    }
  }, [ref.current])

  return (
    <div ref={ref} className='ms-item' {...props.children?.props}>
      {props.children?.props.children}
    </div>
  )
}


const MegaScroll = (props: {
  children?: any,
  onChange?: (index: number) => void,
  noFocus?: boolean,
  threshold?: number
}) => {

  const ref: any = useRef()
  const childs = React.Children.toArray(props.children)
  useEffect(() => !props.noFocus && ref.current?.focus(), [])

  return (
    <div ref={ref} className="ms-container">
      {childs?.map((child, i) =>
        <MegaScrollPage
          key={i}
          children={child}
          threshold={props.threshold}
          onActive={props.onChange ? () => props.onChange?.(i) : undefined}
        />
      )}
    </div>
  )
}

export default MegaScroll