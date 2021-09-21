export const setLocalStorage = (key: string, value: any): void =>  {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
  }
}

export const getLocalStorage = (key: string, initialValue: any): any => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
}

