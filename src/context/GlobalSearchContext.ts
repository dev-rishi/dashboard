import { createContext } from 'react'

export interface IGlobalSearchContext {
  state: {
    searchText: string
  }
  actions: {
    onChange: (searchText: string) => void
  }
}

const GlobalSearchContext = createContext<IGlobalSearchContext>({} as IGlobalSearchContext)
export default GlobalSearchContext
