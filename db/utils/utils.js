exports.formatDates = (list) => {
  const formattedList = list.map((obj) => {
    const newComparedAt = new Date(obj.compared_at);
    return { ...obj, compared_at: newComparedAt };
  });

  return formattedList;
};
