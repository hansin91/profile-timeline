import React from 'react'

function SearchBar() {
  return (
    <div className="header-actions search-bar">
      <div className="interactive-input dark">
        <input type="text" id="search-main" name="search_main" placeholder="Search here for people or groups"/>
        <div className="interactive-input-icon-wrap">
          <svg className="interactive-input-icon icon-magnifying-glass">
            <use xlinkHref="#svg-magnifying-glass"></use>
          </svg>
        </div>
        <div className="interactive-input-action">
          <svg className="interactive-input-action-icon icon-cross-thin">
            <use xlinkHref="#svg-cross-thin"></use>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar