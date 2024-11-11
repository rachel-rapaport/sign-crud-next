import React from 'react'
import {LinkProps} from '../types/linkProps';
import ButtonLink from './ButtonLink';

const pageLinks:LinkProps[]=[
    {href:"/pages/login",text:"login"},
    {href:"/pages/books",text:"book"}
];

const NavBar = () => {
  return (
    <div>
      <nav className='bg-blue-700 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className="text-white text-lg font-bold">my website</div>
            <div className=" flex space-x-10 text-white">
                {pageLinks.map((item)=>(
                    <div className=" hover:text-black text-1xl font-mono">
                        <ButtonLink href={item.href} text={item.text}/>
                    </div>
                ))}
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
