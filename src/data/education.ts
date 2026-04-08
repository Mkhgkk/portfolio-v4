export type EducationEntry = {
  degree: string
  field: string
  institution: string
  location: string
  period: { start: string; end: string }
}

export const education: EducationEntry[] = [
  {
    degree: 'Masters',
    field: 'Architectural Engineering',
    institution: 'Chung-Ang University',
    location: 'Seoul, Korea',
    period: { start: 'Aug 2023', end: 'Aug 2025' },
  },
  {
    degree: 'Bachelor',
    field: 'Software Engineering (Chinese Medium)',
    institution: 'Wuhan University',
    location: 'Wuhan, China',
    period: { start: 'Sep 2018', end: 'Jul 2022' },
  },
]
