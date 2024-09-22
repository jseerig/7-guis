export enum TEMPERATURE_UNIT {
    CELSIUS = 'celsius',
    FAHRENHEIT = 'fahrenheit',
}

export type TemperatureUnits = {
    [TEMPERATURE_UNIT.CELSIUS]: string,
    [TEMPERATURE_UNIT.FAHRENHEIT]: string,
};

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