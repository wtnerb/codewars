const formatWords = words => words ? words
  .filter(word => word).join(', ').replace(/,(\s\w+)$/, ' and$1')
  : ''