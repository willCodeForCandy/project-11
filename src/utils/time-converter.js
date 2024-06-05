export const timeConverter = (unixTimestamp, timezone) => {
  const localUnixTime = unixTimestamp + timezone;
  const date = new Date(localUnixTime * 1000); // porque el timestamp viene en segundos y js lo requiere en ms
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  const localTime = new Intl.DateTimeFormat('es-ES', options).format(date);

  return localTime;
};
