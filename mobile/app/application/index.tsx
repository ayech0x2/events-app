import EventsList from "@/components/EventsList";
import { Box } from "@/restyle";

export default function Index() {
  return (
    <Box padding="m" backgroundColor="bg" flex={1}>
      <EventsList />
    </Box>
  );
}
