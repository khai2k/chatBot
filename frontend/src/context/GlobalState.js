import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    employees: [
        { id: 1, name: 'Ishan Manandhar', location: 'Kathmandu', designation: 'Frontend Dev' }
    ],
    current_conversation: {
        id: "t_1066008497170506",
        name: "ngo van khai"
    },
    user: "khai"
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function setCurrentConversation({ conversationId, name }) {
        dispatch({
            type: 'SET_CURRENT_CONVERSATION',
            payload: { conversationId, name }
        })
    }
    function setUser(user) {
        dispatch({
            type: 'SET_USER',
            payload: user
        })
    }
    function removeEmployee(id) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    };

    function addEmployee(employees) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: employees
        });
    };

    function editEmployee(employees) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employees
        });
    };

    return (<GlobalContext.Provider value={{
        current_conversation: state.current_conversation,
        user: state.user,
        setCurrentConversation,
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee,
        setUser
    }}>
        {children}
    </GlobalContext.Provider>);
}