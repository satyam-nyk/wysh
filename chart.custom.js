var ctx = document.getElementById('myChart');
var ctx2 = document.getElementById('myChart2');

Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
  var tooltip = this;
  return {
    x: eventPosition.x,
    y: eventPosition.y
  };
}

var font_Size = 0;
var legendDisplay = true;

if (window.innerWidth <= 575) {
  font_Size = 9;
  legendDisplay = false;
} else {
  font_Size = 14;
  legendDisplay = true;
}

const chartData2 = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [12500, 7000, 7000, 6000, 15000, 12000, 4500, 4500, 3500, 2500, 5500, 20000],
      borderColor: 'transparent',
      borderWidth: '0',
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(64,255,134, 1)',
        'rgb(236,64,255, 1)',
        'rgb(203,54,34)',
        'rgba(64,201,255,0.85)',
        'rgb(175,74,8)',
        'rgb(3,114,35)',
      ],
    }],
    labels: [
      'Team',
      'Operations',
      'Marketing',
      'Advisors',
      'Development',
      'Ecosystem',
      'Pre-Seed Round',
      'Seed Round',
      'Strategic Round',
      'Public Round',
      'Staking Rewards',
      'Exchange Liquidity'
    ],
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        right: 25,
      }
    },
    tooltips: {
      position: 'custom'
    },
    legend: {
      display: legendDisplay,
      position: 'bottom',
      labels: {
        fontColor: '#212529',
        fontSize: 16,
        padding: 20,
        usePointStyle: true
      }
    },
    plugins: {
      labels: [{
        render: 'percentage',
        fontSize: 15,
        fontStyle: '600',
        fontColor: '#FFFFFF',
        fontFamily: "'Poppins'"
      }]
    }
  }
};


const chartData = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [40000, 30000, 20000, 5000, 5000],
      borderColor: 'transparent',
      borderWidth: '0',
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],
    labels: [
      'Development',
      'Marketing',
      'Operations',
      'Legal & Compliance',
      'Miscellaneous',
    ],
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        right: 25,
      }
    },
    tooltips: {
      position: 'custom'
    },
    legend: {
      display: legendDisplay,
      position: 'bottom',
      labels: {
        fontColor: '#212529',
        fontSize: 16,
        padding: 20,
        usePointStyle: true
      }
    },
    plugins: {
      labels: [{
        render: 'percentage',
        fontSize: 15,
        fontStyle: '600',
        fontColor: '#FFFFFF',
        fontFamily: "'Poppins'"
      }]
    }
  }
};


new Chart(ctx, chartData);
new Chart(ctx2, chartData2);