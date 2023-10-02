import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Calendar from "react-native-calendars/src/calendar";

const MyCalendar = () => {
  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          console.log(day.dateString);
        }}
        style={{
          borderRadius: 10,
          elevation: 4,
          margin: 15,
          marginTop: 30,
          borderColor: "#808080",
          borderWidth: 1,
        }}
        theme={{
          backgroundColor: "#000000",
          calendarBackground: "#000000",
        }}
        markedDates={{
          "2023-09-14": { selected: true, selectedColor: "#363535" },
        }}
      />
    </View>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({});
