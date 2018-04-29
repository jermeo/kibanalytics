import { uiModules } from 'ui/modules'

import { createAtEditorController } from './at-vis-editor.controller.js'
import AtVisEditorTemplate from './at-vis-editor.template.html'
import './atinternet-kibana.css'

uiModules.get('kibana')
  .directive('atVizEditor', () => ({
    restrict: 'E',
    controller: createAtEditorController,
    controllerAs: 'atEditor',
    scope: {
      vis: '=',
      persistAppState: '&',
      uiState: '='
    },
    template: AtVisEditorTemplate,
    bindToController: true,
    link ($scope, ...args) {
      $scope.atEditor.link($scope, ...args)
    }
  }))
