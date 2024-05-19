export function timeConverter(isoTime) {
  const currentTime = new Date().getTime();
  const pastTime = new Date(isoTime).getTime();
  const timeDifference = currentTime - pastTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `Hace ${seconds} segundos`;
  } else if (minutes < 60) {
    return `Hace ${minutes} minutos`;
  } else if (hours < 24) {
    return `Hace ${hours} horas`;
  } else if (days < 30) {
    return `Hace ${days} días`;
  } else if (months < 12) {
    return `Hace ${months} meses`;
  } else {
    return `Hace ${years} años`;
  }
}
