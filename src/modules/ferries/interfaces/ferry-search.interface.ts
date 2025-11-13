export interface FerrySearchFormValues {
  ticketType: 'one_way' | 'round_trip';
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  numberPassengers: number;
}

export interface IslandOption {
  label: {
    title: string;
    subtitle: string;
  };
  value: string;
  disabled?: boolean;
}
