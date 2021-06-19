import React from 'react'
import styles from "./Product.module.css"

function Sizebutton({el}) {
    const [color,setColor]=React.useState(true)

    return (
        <div>
            <button onClick={()=>setColor(!color)} className={color? styles.Psizebutton:styles.Psizebutton2}>
                       {el}
                   </button>
        </div>
    )
}

export default Sizebutton
