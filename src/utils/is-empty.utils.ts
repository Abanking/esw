import { Empty, EmptyValue } from '../constans';

export const isEmpty = (value: any): value is Empty => {
    return value === EmptyValue;
};
