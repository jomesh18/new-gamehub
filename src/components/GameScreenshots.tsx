import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (error) throw error;
  if (isLoading || !data) return null;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data.results.map((s) => (
          <Image key={s.id} src={s.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
