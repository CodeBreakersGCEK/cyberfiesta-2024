import React from 'react'
import Image from './Image'

interface LinesProps {
  number: number
}

const Lines: React.FC<LinesProps> = ({ number }) => {
  switch (number) {
    case 1:
      return (
        <>
          <Image src="/icons/1.svg" className="left-10 top-8 -rotate-12" />
          <Image src="/icons/2.svg" className="right-20 top-10 rotate-12" />
          <Image src="/icons/3.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/4.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
    case 2:
      return (
        <>
          <Image src="/icons/5.svg" className="left-10 top-10 -rotate-12" />
          <Image src="/icons/6.svg" className="right-10 top-40 rotate-12" />
          <Image src="/icons/7.svg" className="right-28 top-14 rotate-12" />
          <Image src="/icons/8.svg" className="left-28 top-36 -rotate-12" />
        </>
      )
    case 3:
      return (
        <>
          <Image src="/icons/9.svg" className="left-10 top-8 -rotate-12" />
          <Image src="/icons/10.svg" className="right-24 top-10 rotate-12" />
          <Image src="/icons/11.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/12.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
    case 4:
      return (
        <>
          <Image src="/icons/13.svg" className="left-10 top-10 -rotate-12" />
          <Image src="/icons/14.svg" className="right-10 top-40 rotate-12" />
          <Image src="/icons/15.svg" className="right-28 top-14 rotate-12" />
          <Image src="/icons/16.svg" className="left-28 top-36 -rotate-12" />
        </>
      )
    case 5:
      return (
        <>
          <Image src="/icons/17.svg" className="left-10 top-8 -rotate-12" />
          <Image src="/icons/18.svg" className="right-24 top-10 rotate-12" />
          <Image src="/icons/19.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/20.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
    case 6:
      return (
        <>
          <Image src="/icons/1.svg" className="left-10 top-10 -rotate-12" />
          <Image src="/icons/5.svg" className="right-10 top-40 rotate-12" />
          <Image src="/icons/9.svg" className="right-28 top-14 rotate-12" />
          <Image src="/icons/13.svg" className="left-28 top-36 -rotate-12" />
        </>
      )
    case 7:
      return (
        <>
          <Image src="/icons/2.svg" className="left-10 top-8 -rotate-12" />
          <Image src="/icons/6.svg" className="right-24 top-10 rotate-12" />
          <Image src="/icons/10.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/14.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
    case 8:
      return (
        <>
          <Image src="/icons/3.svg" className="left-10 top-10 -rotate-12" />
          <Image src="/icons/7.svg" className="right-10 top-40 rotate-12" />
          <Image src="/icons/11.svg" className="right-28 top-14 rotate-12" />
          <Image src="/icons/15.svg" className="left-28 top-36 -rotate-12" />
        </>
      )
    case 9:
      return (
        <>
          <Image src="/icons/4.svg" className="left-10 top-8 -rotate-12" />
          <Image src="/icons/8.svg" className="right-24 top-10 rotate-12" />
          <Image src="/icons/12.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/16.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
    case 10:
      return (
        <>
          <Image src="/icons/1.svg" className="left-10 top-10 -rotate-12" />
          <Image src="/icons/6.svg" className="right-10 top-40 rotate-12" />
          <Image src="/icons/9.svg" className="right-28 top-14 rotate-12" />
          <Image src="/icons/16.svg" className="left-28 top-36 -rotate-12" />
        </>
      )
    case 11:
      return (
        <>
          <Image src="/icons/7.svg" className="left-10 top-4 -rotate-12" />
          <Image src="/icons/18.svg" className="right-24 top-10 rotate-12" />
          <Image src="/icons/13.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/11.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
    case 12:
      return (
        <>
          <Image src="/icons/2.svg" className="left-10 top-10 -rotate-12" />
          <Image src="/icons/9.svg" className="right-10 top-40 rotate-12" />
          <Image src="/icons/14.svg" className="right-28 top-14 rotate-12" />
          <Image src="/icons/17.svg" className="left-28 top-36 -rotate-12" />
        </>
      )
    case 13:
      return (
        <>
          <Image src="/icons/3.svg" className="left-10 top-8 -rotate-12" />
          <Image src="/icons/9.svg" className="right-24 top-10 rotate-12" />
          <Image src="/icons/15.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/18.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
    case 14:
      return (
        <>
          <Image src="/icons/19.svg" className="left-10 top-10 -rotate-12" />
          <Image src="/icons/2.svg" className="right-10 top-40 rotate-12" />
          <Image src="/icons/15.svg" className="right-28 top-14 rotate-12" />
          <Image src="/icons/16.svg" className="left-28 top-36 -rotate-12" />
        </>
      )
    default:
      return (
        <>
          <Image src="/icons/12.svg" className="left-10 top-8 -rotate-12" />
          <Image src="/icons/1.svg" className="right-24 top-10 rotate-12" />
          <Image src="/icons/2.svg" className="left-28 top-44 rotate-12" />
          <Image src="/icons/4.svg" className="right-28 top-40 -rotate-12" />
        </>
      )
  }
}

export default Lines
