import { v4 as uuidv4 } from 'uuid';

export const UniqueID = (prefix: string) => {
  `${prefix}-${uuidv4()}`;
};
