import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type'
import { VisTypesRegistryProvider } from 'ui/registry/vis_types'
import { VisVisTypeProvider } from 'ui/vis/vis_type'

import './atinternet-kibana.css'
import './at-vis.directive'
import './at-vis-editor.directive'

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(function MetricVisProvider (Private) {
  const VisType = Private(VisVisTypeProvider)
  const TemplateVisType = Private(TemplateVisTypeProvider)
  // const VisSchemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'atinternet',
    title: 'KibanAnalytics',
    description: 'Mesure and monitor your dashboards usage with AT Internet',
    icon: 'fa-at',
    template: '<at-vis vis="vis"></at-vis>',
    params: {
      defaults: {
      },
      editor: `<at-viz-editor vis="vis"
        persist-app-state="state.save(true)"
        ui-state="uiState"></at-viz-editor>`
    },
    requiresSearch: false,
    requiresTimePicker: false,
    fullEditor: false,
    category: VisType.CATEGORY.OTHER
  })
})
