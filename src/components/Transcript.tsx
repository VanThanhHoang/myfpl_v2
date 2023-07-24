import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#37C2D0',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  columnHeader: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnHeaderTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  columnRowTxt: {
    width: '33%',
    textAlign: 'center',
  },
  columnHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 10,
    height: 10,
    marginLeft: 5,
  },
  tableFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#37C2D0',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    height: 50,
    marginBottom: 30,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
