import React from 'react'
import { useState } from 'react'

function Collapsible(props) {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
      };

    return (
        <>
            <div>
                <button onClick={toggle}>{props.label}</button>
            </div>

            <div>
                {open &&
                    <div className="toggle">{props.children}</div>
                }
            </div>
        </>
    )
}

export default Collapsible