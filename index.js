window.bughd = window.bughd || function(){};
//TODO: using webpack import-loader send key here
bughd("create", {key: "1515c447f15c48501c32065a59f6c075"});

function setUserInfoForExceptionHandler(userInfo){
  bughd('user', userInfo);
}

function removeUserInfoForExceptionHandler(){
  bughd('removeUser');
}

export {setUserInfoForExceptionHandler, removeUserInfoForExceptionHandler};
