function formatDate(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
}
module.exports = { formatDate }

// module.exports = {
//     format_date: date => {
//       return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//     }
//   };