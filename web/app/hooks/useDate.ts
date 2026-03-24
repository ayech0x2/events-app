export function useDate() {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toLocaleString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return { formatDate };
}
