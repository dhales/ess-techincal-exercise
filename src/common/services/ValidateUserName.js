

export const ValidatedUserName = (value) => {
    const name = value.trim();
    return name.length > 0 && name.toLowerCase() === 'eliecer';
}