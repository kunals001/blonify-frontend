
import ShareLinks from '../ShareLinks'
import SuggestedPosts from '../SuggestedPosts'
import RefreshManage from "@/components/RefreshManage";
import Comments from '../Comments';
import NavigationBreadcrumb from '../navigate';

const DailyPostPage = ({post}:any) => {
    
  return (
    <RefreshManage>
    <article className='w-full min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[2vh] md:pt-[2vw] lg:p-[2.1vw] flex flex-col gap-[1vh] md:gap[.8vw] lg:gap-[.9vw]'>

      <NavigationBreadcrumb/>


      <div className="flex flex-col justify-between md:flex-row lg:flex-row">
        <div className="flex flex-col gap-[.5vh] md:gap-[.3vw] lg:gap-[.3vw] py-[2vh] md:py-[1.1vw] lg:py-[1.2vw] px-[.2vh] md:px-[.5vw] lg:px-[.5vw]">
            <h1 className='text-[2.3vh] md:text-[1.7vw] lg:text-[1.7vw] font-semibold text-zinc-700 leading-none'>{post?.title}</h1>

            <p className='text-[1.2vh] md:text-[.8vw] lg:text-[.8vw] font-second font-medium text-zinc-700 pt-[.6vh] md:pt-[1vw] lg:pt-[1vw]'>Written by <span className='text-prime'> Kunal Singh </span> on <span className='text-gray-500'>{post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Unknown'}</span></p>

            {/* Mobile Share */}
           <ShareLinks className="md:hidden lg:hidden flex md:flex-col flex-row gap-[1vh] md:gap-[.5vw] items-center md:items-start"/>

            <p className='md:text-[1vw] font-second font-medium text-zinc-700 hidden md:block lg:block md:w-[38vw] lg:w-[38vw] leading-none'>{post?.desc}</p>
        </div>

        <img src={post?.coverImg} alt={post?.altText} className="w-full h-[24vh] md:w-[27vw] md:h-[15vw] rounded-xl object-cover"/>
        
      </div>
      {/* About post */}

      <div className="flex flex-col md:flex-row lg:flex-row mt-[1.5vh] md:mt-[1.1vw] lg:mt-[1.2vw] gap-[1vh] md:gap-[1vw] lg:gap-[1vw] relative">

        

        <div className="w-full flex flex-col gap-[1vh] md:gap-[.7vw] lg:gap-[.8vw]">
          <div className="w-full h-full relative mb-[.6vh] md:mb-[.6vw] bg-green-200 rounded-sm px-[1vh] py-[.5vh] md:py-[.5vw] md:hidden block">
            <span className="absolute top-0 left-0 w-[.5vh] rounded-lg md:w-[.7vw] bg-prime h-full "></span>
            
            <h4 className='text-[2vh] md:text-[1.3vw] lg:text-[1.3vw] font-semibold text-zinc-600 pl-[2vh] md:pl-[1vw] top-0'>Highlight</h4>

            <p className='pl-[2vh] md:pl-[1vw] text-zinc-600 text-[1.5vh] md:text-[1vw] leading-[1.8vh] md:leading-[1.2vw] font-third'>{post?.highlight}</p>
        </div>


          <div className="font-prime post-content" dangerouslySetInnerHTML={{ __html: post?.content || "" }}>
            
          </div>

          <Comments postId={post?._id}/>
       </div>

      <div className="w-full md:w-[35vw]">
        <SuggestedPosts post={post} />
      </div>

      </div>
    </article>
    </RefreshManage>
  )
}

export default DailyPostPage