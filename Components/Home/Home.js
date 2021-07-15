import React from 'react'
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList, TouchableOpacity, StatusBar
} from 'react-native'

import BottomSheet from 'reanimated-bottom-sheet'
import HomeStyle from '../Home/HomeStyle';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeatureData from '../Home/FeatureData'
import MapView, { PROVIDER_GOOGLE, Geojson } from "react-native-maps";
import SearchCarStyle from '../SearchCar/SearchCarStyle'
import Entypo from 'react-native-vector-icons/Entypo'
import { Input, } from 'native-base'
import { Platform } from 'react-native';
const region = {
  latitude: 40.7353454,
  longitude: -73.9994384,
  latitudeDelta: 0.04864195044303443,
  longitudeDelta: 0.040142817690068,
}
const HomeScreen = ({ navigation }) => {
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{
        height: 35,
        backgroundColor: "#ECECE7",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        width: '100%',
      }}>
        <View style={{
          flexDirection: "row",
          marginTop: 2
        }} >
          <Ionicons style={{
            marginLeft: 5,
            marginTop: 5
          }}

            name="search" size={20} color="gray" />
          <View style={{ width: '80%', height: 38, marginBottom: 20 }}>
            <Input
              placeholder="Search"
              placeholderTextColor="gray"
              style={{ color: 'gray', marginLeft: 10, fontSize: 14 }}

            />
          </View>

        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 40,
          margin: 6
        }}>

          <Ionicons name="mic" size={20} color='gray' />
        </View>
      </View>
      <View>
        <FlatList
          data={FeatureData}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

    </View>
  )
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} onPress={() => this.bs.current.snapTo(1)} />
      </View>
    </View>
  )

  const bs = React.createRef()

  const RenderItem = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={HomeStyle.itemFlat} onPress={() => navigation.navigate('Assets')}>
      <Image source={{ uri: item.Image }} style={{ width: 120, height: 120, margin: 5 }} />
      <View style={{ flexDirection: 'column', }}>

        <Text numberOfLines={1} style={{
          fontSize: 16,
          marginTop: 5,
          marginLeft: 5,
          color: 'black',
          width: "19%",
          fontWeight: '500'
        }} > Header Place Holder </Text>
        <Text numberOfLines={3} style={{ width: '19%', color: 'black', backgroundColor: 'white', marginLeft: 8, marginTop: 5, fontSize: 14 }} >
          {item.Des}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 15, }}>
          <Ionicons name="car" size={20} color='gray' style={{ borderWidth: 1, borderColor: "#ffc054", marginLeft: 5 }} />
          <Ionicons name="key" size={20} color='gray' style={{ borderWidth: 1, borderColor: "#ffc054", marginLeft: 15 }} />
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8FC54B" hidden={false} barStyle="dark-content" />

      <BottomSheet
        ref={bs}
        snapPoints={Platform.OS === "ios" ? [800, 385, 385] : [650, 300, 300]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        enabledInnerScrolling
      />

      <MapView
        initialRegion={region}

        style={HomeStyle.MapView}
      // provider={PROVIDER_GOOGLE}

      // customMapStyle={ mapStandardStyle}

      >

      </MapView>
      <View style={HomeStyle.mapIcons} >
        <Ionicons name="ios-information-circle-outline" size={20} color="blue" onPress={() => navigation.navigate('Profile')} />

      </View>
      <View style={HomeStyle.mapIcons1}>
        <Entypo name="plus" size={30} color="#8AC833" style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('pairingScreen')} />

      </View>

      {/* <View style={HomeStyle.mapPlusIcon} >
             <AntDesign name="pluscircle" size={40} color="#8AC833"  onPress={()=>navigation.navigate('pairingScreen')}/>
              
             </View> */}

    </View>
  )

}
export default HomeScreen;
const IMAGE_SIZE = 200

const styles = StyleSheet.create({
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
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: '#000000',
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 3,
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