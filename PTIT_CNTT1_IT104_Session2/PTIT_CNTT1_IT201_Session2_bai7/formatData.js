/**
 *
 * @param {*} currentData
 * @returns
 */

const formatDate = (currentData) => {
    const today = new Date(currentData);

    let day = today.getDate();
    if (day <= 9) day = '0' + day;
    let month = today.getMonth() + 1;
    if (month <= 9) month = '0' + month;
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
};
export { formatDate };
