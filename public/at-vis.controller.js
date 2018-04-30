// viz controller
import logoUrl from 'plugins/kibanalytics/assets/at-internet.png'

export function createAtVisController () {
  class AtVisController {
    link ($scope) {
      let ATTag

      const getTag = () => {
        if (typeof ATTag === 'undefined' && typeof ATInternet !== 'undefined') {
          ATTag = new ATInternet.Tracker.Tag()
        }
        return ATTag
      }

      const sendHit = () => {
        const tag = getTag()
        if (tag) {
          tag.page.send({ name: document.title })
        }
      }

      $scope.$on('courier:searchRefresh', sendHit)
      $scope.$on('fetch', sendHit)

      $scope.injectTag = function () {
        // inject only one time
        if (typeof ATInternet === 'undefined' && $scope.at.vis.params.idSite) {
          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = `//tag.aticdn.net/${$scope.at.vis.params.idSite}/smarttag.js`
          document.body.appendChild(script)
        }
      }

      $scope.logoUrl = logoUrl
      $scope.injectTag()
    }
  }

  return new AtVisController()
}
