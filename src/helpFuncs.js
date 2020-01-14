export const haveSaved = (array,obj) => {
  return array.some(item => item.lister_url === obj.lister_url)
}