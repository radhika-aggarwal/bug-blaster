export const sortingUtility = (tickets, preferences) => {
  if (preferences === "high to low") {
    return tickets.sort((a, b) => b.priority.localeCompare(a.priority));
  } else if (preferences === "low to high") {
    return tickets.sort((a, b) => a.priority.localeCompare(b.priority));
  } else return tickets;
};
