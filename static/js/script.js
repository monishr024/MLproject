document.addEventListener("DOMContentLoaded", function () {

    const scoreCircle = document.querySelector(".circle");

    if (!scoreCircle) return;

    let score = parseFloat(scoreCircle.innerText);

    if (isNaN(score)) return;

    score = Math.max(0, Math.min(100, score));

    let current = 0;

    const animate = setInterval(() => {

        current++;

        scoreCircle.innerHTML = current.toFixed(0);

        scoreCircle.style.background = `
        radial-gradient(circle,#1e293b 58%,transparent 59%),
        conic-gradient(
            #38bdf8 ${current * 3.6}deg,
            rgba(255,255,255,.15) ${current * 3.6}deg
        )`;

        if (current >= score) {

            clearInterval(animate);

            scoreCircle.innerHTML = score.toFixed(1);

        }

    }, 15);

});


/* Loading Animation */

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function () {

        const button = document.querySelector(".predict-btn");

        button.innerHTML = `
        <span class="loader"></span>
        Predicting...
        `;

        button.disabled = true;

    });

}

const chartCanvas = document.getElementById("scoreChart");

if(chartCanvas){

    const scoreElement = document.querySelector(".score-text");

    let score = parseFloat(scoreElement.innerText);

    if(!isNaN(score)){

        new Chart(chartCanvas,{

            type:'doughnut',

            data:{

                datasets:[{

                    data:[score,100-score],

                    backgroundColor:[
                        '#38bdf8',
                        'rgba(255,255,255,.08)'
                    ],

                    borderWidth:0,

                    cutout:'78%'

                }]

            },

            options:{

                responsive:true,

                plugins:{

                    legend:{
                        display:false
                    },

                    tooltip:{
                        enabled:false
                    }

                },

                animation:{
                    animateRotate:true,
                    duration:1800
                }

            }

        });

    }

}