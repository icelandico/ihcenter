interface Urls {
  [key: string]: string
}

// export const apiUrls: Urls = {
//   baseUrl: "http://icelandico.usermd.net/",
//   articles: "http://icelandico.usermd.net/characters",
//   organisations: "http://icelandico.usermd.net/organisations",
//   events: "http://icelandico.usermd.net/events",
//   ideas: "http://icelandico.usermd.net/ideas",
//   literature: "http://icelandico.usermd.net/literature",
//   professions: "http://icelandico.usermd.net/professions",
//   mainideas: "http://icelandico.usermd.net/mainideas",
//   nationalities: "http://icelandico.usermd.net/nationalities"
// }

export const apiUrls: Urls = {
  baseUrl: "http://icelandico.usermd.net"
}

export const apiEndpoints = {
  getArticles: `${apiUrls.baseUrl}/markers`,
  getProfessions: `${apiUrls.baseUrl}/professions?_sort=name:ASC`,
  getMainIdeas: `${apiUrls.baseUrl}/mainIdeas?_sort=name:ASC`,
  getNationalities: `${apiUrls.baseUrl}/nationalities?_sort=name:ASC`
}
