export const getFromLocalStorage = (name) => localStorage.getItem(name);
export const setToLocalStorage = (name, data) => localStorage.setItem(name, data);
export const setParsedToLocalStorage = (name, data) => localStorage.setItem(name, JSON.stringify(data));

export const parseData = (data) => JSON.parse(data);

export const saveToStorage = (name, newData) => {
    if (getFromLocalStorage(name) === null) {
        setToLocalStorage(name, '[]');
    }

    let prevData = JSON.parse(getFromLocalStorage(name));
    prevData.push(newData);

    setParsedToLocalStorage(name, prevData);
};
