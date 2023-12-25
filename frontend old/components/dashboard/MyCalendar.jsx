import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Calendar from "react-native-calendars/src/calendar";
import colors from "../../global/colors";

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
          borderColor: colors.dark2,
          borderWidth: 2,
        }}
        theme={{
          backgroundColor: colors.black,
          calendarBackground: colors.black,
          textSectionTitleColor: colors.dimWhite, // monday tuesday color
          selectedDayBackgroundColor: colors.color3,
          todayTextColor: colors.color3,
          dayTextColor: colors.white,
          textDisabledColor: colors.dark3,
          monthTextColor: colors.white,
          arrowColor: colors.color1,
        }}
        markedDates={{
          "2023-09-14": { selected: true },
        }}
      />
    </View>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({});
