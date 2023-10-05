import axiosClient from '../axiosClient'

export const searchMeals = async ({ commit }, keyword) =>{
  const {data} = await axiosClient.get(`search.php?s=${keyword}`)
  commit('setSearchedMeals', data.meals)
}

export const searchMealByLetter = async ({ commit }, letter) =>{
  const {data} = await axiosClient.get(`search.php?f=${letter}`)
  commit('setMealsByLetter', data.meals)
}

export const searchMealByIngredient = async ({ commit }, ingredient) =>{
  const {data} = await axiosClient.get(`filter.php?i=${ingredient}`)
  commit('setMealsByIngredient', data.meals)
}