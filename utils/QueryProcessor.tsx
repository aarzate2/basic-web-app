export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "aarzate";
  }
  if (query.toLowerCase().includes("andrewid")) {
    return "aarzate";
  }
  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const numbers = query.match(/[-]?\d*\.?\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const largest = Math.max(...numbers);
      return largest.toString();
    } else {
      return "No numbers found in query.";
    }
  }

  return "";
}
