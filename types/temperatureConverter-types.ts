export enum TEMPERATURE_UNIT {
    CELSIUS = 'celsius',
    FAHRENHEIT = 'fahrenheit',
}

export type TemperatureUnits = {
    [TEMPERATURE_UNIT.CELSIUS]: string,
    [TEMPERATURE_UNIT.FAHRENHEIT]: string,
};

