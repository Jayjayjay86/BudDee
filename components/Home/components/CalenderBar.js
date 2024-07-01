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
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);
  const calenderStyles = {
    backgroundColor: colors.home.toolbox.backgroundColor,
    borderColor: colors.home.calenderbar.borderColor,
  };

  const dateStyle = {fontFamily: 'Poppins-Bold'};
  const headerStyle = {
    color: colors.home.toolbox.textColor,
  };
  const calendarContainerstyle = {
    marginTop: 10,
  };
  const dayContainerStyle = {};
  const innerStyle = {
    flex: 1,
  };

  useLayoutEffect(() => {
    setIsCalendarLoaded(true);
  }, []);
  return (
    <View style={[styles.calender, calenderStyles]}>
      {isCalendarLoaded ? (
        <CalenderStrip
          iconContainer={{flex: 0.1}}
          onDateSelected={date => {
            try {
              let newDate = moment(date).toDate().toLocaleDateString();
              setSelectedDate(newDate);
              handlePressDate(newDate);
            } catch (error) {}
          }}
          style={styles.calenderStrip}
          innerStyle={innerStyle}
          dayContainerStyle={dayContainerStyle}
          weekendDateNameStyle={{
            color: colors.home.toolbox.textColor,
          }}
          weekendDateNumberStyle={{color: colors.home.toolbox.textColor}}
          markedDatesStyle={{
            color: colors.home.toolbox.textColor,
          }}
          scrollable={true}
          calendarHeaderStyle={headerStyle}
          calendarHeaderContainerStyle={calendarContainerstyle}
          dateNameStyle={dateStyle}
          // datesWhitelist={datesWhitelist}
          markedDates={journal}
          locales={'it'}
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
  calenderStrip: {
    height: 140,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
