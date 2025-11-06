import { useState } from "react"
import { NavLink } from "react-router"
import { FaLaptopCode ,FaTimes , FaBars } from "react-icons/fa"
const Navbar = () => {
    const [isOpen ,setIsOpen] = useState(false)
    const base = 'transition hover:text-blue-400'
    const active = 'text-blue-400 font-semibold'
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between item-center">
            <NavLink to={'/'} className={'flex items-center gap-2 text-lg font-bold text-blue-300'}>
                <FaLaptopCode className="text-blue-400 text-xl"/>
                <span>The Friendly Developer</span>
                </NavLink>  
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="space-x-4 text-sm text-gray-300">
                        <NavLink 
                        className={({isActive})=> isActive ? active : base}
                         to={'/'}
                        
                        >
                            Home
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/project'}>
                            Projects
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/blog'}>
                            Blog
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/about'}>
                            About
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/contact'}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={()=>setIsOpen(!isOpen)} className="text-blue-400 text-xl cursor-pointer" title="menu">
                        {isOpen ? <FaTimes/> : <FaBars/>}                    
                    </button>
                </div>
        </div>
        {/* Mobile Nav*/ }
        {isOpen && (
            <div className="bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center text-white md:hidden">
                 <NavLink className={({isActive})=> isActive ? active : base} to={'/'}
                     onClick={()=> setIsOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/project'}
                             onClick={()=> setIsOpen(false)}>
                            Projects
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/blog'}
                             onClick={()=> setIsOpen(false)}>
                            Blog
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/about'}
                             onClick={()=> setIsOpen(false)}>
                            About
                        </NavLink>
                        <NavLink className={({isActive})=> isActive ? active : base}  to={'/contact'}
                             onClick={()=> setIsOpen(false)}>
                            Contact
                        </NavLink>
            </div>
        )}
    </nav>
  )
}

export default Navbar