'use client';

import TheInput from '@/components/common/theInput';
import ContentWrapper from '@/components/layout/contentWrapper';
import { TEMPERATURE_UNIT, TemperatureUnits } from '@/types/component-types';
import { useState } from 'react';

export default function TemperatureConverter() {
  const [temperatures, setTemperatures] = useState<TemperatureUnits>({
    celsius: '',
    fahrenheit: '',
  });

  const getNewTemperature = (
    value: number,
    temperatureUnit: TEMPERATURE_UNIT,
    targetUnit: TEMPERATURE_UNIT
  ): string => {
    if (temperatureUnit === targetUnit) {
      return value.toString();
    }

    if (temperatureUnit === TEMPERATURE_UNIT.CELSIUS) {
      return (Math.round((value * (9 / 5) + 32) * 100) / 100).toString();
    } else {
      return (Math.round((value - 32) * (5 / 9) * 100) / 100).toString();
    }
  };

  const changeTemperaturesOnInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    temperatureUnit: TEMPERATURE_UNIT
  ) => {
    setTemperatures({
      celsius: getNewTemperature(
        Number(e.target.value),
        temperatureUnit,
        TEMPERATURE_UNIT.CELSIUS
      ),
      fahrenheit: getNewTemperature(
        Number(e.target.value),
        temperatureUnit,
        TEMPERATURE_UNIT.FAHRENHEIT
      ),
    });
  };

  return (
    <ContentWrapper title='Temperature converter'>
      <div className='flex mx-auto justify-center gap-8 items-center'>
        <TheInput
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeTemperaturesOnInput(e, TEMPERATURE_UNIT.CELSIUS)
          }
          type='number'
          label={TEMPERATURE_UNIT.CELSIUS.toUpperCase()}
          value={temperatures.celsius}
        />
        <span>=</span>
        <TheInput
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeTemperaturesOnInput(e, TEMPERATURE_UNIT.FAHRENHEIT)
          }
          type='number'
          label={TEMPERATURE_UNIT.FAHRENHEIT.toUpperCase()}
          value={temperatures.fahrenheit}
        />
      </div>
    </ContentWrapper>
  );
}
