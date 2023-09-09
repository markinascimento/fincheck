import {Income} from './income/Income';

import { Fun } from './expense/Fun';
import { Food } from './expense/Food';
import { Home } from './expense/Home';
import { Travel } from './expense/Travel';
import { Expense } from './expense/Expense';
import { Grocery } from './expense/Grocery';
import { Clothes } from './expense/Clothes';
import { Transport } from './expense/Transport';
import { Education } from './expense/Education';

export const iconsMap = {
  income: {
    default: Income
  },
  expense: {
    default: Expense,
    fun: Fun,
    food: Food,
    grocery: Grocery,
    home: Home,
    education: Education,
    clothes: Clothes,
    transport: Transport,
    travel: Travel,
  }
};
