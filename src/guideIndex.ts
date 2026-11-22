import { ALEX_DAY_TIPS, ALEX_INTRO, SPOTS, type Photo, type Spot } from './guides'
import { GIZA_DAY_TIPS, GIZA_EXTRA, GIZA_INTRO, GIZA_SPOTS } from './guidesGiza'
import { HRG_DAY_TIPS, HRG_EXTRA, HRG_INTRO, HRG_SPOTS } from './guidesHurghada'
import { ABU_DAY_TIPS, ABU_INTRO, ABU_SPOTS } from './guidesAbuSimbel'
import { ASWAN_DAY_TIPS, ASWAN_EXTRA, ASWAN_INTRO, ASWAN_SPOTS } from './guidesAswan'
import { OC_DAY_TIPS, OC_EXTRA, OC_INTRO, OC_SPOTS } from './guidesOldCairo'
import { LUXOR_DAY_TIPS, LUXOR_EXTRA, LUXOR_INTRO, LUXOR_SPOTS } from './guidesLuxor'

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
  hurghada: {
    label: '후르가다',
    step: 'DAY 6–7 · 11/26(목)–27(금)',
    timelineTitle: '후르가다와 홍해 연표',
    intro: HRG_INTRO,
    spots: HRG_SPOTS,
    dayTips: HRG_DAY_TIPS,
    extra: HRG_EXTRA,
  },
  abusimbel: {
    label: '아부심벨·콤옴보',
    step: 'DAY 4 · 11/24(화)',
    timelineTitle: '아부심벨과 콤옴보 연표',
    intro: ABU_INTRO,
    spots: ABU_SPOTS,
    dayTips: ABU_DAY_TIPS,
  },
  aswan: {
    label: '아스완',
    step: 'DAY 3 · 11/23(월)',
    timelineTitle: '아스완과 나일강 연표',
    intro: ASWAN_INTRO,
    spots: ASWAN_SPOTS,
    dayTips: ASWAN_DAY_TIPS,
    extra: ASWAN_EXTRA,
  },
  oldcairo: {
    label: '올드 카이로',
    step: 'DAY 8 · 11/28(토)',
    timelineTitle: '올드 카이로 연표',
    intro: OC_INTRO,
    spots: OC_SPOTS,
    dayTips: OC_DAY_TIPS,
    extra: OC_EXTRA,
  },
  luxor: {
    label: '에드푸·룩소르',
    step: 'DAY 5 · 11/25(수)',
    timelineTitle: '테베(룩소르) 연표',
    intro: LUXOR_INTRO,
    spots: LUXOR_SPOTS,
    dayTips: LUXOR_DAY_TIPS,
    extra: LUXOR_EXTRA,
  },
}

export const guideFromHash = (h: string) => {
  const id = h.replace(/^#/, '').split('/')[0]
  return id in GUIDES ? id : null
}
