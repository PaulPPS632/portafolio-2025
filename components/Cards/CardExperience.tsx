'use client'
import { ExperienceCard } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface Props {
  experience: ExperienceCard;
  index: number;
}
export default function CardExperience({experience, index}: Props){
    const [cantbullet, setCantbullet] = useState<number>(3);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const handlerChangeCantBullet = () => {
        if(experience.bullets?.length == cantbullet){
            setCantbullet(3)
            return;
        }
        setCantbullet(experience.bullets?.length || 3)
        return;
    }
    return(
        <div id={`cardproject-${index}`} className="neumorphism-cardexperience sticky top-32 w-[90vw] md:w-[70vw]  h-[85vh] md:h-[65vh] bg-card border-1 border-emerald-900
        px-8 py-5 rounded-2xl shadow-xl 
        backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-y-scroll sm:overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        // style={{
        //     top: `${(index+1)*20 + 90}px`
        // }}
        >
            <div className="flex flex-row items-center justify-center mb-4">
                <div className="flex flex-col items-center justify-center w-full gap-1 sm:gap-2 ">
                    <Link href={`/experiencia/${experience.id}`} className="flex gap-4 font-orbitron text-lg sm:text-3xl font-extrabold text-texto text-center tracking-widest">
                        {experience.company}
                    </Link>
                    <p className="font-orbitron text-sm sm:text-lg text-center text-texto">{experience.position}</p>
                    <span className="border-1 border-gray-200 px-2 rounded-xl text-texto text-xs sm:text-base">
                        <b>from: </b>{experience.startDate}  <b>to: </b>{experience.isCurrent ? "present" : experience.endDate}
                    </span>
                </div>
                <div className="hidden sm:block w-56 h-40">
                    <img className="logo object-contain w-full h-full" src={experience.logoUrl} alt={`logo de ${experience.company}`}/>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-content-center justify-center align-middle">
                <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                    <h4 className="text-texto font-bold text-xl">Actividades</h4>
                    <ul className="text-texto max-w-[50rem] sm:h-[50%] space-y-2 text-sm  sm:overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {experience.bullets?.slice(0,cantbullet).map( (bullet: string, index)=>(
                            <li key={index} className="flex items-start justify-center gap-2">
                                <FaChevronRight className="w-4 h-4"/>
                                <span className="">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handlerChangeCantBullet} className="text-texto flex items-center justify-center gap-1 sm:gap-2 transition-all">
                        <span>{experience.bullets?.length == cantbullet ? 'ver menos': 'ver mas'}</span>
                        <FaChevronDown style={{rotate: experience.bullets?.length == cantbullet ? '180deg': '0deg'}}/>
                    </button>
                </div>
                <div className="col-span-1">
                    <Carousel responsive={responsive} showDots={false} autoPlay={true} autoPlaySpeed={3000} infinite draggable ssr={true}>
                        {experience.media?.map((media, index)=>(
                            <div  key={index} ><img src={media.url || "/experiencias/ccd/tickets-ccd.webp"} alt="" /></div>
                        ))}
                    </Carousel>
                </div>
            </div>
            
        </div>
    )
}