interface Props {
  content: string;
}

export default function PostContent({ content }: Props) {
  return <div>{content}</div>;
}
