import { StyleSheet } from 'react-native';
import {COLORS, SIZES,FONTS} from '../constants/index';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePhoto: {
    marginTop:50,
    width: 125,
    height: 125,
    borderRadius: 75,
    backgroundColor:'black'
  },
  editProfileButton: {
    marginTop: 50,
    backgroundColor:COLORS.primary,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    height:30,
    marginLeft:20
  },
  editProfileButtonText: {
    marginLeft:10,
    fontSize:14,
    color:COLORS.white,
    fontFamily: "semibold",

  },
  editProfileIcon: {
    width: 30,
    height: 30,
  },
  profileInfo: {
    
    marginTop: 10,
    marginLeft:20
  },
  profilename:{
    fontFamily: "bold",
    fontSize:18,
    color:COLORS.gray,
  },
  profiletel:{
    fontFamily: "regular",
    fontSize:12,
    color:COLORS.gray,
  },

  yourOffers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingBottom:10,
    marginLeft:10
  },
  icon: {
    color:COLORS.primary,    
    marginRight: 10,
    
  },
  editicon:{
    marginLeft:20, 
    
    color:COLORS.white, 
  },
  text:{
    fontFamily: "semibold",
    fontSize:15,
    color:COLORS.gray,
    marginLeft:10
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom:10,
    marginLeft:10
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom:10,
    marginLeft:10
  },
  switch:{
   marginLeft:100,
   width:80
  },

  supportTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom:10,
    marginLeft:10
  },
  privacyPolicy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom:10,
    marginLeft:10
  },
  versionContainer:{
    borderBottomWidth:1,
    borderBottomColor:COLORS.gray2,
    paddingBottom:15,
  },
  version:{
    marginLeft:100,
    fontFamily: "regular",
    fontSize:13,
    marginTop:20,
    color:COLORS.gray,
    
  },
  logouttext:{
    marginLeft:80,
    fontFamily: "bold",
    fontSize:16,
    marginTop:7,
    color:COLORS.white

  },
  logouticon: {
    marginLeft:20, 
    marginTop:7, 
    color:COLORS.white,  
   
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingBottom:10,
    marginLeft:12,
    backgroundColor:COLORS.primary,
    height:40,
    borderRadius:30
  },
  Bottomtab:{
    marginTop:10, 
  }
});

export default styles;
