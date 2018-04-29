// viz controller
import logoUrl from 'plugins/kibanalytics/assets/at-internet.png';

export function createAtVisController(Private, /*$scope,*/ timefilter, es, serviceSettings, $sce) {

  class AtVisController {

    link($scope) {

      let ATTag; 

      const getTag = () => {
        if (typeof ATTag === 'undefined') {
          ATTag = new ATInternet.Tracker.Tag();    
        }    
        return ATTag;
      }

      const sendHit = () => {
        let tag = getTag();
        if(tag) {
          tag.page.send({name:document.title});
        }
      }

      $scope.$on('courier:searchRefresh', sendHit);
      $scope.$on('fetch', sendHit);

      $scope.injectTag = function() {
        // inject only one time
        if(typeof ATInternet === 'undefined') {
          let script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = `//tag.aticdn.net/${$scope.at.vis.params.idSite}/smarttag.js`;
          document.body.appendChild(script);
        }
      }   
      console.log(logoUrl);
      $scope.logoUrl = logoUrl;
      $scope.injectTag();
    }
  }

  return new AtVisController();
}
