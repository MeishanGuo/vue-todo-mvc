export default function invocationSummary (origin) {
  return {
    percentage: (origin.Rate || 100.00) + '%'
  }
}