import {CoreColor} from './Color';

export const screenContainer = {
  alignContent: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0,
  width: '100%',
};
export const mainContainer = {
  paddingHorizontal: 10,
  height: '100%',
  width: '100%',
};
export const container = {
  marginVertical: 20,
  alignContent: 'center',
  justifyContent: 'center',
};
export const pickerItem = {
  backgroundColor: CoreColor.lightGrey,
  fontSize: 17,
  color: CoreColor.yellow,
  fontFamily: 'Kanit-Bold',
};
export const pickerStyles = {
  pickerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerImageStyle: {width: 20, height: 20},
  pickerTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
};
export const actionPickerStyles = {
  pickerViewStyle: {flexDirection: 'row', alignItems: 'center'},
  pickerImageStyle: {width: 25, height: 25},
  pickerTextStyle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
};

export const modalStyles = {fontSize: 12, fontFamily: 'Poppins-Regular'};
export const modalContainerStyle = {
  width: '85%',
  height: '80%',
  backgroundColor: 'white',
  borderRadius: 10,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
};
export const modalOverlayStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};
export const modalSelectorOverviewStyle = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};
export const modalSelectorOptionContainerStyle = {
  backgroundColor: 'white',
  height: '50%',
  width: '80%',
  borderRadius: 8,
  fontFamily: 'Poppins-Light',
};
export const modalSelectorOptionTextStyle = {
  fontFamily: 'Poppins-Regular',
};
export const modalSelectorCancelStyle = {
  width: 100,
  alignSelf: 'center',
  backgroundColor: 'rgba(110,0,0,1)',
  color: 'white',
};
export const modalSelectorCancelTextStyle = {
  color: 'white',
  fontFamily: 'Poppins-SemiBold',
};
export const beginningsOptionContainerStyle = {
  backgroundColor: 'white',
  height: 100,
  width: 200,
  borderRadius: 8,
};
export const themeOptionContainerStyle = {
  backgroundColor: 'white',
  height: 100,
  width: 200,
  borderRadius: 8,
};
export const lightsOptionContainerStyle = {
  backgroundColor: 'white',
  height: 320,
  width: '80%',
  borderRadius: 8,
};
// Text
export const textInputStyle = {
  borderRadius: 5,
  borderWidth: 1,
  borderColor: 'rgba(100,100,100,0.3)',
  marginHorizontal: 15,
  height: 43,
};
export const textStyles = {color: CoreColor.primary};
