export const updateObject = (oldObject, updatedPropetrties) => {
    return {
        ...oldObject, 
        ...updatedPropetrties
    };
};