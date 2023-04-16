import { url } from 'inspector'
import React from 'react'

const Main = () => {
    return (
        <div className='sm:rounded-t-3xl bg-[var(--themeColor)] text-white min-h-[12rem] relative transition-[background-colour] duration-300 will-change-[background-color] '>
            <div className="sm:rounded-t-3xl bg-[url('/logo.jpg')] bg-cover relative w-full aspect-square">
            </div>
            <div className='absolute bottom-[-2px] w-full'>
                <svg className="w-full block" style={{ overflowClipMargin: 'content-Box' }} preserveAspectRatio="xMinYMax meet" viewBox="0 0 246 57" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 214.7168,6.1113281 C 195.65271,5.9023124 172.37742,11.948182 137.87305,32.529297 110.16613,49.05604 86.980345,56.862784 65.015625,57 H 65 v 1 H 246 V 11.453125 C 236.0775,8.6129313 226.15525,6.2367376 214.7168,6.1113281 Z" fill="#ffffff" clip-rule="evenodd" fill-rule="evenodd"></path>
                    <path d="M 0,35.773438 V 58 H 65 L 64.97852,57 C 43.192081,57.127508 22.605139,49.707997 0,35.773438 Z " fill="#ffffff" clip-rule="evenodd" fill-rule="evenodd"></path>
                    <path fill="#8F60DE" clip-rule="evenodd" fill-rule="evenodd" d="m 0,16.7221 v 19.052 C 45.4067,63.7643 82.6667,65.4583 137.873,32.5286 193.08,-0.401184 219.54,3.87965 246,11.4535 V 6.51403 C 185.24,-16.8661 135.913,29.331 97.6933,40.8564 59.4733,52.3818 33.6467,44.1494 0,16.7221 Z "></path></svg>
                <div className='absolute inset-[30% 0px 0px 65%]'></div>
            </div>
        </div>
    )
}

export default Main