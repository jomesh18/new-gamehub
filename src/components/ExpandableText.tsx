import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = isExpanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
