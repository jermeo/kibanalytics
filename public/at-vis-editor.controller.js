// vis editor
export function createAtEditorController (getAppState) {
  class AtEditorController {
    link ($scope, $el) {
      $scope.$watchMulti(
        ['=atEditor.vis.params'],
        () => {
          const appState = getAppState()
          appState.vis.params = $scope.atEditor.vis.params
          appState.save(true)
        }
      )
    }
  }
  return new AtEditorController()
}
