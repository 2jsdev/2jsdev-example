import { isEven } from '@2jsdev/is-even';

export function isOdd(i: number): boolean {
    return isEven(i) === false;
}