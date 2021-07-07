import {StyleSheet, Dimensions, StatusBar} from 'react-native'
const SearchCarStyle = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      flexDirection:'row',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth:0.5,
      borderColor:'gray',

    },
    textContainer:{
      flexDirection:'column'
    },
    containerStyle:{
      backgroundColor: 'white', 
      height: '30%', 
      borderTopColor: 'white', 
      borderBottomColor: 'white', 
      marginTop: 5
    },
    title: {
      fontSize: 16,
      marginHorizontal:10
    },
    signIn:{
      width:"80%",
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:30,
      backgroundColor:'#8FC54B',
      marginHorizontal:'9%'
  },
  textSign:{
      fontSize:18,
      fontWeight:'bold'
  }, 
  inputContainerStyle:{
    backgroundColor: '#f7f7f7', 
    borderTopWidth: 1, 
    borderBottomWidth: 1,
     borderRightWidth: 1,
      borderLeftWidth: 1,
       borderRadius: 25
 },
  });
export default SearchCarStyle;