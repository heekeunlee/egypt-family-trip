import { ALEX_DAY_TIPS, ALEX_INTRO, SPOTS, type Photo, type Spot } from './guides'
import { GIZA_DAY_TIPS, GIZA_EXTRA, GIZA_INTRO, GIZA_SPOTS } from './guidesGiza'

export type DayGuide = {
  label: string
  step: string
  timelineTitle: string
  intro: {
    title: string
    lead: string
    hero: Photo
    points: { icon: string; title: string; text: string }[]
    timeline: { y: string; t: string }[]
  }
  spots: Spot[]
  dayTips: { icon: string; title: string; text: string }[]
  extra?: { title: string; lead: string; items: { name: string; meta: string; points: string[] }[]; photos: Photo[] }
}

export const GUIDES: Record<string, DayGuide> = {
  alexandria: {
    label: '알렉산드리아',
    step: 'DAY 1 · 11/21(토)',
    timelineTitle: '알렉산드리아 2,300년 연표',
    intro: ALEX_INTRO,
    spots: SPOTS,
    dayTips: ALEX_DAY_TIPS,
  },
  giza: {
    label: '카이로·기자',
    step: 'DAY 2 · 11/22(일)',
    timelineTitle: '피라미드에서 GEM까지 4,600년 연표',
    intro: GIZA_INTRO,
    spots: GIZA_SPOTS,
    dayTips: GIZA_DAY_TIPS,
    extra: GIZA_EXTRA,
  },
}

export const guideFromHash = (h: string) => {
  const id = h.replace(/^#/, '').split('/')[0]
  return id in GUIDES ? id : null
}
