interface Role {
  id: number;
  key: string;
  name: string;
}

interface Currency {
  exchange_rate_to_uah: number;
  id: number;
  iso: string;
  title: string;
}

export interface ICustomer {
  email: string;
  first_name: string;
  last_name: string;
  id: number;
  is_active: number;
  currencies: Currency[];
  roles: Role[]
}