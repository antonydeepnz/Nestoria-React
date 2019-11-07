export const haveSaved = (array,obj) => {
  const result = array.find(item => item.lister_url === obj.lister_url)
  return result? true: false
}