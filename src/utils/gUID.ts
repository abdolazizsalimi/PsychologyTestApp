import { v4 as uuidv4 } from 'uuid';

export const genUID = () => {
  const uniqueId = uuidv4().slice(0, 8);
  return uniqueId;
};
