import React from "react";
import {Typed} from 'react-typed'

const TypingEffect = () => {
    return (
        <div className="text-6xl font-bold text-white">
            <Typed
                strings={[
                    "Hi, I am Sanat Naik"
                ]}
                typeSpeed = {50}
                backSpeed = {30}
                loop
            />
        </div>
    )
}

export default TypingEffect