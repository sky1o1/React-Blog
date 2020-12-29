{/* <section id="auth-button"></section>
    <section id="view-selector"></section>
    <section id="timeline"></section>


    <script>
        (function(w,d,s,g,js,fjs){
            g = w.gapi || (w.gapi = {}),
            g.analytics={q:[],ready:function(cb){this.q.push(cb)}};
  js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fjs.parentNode.insertBefore(js,fjs);js.onload=function(){g.load('analytics')};
}(window,document,'script'));
</script>

    <script>
        gapi.analytics.ready(function() {

            // Step 3: Authorize the user.


            gapi.analytics.auth.authorize({
                serverAuth: '<server auth key>'
            })};


  var viewSelector = new gapi.analytics.ViewSelector({
            container: 'view-selector'
  });

  // Step 5: Create the timeline chart.

  var timeline = new gapi.analytics.googleCharts.DataChart({
            reportType: 'ga',
    query: {
            'dimensions': 'ga:date',
      'metrics': 'ga:sessions',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
            type: 'LINE',
      container: 'timeline'
    }
  });

  // YOU MUST CALL THIS MANUALLY HERE INSTEAD OF WAITING FOR CALLBACK
  viewSelector.execute();

  // Step 6: Hook up the components to work together.

  gapi.analytics.auth.on('success', function(response) {
            viewSelector.execute();
  });

  viewSelector.on('change', function(ids) {
    var newIds = {
            query: {
            ids: ids
      }
    }
    timeline.set(newIds).execute();
  });
});
</script> */}