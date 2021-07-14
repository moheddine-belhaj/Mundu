import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "./Screen";
import ListItem from "./ListItem";
import ListItemSeparator from "./ListItemSeparator";
import ListItemDeleteAction from "./ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Votre commande dans la list d'attendant",
    description: "en attendant",
    image: require("../../data/image/user_liv.png"),
  },
  {
    id: 2,
    title: "Mohammed ahmed",
    description: "En cour",
    image: require("../../data/image/liv3.jpg"),
  },
  {
    id: 3,
    title: "Mohammed ahmed",
    description: "Reçu",
    image: require("../../data/image/liv_photo.jpg"),
  },
  {
    id: 4,
    title: "ahmed Ziyed",
    description: "Reçu",
    image: require("../../data/image/liv2.jpg"),
  },
];

function HistoriqueScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../data/image/userLogin.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default HistoriqueScreen;
