import { client } from "@/studio/lib/client"
import { type SanityDocument, groq } from "next-sanity"

export const Footer = async () => {
  const footerQuery = groq`*[_type == "settings"][0] {
    ...
  }
  `
  const data = await client.fetch<SanityDocument>(footerQuery)

  return (
    <footer className="px-4 py-4 lg:px-24 flex justify-between items-center w-full">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <p className="uppercase">{data.title}</p>
        <p>Always Relevant</p>
      </div>
      
      <p>{ new Date().getFullYear() }</p>
    </footer>
  )
}
