import React, { Component } from 'react';
import * as StringKeys from '../common/StringKeys';
// import {  } from '../components/i18n/i18n';
import * as Constants from './Constants';
// import moment from 'moment';
// import { Share } from 'react-native';

export const getWeekDaysForShow = () => {
  return [
    { "label": "S", "value": "Sunday", [Constants.KEY_IS_CHECKED]: true },
    { "label": "M", "value": "Monday", [Constants.KEY_IS_CHECKED]: true },
    { "label": "T", "value": "Tuesday", [Constants.KEY_IS_CHECKED]: true },
    { "label": "W", "value": "Wednesday", [Constants.KEY_IS_CHECKED]: true },
    { "label": "T", "value": "Thursday", [Constants.KEY_IS_CHECKED]: true },
    { "label": "F", "value": "Friday", [Constants.KEY_IS_CHECKED]: true },
    { "label": "S", "value": "Saturday", [Constants.KEY_IS_CHECKED]: true }
  ];
}

export const getWeekDaysForShowSelected = (allSelectedTrue, defaultDaySelected) => {

  return [
    { "label": "S", "value": "Sunday", [Constants.KEY_IS_CHECKED]: allSelectedTrue },
    { "label": "M", "value": "Monday", [Constants.KEY_IS_CHECKED]: defaultDaySelected },
    { "label": "T", "value": "Tuesday", [Constants.KEY_IS_CHECKED]: allSelectedTrue },
    { "label": "W", "value": "Wednesday", [Constants.KEY_IS_CHECKED]: allSelectedTrue },
    { "label": "T", "value": "Thursday", [Constants.KEY_IS_CHECKED]: allSelectedTrue },
    { "label": "F", "value": "Friday", [Constants.KEY_IS_CHECKED]: allSelectedTrue },
    { "label": "S", "value": "Saturday", [Constants.KEY_IS_CHECKED]: allSelectedTrue }
  ];
}








export const getFilteredData = (key, originalData) => {

  var filteredData = [];

  let shiftObj = originalData[key];
  console.log('oringinal Data  shiftObj: ' + JSON.stringify(shiftObj));
  var objMorning = shiftObj[Constants.KEY_MORNING];
  if (objMorning !== undefined && objMorning !== '') {
    console.log('oringinal Data  objMorning: ' + JSON.stringify(shiftObj));
    objMorning.shift_name = Constants.KEY_MORNING;
    // objMorning.shift_icon = require('../../assets/images/morning.png');
    filteredData.push(objMorning);
  }

  var objAfterNoon = shiftObj[Constants.KEY_AFTERNOON];
  if (typeof objAfterNoon !== undefined && objAfterNoon !== '') {
    console.log('oringinal Data  objAfterNoon: ' + JSON.stringify(objAfterNoon));
    objAfterNoon.shift_name = Constants.KEY_AFTERNOON;
    // objAfterNoon.shift_icon = require('../../assets/images/afternoon.png');
    filteredData.push(objAfterNoon);

  }

  var objEvening = shiftObj[Constants.KEY_EVENING];
  if (typeof objEvening !== undefined && objEvening !== '') {
    console.log('oringinal Data  objEvening: ' + JSON.stringify(objEvening));
    objEvening.shift_name = Constants.KEY_EVENING;
    // objEvening.shift_icon = require('../../assets/images/evining.png');
    filteredData.push(objEvening);
  }
  console.log('oringinal Data: ' + JSON.stringify(filteredData));

  return filteredData;
}


export const getShiftData = (key, originalData) => {

  var filteredData = [];

  let shiftObj = originalData[key];
  console.log('oringinal Data  shiftObj: ' + JSON.stringify(shiftObj));
  var strMorning = shiftObj[Constants.KEY_MORNING];
  if (strMorning !== undefined && strMorning !== '') {
    var objMorning = {};

    objMorning.shift_name = Constants.KEY_MORNING;
    objMorning.time = strMorning;
    // objMorning.shift_icon = require('../../assets/images/morning.png');
    filteredData.push(objMorning);
  }


  var strAfterNoon = shiftObj[Constants.KEY_AFTERNOON];
  if (strAfterNoon !== undefined && strAfterNoon !== '') {
    var objAfterNoon = {};

    objAfterNoon.shift_name = Constants.KEY_AFTERNOON;
    objAfterNoon.time = strAfterNoon;
    // objAfterNoon.shift_icon = require('');
    filteredData.push(objAfterNoon);
  }
  var strEvening = shiftObj[Constants.KEY_EVENING];
  if (strEvening !== undefined && strEvening !== '') {
    var objEvening = {};

    objEvening.shift_name = Constants.KEY_AFTERNOON;
    objEvening.time = strEvening;
    // objEvening.shift_icon = require('../../assets/images/evining.png');
    filteredData.push(objEvening);
  }
  console.log('filteredData Data: ' + JSON.stringify(filteredData));

  return filteredData;
}



export const isValidMobileNumber = (number, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (number == '') {
    msg = StringKeys.msg_Phone_number_empty;
  }

  if (number.length < Constants.MIN_LENGTH_OF_PHONE_NUMBER ||
    number.length > Constants.MAX_LENGTH_OF_PHONE_NUMBER) {
    msg = StringKeys.msg_Phone_number_lenght_msg;
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}


export const isValidEmail = (email, showPopUp) => {
  var isValid = true;
  var msg = '';
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email == '') {
    msg = (StringKeys.EMAIL_EMPTY);
  }
  else if (reg.test(email) === false) {

    msg = (StringKeys.EMAIL_VALID);
    console.log(msg);

  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidDob = (dob, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (dob == '') {

    msg = (StringKeys.DOB_EMPTY);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidGender = (genderId, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (genderId == '') {

    msg = (StringKeys.GENDER_EMPTY);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}
export const isValidToken = (token, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (token == undefined || token == '') {
    msg = (StringKeys.Token_EMPTY);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}


export const isValidShiftForBookAppoint = (shift, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (shift === undefined || shift === '') {
    msg = (StringKeys.SHIFT_EMPTY);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

//Rana


export const isValidAddressType = (addresstype, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (addresstype == '') {

    msg = (StringKeys.ADDRESS_EMPTY);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidState = (state, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (state == '') {
    msg = (StringKeys.State_Empty);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidCity = (city, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (city == '') {
    msg = (StringKeys.City_Empty);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidZipcode = (zipcode, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (zipcode == '') {
    msg = (StringKeys.Zipcode_Empty);
  }

  else if (zipcode.length < Constants.MIN_LENGTH_OF_ZIPCODE) {

    msg = (StringKeys.Zipcode_Min_Error);

  }

  else if (zipcode.length > Constants.MIN_LENGTH_OF_ZIPCODE) {

    msg = (StringKeys.Zipcode_Max_Error);

  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const convertDateIntoMilisecond = (dataTime, comingFormat) => {
  var convertedMilisecond = 0;



  if (dataTime !== null || dataTime !== undefined) {
    var momentObj = moment(dataTime, comingFormat);
    convertedMilisecond = momentObj.valueOf();
  }
  return convertedMilisecond;
}


export const isValidFirstName = (name, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (name == '') {

    msg = (StringKeys.FIRST_NAME_EMPTY);

  }
  else if (name.length < Constants.KEY_MINIMUMLENGTHOFNAME) {

    msg = (StringKeys.FIRST_NAME_LENGTH_ERROR);

  }

  else if (name.length > Constants.KEY_MAXLENGTHOFNAME) {

    msg = (StringKeys.FIRST_NAME_MAX_LENGTH_ERROR);

  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidLastName = (name, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (name == '') {

    msg = (StringKeys.LAST_NAME_EMPTY);

  }
  else if (name.length < Constants.KEY_MINIMUMLENGTHOFNAME) {

    msg = (StringKeys.LAST_NAME_LENGTH_ERROR);

  }

  else if (name.length > Constants.KEY_MAXLENGTHOFNAME) {

    msg = (StringKeys.LAST_NAME_MAX_LENGTH_ERROR);

  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidPassword = (pasword, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (pasword == '') {

    msg = (StringKeys.PASSWORD_EMPTY);

  }
  else if (pasword.length < Constants.KEY_MINIMUMLENGTHOFPASSWORD) {

    msg = (StringKeys.PASSWORD_LENGTH_ERROR);

  }

  else if (pasword.length > Constants.KEY_MAXLENGTHOFPASSWORD) {

    msg = (StringKeys.PASSWORD_MAX_LENGTH_ERROR);

  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidConfirmPassword = (pasword, cPassword, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (cPassword == '') {

    msg = (StringKeys.C_PASSWORD_EMPTY);

  }
  else if (pasword != cPassword) {

    msg = (StringKeys.PASSWORD_MATCH_ERROR);

  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}


export const isValidContryId = (countryId, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (countryId == '') {

    msg = (StringKeys.COUNTRY_ID_EMPTY);

  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isAcceptedTermsAndConditions = (isAcceptedTermsAndConditions, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (isAcceptedTermsAndConditions === undefined || isAcceptedTermsAndConditions === false) {

    msg = (StringKeys.Accept_Terms_And_Conditions);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

checkStringsContainsOnlySpecialChar = (inputString) => {
  var isValid = false;

  const splChrs = /^[^a-zA-Z0-9]+$/;
  isValid = String(inputString).match(splChrs);

  return isValid;
}

isNumeric = (inputString) => {
  const regex = /^[a-zA-Z]+$/;
  if (!String(inputString).match(regex)) {

    return true;
  }
  return false;
}


export const getDeviceToken = () => {
  return 'dfadsfds';
}


export const isValidOtp = (otp, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (otp == '') {
    msg = (StringKeys.msg_otp_empty);
  }
  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const getValidString = (strData) => {
  if (strData == null || strData == undefined)
    strData = '';
  return strData;
}


export const getFeeWithFormat = (strData) => {
  if (strData == null || strData == undefined)
    strData = '';
  else {
    strData = 'Rs.' + strData;
  }
  return strData;
}
export const getExperienceWithFormat = (strData) => {
  if (strData == null || strData == undefined)
    strData = '';
  else {
    strData = strData;
  }
  return strData;
}

export const convertStrDateFormat = (utcDateTime, comingFormat, forShowFormat) => {
  if (utcDateTime !== null && utcDateTime !== undefined && utcDateTime !== '') {
    var momentObj = moment(utcDateTime, comingFormat);
    utcDateTime = momentObj.format(forShowFormat);
  }
  else
    utcDateTime = '';
  return utcDateTime;
}

export const convertDateObjFormat = (dateTime, forShowFormat) => {
  var showDateValue = '';
  if (dateTime !== null || dateTime !== undefined) {
    showDateValue = moment(dateTime).format(forShowFormat)
  }
  return showDateValue;
}


export const getGender = (genderId) => {
  var gender = StringKeys.Gender;
  if (genderId === Constants.GENDER_MALE_ID)
    gender = 'Male';
  else if (genderId === Constants.GENDER_FEMALE_ID)
    gender = 'Female';
  console.log('genderId: ' + genderId + ' genderValue: ' + gender);
  return gender;
}


export const getSpeciality = (spcialityArray) => {
  var speciality = '';
  if (spcialityArray !== undefined && spcialityArray !== undefined && spcialityArray.length > 0) {
    var count = 0;
    for (var spl in spcialityArray) {
      console.log('words Value:' + spcialityArray[spl]);
      if (count == 0)
        speciality = spcialityArray[spl];
      else
        speciality += ', ' + spcialityArray[spl];
      ++count;
    }
  }
  return speciality;
}

export const isPatientLogin = (currentUserLoginData) => {
  if (currentUserLoginData.groupid === Constants.USER_TYPE_PATIENT_ID) {
    return true;
  }
  return false;
}

export const isDoctorLogin = (currentUserLoginData) => {
  if (currentUserLoginData.groupid === Constants.USER_TYPE_DOCTOR_ID) {
    return true;
  }
  return false;
}

export const getValidAddress = (strData) => {
  if (strData == null || strData == undefined)
    strData = '';
  return strData;
}

export const makeFirstLetterCapital = (str) => {
  if (str !== undefined)
    return str.charAt(0).toUpperCase() + str.slice(1);
  else
    return '';
}


export const getShortNameFromName = (str) => {
  var shortName = '';
  if (str !== undefined && str.length > 0) {
    var res = str.split(" ");
    for (var words in res) {
      console.log('words Value:' + res[words]);
      shortName += res[words].charAt(0).toUpperCase();
    }
  }
  return shortName;
}



// kishan

export const isValidAge = (age, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (age == '') {

    msg = (StringKeys.AGE_EMPTY);

  }


  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}

export const isValidAddress = (address, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (getValidString(address) == '') {

    msg = (StringKeys.ADDRESS_EMPTY);

  }


  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}



export const isValidPaymentMode = (paymentType, showPopUp) => {
  var isValid = true;
  var msg = '';
  if (paymentType == '') {
    msg = (StringKeys.PAYMENT_TYPE_EMPTY);
  }

  if (msg != '' && showPopUp) {
    isValid = false;
    alert(msg)
  }
  return isValid;
}


export const socialSharing = (title, subject, message, url) => {


  let shareOptions = {
    title: title,
    message: message, // Note that according to the documentation at least one of "message" or "url" fields is required
    subject: subject
  };

  if (url !== undefined && url !== '') {
    shareOptions.url = url;
  }

  Share.share(shareOptions);
}




