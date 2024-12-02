function prepareGifts(gifts) {
    const preparedGifts = [...new Set(gifts)]
    return preparedGifts.sort((a, b) => a - b)
  }
  