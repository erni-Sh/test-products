export const LocalStorageName = 'store';

export const getStoredState = () => {
  try {
    const serializedState = localStorage.getItem(LocalStorageName);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    return undefined;
  }
}