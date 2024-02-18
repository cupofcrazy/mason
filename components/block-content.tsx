import { urlFor } from "@/utils/sanity-image.builder"
import { PortableText, type PortableTextReactComponents, type PortableTextProps } from "@portabletext/react"
import Image from "next/image"


interface BlockContentProps extends PortableTextProps {}

export const BlockContent = (props: BlockContentProps) => {
  return (
    <div className="prose prose-slate w-full max-w-none">
      <PortableText {...props} components={components} />
    </div>
  )
}

// @ts-ignore
const components: PortableTextReactComponents = {
  types: {
    image: ({ value, isInline }) => (
      <Image className="border my-2" src={urlFor(value).url()} alt={value.alt || "" } width={300} height={500} />
    )
  },
  marks: {},
  listItem: {
    bullet: ({ children }) => <li className="text-neutral-500 ml-2">{ children }</li>,
  }
}