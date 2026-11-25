# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/forwilson1-glitch/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/forwilson1-glitch/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of **Tuesday 24 November 2026**,
an entry for the [make.fun](https://make.fun/bounty/news-image-20261124)
daily news-image bounty. Version 2 of the entry: a redraw with a hero
panel, one clear illustration per story, and the weakest panel replaced.

## The five stories

1. **Riyadh tower hit** — A Houthi drone struck the PIF Tower in Riyadh's
   King Abdullah Financial District; 11 people injured, the second attack
   on the tower in less than a week. (Al Jazeera, Arab News, 24 Nov 2026)
2. **Mines in the Strait** — Four tankers hit naval mines in the Strait of
   Hormuz, Iran says. (Al Jazeera live blog, Gulf News, 24 Nov 2026)
3. **Nvidia cools** — Shares fell about 5% on Tuesday, a day after the
   record +31% rally on Jensen Huang's return as CEO. (Reuters,
   Al Jazeera, 24 Nov 2026)
4. **Gaza strikes** — Israeli airstrikes in Gaza killed a senior Hamas
   security chief. (South China Morning Post, Gulf News, 24 Nov 2026)
5. **Huawei guilty** — A US federal jury in Brooklyn convicted Huawei on
   10 of 12 counts, including bank fraud and conspiring to steal trade
   secrets; acquitted on racketeering conspiracy. (Reuters, CNN,
   Al Jazeera, 24 Nov 2026)

## What changed from v1

v1 ranked 11118 of 14561 in round 3. Its layout was five near-identical
dark panels, the Gaza and Hormuz illustrations read as generic stock
scenes, and the fifth panel (US tariff plans, still only "prepares")
was speculation shown as news. v2 fixes that: the Riyadh strike gets a
full-width hero panel; every panel has its own accent colour and a
single focal illustration drawn as clean flat vector art, so nothing
smears at small size; headlines are bigger and every sub-line is two
short lines at most; and the speculative tariffs panel is replaced by
the Huawei verdict, a concrete court outcome that also widens the
spread beyond the Middle East (US–China tech law).

## How it runs

`main.ts` (Node 22, standard library only, no network) copies the shipped
`entry.png` (1024×1024, under 1 MiB) to `/output/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
