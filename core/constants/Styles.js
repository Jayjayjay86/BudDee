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
  pickerViewStyle: {flexDirection: 'row', alignItems: 'center'},
  pickerImageStyle: {width: 20, height: 20},
  pickerTextStyle: {
    flex: 1,
    textAlign: 'center',
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
export const overlayStyles = {
  flex: 1,

  justifyContent: 'center',
  backgroundColor: 'rgba(244,244,244,1)',
};
export const modalStyles = {fontSize: 12, fontFamily: 'Poppins-Regular'};
