import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import './Slider.css'
import SettingsContext from './SettingsContext'
import BackButton from './BackButton'
function Settings() {
  const settingsInfo=useContext(SettingsContext)
  return (
    <div style={{textAlign:'left'}}>
        <label>work minutes:{settingsInfo.workMinutes}</label>
        <ReactSlider 
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue=>settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}>
        </ReactSlider>
        <label>Break Minutes:{settingsInfo.breakMinutes}:00</label>
        <ReactSlider 
        className={'slider-break'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        onChange={newValue=>settingsInfo.setBreakMinutes(newValue)}
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}>
        </ReactSlider>
        <BackButton onClick={()=>settingsInfo.setShowSettings(false)}/>
        </div>
  )
}

export default Settings