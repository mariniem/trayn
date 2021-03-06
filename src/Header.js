import styled from 'styled-components/macro'
import React from 'react'
import headerLogo from '../src/Icons/Header/Header.svg'
import SearchBar from '../src/HomeScreen/SearchBar'
import { Route } from 'react-router-dom'

export default function Header({
  onSearchInputChange,
  searchInput,
  isSearchBarActive,
  onSearchBarClick,
}) {
  return (
    <>
      <HeaderLogo src={headerLogo}></HeaderLogo>
      <Route exact path="/">
        <SearchBar
          searchInput={searchInput}
          onSearchInputChange={onSearchInputChange}
          isActive={isSearchBarActive}
          onClick={onSearchBarClick}
        ></SearchBar>
      </Route>
    </>
  )
}

const HeaderLogo = styled.img`
  z-index: +1;
`
