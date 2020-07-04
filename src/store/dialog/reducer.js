let dialogState = {
    isShowDialog: false,
    dialogChildren: null,
};

function store(state = dialogState, action) {
    // let newStage = Object.assign({}, state);
    let newStage = {...state}
    switch (action.type) {
        case 'RENDERDIALOG':
            newStage.isShowDialog = true;
            newStage.dialogChildren = action.payload.children;
            return newStage;
        case 'HIDEDIALOG':
            newStage.isShowDialog = false;
            newStage.dialogChildren = null
            return newStage;
        default:
          return state
      }
}

export default store;
