export enum PERSON_INFORMATIONS {
    NAME = 'name',
    SURNAME = 'surname',
}

export type Person = {
    [PERSON_INFORMATIONS.NAME]: string,
    [PERSON_INFORMATIONS.SURNAME]: string,
}