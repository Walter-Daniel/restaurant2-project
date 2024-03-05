import { Order } from '../interfaces/order';
import { Product } from '../interfaces/product';
import { User } from '../interfaces/user';

type FieldKey<T> = keyof T;
type DataObject = Product | Order | User;

export interface Column<T> {
    label: string;
    field: FieldKey<T>;
    align?: "left" | "center" | "right";
  }
  
export interface Props<T extends DataObject> {
    data: T[];
    columns: Column<T>[];
}

export const getCellContent = <T extends DataObject>(row: T, column: Column<T>): React.ReactNode => {
    const value = row[column.field];
  
    if (typeof value === 'object' && value !== null) {
      let a = '';
      // Utilizamos Object.entries para obtener las claves y valores del objeto
      Object.entries(value).forEach(([key, val]) => {
        if (key !== '_id') {
          a += val;
        }
      });
      return a;
    } else {
      return String(value);
    }
  
};