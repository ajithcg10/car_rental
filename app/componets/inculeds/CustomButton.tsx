"use client"

import React, { MouseEventHandler } from 'react'

type  CustomButtonProps = {
    title: string,
    handleFuction?: MouseEventHandler<HTMLButtonElement>,
    containerStyle?: string

}

export default function CustomButton({title , handleFuction ,containerStyle}: CustomButtonProps) {

  return (
   <button disabled={false} type={'button'} className={`custom-btn ${containerStyle}`} onClick={handleFuction}>
    <span>
       {title}
    </span>
   </button>
  )
}

