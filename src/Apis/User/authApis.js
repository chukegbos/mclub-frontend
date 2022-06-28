/*eslint-disable*/
export function login(payload) {
  // return axios.post(`/admin/login`, payload.query);
  return axios.post(`/login`, payload.query);
}

export function logout() {
  return axios.post(`/logout`);
}
