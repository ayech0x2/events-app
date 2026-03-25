import { useDate } from "@/hooks/useDate";
import { Box, Text, TouchableOpacity } from "@/restyle";
import EventService from "@/services/event";
import { useLocalSearchParams } from "expo-router";
import * as React from "react";

export default function EventDetails() {
  const eventService = new EventService();

  const { event: eventString } = useLocalSearchParams();

  const { formatDate } = useDate();

  const event = JSON.parse(eventString as string);

  const [isRegistered, setIsRegistered] = React.useState(event.is_registered);

  const handleRegister = async () => {
    eventService
      .register(event.id)
      .then(() => {
        setIsRegistered(true);
      })
      .catch(() => {
        void 0;
      });
  };

  return (
    <Box backgroundColor="bg" flex={1} padding="m" gap="m">
      <Info label="Nom de l'événement" value={event.title} />
      <Info label="Description" value={event.description} />
      <Info label="Date" value={formatDate(event.date)} />
      <Info label="Nombre de participants" value={event.registrations_count} />

      {isRegistered ? (
        <Text color="primary" textAlign="center" fontWeight={"bold"}>
          Vous avez participé à cet événement
        </Text>
      ) : (
        <TouchableOpacity
          onPress={handleRegister}
          backgroundColor="primary"
          padding="s"
          borderRadius="m"
          alignItems="center"
        >
          <Text color="textWhite">Participer</Text>
        </TouchableOpacity>
      )}
    </Box>
  );
}

const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box>
      <Text color="textSecondary">{label}</Text>
      <Text>{value}</Text>
    </Box>
  );
};
