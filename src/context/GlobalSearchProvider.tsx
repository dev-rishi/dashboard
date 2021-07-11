import * as React from 'react'
import GlobalSearchContext, { IGlobalSearchContext } from './GlobalSearchContext'
import { useState } from 'react'

const GlobalSearchProvider = (props: any) => {
  const [searchText, setSearchText] = useState<string>('')

  const onChange = (val: string) => {
    setSearchText(val)
  }

  const contextValue: IGlobalSearchContext = {
    state: {
      searchText,
    },
    actions: {
      onChange,
    },
  }

  return (
    <GlobalSearchContext.Provider value={contextValue}>
      {props.children}
    </GlobalSearchContext.Provider>
  )
}

export default GlobalSearchProvider
