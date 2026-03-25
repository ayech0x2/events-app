import { Box, Text } from "@/restyle";
import EventService from "@/services/event";
import { Event } from "@/types";
import React from "react";
import { FlatList, RefreshControl } from "react-native";
import EventItem from "./EventItem";
import { useFocusEffect } from "expo-router";

export default function EventsList() {
  const eventService = new EventService();

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const [events, setEvents] = React.useState([]);

  const refetch = () => {
    setIsRefreshing(true);
    eventService.getEvents().then((data) => {
      setEvents(data);
      setIsRefreshing(false);
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, []),
  );

  const renderItem = React.useCallback(({ item }: { item: Event }) => {
    return <EventItem event={item} />;
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refetch} />
      }
      ListEmptyComponent={
        <Box alignItems="center" justifyContent="center" flex={1}>
          <Text>Aucun événement trouvé</Text>
        </Box>
      }
      showsVerticalScrollIndicator={false}
      data={events}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <Box height={10} />}
    />
  );
}
