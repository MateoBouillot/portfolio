import './Chart.scss'
import { Radar } from 'react-chartjs-2'
import { RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Chart as ChartJS } from 'chart.js'
import { useSelector } from 'react-redux'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)



const options = {
    scale: {
        r: {
            min: 0,
            max: 10
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

const data = {
        labels: ['html', 'css', 'javascript', 'react', 'scss'],
        datasets: [
            {
                label: 'skills',
                data: [8, 7, 5, 6, 8],
                fill: false,
                borderColor: 'rgba(79, 26, 138, 1)',
                borderWidth: 3,
                tension: -0.05,
            }
        ]
    }

function Radarchart() {
    const { language } = useSelector((state) => state.lang)

    return <div className='outer' id='skills' >
        <div className='radar'>
            <Radar data={data} options={options} className='radar__chart'/>
        </div>
    </div>
}

export default Radarchart