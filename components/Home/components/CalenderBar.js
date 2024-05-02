import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CalenderStrip from 'react-native-scrollable-calendar-strip';

// const markedDatesFunc = date => {
//   if (date.isoWeekday() === 4) {
//     return {
//       dots: [
//         {
//           color: '',
//           selectedColor: '',
//         },
//       ],
//     };
//   }

//   if (date.isoWeekday() === 6) {
//     return {
//       lines: [
//         {
//           color: '',
//           selectedColor: '',
//         },
//       ],
//     };
//   }
//   return {};
// };
// const datesWhitelist = [
//   new Date(),

//   {
//     start: new Date(),
//     end: new Date(),
//   },
// ];
// const markedDatesArray = [
//   {
//     date: new Date(),
//     dots: [
//       {
//         color: '',
//         selectedColor: '',
//       },
//     ],
//   },
//   {
//     date: new Date(),
//     lines: [
//       {
//         color: '',
//         selectedColor: '',
//       },
//     ],
//   },
// ];

const CalenderBar = ({translation, colors}) => {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);
  const calenderStyles = {
    backgroundColor: colors.home.toolbox.backgroundColor,
    borderColor: colors.home.calenderbar.borderColor,
  };
  const textColor = {color: colors.home.toolbox.textColor};
  const dateStyle = {fontFamily: 'Poppins-Bold', fontSize: 13};
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCalendarLoaded(true);
    }, 500); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <View style={[styles.calender, calenderStyles]}>
      {isCalendarLoaded ? (
        <>
          <Text style={[styles.heading, textColor]}>
            {translation.home && translation.home.calender.Header}
          </Text>
          <CalenderStrip
            style={styles.calenderStrip}
            scrollable={true}
            innerStyle={[]}
            calendarHeaderStyle={{
              color: colors.home.toolbox.textColor,
            }}
            dateNameStyle={dateStyle}
            // datesWhitelist={datesWhitelist}
            // markedDates={markedDatesArray}
          />
        </>
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
    padding: 12,
    height: 150,
    width: '100%',
    borderBottomWidth: 7,
    borderRadius: 2,
  },
  calenderStrip: {flex: 1},
  heading: {marginBottom: 20, fontFamily: 'Poppins-Regular', fontSize: 17},
});
