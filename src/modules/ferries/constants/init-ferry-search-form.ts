import type { FerrySearchFormValues } from '../interfaces';

export const INIT_FERRY_SEARCH_FORM: FerrySearchFormValues = {
  ticketType: 'one_way',
  from: '',
  to: '',
  departureDate: '',
  returnDate: '',
  numberPassengers: 1,
} as const;
