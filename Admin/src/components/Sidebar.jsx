import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='w-16 sm:w-20 md:w-[240px] h-[calc(100vh-73px)] bg-white border-r border-slate-100 py-6 px-2 sm:px-3 md:px-4 shrink-0 sticky top-[73px]'>
      <div className='flex flex-col gap-3'>
        
        {/* Add Items Link */}
        <NavLink 
          to='/add' 
          className={({ isActive }) => 
            `flex items-center justify-center md:justify-start gap-3.5 p-2.5 md:px-3.5 md:py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 group ${
              isActive 
                ? 'bg-indigo-50 text-indigo-600 shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-2 rounded-xl transition-colors shrink-0 ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 group-hover:bg-slate-200 text-slate-700'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className='hidden md:inline-block truncate'>Add Items</span>
              {isActive && <span className="ml-auto hidden md:block w-1.5 h-1.5 rounded-full bg-indigo-600"></span>}
            </>
          )}
        </NavLink>

        {/* List Items Link */}
        <NavLink 
          to='/list' 
          className={({ isActive }) => 
            `flex items-center justify-center md:justify-start gap-3.5 p-2.5 md:px-3.5 md:py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 group ${
              isActive 
                ? 'bg-indigo-50 text-indigo-600 shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-2 rounded-xl transition-colors shrink-0 ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 group-hover:bg-slate-200 text-slate-700'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <span className='hidden md:inline-block truncate'>List Items</span>
              {isActive && <span className="ml-auto hidden md:block w-1.5 h-1.5 rounded-full bg-indigo-600"></span>}
            </>
          )}
        </NavLink>

        {/* Orders Link */}
        <NavLink 
          to='/orders' 
          className={({ isActive }) => 
            `flex items-center justify-center md:justify-start gap-3.5 p-2.5 md:px-3.5 md:py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 group ${
              isActive 
                ? 'bg-indigo-50 text-indigo-600 shadow-xs' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-2 rounded-xl transition-colors shrink-0 ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 group-hover:bg-slate-200 text-slate-700'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className='hidden md:inline-block truncate'>Orders</span>
              {isActive && <span className="ml-auto hidden md:block w-1.5 h-1.5 rounded-full bg-indigo-600"></span>}
            </>
          )}
        </NavLink>

      </div>
    </aside>
  );
};

export default Sidebar;