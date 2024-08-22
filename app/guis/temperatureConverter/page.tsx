'use client';

import Textfield from '@/components/common/textfield';
import ContentWrapper from '@/components/layout/contentWrapper';
import {
  TEMPERATURE_UNITS,
  TemperatureUnit,
  TemperatureUnits,
} from '@/types/component-types';
import { useState } from 'react';

export default function TemperatureConverter() {
  const [temperatures, setTemperatures] = useState<TemperatureUnits>({
    celsius: '',
    fahrenheit: '',
  });

  const getNewTemperature = (
    value: number,
    temperatureUnit: TEMPERATURE_UNITS,
    targetUnit: TEMPERATURE_UNITS
  ): string => {
    if (temperatureUnit === targetUnit) {
      return value.toString();
    }

    if (temperatureUnit === TEMPERATURE_UNITS.CELSIUS) {
      return (Math.round((value * (9 / 5) + 32) * 100) / 100).toString();
    } else {
      return (Math.round((value - 32) * (5 / 9) * 100) / 100).toString();
    }
  };

  const changeTemperaturesOnInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    temperatureUnit: TEMPERATURE_UNITS
  ) => {
    setTemperatures({
      celsius: getNewTemperature(
        Number(e.target.value),
        temperatureUnit,
        TEMPERATURE_UNITS.CELSIUS
      ),
      fahrenheit: getNewTemperature(
        Number(e.target.value),
        temperatureUnit,
        TEMPERATURE_UNITS.FAHRENHEIT
      ),
    });
  };

  return (
    <ContentWrapper title='Temperature converter'>
      <div className='flex mx-auto justify-center gap-8 items-center'>
        <Textfield
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeTemperaturesOnInput(e, TEMPERATURE_UNITS.CELSIUS)
          }
          type='number'
          label='Celsius'
          value={temperatures.celsius}
        />
        <span>=</span>
        <Textfield
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeTemperaturesOnInput(e, TEMPERATURE_UNITS.FAHRENHEIT)
          }
          type='number'
          label='Fahrenheit'
          value={temperatures.fahrenheit}
        />
      </div>
    </ContentWrapper>
  );
}
