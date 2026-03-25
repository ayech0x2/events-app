import { useDate } from "@/hooks/useDate";
import { Box, Text, TouchableOpacity } from "@/restyle";
import { Event } from "@/types";
import { useRouter } from "expo-router";

export default function EventItem({ event }: { event: Event }) {
  const { formatDate } = useDate();

  const router = useRouter();

  return (
    <Box
      borderWidth={1}
      borderColor="border"
      padding="s"
      borderRadius="m"
      gap="s"
    >
      <Info label="Nom de l'événement" value={event.title} />
      <Info label="Description" value={event.description} />
      <Info label="Date" value={formatDate(event.date)} />
      <TouchableOpacity
        backgroundColor="primary"
        padding="s"
        borderRadius="m"
        alignItems="center"
        onPress={() =>
          router.push({
            pathname: "/application/[eventId]",
            params: {
              eventId: event.id,
              event: JSON.stringify(event),
            },
          })
        }
      >
        <Text color="textWhite">Consulter les détails</Text>
      </TouchableOpacity>
    </Box>
  );
}

const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box>
      <Text color="textSecondary">{label}</Text>
      <Text variant="body" fontWeight={"semibold"}>
        {value}
      </Text>
    </Box>
  );
};
