import React, {useState, useEffect, useContext} from 'react'
import { StyleSheet, ActivityIndicator, Keyboard, Button, TextInput, Text, View, SafeAreaView, Alert, KeyboardAvoidingView, TouchableOpacity, Dimensions, ScrollView, Modal, FlatList,Image     } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountryPicker from 'react-native-country-picker-modal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import CalendarPicker from 'react-native-calendar-picker';
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getFirestore, getDoc, collection, setDoc } from 'firebase/firestore';
import { createAppointment,  newAppointment,getAppointment} from '../../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { setBookAppointment,setAppointmentType } from '../../../redux/actions'
import { BlurView } from 'expo-blur';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { DoctorContext } from './BotoxDoctor';
import LottieView from 'lottie-react-native';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


export const FullAppointmentDates = () => {
    const {doctor, setDoctor, fakeData, setFakeData,images,setImages, type, setType, calendarDate, setCalendarDate,clicked,setClicked,pressDate,setPressDate,pressDate1, setPressDate1, pressDate2, setPressDate2, pressDate3, setPressDate3 } = useContext(DoctorContext)
   const dateChange = (date) => {
    
    
    
    setCalendarDate(date)
     setClicked(true)
      setPressDate(true)
      setPressDate2(false)
      setPressDate3(false)
      setPressDate1(false)
    nav.navigate('TeleConsult')
   setClicked(!clicked)
  }
   const disabledDates = ["2022-04-18", "2022-04-19", "2022-04-21", "2022-04-25"] 
   const nav = useNavigation()
    return(
    <View style={{marginTop:100}}>
        <TouchableOpacity onPress={() => nav.navigate('Book Appointment')}>
  <Ionicons name='chevron-back-outline' size={32} style={{color:'rgb(67,179,174)', padding:10,paddingVertical:5, borderRadius:15, borderWidth:1, marginLeft:25, bottom:0,backgroundColor:'rgba(176,224,230,0.7)', borderColor:'transparent', width:60, paddingHorizontal:12}}/>
  </TouchableOpacity>
      <CalendarPicker onDateChange={dateChange} disabledDates={disabledDates} startFromMonday={true}/>
  
   
    </View>
    )
  }