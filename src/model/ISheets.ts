import ITransport from "./ITransport";

export default interface ISheets {
  "item": {
    "main_trip": {
      "id": 2080655,
      "route_id": 1551,
      "route_name": "Чернівці - Запоріжжя",
      "route_number": "9651",
      "date_start": "21.08.2021",
      "is_virtual": 1,
      "is_sale_blocked": 0
    },
    "lost_tickets": null,
    "transports": ITransport[],
    "included": {
      "promotions": null
    }
  }
}