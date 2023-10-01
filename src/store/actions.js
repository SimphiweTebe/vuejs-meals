import axiosClient from '../axiosClient'

export const searchMeals = async ({ commit }, keyword) =>{
  const {data} = await axiosClient.get(`search.php?s=${keyword}`)
  commit('setSearchedMeals', data.meals)
}