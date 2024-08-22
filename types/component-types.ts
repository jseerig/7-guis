export type TemperatureUnits = {
    celsius: string,
    fahrenheit: string
}
export type TemperatureUnit = keyof TemperatureUnits;

export enum TEMPERATURE_UNITS {
    CELSIUS = 'celsius',
    FAHRENHEIT = 'fahrenheit',
}