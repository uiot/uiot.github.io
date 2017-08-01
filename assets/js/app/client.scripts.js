window.chartColors = {
    one: '#fca130',
    two: '#41444e',
    three: '#49cc90',
    four: '#61affe',
    five: '#f93e3e',
    six: '#7d8492',
    seven: '#3b4151',
    eight: '#8385d0',
    nine: '#6f71bc',
    ten: '#ededed'
};

/**
 * Create a Google Map with Marker
 * @param position
 * @returns {google.maps.Map}
 */
function createMap(position) {
    var googleMap = new google.maps.Map(document.getElementById('map_canvas'), {
        center: position,
        zoom: 8,
        mapTypeId: 'roadmap',
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
    });

    new google.maps.Marker({
        position: position,
        map: googleMap
    });

    return googleMap;
}

function createChart(context, data) {
    var timeFormat = 'MM/DD/YYYY HH:mm', color = Chart.helpers.color, colorNames = Object.keys(window.chartColors);

    var dataSet = jQuery.each(data, function (index, value) {
        var random = Math.floor(Math.random() * 10) + 1,
            newColor = window.chartColors[colorNames[random % colorNames.length]];

        value.borderColor = newColor;
        value.backgroundColor = color(newColor).alpha(0.5).rgbString();
        value.pointStyle = 'rectRot';
        value.pointRadius = 5;
        value.pointBorderColor = 'rgb(0, 0, 0)';

        jQuery.each(value.data, function (item, element) {
            element.x = moment(element.x).format(timeFormat);
        });
    });

    var config = {
        type: 'line',
        data: {datasets: dataSet},
        options: {
            responsive: true,
            title: {
                display: false,
                text: ""
            },
            legend: {
                labels: {
                    usePointStyle: false
                }
            },
            scales: {
                xAxes: [{
                    type: "time",
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date Registered'
                    },
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Amount of Data'
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    };

    window.myLine = new Chart(context, config);
}


