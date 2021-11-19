import React ,{createContext,useContext,useReducer} from 'react'

//Prepares datalayer
export const StateContext = createContext()

//warp our app and provide datalayer
export const Stateprovider = ({reducer,initialState,children})=> (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//Pull the information from DL
export const useStateValue = () => useContext(StateContext)

