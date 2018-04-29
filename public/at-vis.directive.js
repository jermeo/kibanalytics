import { uiModules } from 'ui/modules';

import { createAtVisController } from './at-vis.controller.js';
import './atinternet-kibana.css';
import template from './at-vis.template.html';

uiModules.get('kibana')
  .directive('atVis', () => ({
    restrict: 'E',
    controller: createAtVisController,
    controllerAs: 'at',
    scope: {
      vis: '='
    },
    template,
    bindToController: true,
    link($scope, ...args) {
      $scope.at.link($scope, ...args);
    }
  }));
