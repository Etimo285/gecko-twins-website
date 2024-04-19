'use client'

import { faKickstarter, faDiscord, faTwitter, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons';

import { Social } from './Social';
import socials from './socialsData.json';

import './socials.css'

export default function SocialsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
        <div id="social-container" className="bg-slate-700 flex justify-stretch h-8 transition-all">
            <Social icon={faKickstarter} slug={socials.kickstarter.pageName} />
            <Social icon={faDiscord} slug={socials.discord.pageName} />
            <Social icon={faTwitter} slug={socials.twitter.pageName} />
            <Social icon={faYoutube} slug={socials.youtube.pageName} />
            <Social icon={faTwitch} slug={socials.twitch.pageName} />
        </div>
        <div className="mx-10 my-6">
            {children}
        </div>
    </div>
  )
}
