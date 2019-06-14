import * as ApiUrls from './ApiUrls';
import * as types from './types';
import * as Utility from '../utils/Utility';
import * as Constants from '../utils/Constants';
var METHOD_TYPE_POST = 'post';
var METHOD_TYPE_GET = 'get';

export const reqGetMetaData = (data, screenName) => async (dispatch) => {
  var api = ApiUrls.API_GET_META_DATA + '?'
  if (data.type !== undefined && data.type !== '')
    api = api + Constants.KEY_TYPE + '=' + data.type;
  callApi(data, dispatch, api, types.API_GET_META_DATA, METHOD_TYPE_GET, screenName);
}

export const login = (data, screenName) => async (dispatch) => {
  if (Utility.isValidEmail(data[Constants.KEY_IDENTITY], true) &&
    Utility.isValidPassword(data[Constants.KEY_PASSWORD], true)) {
    callApi(data, dispatch, ApiUrls.API_LOGIN, types.API_LOGIN, METHOD_TYPE_POST, screenName, true);
  }
}

export const reqSignup = (data, screenName, confirmPassword, cbAgree, cdAgreeTw) => async (dispatch) => {
  if (Utility.isValidFirstName(data[Constants.KEY_FIRST_NAME], true) &&
    Utility.isValidLastName(data[Constants.KEY_LAST_NAME], true) &&
    Utility.isValidEmail(data[Constants.KEY_EMAIL], true) &&
    Utility.isValidContryId(data[Constants.KEY_COUNTRY_ID], true) &&
    Utility.isValidPassword(data[Constants.KEY_PASSWORD], true) &&
    Utility.isValidConfirmPassword(data[Constants.KEY_PASSWORD], confirmPassword, true)
    && Utility.isAcceptedTermsAndConditions(cbAgree, true) && Utility.isAcceptedTermsAndConditions(cdAgreeTw, true)
  ) {
    callApi(data, dispatch, ApiUrls.API_SIGNUP, types.API_SIGNUP, METHOD_TYPE_POST, screenName, true);
  }
}



export const reqForgetPass = (data, screenName) => async (dispatch) => {
  var api = ApiUrls.API_FORGET_PASSWORD;
  callApi(data, dispatch, api, types.API_FORGET_PASSWORD, METHOD_TYPE_POST, screenName, true);
}

export const reqChangePass = (data, screenName) => async (dispatch) => {
  var api = ApiUrls.API_CHANGE_PASSWORD;
  callApi(data, dispatch, api, types.API_CHANGE_PASSWORD, METHOD_TYPE_POST, screenName, true);
}

export const refresh = (screenName, actionName) => async (dispatch) => {
  dispatch({ type: 'reload', payload: { currentScreen: screenName, [Constants.KEY_ACTION]: actionName } });
}

export const refreshWithData = (screenName, actionName, data) => async (dispatch) => {
  dispatch({ type: 'reload', payload: { currentScreen: screenName, [Constants.KEY_ACTION]: actionName, [Constants.KEY_DATA]: data } });
}











export const callApi = async (data, dispatch, apiUrl,
  typeValue, methodType, screenName, showPBar) => {

  callApiAfterNetChecking(data, dispatch, apiUrl, typeValue,
    methodType, screenName, showPBar);

}

export const callApiAfterNetChecking = async (data, dispatch, apiUrl, typeValue, methodType, screenName, showPBar) => {

  callApiFinal(data, dispatch, apiUrl, typeValue, methodType, screenName, showPBar);

}



export const callApiFinal = (data, dispatch, apiUrl, typeValue, methodType, screenName, showPBar) => {

  console.log('requestData: ' + JSON.stringify(data) + ' API: ' + apiUrl);
  dispatch({ type: 'reload', payload: { showBar: showPBar, type: typeValue, currentScreen: screenName } });
  if (methodType == METHOD_TYPE_POST) {
    const formData = getFormDataFromObject(data);

    fetch(apiUrl, {
      method: methodType,
      body: formData
    }).then(response => response.json())
      .then(res => isValidResponse(res, dispatch, typeValue, screenName)).catch(error => {
        dispatch({ type: 'reload', payload: { showBar: false, type: typeValue, currentScreen: screenName } });
        setTimeout(() => {
          alert(error);
        }, 200)
      })
  }
  else if (methodType == METHOD_TYPE_GET) {
    fetch(apiUrl, {
      method: methodType
    }).then(response => response.json())
      .then(res => isValidResponse(res, dispatch, typeValue, screenName)).catch(error => {
        dispatch({ type: 'reload', payload: { showBar: false, type: typeValue, currentScreen: screenName } });
        setTimeout(() => {
          alert(error);
        }, 200)
      })
  }
}




export const objectToFormData = (obj, form, namespace) => {

  var fd = form || new FormData();
  var formKey;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {

      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File,
      // use recursivity.
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

        objectToFormData(obj[property], fd, property);

      } else {

        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }

    }
  }
  return fd;
}

export const getFormDataFromObject = (data) => {
  const formData = new FormData();
  for (var key in data) {
    if (typeof data[key] == 'object') {
      var dataValue = data[key];
      if (dataValue !== null && dataValue.uri !== undefined && dataValue.uri !== null) {
      }
      else {
        if (dataValue !== null) {
          dataValue = ((JSON.stringify(dataValue)));
          dataValue = dataValue.replace(/\\/g, '');
        }

      }
      if (dataValue !== null)
        formData.append(key, dataValue);
      console.log('dataValue' + dataValue);

    }
    else {
      formData.append(key, data[key]);
    }
  }

  console.log('formDataValue' + formData);
  return formData;
}

export const getFormDataFromObjectWithArray = (data) => {
  const formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }
  return formData;
}

export const isValidResponse = (response, dispatch, typeValue, screenName) => {
  console.log('typeValue ' + typeValue + ' response : ' + JSON.stringify(response));
  var isValid = true;
  var data = '';
  if (response) {
    if (response.code === undefined || response.code == 0) {
      data = response.data;
    }
  }
  if (data === '') {
    isValid = false;
    dispatch({ type: 'reload', payload: { showBar: false, type: typeValue, currentScreen: screenName } });
    setTimeout(() => {
      alert(response.message);
    }, 200)

  }
  else {
    dispatch({ type: typeValue, payload: { response: response, type: typeValue, currentScreen: screenName } });
  }
  return isValid;
}


