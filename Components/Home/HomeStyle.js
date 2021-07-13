import React from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT_ANDROID = 220;
const CARD_HEIGHT_IOS = 260;
const CARD_WIDTH = width * 0.9;
const SPACING_FOR_CARD_INSET = width * 0.1 - 15;

const IMAGE_SIZE = 200
const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  MapView: {
    height: '55%'
  },
  mapIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40,
    backgroundColor: "white",
    height: "5%",
    width: "10%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    left: "89%"
  },
  mapIcons1: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 75,
    backgroundColor: "white",
    height: "5%",
    width: "10%",
    left: "89%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5

  },
  mapPlusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 140,
    height: "8%",
    width: "10%",
    left: "89%"
  },
  Fluxcontainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'column',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  search: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 800,
    padding: 20,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: '#f7f5eee8',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 225,
    marginTop: 30,
  },
  map: {
    height: '100%',
    width: '100%',
  },
})
export default HomeStyle;