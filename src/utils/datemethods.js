export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  };

  return date.toLocaleString('en-US', options)
    .replace(/, (\d{1,2}) /, ', $1 ')
    .replace(', ', ', ')
    .replace(' at ', ', ')
    .replace(':00 ', ' ')
    .toLowerCase();
};



