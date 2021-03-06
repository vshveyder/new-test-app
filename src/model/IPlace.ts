export default interface IPlace {
  "place": number,
  "status": string,
  "ticket_id": number,
  "ticket_number": number | string,
  "order_id": number,
  "order_number": string | number,
  "paid_form_id": string | number,
  "paid_form_name": string,
  "need_ticket_number": number,
  "order_date": string,
  "paid_form_agent": any,
  "is_partner": number,
  "first_name": string,
  "last_name": string,
  "phone": string,
  "email": string,
  "price": number,
  "currency_id": number,
  "currency_iso": string,
  "information": string,
  "station_from": {
    "id": number,
    "name": string,
    "address": string
  },
  "station_to": {
    "id": number,
    "name": string,
    "address": string
  },
  "date_departure": string,
  "date_arriving": string,
  "city_from": string,
  "city_to": string,
  "is_price_hidden": number,
  "is_transfered_from_route": number,
  "reconciled_at": any,
  "driver_informed_at": any,
  "last_notified_at": any,
  "printed_at": any
}