import React, { useState } from "react"

import "./style/index.less"

const SECONDS_IN_A_MINUTE = 60;

function calculateDelayTimes(bpm) {
  let delayTimes = {};
  delayTimes["1/4 Note"] = SECONDS_IN_A_MINUTE / bpm * 1000;
  delayTimes["8th Note"] = delayTimes["1/4 Note"] / 2;
  delayTimes["16th Note"] = delayTimes["8th Note"] / 2;
  delayTimes["32nd Note"] = delayTimes["16th Note"] / 2;
  delayTimes["1/4 Triplet"] = delayTimes["1/4 Note"] * (2 / 3);
  delayTimes["8th Triplet"] = delayTimes["8th Note"] * (2 / 3);
  delayTimes["16th Triplet"] = delayTimes["16th Note"] * (2 / 3);
  delayTimes["Dotted 1/4"] = delayTimes["1/4 Note"] * 1.5;
  delayTimes["Dotted 8th"] = delayTimes["8th Note"] * 1.5;
  delayTimes["Dotted 16th"] = delayTimes["16th Note"] * 1.5;

  return delayTimes
}

function DelayCalculator() {
  const [bpm, setBPM] = useState(128)
  const delayTimes = calculateDelayTimes(bpm)

  const handleInputChange = e => {
    const value = Number(e.target.value)
  
    setBPM(value) 
  }

  const renderDelayTimes = Object.keys(delayTimes).map(key => {
    const delayTime = delayTimes[key]
    const milliseconds = Number.isInteger(delayTime) ? delayTime : delayTime.toFixed(3);

    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{milliseconds}</td>
      </tr>
    )
  })

  return (
    <div className="delay-calculator-container">
      <form>
        <label className="delay-calculator-label" htmlFor="bpm">Enter BPM</label>
        <input name="bpm" value={bpm} type="number" onChange={handleInputChange}/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Note Length</th>
            <th>Milliseconds</th>
          </tr>
        </thead>
        <tbody>
          {renderDelayTimes}
        </tbody>
      </table>
    </div>
  )
}

export default DelayCalculator
