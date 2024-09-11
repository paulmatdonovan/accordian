import { useState } from "react"
import './index.css'


export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button>Create Hex Color</button>
            <button>Create RGB Color</button>
            <button>Generate Random Color</button>
        </div>
    )
}