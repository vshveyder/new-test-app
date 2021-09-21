import {useQuery} from "react-query";
import Api from "../api/Api";

const useRelatedRoutes = (id: number, accessToken: string) => useQuery('todos',  async () => {
  return (await Api.dispatchers(id, accessToken)).data
})

export default useRelatedRoutes
