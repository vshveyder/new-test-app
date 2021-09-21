import {IRelatedRoute} from "./IRelatedRoute";
import IPlace from "./IPlace";

export default interface ITransport {
  "id": number,
  "brand": string,
  "transport_confirmed": any,
  "reg_number": string,
  "trip": {
    "id": number,
    "route": IRelatedRoute,
    "note": any,
    "information": any,
    "is_record_issued": number,
    "is_sale_blocked": number,
    "date_departure": string
  },
  "free_places": number,
  "count_of_places": number,
  "drivers_info": any,
  "telegram_chat_id": number,
  "places": IPlace[],
  "sub_sheet": any,
  "conflicted": any,
  "returned": any
}