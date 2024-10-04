'use client';

import { Button } from '@/components/common/theButton';
import { Input } from '@/components/common/theInput';
import { ContentWrapper } from '@/components/layout/contentWrapper';
import { FLIGHT_BOOKER_LABELS } from '@/constants/flightBooker';
import {
  FLIGHT_DATE,
  FLIGHT_TYPE,
  FlightDates,
} from '@/types/flightBooker-types';
import { useState } from 'react';

export default function FlightBooker() {
  const today = new Date().toISOString().split('T')[0];
  const [flightType, setFlightType] = useState(FLIGHT_TYPE.ONE_WAY);
  const [flightDates, setFlightDates] = useState<FlightDates>({
    departureDate: today,
    returnDate: today,
  });
  const [disabledButton, setDisabledButton] = useState(
    flightDates.departureDate >= today ? false : true
  );

  function handleTypeChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    setFlightType(event.target.value as FLIGHT_TYPE);
    setFlightDates({ departureDate: today, returnDate: today });
    setDisabledButton(flightDates.departureDate >= today ? false : true);
  }

  function handleDatesChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const errorStyle = ['border-red-500', '!bg-red-200', 'hover:bg-red-200'];
    setFlightDates({ ...flightDates, [event.target.id]: event.target.value });

    if (event.target.id === FLIGHT_DATE.DEPARTURE) {
      if (
        event.target.value >= today &&
        (flightType === FLIGHT_TYPE.ONE_WAY ||
          flightDates.returnDate >= event.target.value)
      ) {
        event.target.classList.remove(...errorStyle);
        setDisabledButton(false);
      } else {
        event.target.classList.add(...errorStyle);
        setDisabledButton(true);
      }
    }

    if (event.target.id === FLIGHT_DATE.RETURN) {
      if (
        event.target.value >= today &&
        event.target.value >= flightDates.departureDate
      ) {
        event.target.classList.remove(...errorStyle);
        setDisabledButton(false);
      } else {
        event.target.classList.add(...errorStyle);
        setDisabledButton(true);
      }
    }
  }

  const handleBook = () => {
    alert(
      FLIGHT_BOOKER_LABELS.ALERT.replace(
        '{flightType}',
        FLIGHT_BOOKER_LABELS[flightType]
      ).replace(
        '{date}',
        flightDates.departureDate +
          (flightType === FLIGHT_TYPE.RETURN
            ? ' and ' + flightDates.returnDate
            : '')
      )
    );
  };

  return (
    <ContentWrapper title={FLIGHT_BOOKER_LABELS.TITLE}>
      <div className='mx-auto flex w-1/3 flex-col items-center justify-center gap-8'>
        <select
          className='w-full rounded-md border border-gray-300 p-2'
          onChange={handleTypeChanged}
          value={flightType}
        >
          {Object.values(FLIGHT_TYPE).map((type) => (
            <option key={type} value={type}>
              {FLIGHT_BOOKER_LABELS[type]}
            </option>
          ))}
        </select>
        <Input
          type='date'
          min={today}
          value={flightDates[FLIGHT_DATE.DEPARTURE]}
          onChangeHandler={handleDatesChanged}
          id={FLIGHT_DATE.DEPARTURE}
          label={FLIGHT_BOOKER_LABELS.DEPARTURE_DATE}
        />
        <Input
          type='date'
          min={flightDates[FLIGHT_DATE.DEPARTURE]}
          value={flightDates[FLIGHT_DATE.RETURN]}
          onChangeHandler={handleDatesChanged}
          id={FLIGHT_DATE.RETURN}
          disabled={flightType === FLIGHT_TYPE.ONE_WAY}
          label={FLIGHT_BOOKER_LABELS.RETURN_DATE}
        />
        <Button
          text={FLIGHT_BOOKER_LABELS.BOOK}
          disabled={disabledButton}
          onClickHandler={handleBook}
        />
      </div>
    </ContentWrapper>
  );
}
