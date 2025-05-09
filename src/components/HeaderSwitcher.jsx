import React, { useContext } from 'react'
import HeaderGlobal from './HeaderGlobal'
import Header from './Header' 
import { UserRoleContext } from '../contexts/UserRoleContext'

export default function HeaderSwitcher() {
    const { role } = useContext(UserRoleContext)
    return role === 'company' ? <Header/> : <HeaderGlobal/>
  }