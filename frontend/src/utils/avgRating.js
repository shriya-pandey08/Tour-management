const calculateAvgRating = reviews => {
  if (!reviews || reviews.length === 0) {
    return {
      totalRating: 0,
      avgRating: 0
    };
  }

  const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  const avgRating = totalRating === 0
    ? 0
    : totalRating / reviews.length;

  return {
    totalRating,
    avgRating: avgRating.toFixed(1)
  };
}

export default calculateAvgRating;
