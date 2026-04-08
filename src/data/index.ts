export * from './experience'
export * from './projects'
export * from './publications'
export * from './open-source'
export * from './education'

export const person = {
  name: 'Emmanuel Charles Kimito',
  firstName: 'Emmanuel',
  role: 'Software Engineer',
  bio: "Software engineer and researcher at the intersection of computer vision, safety systems, and distributed computing. Currently building worker safety platforms at ConTi Lab in Seoul.",
  location: 'Seoul, Korea',
  timezone: 'Asia/Seoul',
  email: 'emmachalz745@outlook.com',
  links: {
    github: 'https://github.com/Mkhgkk',
    linkedin: 'https://www.linkedin.com/in/emmanuel-charles-kimito9a7577192/',
    portfolio: 'https://emmachalz.bugilabs.com',
  },
  languages: ['Swahili (Native)', 'English (Fluent · TOEFL 97)', 'Chinese (HSK Level 5)'],
} as const
