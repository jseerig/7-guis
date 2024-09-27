export enum FLIGHT_TYPE {
    ONE_WAY = 'one-way',
    RETURN = 'return',
}

export enum FLIGHT_DATE {
    DEPARTURE = 'departureDate',
    RETURN = 'returnDate',
}

export type FlightDates = {
    [FLIGHT_DATE.DEPARTURE]: string,
    [FLIGHT_DATE.RETURN]: string,
}