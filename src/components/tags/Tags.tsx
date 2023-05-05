import Tag from '../tag/Tag'

interface TagsProps {
  data: string[]
}
export default function Tags({ data }: TagsProps) {
  return (
    <ul role="list" className="flex flex-wrap gap-small">
      {data.map((tag) => (
        <li key={tag} role="listitem">
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  )
}
