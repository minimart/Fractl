angular.module('fractlIndex').controller('chartsController', function($scope) {
    Highcharts.chart('container', {
      // hardcoded for ease of use during demos
        title: {
            text: 'August Sadness'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11', '12', '13', '14', '15',
                '16', '17', '18', '19', '20', '21', '22', '23', '24',
                '25', '26', '27', '28', '29', '30', '31'
            ]
        },

        series: [{ 'name':"Intensity", 'color': "#FF1C6D",
            data: [2, 5, 5, 4, 4, 6, 7, 3, 3, 5, 4, 3, 2, 2, 4]
        }]
    });

    Highcharts.chart('anger', {
        title: {
            text: 'August Anger'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11', '12', '13', '14', '15',
                '16', '17', '18', '19', '20', '21', '22', '23', '24',
                '25', '26', '27', '28', '29', '30', '31'
            ]
        },

        series: [{ 'name':"Intensity", 'color': "#2F36A9",
            data: [9, 9, 10, 10, 10, 8, 8, 7, 5, 8, 8, 6, 6, 4, 6]
        }]
    });
    Highcharts.chart('shame', {
        title: {
            text: 'August Shame'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11', '12', '13', '14', '15',
                '16', '17', '18', '19', '20', '21', '22', '23', '24',
                '25', '26', '27', '28', '29', '30', '31'
            ]
        },

        series: [{ 'name':"Intensity", 'color': "#FF1C6D",
            data: [2, 2, 3, 2, 1, 0, 0, 1, 3, 5, 3, 4, 2, 0, 0]
        }]
    });

    Highcharts.chart('joy', {
        title: {
            text: 'August Joy'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11', '12', '13', '14', '15',
                '16', '17', '18', '19', '20', '21', '22', '23', '24',
                '25', '26', '27', '28', '29', '30', '31'
            ]
        },

        series: [{'name':"Intensity", 'color': "#2F36A9",
            'data': [9, 9, 9, 7, 8, 10, 10, 5, 6, 5, 7, 8, 9, 9, 9]
        }]
    });
    Highcharts.chart('pain', {
        title: {
            text: 'August Pain'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11', '12', '13', '14', '15',
                '16', '17', '18', '19', '20', '21', '22', '23', '24',
                '25', '26', '27', '28', '29', '30', '31'
            ]
        },

        series: [{ 'name':"Intensity", 'color': "#FF1C6D",
            data: [2, 2, 4, 6, 4, 2, 2, 0, 5, 2, 3, 3, 1, 2, 2]
        }]
    });
    Highcharts.chart('fear', {
        title: {
            text: 'August Fear'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6',
                '7', '8', '9', '10', '11', '12', '13', '14', '15',
                '16', '17', '18', '19', '20', '21', '22', '23', '24',
                '25', '26', '27', '28', '29', '30', '31'
            ]
        },

        series: [{ 'name':"Intensity", 'color': "#2F36A9",
            data: [2, 2, 6, 6, 8, 7, 8, 4, 6, 5, 3, 0, 0, 0, 2]
        }]
    });

    Highcharts.chart('dbtSkills', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'August DBT Skills Used'
        },
        xAxis: {
            categories: ["Wise Mind", "Observe", "Participate", "Non-Judgemental Stance", "One-Mindfully", "Effectively",
                "Objective Effectiveness", "Relationship Effectiveness", "Self Respect Effectiveness", "Sacred Self", "Reduce Vulnerability",
                "Build Mastery", "Build Positive Experiences", "Opposite-to-Emotion-Urge Action", "Distract", "Self Soothe", "Improve the Moment",
                "Pros and Cons", "Radical Acceptance", "Dialectical Behavior or Thought", "Walk The Middle Path"
            ]
        },
        series: [{ 'name':"Frequency Used", 'color': "#FF1C6D",
            data: [2, 4, 5, 11, 2, 1, 1, 4, 2, 6, 5, 1, 10, 7, 11, 4, 6, 2, 4, 5, 1, 2]
        }]

    });

});
