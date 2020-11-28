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
  baseUrl: "http://icelandico.usermd.net/"
}

export const apiEndpoints = [
  "https://icelandico.usermd.net/markers"
  // "http://icelandico.usermd.net/characters",
  // "http://icelandico.usermd.net/organisations",
  // "http://icelandico.usermd.net/events"
]
