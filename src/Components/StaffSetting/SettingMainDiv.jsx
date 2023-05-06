import React from 'react'
import ProfiileUpdate from './ProfiileUpdate'
import SocialMediaUpdate from './SocialMediaUpdate'
import SubjectSetting from './SubjectSetting'

const SettingMainDiv = () => {
  return (
    <>
        <div className="SettingMainDiv middleDiv">
            <ProfiileUpdate/>
            <SocialMediaUpdate/>
            <SubjectSetting/>
        </div>
    </>
  )
}

export default SettingMainDiv