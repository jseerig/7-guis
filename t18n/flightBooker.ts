import { FLIGHT_TYPE } from "@/types/flightBooker-types";

export const FLIGHT_BOOKER_LABELS = {
    TITLE: 'Flight Booker',
    [FLIGHT_TYPE.ONE_WAY]: 'One Way Flight',
    [FLIGHT_TYPE.RETURN]: 'Return Flight',
    DEPARTURE_DATE: 'Departure Date',
    RETURN_DATE: 'Return Date',
    BOOK: 'Book',
    ALERT: 'You have booked a {flightType} flight on {date}' 
};

