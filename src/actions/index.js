import * as types from '../constants/actionTypes'

const createCity = (newCity) => ({
    type: types.CREATE_CITIES, newCity
})
const createUser = (newUser) => ({
    type: types.CREATE_USERS, newUser
})
const getCity = (cities) => ({
    type: types.FETCH_CITIES, cities
})
const getUser = (users) => ({
    type: types.FETCH_USERS, users
})
const getIcon = (icons) => ({
    type: types.FETCH_ICONS, icons
})
const editCity = (edit) => ({
    type: types.EDIT_CITIES, edit
})
const editUser = (edit) => ({
    type: types.EDIT_USERS, edit
})
const updateCity = (update) => ({
    type: types.UPDATE_CITIES, update
})
const updateUser = (update) => ({
    type: types.UPDATE_USERS, update
})
const deleteCity = (id) => ({
    type: types.DELETE_CITIES,id
})
const deleteUser = (id) => ({
    type: types.DELETE_USERS,id
})
const filterCity = (filter) => ({
    type: types.FILTER_CITIES, filter
})
const filterUser = (filter) => ({
    type: types.FILTER_USERS, filter
})
const searchCity = (keyword) => ({
    type: types.SEARCH_CITIES, keyword
})
const searchUser = (keyword) => ({
    type: types.SEARCH_USERS, keyword
})
export{
    createCity,
    createUser,
    getCity,
    getUser,
    getIcon,
    editCity,
    editUser,
    updateCity,
    updateUser,
    deleteCity,
    deleteUser,
    filterCity,
    filterUser,
    searchCity,
    searchUser
}