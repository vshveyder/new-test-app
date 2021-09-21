import axios from "axios";

class Api {
  static api_path = `https://stage-api.klr.com.ua/api`

  static login = (email: string, password: string) =>  axios.post(`${Api.api_path}/login`, {
    email, password
  }, {
    validateStatus: status => status < 500
  })

  static account = (accessToken: string) =>  axios.get(`${Api.api_path}/account`, {headers : {
      'Authorization': `Bearer ${accessToken}`
  }})

  static dispatchers = (dispatchers_id: number, accessToken: string) => axios.get(`${Api.api_path}/dispatchers/${dispatchers_id}/related-routes`, {headers : {
      'Authorization': `Bearer ${accessToken}`
    }})

  static sheets = (departure_date: string, route_id: number, accessToken: string) =>
    axios.get(`${Api.api_path}/sheets?departure_date=${departure_date}&route_id=${route_id}`, {headers : {
    'Authorization': `Bearer ${accessToken}`
  }})

}

export default Api