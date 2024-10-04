'use client';

import { Button } from '@/components/common/theButton';
import { Input } from '@/components/common/theInput';
import { ContentWrapper } from '@/components/layout/contentWrapper';
import { List } from '@/components/ui/list';
import { createPersonForm, CRUD_LABELS } from '@/constants/crud';
import { Person, PERSON_INFORMATIONS } from '@/types/crud-types';
import { FormEvent, useEffect, useRef, useState } from 'react';

export default function CRUD() {
  const [filteredList, setFilteredList] = useState<Person[] | undefined>(
    undefined
  );
  const [list, setList] = useState<Person[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef?.current && surnameRef?.current) {
      if (activeIndex !== undefined) {
        nameRef.current.value = list[activeIndex].name;
        surnameRef.current.value = list[activeIndex].surname;
      } else {
        nameRef.current.value = '';
        surnameRef.current.value = '';
      }
    }
  }, [activeIndex, nameRef, surnameRef]);

  const handleSubmitPerson = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const name = formData.get(PERSON_INFORMATIONS.NAME) as string;
    const surname = formData.get(PERSON_INFORMATIONS.SURNAME) as string;
    if (!name || !surname) return;

    if (activeIndex !== undefined) {
      const newList = [...list];
      newList[activeIndex] = { name, surname };
      setList(newList);
      setActiveIndex(undefined);
    } else {
      setList([...list, { name, surname }]);
      event.currentTarget.reset();
    }
  };

  const deletePerson = () => {
    if (activeIndex !== undefined) {
      const newList = [...list];
      newList.splice(activeIndex, 1);
      setList(newList);
      setActiveIndex(undefined);
    }
  };

  const handleFilter = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === '') {
      setFilteredList(undefined);
    } else {
      const filteredList = list.filter((person) => {
        return person.surname.match(
          new RegExp(`^${event.currentTarget.value}`, 'i')
        );
      });
      setFilteredList(filteredList);
    }
  };

  return (
    <ContentWrapper title={CRUD_LABELS.TITLE}>
      <div className='mx-auto items-center justify-center'>
        <div className='mb-8 grid grid-cols-2 gap-8'>
          <div className='col-span-2 mr-auto'>
            <Input
              label={CRUD_LABELS.FILTER}
              onChangeHandler={handleFilter}
              disableSpace={true}
              labelLeft={true}
            />
          </div>
          <List
            list={filteredList ? filteredList : list}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <div className='flex flex-col gap-4 text-left'>
            <form
              id={createPersonForm}
              onSubmit={handleSubmitPerson}
              className='flex flex-col gap-4'
            >
              <Input
                label={CRUD_LABELS.NAME}
                name={PERSON_INFORMATIONS.NAME}
                disableSpace={true}
                labelLeft={true}
                ref={nameRef}
              />
              <Input
                label={CRUD_LABELS.SURNAME}
                name={PERSON_INFORMATIONS.SURNAME}
                disableSpace={true}
                labelLeft={true}
                ref={surnameRef}
              />
            </form>
          </div>
        </div>
        <div className='flex gap-4'>
          <Button
            text={CRUD_LABELS.CREATE}
            form={createPersonForm}
            type='submit'
            disabled={activeIndex !== undefined}
          />
          <Button
            text={CRUD_LABELS.UPDATE}
            disabled={activeIndex === undefined}
            form={createPersonForm}
            type='submit'
          />
          <Button
            text={CRUD_LABELS.DELETE}
            disabled={activeIndex === undefined}
            onClickHandler={deletePerson}
          />
        </div>
      </div>
    </ContentWrapper>
  );
}
