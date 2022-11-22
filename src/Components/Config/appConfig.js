const appConfig = {
    users: 'http://localhost:3004/users',
    news: 'https://newsapi.org/v2/top-headlines?',
    newsKey: '&apiKey=9f312d59485c420bade4c48acfc8a0e3',
    errorCats: 'https://http.cat/',
    register: 'http://localhost:3004/register/',
    login: 'http://localhost:3004/login/',

    categories: ["business", "entertainment", "general", "health", "science", "sports", "technology"],
    countries: ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th"]
}

export default appConfig;