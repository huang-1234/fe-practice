function parseQuery() {
  const search = location.search.slice(1)
  const pairs = search ? search.split('&') : []
  const query = {}
  for (let i = 0; i < pairs.length; ++i) {
    const [key, value] = pairs[i].split('=')
    query[key] = query[key] || decodeURIComponent(value)
  }
  return query
}

const url1 = 'https://www.nowcoder.com/interview/center?anchor=companyExp&entranceType=%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5';
console.log(first)