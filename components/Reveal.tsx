'use client'
import React, { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  style?: CSSProperties
  id?: string
}

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', style, id }: RevealProps) {
  const ref = useRef<any>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </Tag>
  )
}
