import React from 'react'
import SuggestedPosts from '../SuggestedPosts'
import { Battery, CalendarCheck, Camera, Cpu, Microchip, Settings, Smartphone, TabletSmartphone} from 'lucide-react';
import Comments from '../Comments';
import ShareLinks from '../ShareLinks';
import "@/app/globals.css";
import RefreshManage from "@/components/RefreshManage";
import NavigationBreadcrumb from '../navigate';


const MobilePostPage = ({post}:any) => {


   const infoItems = [
  {
    icon: CalendarCheck,
    value: post.launch?.[0]?.date,
  },
  {
    icon: Smartphone,
    value: post.body?.[0]?.weight,
  },
  {
    icon: Settings,
    value: post.platform?.[0]?.osversion,
  },
  {
    icon: Cpu,
    value: post.platform?.[0]?.ram,
  },
  ];


   const featureCards = [
  {
    Icon: TabletSmartphone,
    title: post.display?.[0]?.big,
    subtitle: post.display?.[0]?.pixel,
  },
  {
    Icon: Camera,
    title: post.maincam?.[0]?.mega,
    subtitle: post.maincam?.[0]?.pixel,
  },
  {
    Icon: Microchip,
    title: post.platform?.[0]?.ram,
    subtitle: post.platform?.[0]?.process,
  },
  {
    Icon: Battery,
    title: post.battery?.[0]?.mah,
    subtitle: post.battery?.[0]?.wiredcharge,
  },
  ];

  return (
    <RefreshManage>

    <div className="">  
    <div className="px-[1vh] md:px-[13vw] lg:px-[15vw]">  
    <NavigationBreadcrumb/>
    </div>
        
    <article className='w-full flex flex-col md:flex-row min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] gap-[1vh] md:gap-[.5vw] lg:gap-[.6vw] overflow-hidden'>

    <div className="w-full">
        <div className="flex flex-col gap-[.4vh] md:gap-[.2vw] lg:gap-[.2vw] py-[2vh] md:py-[1.1vw] lg:py-[1.2vw] px-[.2vh] md:px-[.5vw] lg:px-[.5vw]">
            <h1 className='text-[2.4vh] md:text-[1.7vw] lg:text-[1.8vw] font-semibold text-zinc-700 leading-none'>{post?.title}</h1>

            <p className='text-[1.2vh] md:text-[.8vw] lg:text-[.8vw] font-second font-medium text-zinc-700 pt-[.6vh] md:pt-[.5vw] lg:pt-[.6vw]'>Written by <span className='text-prime'> Kunal Singh </span> on <span className='text-gray-500'>{post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Unknown'}</span></p>

        </div>

        {/* Mobile Share */}
        <ShareLinks className="md:hidden lg:hidden flex md:flex-col flex-row gap-[1vh] md:gap-[.5vw] items-center md:items-start pb-[1vh]"/>

        {/* Featured Card And Info */}

        <div className="w-full overflow-hidden relative">
                   <h2 className="w-full px-[1vh] md:px-[.9vw] py-[.5vh] md:py-[.5vw] bg-green-300 text-zinc-700 font-second text-[1.6vh] md:text-[1.3vw] lg:text-[1.4vw] font-semibold rounded-t-lg">{post?.altText}
                    </h2>
                     <div className="w-full px-[1vh] md:px-[.9vw] py-[.5vh] md:py-[.5vw] bg-green-200 text-white font-second text-[1.4vh] md:text-[1.2vw] lg:text-[1.3vw] font-semibold rounded-b-lg pb-[.5vh] md:pb-[.5vw] flex gap-[2vh] md:gap-[1vw] ">
                         <div className="pb-[.5vh] md:pb-[.5vw]">
                            <img src={post?.innerImage} alt={post?.altText} className='w-[11vh] h-[15vh] md:w-[10vw] md:h-[15vw] lg:w-[10vw] lg:h-[15vw] object-cover rounded-md select-none' />
                         </div>

                         <div className="py-[.5vh] md:py-[.5vw] flex flex-col gap-[.2vh] md:gap-[.2vw] text-zinc-700">
                          {infoItems.map(({ icon: Icon, value }, index) => (
                            <span
                              key={index}
                              className="text-[1vh] md:text-[1vw] flex gap-[.5vh] md:gap-[.5vw] items-center"
                            >
                              <Icon className="size-3 md:size-6" />
                              {value || "N/A"}
                            </span>
                          ))}
                        </div>
                     </div>
                     <div className="w-full px-[.5vh] md:px-[.5vw] absolute top-[60%] left-[30%] md:left-[25%] pr-[15vh] md:pr-[13vw] flex gap-[.5vh]">
                     {featureCards.map(({ Icon, title, subtitle }, index) => (
                       <div
                         key={index}
                         className="flex flex-col w-[6.7vh] md:w-[7.6vw] bg-green-300 rounded-sm min-h-[6vh] md:min-h-[10vh] p-[.4vh] md:p-[.5vw] gap-[.4vh]"
                       >
                         <Icon className="size-4 md:size-8" />
                         <span className="text-[1.1vh] md:text-[1.2vw] font-semibold leading-none">
                           {title || "N/A"}
                         </span>
                         <span className="text-[.7vh] md:text-[.8vw] font-medium leading-none">
                           {subtitle || "N/A"}
                         </span>
                       </div>
                     ))}
                    </div>
        </div>

        

        {/* Specification */}

        <div className="flex gap-[.5vh] md:h-[5vh] lg:h-[6vh] h-[3.5vh] mt-[1.2vh] md:mt-[1vw] items-center bg-green-200 rounded-r-sm"> 
            <div className='bg-prime h-full md:w-[1vh] w-[.8vh] rounded-sm'></div>
             <h3 className='text-[1.6vh] md:text-[1.3vw] lg:text-[1.4vw] font-semibold text-zinc-600 '>Specification</h3> 
        </div>

        {/* Technology */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime '>NETWORK</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Technology', value: post.network?.[0]?.technology, bg: 'bg-green-200' },
                    { label: '2G bands', value: post.network?.[0]?.towbands },
                    { label: '3G bands', value: post.network?.[0]?.threebands, bg: 'bg-green-200' },
                    { label: '4G bands', value: post.network?.[0]?.fourbands },
                    { label: '5G bands', value: post.network?.[0]?.fivebands, bg: 'bg-green-200' },
                    { label: 'Speed', value: post.network?.[0]?.speed },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>


        {/* Launch */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime '>LAUNCH</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Announced', value: post.launch?.[0]?.date, bg: 'bg-green-200' },
                    { label: 'Status', value: post.launch?.[0]?.status },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>


        {/* BODY */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime '>BODY</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Dimensions', value: post.body?.[0]?.dimensions, bg: 'bg-green-200' },
                    { label: 'Weight', value:post.body?.[0]?.weight},
                    { label: 'Build', value: post.body?.[0]?.build, bg: 'bg-green-200' },
                    { label: 'SIM', value: post.body?.[0]?.sim },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* Display */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime '>DISPLAY</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Type', value: post.display?.[0]?.type, bg: 'bg-green-200' },
                    { label: 'Size', value: post.display?.[0]?.size },
                    { label: 'Resolution', value: post.display?.[0]?.resolution, bg: 'bg-green-200' },
                    { label: 'Refreshrate', value: post.display?.[0]?.refreshrate },
                    { label: 'Protection', value: post.display?.[0]?.protection, bg: 'bg-green-200' },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* PLATFORM */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>PLATFORM</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Os', value: post.platform?.[0]?.os, bg: 'bg-green-200' },
                    { label: 'Chipset', value:post.platform?.[0]?.chipset},
                    { label: 'Gpu', value: post.platform?.[0]?.gpu, bg: 'bg-green-200' },
                    { label: 'Cpu', value: post.platform?.[0]?.cpu},
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* MEMORY */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime '>MEMORY</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Card Slot', value: post.memory?.[0]?.cardslot, bg: 'bg-green-200' },
                    { label: 'Ram', value:post.memory?.[0]?.ram},
                    { label: 'Storage', value: post.memory?.[0]?.storage, bg: 'bg-green-200' },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* BATTERY */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime '>BATTERY</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Type', value: post.battery?.[0]?.type, bg: 'bg-green-200' },
                    { label: 'Capacity', value:post.battery?.[0]?.capacity},
                    { label: 'Fastcharge', value: post.battery?.[0]?.fastcharge, bg: 'bg-green-200' },
                    { label: 'Wiredcharge', value: post.battery?.[0]?.wiredcharge},
                    { label: 'Wirelesscharge', value: post.battery?.[0]?.wirelesscharge, bg: 'bg-green-200' },
                    { label: 'Standbybackup', value: post.battery?.[0]?.standbybackup},
                    { label: 'Gamingbackup', value: post.battery?.[0]?.gamingbackup, bg: 'bg-green-200' },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.                  4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* PERFORMANCE */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>PERFORMANCE</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: 'Antutus', value: post.permormance?.[0]?.antutuscore, bg: 'bg-green-200' },
                    { label: 'Geeksbench', value:post.permormance?.[0]?.geeksbenchscore},
                    { label: 'Fps', value: post.permormance?.[0]?.fps, bg: 'bg-green-200' },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* MAINCAMERA */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>MAIN CAMERA</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: post.maincam?.[0]?.type, value: post.maincam?.[0]?.mp, bg: 'bg-green-200' },
                    { label: 'Resolution', value:post.maincam?.[0]?.resolution},
                    { label: 'Features', value: post.maincam?.[0]?.features, bg: 'bg-green-200' },
                    { label: 'Videofps', value: post.maincam?.[0]?.videofps},
                    { label: 'Zoom', value: post.maincam?.[0]?.zoom, bg: 'bg-green-200' },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* SELFIECAMERA */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>SELFIE CAMERA</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: post.frontcam?.[0]?.type, value: post.frontcam?.[0]?.mp, bg: 'bg-green-200' },
                    { label: 'Resolution', value:post.frontcam?.[0]?.resolution},
                    { label: 'Features', value: post.frontcam?.[0]?.features, bg: 'bg-green-200' },
                    { label: 'Videofps', value: post.frontcam?.[0]?.videofps},
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* SOUND */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>SOUND</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: "Speakers", value: post.sound?.[0]?.speaker, bg: 'bg-green-200' },
                    { label: 'Headphonejack', value:post.sound?.[0]?.headphonejack},
                    { label: 'Quality', value: post.sound?.[0]?.quality, bg: 'bg-green-200' },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

         {/* COMMS */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>COMMS</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: "Wifi", value: post.comms?.[0]?.wifi, bg: 'bg-green-200' },
                    { label: 'Bluetooth', value:post.comms?.[0]?.bluetooth},
                    { label: 'Gps', value: post.comms?.[0]?.gps, bg: 'bg-green-200' },
                    { label: 'Nfc', value:post.comms?.[0]?.nfc},
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* FEATURES */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>FEATURES</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: "Sensor", value: post.features?.[0]?.sensor, bg: 'bg-green-200' },
                    { label: 'Fingerprint', value:post.features?.[0]?.fingerprint},
                    { label: 'Faceunlock', value: post.features?.[0]?.faceunlock, bg: 'bg-green-200' },
                    { label: 'Ir', value:post.features?.[0]?.ir},
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* MICS */}

        <div className="mt-[1vh] md:mt-[1vw] overflow-hidden">
            <div className="flex gap-[.3vh] md:gap-1 items-center md:h-[4vh] lg:h-[5vh] h-[3vh]">
                <div className='bg-prime h-full md:w-[1vh] w-[.8vh]'></div>
                <h5 className='text-[1.4vh] md:text-[1.1vw] lg:text-[1.3vw] font-semibold text-prime'>MICS</h5>
            </div>

                <div className="flex flex-col font-semibold cursor-pointer divide-y divide-zinc-200">
                    {[
                    { label: "Color", value: post.mics?.[0]?.color, bg: 'bg-green-200' },
                    { label: 'Quality', value:post.mics?.[0]?.quality},
                    { label: 'Model', value: post.mics?.[0]?.model, bg: 'bg-green-200' },
                    { label: 'Price', value:post.mics?.[0]?.price},
                    ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-[1.1vh] md:text-[1vw] lg:text-[1vw] text-zinc-600 px-2 py-1 flex  md:flex-row gap-[.4vh] md:gap-[.4vw] ${
                        item.bg ?? ''
                        }`}
                    >
                        <h6 className="hover:underline w-[10vh] md:w-[10vw] shrink-0">{item.label}</h6>
                        <p className="text-[1vh] md:text-[.9vw] font-medium break-words whitespace-normal">{item.value}</p>
                    </div>
                    ))}
                </div>

        </div>

        {/* About post */}

      <div className="flex flex-col md:flex-row lg:flex-row mt-[1.5vh] md:mt-[1.1vw] lg:mt-[1.2vw] gap-[1vh] md:gap-[1vw] lg:gap-[1vw]">

        <div className="w-full flex flex-col gap-[1vh] md:gap-[.7vw] lg:gap-[.8vw]">

          <div className="w-full h-full relative mb-[.6vh] md:mb-[.6vw] bg-green-200 rounded-sm px-[1vh] py-[.5vh] md:py-[.5vw]">
            <span className="absolute top-0 left-0 w-[.5vh] rounded-lg md:w-[.7vw] bg-prime h-full "></span>
            
            <h4 className='text-[2vh] md:text-[1.3vw] lg:text-[1.3vw] font-semibold text-zinc-600 pl-[2vh] md:pl-[1vw] top-0'>Highlight</h4>

            <p className='pl-[2vh] md:pl-[1vw] text-zinc-600 text-[1.5vh] md:text-[1vw] leading-[1.8vh] md:leading-[1.2vw] font-third'>{post?.highlight}</p>
          </div>

          <div className="font-prime post-content" dangerouslySetInnerHTML={{ __html: post?.content || "" }}>
            
          </div>
        </div>


       </div>

       <Comments postId={post?._id}/>
        
    </div>

    <div className="w-full md:w-[35vw]">
      <SuggestedPosts post={post}/>
    </div>
    </article>
    </div>
    </RefreshManage>
  )
}

export default MobilePostPage