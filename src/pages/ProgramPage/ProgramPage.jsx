import React from 'react'
import HomeBanner from "../../components/Banner/HomeBanner"
import OurProgram from '../../components/Program/OurProgram'
import InternProgram from '../../components/Program/InternProgram'
import Traine from '../../components/Program/Traine'
import Traine2 from '../../components/Program/Traine2'
import StartPr from '../../components/Program/StartPr'


const ProgramPage = () => {
  return (
    <div>
      <HomeBanner/>
      <OurProgram/>
      <InternProgram/>
      <Traine/>
      <Traine2/>
      <StartPr/>
      
    </div>
  )
}

export default ProgramPage
