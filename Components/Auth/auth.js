import {StyleSheet} from 'react-native'
const styles =StyleSheet.create({
    DashboardContainer: {
     flex:1,
    },
    DealershipContainer:{
        flex: 1,
        ...Platform.select({
          ios: {
            marginTop:170,
            marginHorizontal:20
          },
          android: {
            marginTop:120,
            marginHorizontal:20
          },
    }),
},
    DashboardInputsView:{
    height:'18%',
    width:'95%',
    },
    // SearchFieldInputView:{
    //     height:'8%',
    //     width:'95%',
    //     marginTop:50
    //     },

    SearchFieldInputView:{
        ...Platform.select({
          ios: {
               height:'8%',
                width:'95%',
                marginTop:50
          },
          android: {
                    height:'8%',
                    width:'95%',
                    marginTop:10
          },
    }),
},
    DashboardInput:{
        flex:2,
        paddingRight:10,
        marginTop:20,
        marginLeft:10,
        borderRadius:5,

        // marginHorizontal:'10%'
    },
    inputIcon:{
        paddingBottom:10
    },
    ButtonView:{
        marginTop:10,
        backgroundColor:'blue'

    },
    dashboardBottomButton:{
        width:'90%', 
        backgroundColor:'lightgray',
        marginTop:20,
        marginHorizontal:15,
        textAlign:'center',
    },
    dealerShipText:{
        fontSize:17,
        color:'black', 
        marginHorizontal:10,
        marginTop:20,
    
    },

})

export default styles;