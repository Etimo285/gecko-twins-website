import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { IconDefinition, faQuestion, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CheckMemberProperty(property: any, showError: boolean) {
    if (property === null || property === "") {
        if (showError) {
            return (<span className="italic text-gray-500">
                {property === null ?? "Null"}
                {property === "" ?? "Empty String"}
            </span>)
        } else {
            return
        }
    } else {
        return property
    }
}

function GetIconByName(name: string): IconDefinition | undefined {
    switch (name) {
        case "discord": return brands.faDiscord
        case "twitter": return brands.faTwitter
        case "linkedin": return brands.faLinkedin
        case "instagram": return brands.faInstagram
        case "facebook": return brands.faFacebook
        case "patreon": return brands.faPatreon
        case "github": return brands.faGithub
        case "mail": return faEnvelope
        /* Add more if necessary */
        /* [...] */
        default: return faQuestion
    }
}

export const TeamMember = ({ member, anchor }: { member: any, anchor: string }) => {
  return (
    <div className="flex flex-col lg:flex-row">
        <div className="p-6 sm:p-12 bg-blend-saturation dark:text-gray-100">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            {anchor === "left" &&
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
            }
            <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-center md:text-left">{member.pseudo}</h4>
                <p className="dark:text-white my-2">
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.
                </p>
            </div>
            {anchor === "right" &&
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
            }
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
                {member.medias.map((m: any) => {
                    return (
                        <Link href={m.link} className="hover:text-blue-400 w-10" key={m.name}>
                            <FontAwesomeIcon icon={GetIconByName(m.name)!}/>
                        </Link>
                    )
                })}
          </div>
        </div>
      </div>

      
  )

  // <span className="text-gray-400 hover:text-blue-400">{`${m.tag === "" ? "" : m.tag + " |"}`}</span>

}
