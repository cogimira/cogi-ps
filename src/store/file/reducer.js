let stateData = {
    showFileDropDown: false
};

function store(state = stateData, action) {
    // let newStage = Object.assign({}, state);
    let newStage = {...state}
    switch (action.type) {
        case 'FILEDROPDOWNSHOW':
            newStage.showFileDropDown = true;
            return newStage;
        case 'FILEDROPDOWNHIDE':
            newStage.showFileDropDown = false;
            return newStage;
        default:
          return state
      }
}

export default store;
