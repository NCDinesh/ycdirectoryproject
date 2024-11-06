import { client } from "@/sanity/lib/client";
import SearchForm from "../../components/SearchForm";
import Startupcard from "@/components/Startupcard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home ({searchParams}) {
  const query = (await searchParams).query;
  const params = {search : query || null};

  // const post = await client.fetch(STARTUPS_QUERY);
  const {data:post} = await sanityFetch({query: STARTUPS_QUERY , params});
  // const post = [
  //   // {
  //   //   _createdAt : new Date(),
  //   //   views: 55,
  //   //   author: {_id:1, name:"NC Dinesh"},
  //   //   _id:1,
  //   //   description: "This is a description",
  //   //   image: "https://media.istockphoto.com/id/1032935604/photo/ai-robot-thinking.jpg?s=612x612&w=is&k=20&c=F5mcTGLvByMx_0FQCWuIlnNQpQbmgcKfOgBjAeDdD_E=",
  //   //   category: "Robots",
  //   //   title: "We Robots",

  //   // }
  // ]
  return (
    <>
    <section className="pink_container">
    <h1 className="heading ">Pitch Your startup ,<br/> Connect with enterpreneurs</h1>

    <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual</p>
    <SearchForm query={query}></SearchForm>
    </section>

    <section className="section_container">
      <p className="text-30-semibold ">
        {query?`Search results for "${query}"`:'All Startups'}

      </p>
      <ul className="mt-7 card_grid">
        {post?.length>0 ? (
          post.map((post,index)=><Startupcard  key ={post?._id} post={post}></Startupcard>) 
        ):(<p className="no-results">No startup Found</p>)}

      </ul>
      
    </section>
    
        <SanityLive></SanityLive>
    </>
  )
}