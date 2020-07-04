export function renderDialog(children) {
    return {
        type: 'RENDERDIALOG',
        payload: {children}
    }
}

export function hideDialog() {
    return {type: 'HIDEDIALOG'}
}