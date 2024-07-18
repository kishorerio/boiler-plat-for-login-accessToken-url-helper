/* eslint-disable prettier/prettier */
function getAccessToken() {
  const token = JSON.parse(sessionStorage.getItem('accessToken'))
  return token ? `Bearer ${token}` : null
}

export default getAccessToken
