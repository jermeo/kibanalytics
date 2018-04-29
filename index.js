export default kibana => new kibana.Plugin({
  require: ['elasticsearch'],

  uiExports: {
    visTypes: [
      'plugins/kibanalytics/atinternet-kibana'
    ]
  }
});
