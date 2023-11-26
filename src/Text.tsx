import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
  children: string;
};

export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return (
    <p style={{ color, fontSize }} className="text-center">
      テキストです！
    </p>
  );
};
