export enum PERSON_INFORMATIONS {
    NAME = 'name',
    SURNAME = 'surname',
    KEY = 'key'
}

export type Person = {
    [PERSON_INFORMATIONS.NAME]: string,
    [PERSON_INFORMATIONS.SURNAME]: string,
    [PERSON_INFORMATIONS.KEY]: string

}