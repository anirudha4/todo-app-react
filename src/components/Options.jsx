import React, { useState } from 'react'
import Dropdown from './Dropdown'

export default function Options({selected, setSelected}) {
    return (
        <div className="options">
            <p className="selected">{selected} Todo's</p>
            <Dropdown selected={selected} setSelected={setSelected} showAll={true} />
        </div>
    )
}
