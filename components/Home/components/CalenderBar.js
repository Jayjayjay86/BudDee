import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import CalenderStrip from 'react-native-scrollable-calendar-strip';
import moment from 'moment';

const CalenderBar = ({
  journal,
  setSelectedDate,
  translation,
  colors,
  handlePressDate,
}) => {
  const markedDatesArray = [
    {
      id: 0,
      action: {type: '', title: '', time_taken: '', otherData: ''},
      date: new Date(),

      dots: [
        {
          color: colors.home.toolbox.textColor,
          selectedColor: colors.home.calenderbar.borderColor,
        },
      ],
    },
  ];

  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);
  const calenderStyles = {
    backgroundColor: colors.home.toolbox.backgroundColor,
    borderColor: colors.home.calenderbar.borderColor,
  };
  const textColor = {color: colors.home.toolbox.textColor};
  const dateStyle = {fontFamily: 'Poppins-Bold', fontSize: 9};
  const headerStyle = {color: colors.home.toolbox.textColor, fontSize: 13};
  const innerStyle = {flex: 1, height: 200};

  useLayoutEffect(() => {
    setIsCalendarLoaded(true);
  }, []);
  return (
    <View style={[styles.calender, calenderStyles]}>
      {isCalendarLoaded ? (
        <CalenderStrip
          onDateSelected={date => {
            try {
              const newDate = moment().toDate(date);

              setSelectedDate(new Date(newDate));
              handlePressDate(new Date(newDate));
            } catch (error) {
              console.log(error);
            }
          }}
          style={styles.calenderStrip}
          innerStyle={innerStyle}
          weekendDateNameStyle={{color: colors.home.toolbox.textColor}}
          weekendDateNumberStyle={{color: colors.home.toolbox.textColor}}
          markedDatesStyle={{
            color: colors.home.toolbox.textColor,
          }}
          scrollable={true}
          calendarHeaderStyle={headerStyle}
          dateNameStyle={dateStyle}
          // datesWhitelist={datesWhitelist}
          markedDates={markedDatesArray}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color={colors.home.calenderbar.borderColor}
        />
      )}
    </View>
  );
};

export default CalenderBar;

const styles = StyleSheet.create({
  calender: {
    borderBottomWidth: 7,
    borderRadius: 2,
  },
  calenderStrip: {height: 100, marginHorizontal: 5},
  heading: {margin: 15, fontFamily: 'Poppins-Light', fontSize: 15},
});
