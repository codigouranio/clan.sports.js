interface Props {
  content: string;
}

export const Button = ({ content }: Props) => {
  return <button>{content}</button>;
};
