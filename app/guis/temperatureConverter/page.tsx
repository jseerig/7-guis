'use client';

import { Input } from '@/components/common/theInput';
import { ContentWrapper } from '@/components/layout/contentWrapper';
import { TEMPERATURE_CONVERTER_LABELS } from '@/constants/temperatureConverter';
import {
  TemperatureUnits,
  TEMPERATURE_UNIT,
} from '@/types/temperatureConverter-types';
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
    <ContentWrapper title={TEMPERATURE_CONVERTER_LABELS.TITLE}>
      <div className='mx-auto flex items-center justify-center gap-8'>
        <Input
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeTemperaturesOnInput(e, TEMPERATURE_UNIT.CELSIUS)
          }
          type='number'
          label={TEMPERATURE_UNIT.CELSIUS.toUpperCase()}
          value={temperatures.celsius}
        />
        <span>=</span>
        <Input
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
