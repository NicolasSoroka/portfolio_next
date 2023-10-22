import React from 'react'

type TextGradientProps = {
  text: string[]
  from?: string
  via?: string
  to?: string
}

export const TextGradient:React.FC<TextGradientProps> = ({ text, from = 'from-orange-700', via='via-blue-500', to='to-green-400'}) => {

  return (
    <>
      {text.map((textItem, index) => (
        <span
          key={index}
          className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient`}
        >
          {textItem}
        </span>
      ))}
    </>
  )
}

export default TextGradient