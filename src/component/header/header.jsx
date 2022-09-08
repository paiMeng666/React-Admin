import React from 'react'
import './index.scss'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-top'>
            <span>欢迎</span>
            <span className='user-name'>admin</span>
            <a href="javascript:">退出</a>
        </div>
        <div className='header-bottom'>
            <div className='header-bottom-left'>
                首页
            </div>
            <div className='header-bottom-right'>
              <span className='time'>2022-9-8</span>
              <span className='weather'>晴</span>
            </div>
        </div>
    </div>
  )
}
